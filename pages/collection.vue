<template>
  <CollectNav/>
  <div class="collect-container">
    <div id="desktop">
      <CollectCard item='iMac 12,2"' year="2011" screen='27" Display' image="/images/collection/2011.jpg"/>
      <CollectCard item='iMac 11,2"' year="2010" screen='21.5" Display' quantity="2x" image="/images/collection/2010.jpg"/>
      <CollectCard item='iMac Core Duo' screen='17" Display' year="2006" image="/images/collection/curbmac.jpg"/>
      <CollectCard item='iMac G5' screen='20" Display' year="2004" image="/images/collection/g5.jpg"/>
      <CollectCard item='iMac 5K' year="2014, 2015, 2017" screen='27" Display' quantity="3x" image="/images/collection/5k.jpg"/>
      <CollectCard item='Mac Pro' year="2013" quantity="2x" image="/images/collection/trash.jpg"/>
      <CollectCard item='Mac Pro' year="2010" quantity="2x" image="/images/collection/cheese.jpg"/>
      <CollectCard item='Diskette://NAS' year="2024" image="/images/collection/nas.jpg"/>
      <CollectCard item='Dell Dimension 8400' year="2004" image="/images/collection/beefy.jpg"/>
      <CollectCard item='Dell OptiPlex 7010' year="2012" image="/images/collection/plex.jpg"/>
      <CollectCard item='Lenovo ThinkCentre' year="2015" image="/images/collection/centre.jpg" />
    </div>
    <div id="laptop">
      <CollectCard item='MacBook' year="2008" screen='13.3" Display' image="/images/collection/macbook.jpg"/>
      <CollectCard item='MacBook Pro' year="2010" screen='13.3" Display' image="/images/collection/pridebook.jpg"/>
      <CollectCard item='PowerBook 180c' screen='27" Display' year="1993" image="/images/collection/180c.jpg"/>
      <CollectCard item='PowerBook 160' screen='15" Display' year="1992" image="/images/collection/160.jpg"/>
      <CollectCard item='MacBook Pro' screen='13.3" Display' year="2020" image="/images/collection/diskettebook.jpg"/>
      <CollectCard item='MacBook Air M1' screen='13.3" Display' year="2020" image="/images/collection/m1air.jpg"/>
      <CollectCard item='MacBook Pro' year="2017" image="/images/collection/2017headless.jpg"/>
      <CollectCard item='MacBook Pro' year="2013" image="/images/collection/2013headless.jpg"/>
      <CollectCard item='ThinkPad T520' screen='15.6" Display' year="2011" image="/images/collection/t520.jpg"/>
      <CollectCard item='ThinkPad P40 Yoga' screen='14" Display' year="2015" image="/images/collection/p40yoga.jpg"/>
      <CollectCard item='ThinkPad X1 Extreme' screen='15.6" Display' year="2019" image="/images/collection/x1.jpg"/>
      <CollectCard item='ThinkPad P1' screen='15.6" Display' year="2019" quantity="2x" image="/images/collection/p1.jpg"/>
      <CollectCard item='ThinkPad T580' screen='15.6" Display' year="2019" image="/images/collection/t580.jpg"/>
      <CollectCard item='Compaq 6910p' screen='14" Display' year="2007" image="/images/collection/6910p.jpg"/>

    </div>
    <div id="keebs">
      <OtherCollectCard item='Apple Something' year="1986" image="/images/collection/mac.jpg"/>
      <OtherCollectCard item='IBM Model M' year="1986" image="/images/collection/m.jpg"/>
      <OtherCollectCard item='Apple Aluminum' year="2009" quantity="2x" image="/images/collection/alumi.jpg"/>
      <OtherCollectCard item='Bondi Blue' year="1998" image="/images/collection/bondi.jpg"/>
      <OtherCollectCard item='Apple Pro' year="2000" image="/images/collection/trans.jpg"/>
    </div>
    <div id="audio">
      <OtherCollectCard item='Shure SM7b' year="2001" image="/images/collection/sm7b.jpg"/>
      <OtherCollectCard item='RØDE Procaster' year="?" image="/images/collection/procaster.jpg"/>
      <OtherCollectCard item='Shure Unisphere' year="1969" image="/images/collection/uni.jpg"/>
      <OtherCollectCard item='Blue Blackout Spark' year="2019" image="/images/collection/spark.jpg"/>
      <OtherCollectCard item='RØDE VideoMic Pro+' year="2017" image="/images/collection/vmp+.jpg"/>
      <OtherCollectCard item='Sennheiser ME66' year="?" image="/images/collection/me66.jpg"/>
      <OtherCollectCard item='RØDECaster Pro II' year="2022" image="/images/collection/rodecaster.jpg"/>
      <OtherCollectCard item='Sennheiser HD58X' year="2018" image="/images/collection/hd58x.jpg"/>
    </div>
    <div id="misc">
      <OtherCollectCard item='PlayStation 3 Slim' year="2009" image="/images/collection/ps3.jpg"/>
      <OtherCollectCard item='Pro Mouse' year="2000" quantity="2x" image="/images/collection/pro.jpg"/>
      <OtherCollectCard item='Studio Display' year="2001" image="/images/collection/studio.jpg"/>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.p-card {
  display: inline-block;
  margin: 15px;
  font-family: 'Ubuntu', sans-serif;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}

.collect-container {
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 300px;
}
</style>
<script setup lang="ts">
import OtherCollectCard from "~/components/Collect/OtherCollectCard.vue";
</script>