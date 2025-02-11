<template>
  <div class="collect-contain" id="problem">
    <h1 class="linear-wipe">Diskette://Collection</h1>
    <div class="collect-btn">
      <a href="/collection"><button class="bn29">Explore</button></a>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Young+Serif&display=swap');


.linear-wipe {
  margin-top: 200px;
  margin-bottom: 200px;
  font-size: 10vw;
  text-align: center;
  font-family: 'Imbue', serif;
  font-weight: 700;

  background: linear-gradient(to right, #FFF 20%, #89185C 40%, #C11A7F 60%, #FFF 80%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 3s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}

.collect-btn {
  margin-top: 50px;
  text-align: center;
  position: relative;
  padding-bottom: 250px;
  z-index: 1;

}

.bn29 {
  font-size: 35px;
  width: 350px;
  height: 110px;
  border: none;
  outline: none;
  color: white;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background: none;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
  font-family: 'Young Serif', serif;
}

.bn29:before,
.bn29:after {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10em;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 105%;
  height: 105%;
  content: "";
  z-index: -2;
  background-size: 400% 400%;
  background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
  );
}

.bn29:before {
  -webkit-filter: blur(7px);
  filter: blur(7px);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-animation: pulse 10s infinite ease;
  animation: pulse 10s infinite ease;
}

.bn29:after {
  -webkit-filter: blur(0.3px);
  filter: blur(0.3px);
}

.bn29:hover:before {
  width: 115%;
  height: 115%;
}

.wrapper {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  filter: blur(150px);
}


</style>
