<template>
  <div id="whole-page">
    <div id="title-area">
      <h1>A Collection of Work(s)</h1>
      <h3>by Andrew Graves</h3>
    </div>
    <div id="main-area">
        <DisplayBook :key="1"></DisplayBook>
        <DisplayBook :key="2"></DisplayBook>
        <DisplayBook :key="3"></DisplayBook>
        <DisplayBook :key="4"></DisplayBook>
    </div>
  </div>
</template>

<script>
import DisplayBook from '~/components/DisplayBook.vue';
export default {
  name: 'app',
  components: {'DisplayBook': DisplayBook},
  head() {
    return {
      title: "Works by Andrew Graves",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "A collection of work projects by Andrew Graves."
        },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#whole-page {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

#title-area {
  padding-top: 1em;
  padding-bottom: 1em;
  font-family: 'Special Elite', cursive;
  width: 100%;
  text-align: center;
  background-color: oldlace;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.3);
  z-index: 1;
  padding: 1em;
}

#main-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  background-color: burlywood;
}
</style>
