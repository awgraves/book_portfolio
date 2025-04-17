<template>
  <div id="whole-index-page">
    <div id="title-area">
      <h1>A Collection of Work(s)</h1>
      <div style="margin-bottom: 1em; font-weight: bold; font-size: 20px">
        by Andrew Graves
      </div>
      <div id="browser-note" style="color: grey">
        <small><i>* Best viewed in Chrome based browsers *</i></small>
      </div>
      <div id="top-about-btn">
        <AboutBtn key="top-about">Site Info</AboutBtn>
      </div>
    </div>
    <div id="bottom-about-btn">
      <AboutBtn key="bottom-about">Site Info</AboutBtn>
    </div>
    <div id="main-area">
      <ul class="book-list">
        <DisplayBook
          v-for="(book, idx) in books"
          :key="book.title"
          :title="book.title"
          :bgColor="book.bgColor"
          :company="book.company"
          :defaultZIndex="getDefaultZIndex(idx, books.length)"
          @set-opened-book="(title) => (openedBook = title)"
          :bookOpened="book.title === openedBook"
        >
          <template v-slot:preview>
            <Page :pageIndex="0" :canFlip="false">
              <template v-slot:front-title> Introduction </template>
              <template v-slot:front-image>
                <picture>
                  <img :src="book.previewImg" style="cursor: pointer" />
                </picture>
              </template>
              <template v-slot:front-text>
                <p>
                  {{ book.previewBlurb }}
                </p>
                <ReadBtn :to="book.path" style="margin-top: 0.5em" />
              </template>
            </Page>
          </template>
        </DisplayBook>
      </ul>
      <div class="bookshelf">
        <div class="bookshelf__top" />
        <div class="bookshelf__front" />
      </div>
    </div>
    <div class="copyright copyright--rel">
      <small> © 2020 - 2025 Andrew Graves </small>
    </div>
  </div>
</template>

<script setup>
const openedBook = ref("");

function getDefaultZIndex(idx, total) {
  if (idx < total / 2) {
    return idx + 1;
  } else {
    return total - idx;
  }
}
const { data: books } = await useAsyncData("allBooks", () => {
  return queryCollection("books").all();
});
</script>

<style lang="scss">
#whole-index-page {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
}

#title-area {
  padding-top: 1em;
  padding-bottom: 1em;
  font-family: "Special Elite", cursive;
  width: 100%;
  text-align: center;
  background-color: oldlace;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

#main-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.book-list {
  list-style: none;
  position: relative;
  -webkit-perspective: 1800px;
  perspective: 1800px;
  -webkit-perspective-origin: 50% 15%;
  perspective-origin: 50% 15%;
  display: flex;
  margin: 50px 0 0 0;
  padding: 0;
  z-index: 1;
  gap: 1px;
}

.bookshelf {
  perspective: 200px;
  perspective-origin: 50% 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
  position: relative;
  bottom: 26px;
}
.bookshelf__top {
  width: 300px;
  height: 50px;
  transform: rotate3d(1, 0, 0, 80deg);
  background-color: #c46e12;
  margin: 0;
  padding: 0;
}
.bookshelf__front {
  position: relative;
  bottom: 20;
  width: 340px;
  height: 16px;
  transform: translateY(-18px);
  background-color: #a35c0f;
}

@media screen and (max-width: 450px) {
  // scale down the whole book in proportion to fit smaller screens
  .book-list {
    flex-direction: column;
    perspective: none;
  }

  .bookshelf {
    display: none;
  }
}

#top-about-btn {
  display: inline-flex;
  position: absolute;
  top: 2.5vmin;
  right: 2.5vmin;
}
#bottom-about-btn {
  display: none;
}

@media screen and (max-width: 8in) {
  #top-about-btn {
    display: none;
  }
  #browser-note {
    display: none;
  }
  #bottom-about-btn {
    display: inline-block;
    margin-top: 2em;
  }
}
</style>
