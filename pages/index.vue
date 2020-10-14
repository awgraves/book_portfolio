<template>
  <div class="container">
    <ClosedBook :key="1"></ClosedBook>
    <!-- <ClosedBook :key="2"></ClosedBook> -->
  </div>
</template>

<script>
import ClosedBook from '~/components/ClosedBook.vue';
export default {
  name: 'app',
  components: ['ClosedBook'],
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}
body {
  background-color: whitesmoke;
}
</style>
