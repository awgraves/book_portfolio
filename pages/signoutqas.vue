<template>
  <div>
    <FullBook>
      <template v-slot:content>
      <Page :pageIndex="0" :canFlip="true">
        <template v-slot:front>
          <div class="page__title">Introduction</div>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/main_QA_results.png">
          </picture>
          <p>
            Why use paper to record case QAs when we can make them electronic and fully integrated?
            <br><br>
            Our pathologists consult one another on difficult cases.  My system lets them record, search, and export
            their feedback from within our application.
          </p>
          <div class="page__number">1 of 8</div>
        </template>
        <template v-slot:back>
          <div class="page__title">Available Directly on Case Pages</div>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/signout_qa_dropdown.png">
          </picture>
          <p>
            Pathologists and fellows in our lab have a 'Signout QA' button available at the top of each case.
            <br><br>Users simply click to start recording feedback about the case they are on.
          </p>
          <div class="page__number">2 of 8</div>
        </template>
      </Page>
      <Page :pageIndex="1" :canFlip="true">
        <template v-slot:front>
          <div class="page__title">Entering a QA</div>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/selecting_agree.png">
          </picture>
          <p>
            Reviewers can be a single person or the 'Consensus' group of pathologists who meet every week to discuss cases together.
            <br><br>The reviewer(s) also have the ability to mark a case as 'interesting' by
            clicking the star (more on this later).
          </p>
          <div class="page__number">3 of 8</div>
        </template>
        <template v-slot:back>
          <div class="page__title">Viewing a QA</div>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/view_existing_on_case.png">
          </picture>
          <p>
            Viewing a QA is as easy as entering one.  They can be accessed via the same button menu at the top of the page.
            <br><br>QA details also specify whether the QA happened before or after the final report was signed out and sent to the physician.
          </p>
          <div class="page__number">4 of 8</div>
        </template>
      </Page>
      <Page :pageIndex="2" :canFlip="true">
        <template v-slot:front>
          <div class="page__title">All QAs Together</div>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/main_QA_results.png">
          </picture>
          <p>
            QAs not only appear on each individual case but also collectively in a centralized 'QA Manager'.
            Clicking a case from the list will open it in a new tab.
            <br><br>Users can alse enter special additional QAs on cases not in our system (from other tests/labs).
          </p>
          <div class="page__number">5 of 8</div>
        </template>
        <template v-slot:back>
          <div class="page__title">'Interesting' Cases</div>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/only_interesting_QAs_cropped.png">
          </picture>
          <p>
            Sometimes the pathologists bookmark special cases to bring up for future discussion.
            <br><br>Clicking the star at the top next to the 
            date range will filter for these.
          </p>
          <div class="page__number">6 of 8</div>
        </template>
      </Page>
      <Page :pageIndex="3" :canFlip="true">
        <template v-slot:front>
          <div class="page__title">Refined Searches</div>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/filtered_MET.png">
          </picture>
          <p>
            Results can be refined even further with the searchbar in the top right.
            <br><br>In this example, we can see the bookmarked cases within our date range that discussed the MET gene.
          </p>
          <div class="page__number">7 of 8</div>
        </template>
        <template v-slot:back>
          <div class="page__title">Exporting</div>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/export_options.png">
          </picture>
          <p>
            Pathologists sometimes desire a printed out list of cases to reference, and lab management sometimes wants to have QA data for 
            internal reporting.
            <br><br>Whatever the scenario, users can easily download the data as a CSV file.
          </p>
          <div class="page__number">8 of 8</div>
        </template>
      </Page>
      <AuthorPage @zoom="zoom($event)"></AuthorPage>
      </template>
    </FullBook>
    <div @click="closeModal" v-if="zoomedPicURL !== null" class="pic-modal-wrapper">
        <div style="position: relative; height: 100%; width: 100%;">
          <div class="pic-modal-overlay"></div>
          <div class="pic-modal">
            <picture>
              <img :src="zoomedPicURL">
            </picture>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import FullBook from '~/components/FullBook.vue';
import Page from '~/components/Page.vue';
import AuthorPage from '~/components/AuthorPage.vue';

export default {
  name: 'app',
  components: {'FullBook': FullBook, 'Page': Page, 'AuthorPage': AuthorPage},
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
  },
  methods: {
    zoom(ev) {
      this.zoomedPicURL = ev.target.attributes.src.value;
    },
    closeModal() {
      this.zoomedPicURL = null;
    }
  },
  data() {
    return {
      zoomedPicURL: null,
    }
  }
}
</script>

<style lang="scss">
$coverColor:  #ff924a;

html, body {
  overflow: hidden;
}

.pic-modal-wrapper {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    cursor: zoom-out;

    .pic-modal-overlay {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: black;
      opacity: .5;
      display: flex;
    }

    .pic-modal {
      position: absolute;
      z-index: 3;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow-x: auto;

      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-height: 90vh;
        opacity: 1;
      }
    }
}

.fullbook--styled {
  background-color:  $coverColor;  // color of the cover
  border: $coverColor solid 8px;

  img {
    width: 100%;
    cursor: zoom-in;
  }
}
</style>