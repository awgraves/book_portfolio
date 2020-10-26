<template>
  <div id="whole-index-page">
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
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#whole-index-page {
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

/* Individual style & artwork */
/* Book 1 */
.book--1 {
    .book__front > div,
    .book__back,
    .book__left,
    .book__front:after {
        background-color: #ff924a;
    }

    .book__cover {
        /* background-image: url(../images/1.png);	
        background-repeat: no-repeat; */
        // background-position: 10px 40px;

        h2 {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            padding: 30px;
            background: rgba(255,255,255,0.2);
            color: #fff;
            text-shadow: 0 -1px 0 rgba(0,0,0,0.1);
            text-align: center;

            span {
                display: block;
            }
        }
        &-back {
            background-color: #ff924a;
        }
    }

    .book__cover h2 span:first-child,
    .book__left h2 span:first-child {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 13px;
        padding-right: 20px;
    }

    .book__cover h2 span:first-child {
        display: block;
    }

    .book__cover h2 span:last-child,
    .book__left h2 span:last-child {
        font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
    } 

    // .book__content p {
    //     font-family: Georgia, Times, "Times New Roman", serif;
    // }

    .book__left h2 {
        color: #fff;
        font-size: 15px;
        line-height: 40px;
        padding-right: 10px;
        text-align: right;
    }
}

</style>
