<template>
  <div id="whole-index-page">
    <div id="title-area">
      <h1>A Collection of Work(s)</h1>
      <h3>by Andrew Graves</h3>
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
                <p style="text-align: center; font-size: 12pt; font-family: 'Times New Roman', Times, serif;">
                  Our lab needed a fast, easy way to provide our patients with relevant clinical trials on their reports.
                </p>
                <a href="/clinicaltrials">
                  <button style="margin-top: .5em;">Read More...</button>
                </a>
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
              <p style="text-align: center; font-size: 12pt; font-family: 'Times New Roman', Times, serif;">
                Email just wasn't cutting it.  We needed a better way to communicate and track technical issues.
              </p>
              <a href="/helpdesk">
                <button style="margin-top: .5em;">Read More...</button>
              </a>
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
              <span style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">
                <picture>
                  <img src="/images/signoutqas/main_QA_results.png">
                </picture>
                <p style="text-align: center; font-size: 12pt; font-family: 'Times New Roman', Times, serif;">
                  An electronic QA system for pathologists and fellows to review difficult cases and record their feedback to one another.
                </p>
                <a href="/signoutqas">
                  <button style="margin-top: .5em;">Read More...</button>
                </a>
              </span>
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
              <span style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">
                <picture>
                  <img src="/images/geneticsearch/TDB_home.png">
                </picture>
                <p style="text-align: center; font-size: 12pt; font-family: 'Times New Roman', Times, serif;">
                  A custom-built search engine and interface to find patient testing results by demographic, genetic, and/or administrative criteria.
                </p>
                <a href="/geneticsearch">
                  <button style="margin-top: .5em;">Read More...</button>
                </a>
              </span>
            </template>
          </Page>
        </template>
      </DisplayBook>
    </div>
  </div>
</template>

<script>
import DisplayBook from '~/components/DisplayBook.vue';
import Page from '~/components/Page.vue';

export default {
  name: 'index',
  components: {'DisplayBook': DisplayBook, 'Page': Page},
  data() {
    return {
      openedBook: null,  // which book user has clicked. only 1 open at a time.
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
.book--clinical-trials {
    .book__front > div,
    .book__back,
    .book__left,
    .book__front:after {
        background-color: #205493;
    }

    .book__cover {
        /* background-image: url(../images/1.png);	
        background-repeat: no-repeat; */
        // background-position: 10px 40px;
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
        /* background-image: url(../images/1.png);	
        background-repeat: no-repeat; */
        // background-position: 10px 40px;
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
        /* background-image: url(../images/1.png);	
        background-repeat: no-repeat; */
        // background-position: 10px 40px;
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
        /* background-image: url(../images/1.png);	
        background-repeat: no-repeat; */
        // background-position: 10px 40px;
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
