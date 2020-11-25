<template>
  <div>
    <FullBook>
      <template v-slot:content>
      <Page :pageIndex="0" :canFlip="true" key="ct-0">
        <template v-slot:front>
          <div class="page__title">Introduction</div>
          <img @click.stop="zoom($event)" src="/images/clinicaltrials/search_params.png">
          <p style="margin-top: 5%;">
            Our lab needed a fast, easy way to provide our patients with relevant clinical trials on their reports.
            <br><br>
            I built a system from the ground up that has saved our lab $700 a month since we no longer need to pay a 3rd party for a similar service.
          </p>
          <div class="page__number">1 of 6</div>
        </template>
        <template v-slot:back>
          <div class="page__title">Automated Email Reports</div>
          <img @click.stop="zoom($event)" src="/images/clinicaltrials/trial_email.png">
          <p>
            Every morning the system automatically scans 
            <a href="https://clinicaltrials.gov/" target="_blank">
              clinicaltrials.gov <fa-icon icon="external-link-alt" style="font-size: small;"></fa-icon>
            </a>
            for new trials to add or existing ones to modify in our database.
            <br><br>A summary report is then generated and emailed to us.
          </p>
          <div class="page__number">2 of 6</div>
        </template>
      </Page>
      <Page :pageIndex="1" :canFlip="true" key="ct-1">
        <template v-slot:front>
          <div class="page__title">Keyword Mappings</div>
          <img @click.stop="zoom($event)" src="/images/clinicaltrials/oncotree_keyword_manager.png">
          <p>
            The core text mining algorithm relies on keywords to determine which type(s) of cancer a trial is targeting.
            <br><br>An Oncotree Keywords Manager UI makes it easy to add/modify keyword associations for all
            <a href="http://oncotree.mskcc.org/#/home" target="_blank">
              oncotree lv1 <fa-icon icon="external-link-alt" style="font-size: small;"></fa-icon>
            </a> tissue types.
          </p>
          <div class="page__number">3 of 6</div>
        </template>
        <template v-slot:back>
          <div class="page__title">Embedded Search Widget</div>
          <img @click.stop="zoom($event)" src="/images/clinicaltrials/trial_results.png">
          <p style="margin-top: 5%;">
            Each patient's case page has a trials widget.  Their age, sample tissue type, and genetic alterations are 
            autopopulated as search params.
            <br><br>Results are sorted according to popularity in our system and local availability if patient is from UPMC.
          </p>
          <div class="page__number">4 of 6</div>
        </template>
      </Page>
      <Page :pageIndex="2" :canFlip="true" key="ct-2">
        <template v-slot:front>
          <div class="page__title">Single-Click Inclusion</div>
          <img @click.stop="zoom($event)" src="/images/clinicaltrials/search_NCT.png">
          <p style="margin-top: 5%;">
            Qualified users simply click a checkbox to include a trial on a patient's final report.
            <br><br>Orange genes signify relevancy to the patient.  At least one will be orange, but multiple can be specified if appropriate.
          </p>
          <div class="page__number">5 of 6</div>
        </template>
        <template v-slot:back>
          <div class="page__title">Seamless Report Integration</div>
          <img @click.stop="zoom($event)" src="/images/clinicaltrials/trials_on_report.png">
          <p style="margin-top: 5%;">
            Selected trials are listed on a patient's final report.
            <br><br>If both the patient and the trial are local, the <b><i>*Available in Pittsburgh</i></b>
            text appears next to that trial and it gets sorted to the top of the list.
          </p>
          <div class="page__number">6 of 6</div>
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
$coverColor:  #205493;

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