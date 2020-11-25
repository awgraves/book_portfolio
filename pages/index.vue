<template>
  <div id="whole-index-page">
    <div id="title-area">
      <h1>A Collection of Work(s)</h1>
      <h3>by Andrew Graves</h3>
      <div id="browser-note" style="color: grey;"><small><i>* Best viewed in Safari browser *</i></small></div>
      <div id="top-about-btn">
        <AboutBtn key="top-about">Site Info</AboutBtn>
      </div>
    </div>
    <div id="bottom-about-btn">
      <AboutBtn key="bottom-about">Site Info</AboutBtn>
    </div>
    <div id="main-area">
      <DisplayBook
        stylingClass="book--clinical-trials"
        title="Clinical Trial Recommender">
        <template v-slot:preview>
          <Page :pageIndex="0" :canFlip="false">
            <template v-slot:front>
                <div class="page__title">Introduction</div>
                <picture>
                  <img src="/images/clinicaltrials/search_params.png">
                </picture>
                <p style="text-align: center; font-size: 12pt; font-family: 'Times', Times, serif;">
                  Our lab needed a fast, easy way to provide our patients with relevant clinical trials on their reports.
                </p>
                <ReadBtn to="/clinicaltrials"></ReadBtn>
            </template>
          </Page>
        </template>
      </DisplayBook>
      <DisplayBook
        stylingClass="book--help-desk"
        title="Help Desk System">
        <template v-slot:preview>
          <Page :pageIndex="0" :canFlip="false">
            <template v-slot:front>
              <div class="page__title">Introduction</div>
              <picture>
                <img src="/images/helpdesk/helpdesk_dash.png">
              </picture>
              <p style="text-align: center; font-size: 12pt; font-family: 'Times', Times, serif;">
                Email just wasn't cutting it.  We needed a better way to communicate and track technical issues.
              </p>
              <ReadBtn to="/helpdesk"></ReadBtn>
            </template>
          </Page>
        </template>
      </DisplayBook>
      <DisplayBook
        stylingClass="book--signout-qa"
        title="Sign-out QAs">
        <template v-slot:preview>
          <Page :pageIndex="0" :canFlip="false">
            <template v-slot:front>
              <div class="page__title">Introduction</div>
              <picture>
                <img src="/images/signoutqas/main_QA_results.png">
              </picture>
              <p style="text-align: center; font-size: 12pt; font-family: 'Times', Times, serif;">
                Why use paper to record case QAs when we can make them electronic and fully integrated?
              </p>
              <ReadBtn to="/signoutqas"></ReadBtn>
            </template>
          </Page>
        </template>
      </DisplayBook>
      <DisplayBook
        stylingClass="book--genetic-search"
        title="Genetic Search DB">
        <template v-slot:preview>
          <Page :pageIndex="0" :canFlip="false">
            <template v-slot:front>
              <div class="page__title">Introduction</div>
              <picture>
                <img src="/images/geneticsearch/TDB_home.png">
              </picture>
              <p style="text-align: center; font-size: 12pt; font-family: 'Times', Times, serif;">
                Our lab had no way to search our full ThyroSeq case archive for specific genetic or demographic criteria; at least until now!
              </p>
              <ReadBtn to="/geneticsearch"></ReadBtn>
            </template>
          </Page>
        </template>
      </DisplayBook>
    </div>
    <div class="copyright copyright--rel">
      <small>
        © 2020 Andrew Graves
      </small>
    </div>
  </div>
</template>

<script>
import DisplayBook from '~/components/DisplayBook.vue';
import Page from '~/components/Page.vue';
import ReadBtn from '~/components/Buttons/ReadBtn.vue';
import AboutBtn from '~/components/Buttons/AboutBtn.vue';

export default {
  name: 'index',
  components: {
    'DisplayBook': DisplayBook,
    'Page': Page,
    'ReadBtn': ReadBtn,
    'AboutBtn': AboutBtn
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
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap'
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


/* Individual book styles */
.book--clinical-trials {
    .book__front > div,
    .book__back,
    .book__left,
    .book__front:after {
        background-color: #205493;
    }

    .book__cover {
        font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
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
            background-color: #205493;
        }
    }
}

.book--help-desk {
    .book__front > div,
    .book__back,
    .book__left,
    .book__front:after {
        background-color:seagreen;
    }

    .book__cover {
        font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
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
            background-color: seagreen;
        }
    }
}

.book--signout-qa {
    .book__front > div,
    .book__back,
    .book__left,
    .book__front:after {
        background-color: #ff924a;
    }

    .book__cover {
        font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
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
}

.book--genetic-search {
    .book__front > div,
    .book__back,
    .book__left,
    .book__front:after {
        background-color: rgb(138, 31, 31);
    }

    .book__cover {
        font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
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
            background-color: rgb(138, 31, 31);
        }
    }
}

</style>
