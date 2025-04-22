<template>
  <canvas ref="canvas" :style="{ width: '100%', height: '100%' }"></canvas>
  <div class="logo">
    <picture class="object-center">
      <source srcset="/images/WordWide.svg" media="(max-width: 200px)">
      <source srcset="/images/WordStack.svg" media="(max-width: 1200px)">
      <img src="/images/WordWide.svg" alt="Diskette Kitchen" style="width:auto;">
    </picture>
    <a class="object-center" href="https://youtube.com/@DisketteKitchen">
      <ActionButton title="Watch Now" class="watch-btn"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SineWaves',
  props: {
    speed: {
      type: Number,
      default: 8
    },
    waves: {
      type: Array,
      default: () => [
        {
          timeModifier: 1,
          lineWidth: 10,
          amplitude: 1000,
          wavelength: 100,
          segmentLength: 20
        },
        {
          timeModifier: 1,
          lineWidth: 2,
          amplitude: 150,
          wavelength: 100
        },
        {
          timeModifier: 1,
          lineWidth: 1,
          amplitude: -150,
          wavelength: 50,
          segmentLength: 10
        },
        {
          timeModifier: 1,
          lineWidth: 0.5,
          amplitude: -100,
          wavelength: 100,
          segmentLength: 10
        }
      ]
    }
  },
  data() {
    return {
      ctx: null,
      width: 0,
      height: 0,
      dpr: 1,
      waveWidth: 0,
      waveLeft: 0,
      time: 0,
      animationFrameId: null
    }
  },
  computed: {
    defaultAmplitude() {
      return 50
    },
    defaultWavelength() {
      return 50
    },
    defaultSegmentLength() {
      return 10
    },
    defaultLineWidth() {
      return 2
    },
    defaultStrokeStyle() {
      return 'rgba(255, 255, 255, 0.2)'
    }
  },
  mounted() {
    this.initialize()
    window.addEventListener('resize', this.handleResize)
    this.loop()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId)
    }
  },
  methods: {
    initialize() {
      const canvas = this.$refs.canvas
      if (!canvas) throw "No Canvas Selected"

      this.ctx = canvas.getContext('2d')
      if (!this.waves.length) throw "No waves specified"

      this.resizeCanvas()
      this.resizeEvent()
    },

    handleResize() {
      this.resizeCanvas()
      this.resizeEvent()
    },

    resizeCanvas() {
      const canvas = this.$refs.canvas
      this.dpr = window.devicePixelRatio || 1

      this.width = canvas.width = window.innerWidth * this.dpr
      this.height = canvas.height = window.innerHeight * this.dpr

      this.waveWidth = this.width * 0.95
      this.waveLeft = this.width * 0.025
    },

    resizeEvent() {
      const gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)")
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      for (let i = 0; i < this.waves.length; i++) {
        this.waves[i].strokeStyle = gradient
      }
    },

    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height)
    },

    update(time) {
      this.time = this.time - 0.007
      if (typeof time === 'undefined') {
        time = this.time
      }

      for (let i = 0; i < this.waves.length; i++) {
        const timeModifier = this.waves[i].timeModifier || 1
        this.drawSine(time * timeModifier, this.waves[i])
      }
    },

    ease(percent, amplitude) {
      const PI2 = Math.PI * 2
      const HALFPI = Math.PI / 2
      return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5
    },

    drawSine(time, options) {
      options = options || {}
      const amplitude = options.amplitude || this.defaultAmplitude
      const wavelength = options.wavelength || this.defaultWavelength
      const lineWidth = options.lineWidth || this.defaultLineWidth
      const strokeStyle = options.strokeStyle || this.defaultStrokeStyle
      const segmentLength = options.segmentLength || this.defaultSegmentLength

      let x = time
      let y = 0
      let amp = amplitude

      // Center the waves
      const yAxis = this.height / 2

      // Styles
      this.ctx.lineWidth = lineWidth * this.dpr
      this.ctx.strokeStyle = strokeStyle
      this.ctx.lineCap = 'round'
      this.ctx.lineJoin = 'round'
      this.ctx.beginPath()

      // Starting Line
      this.ctx.moveTo(0, yAxis)
      this.ctx.lineTo(this.waveLeft, yAxis)

      for (let i = 0; i < this.waveWidth; i += segmentLength) {
        x = (time * this.speed) + (-yAxis + i) / wavelength
        y = Math.sin(x)

        // Easing
        amp = this.ease(i / this.waveWidth, amplitude)

        this.ctx.lineTo(i + this.waveLeft, amp * y + yAxis)
      }

      // Ending Line
      this.ctx.lineTo(this.width, yAxis)

      // Stroke it
      this.ctx.stroke()
    },

    loop() {
      this.clear()
      this.update()

      this.animationFrameId = window.requestAnimationFrame(this.loop.bind(this))
    }
  }
}
</script>

<style scoped>
canvas {
  display: block;
  width: 100%;
  height: 100%;
}
.watch-btn {
  position: absolute;
  background-color: rebeccapurple;
  left: 50%;
  margin-top: 45px;
  transform: translate(-50%, -50%);

}
.logo {
  top: 30%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;
  width: 100%;
  transform: scale(0.8);
  margin-bottom: 10px;
}
</style>