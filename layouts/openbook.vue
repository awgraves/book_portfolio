<template>
  <div id="whole-page">
    <div v-show="loading" id="loading-overlay">
      <fa-icon icon="book-open" id="loading-icon"></fa-icon>
      <h2>Opening...</h2>
    </div>
    <template v-show="!loading">
      <a href="/"><fa-icon id="homebtn" icon="home" title="Go to the Collection"></fa-icon></a>
      <div id="rotatemsg">
          <span>Try viewing in landscape mode!</span><img src="/images/rotate_device.gif">
      </div>
      <Nuxt />
    </template>
  </div>
</template>
<script>
export default {
  name: 'openbook',
  data(){
    return {
      loading: true, // let css scale happen first, then remove loading screen
    }
  },
  mounted(){
    this.$nextTick(function () {
      setInterval(()=>{this.loading=false}, 1000);
    })
  }
}
</script>
<style lang="scss">
body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
  position: absolute;
  overflow-x: hidden;
}
#whole-page {
  height: 100vh;
  width: 100vw;
  background-color: burlywood;
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}
#homebtn {
  top: 2.5vmin;
  right: 2.5vmin;
  position: absolute;
  color: #494949;
  font-size: 2.5rem;
  font-size: clamp(1rem, 8vmin, 2.5rem);
  cursor: pointer;
  background-color: oldlace;
  border-radius: 50%;
  padding: 5px;
  box-sizing: border-box;
  opacity: .5;

  &:hover {
    background-color: #494949;
    color: oldlace;
  }
}

// Loading
@keyframes flash {
  0% {opacity: 1;}
  50% {opacity: .4}
  100% {opacity: 1}
}

#loading-overlay {
  position: absolute;
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: oldlace;
  color: #494949;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;

  #loading-icon {
    font-size: 25vw;
    animation: flash linear 2s infinite;
  }
}

// Mobile Msg
#rotatemsg {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 6vw;
  font-family: "Courier New", Courier, monospace;
  position: absolute;
  z-index: 100;
  color: #494949;
  padding: 10px 10px 0px 10px;
  box-sizing:border-box;
  border-radius: 4px;
  border: #494949 solid 2px;
  width: 90%;
  height: 50%;
  flex-wrap: wrap;
  text-align: center;

  &::after {
    content: ''; 
    width: 100%; 
    height: 100%;
    background-color: white;
    opacity: 0.9; 
    position: absolute; 
    top: 0; 
    left: 0;
    z-index: -1;
  }

  img {
    width: 55vw;
  }
}
@media screen and (max-width: 450px) {
  // scale down the whole book in proportion to fit smaller screens
  #rotatemsg {
      display: flex;
  }
}

</style>