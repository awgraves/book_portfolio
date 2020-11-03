<template>
    <FullBook></FullBook>
</template>

<script>
import FullBook from '~/components/FullBook.vue';
export default {
  name: 'app',
  components: {'FullBook': FullBook},
  layout: 'openbook',
  head() {
    return {
      title: "Works by Andrew Graves",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "A collection of work projects by Andrew Graves."
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$coverColor:  #ff924a;

html, body {
  overflow: hidden;
}

.fullbook--styled {
  background-color:  $coverColor;  // color of the cover
  border: $coverColor solid 8px;
}
</style>