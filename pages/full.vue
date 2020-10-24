<template>
  <div id="whole-page">
    <FullBook></FullBook>
  </div>
</template>

<script>
import FullBook from '~/components/FullBook.vue';
export default {
  name: 'app',
  components: {'FullBook': FullBook},
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
  height: 100vh;
  width: 100vw;
  background-color: burlywood;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>