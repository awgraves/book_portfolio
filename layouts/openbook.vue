<template>
  <div id="whole-page">
    <a href="/"><fa-icon id="homebtn" class="optbtn" icon="home"></fa-icon></a>
    <!-- <fa-icon icon="external-link-alt"></fa-icon> -->
    <!-- <fa-icon id="infobtn" class="optbtn" icon="info"></fa-icon> -->
    <div class="rotatemsg">
        <span>Try viewing in landscape mode!</span><img src="/images/rotate_device.gif">
    </div>
    <Nuxt />
  </div>
</template>

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
.rotatemsg {
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
  .rotatemsg {
      display: flex;
  }
}

.optbtn {
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

#homebtn {
  top: 2.5vmin;
  right: 2.5vmin;
}

#infobtn {
  top: 2.5vmin;
  right: 2.5vmin;
}
</style>