<template>
  <div>
    <FullBook>
      <template v-slot:content>
      <Page :pageIndex="0" :canFlip="true">
        <template v-slot:front>
            <picture>
              <img @click.stop="zoom($event)" src="/images/clinicaltrials/search_params.png">
            </picture>
            <p style="margin-top: 3em;">
              I built a complete system to fetch, tag, then suggest relevant clinical trials to our patients based on their age, type of cancer,
              and genetic alterations identified.
              <br><br>
              My system has saved our lab $700 a month since we no longer need to pay a 3rd party to provide us a similar service.
            </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/clinicaltrials/trial_email.png">
          </picture>
          <p style="margin-top: 3em;">
            Every weekday morning the system automatically scans <a href="https://clinicaltrials.gov/" target="_blank">clinicaltrials.gov</a>
            for new trials to add to our database or existing ones to modify with updated info.
            <br><br>A summary report is then generated and emailed to us.
          </p>
        </template>
      </Page>
      <Page :pageIndex="1" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/clinicaltrials/oncotree_keyword_manager.png">
          </picture>
          <p style="margin-top: 3em;">
            An Oncotree Keywords Manager UI makes it easy to add/modify keyword associations for all
            <a href="http://oncotree.mskcc.org/#/home" target="_blank">oncotree lv1</a> tissue types.
            <br><br>These mappings are used when processing trial text to determine which type(s) of cancer a trial is targeting.
          </p>
        </template>
        <template v-slot:back>
            <picture>
              <img @click.stop="zoom($event)" src="/images/clinicaltrials/trial_results.png">
            </picture>
            <p style="margin-top: 2em;">
              A widget is embeded on each patient's case page that auto-populates the necessary search criteria.
              <br><br>Trials can also be found via their NCT number instead (see next page).
              <br><br>Results are organized by gene and sorted based on a variety of factors
              (including availability in Pittsburgh if patient is from a local hospital).
            </p>
        </template>
      </Page>
      <Page :pageIndex="2" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/clinicaltrials/search_NCT.png">
          </picture>
          <p style="margin-top: 3em;">
            Qualified users simply click a checkbox to include a trial on a patient's final report.
            <br><br>A trial can sometimes target multiple genes.  Users click additional genes relevant to the patient and those tags become orange.
            These genes are then specifically mentioned alongside the trial info on the final report (see next page).
          </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/clinicaltrials/trials_on_report.png">
          </picture>
          <p style="margin-top: 3em;">
            Selected trials are listed below a patient's testing results summary on their report.
            <br><br>If the patient was from a Pittsburgh hospital and the trial is available there, the <b><i>*Available in Pittsburgh</i></b>
            text also appears and that trial gets sorted to the top of the list.
          </p>
        </template>
      </Page>
      <Page :pageIndex="100" :canFlip="false">
          <template v-slot:front>
              This is the final page.
          </template>
      </Page>
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

export default {
  name: 'app',
  components: {'FullBook': FullBook, 'Page': Page},
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
  font-size: 14pt;

  img {
    width: 100%;
    cursor: zoom-in;
  }
}
</style>