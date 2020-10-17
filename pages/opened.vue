<template>
  <div id="whole-page">
    <ReadingBook></ReadingBook>
  </div>
</template>

<script>
import ReadingBook from '~/components/ReadingBook.vue';
export default {
  name: 'app',
  components: {'ReadingBook': ReadingBook},
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

</style>