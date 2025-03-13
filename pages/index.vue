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
      <DisplayBook
        v-for="book in books"
        :key="book.title"
        :title="book.title"
        :bgColor="book.bgColor"
      >
        <template v-slot:preview>
          <Page :pageIndex="0" :canFlip="false">
            <template v-slot:front>
              <div class="page__title">Introduction</div>
              <picture>
                <img :src="book.previewImage" />
              </picture>
              <p
                style="
                  text-align: center;
                  font-size: 12pt;
                  font-family: 'Times', Times, serif;
                "
              >
                {{ book.previewBlurb }}
              </p>
              <ReadBtn :to="book.fullBookUrl" />
            </template>
          </Page>
        </template>
      </DisplayBook>
    </div>
    <div class="copyright copyright--rel">
      <small> © 2020 - 2025 Andrew Graves </small>
    </div>
  </div>
</template>

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
  flex-wrap: wrap;
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
  // scale down the whole book in proportion to fit smaller screens
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
