<template>
  <div id="whole-page">
    <div id="title-area">
      <h1>A Collection of Work(s)</h1>
      <h3>by Andrew Graves</h3>
    </div>
    <div id="main-area">
      <DisplayBook v-for="book, idx in books" :title="book.title" :key="'bk-' + idx"></DisplayBook>
    </div>
  </div>
</template>

<script>
import DisplayBook from '~/components/DisplayBook.vue';
export default {
  name: 'index',
  components: {'DisplayBook': DisplayBook},
  data() {
    return {
      books: [
        {'title': 'Clinical Trial Recommender'},
        {'title': 'Help Desk System'},
        {'title': 'Sign-Out QAs'},
        {'title': 'Genetic Search DB'}
      ]
    }
  },
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
  margin: 0;
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
