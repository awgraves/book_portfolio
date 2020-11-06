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
              I built a complete system to discover, tag, then suggest relevant clinical trials for our patients based on their age, type of cancer,
              and genetic alterations identified.
              <br><br>
              This saves our lab time by allowing users 
            </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/clinicaltrials/trial_email.png">
          </picture>
          <p style="margin-top: 3em;">
            Every weekday morning the system automatically scans <a href="https://clinicaltrials.gov/" target="_blank">clinicaltrials.gov</a>
            for new trials to add to our database.
            <br><br>Trials must be active, cancer-related, and discuss at least 1 genetic alteration that we test for in our lab in order to be picked up.
            <br><br>Relevant trials are parsed, classified, then saved.  Non-relevant trials are added to an ignore list.
            <br><br>These actions are summarized in a daily email report that goes out to my colleagues and myself.
          </p>
        </template>
      </Page>
      <Page :pageIndex="1" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/clinicaltrials/oncotree_keyword_manager.png">
          </picture>
          <p style="margin-top: 3em;">
            A core element of the classifier is based on keyword mappings.
            <br><br>I began with list of words/phrases related to each <a href="http://oncotree.mskcc.org/#/home" target="_blank">oncotree lv1</a> tissue type.  I then created database relations to store
            these associations for the classifier to load and use.
            <br><br>For example, if a parsed trial XML contains the term 'pheochromocytoma', it will be tagged as relevant to the adrenal gland.
            <br><br>I also created an 'Oncotree Keywords Manager' to simplify the process of adding, editing, or removing these keyword associations. 
          </p>
        </template>
        <template v-slot:back>
            <picture>
              <img @click.stop="zoom($event)" src="/images/clinicaltrials/search_params.png">
            </picture>
            <p style="margin-top: 3em;">
              The interpreters and/or pathologists in our lab use this integrated widget I created to quickly search for the most relevant trials for a patient based
              on the patient's lab results.
              <br><br>The patient's age, sample tissue type, and any genetic alterations identified are auto-populated into the search fields.
              <br><br>Results are organized by gene and sorted based on factors like:
              <ul>
                <li>Number of additional matching tags</li>
                <li>How often this trial was included on previous lab reports</li>
                <li>Whether the trial is available in Pittsburgh (only if the patient is from our local UPMC hospital network)</li>
              </ul>
            </p>
        </template>
      </Page>
      <Page :pageIndex="3" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/clinicaltrials/search_NCT.png">
          </picture>
          <p style="margin-top: 3em;">
            The widget also includes the option to search by NCT number (the unique identifier for a trial on ct.gov) instead of oncotree node & genetic tags.
            <br><br>
            In either search method, it only takes a simple tick of the checkbox for that trial to be included in the final report.
            <br><br>The orange-highlighted alteration(s) on a trial indicate direct relevancy to the patient.  It is possible to have multiple alterations
            selected as relevant and displayed prominently alongside the trial info on the final report (see next page).
          </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/clinicaltrials/trials_on_report.png">
          </picture>
          <p style="margin-top: 3em;">
            This is a snapshot of the clinical trials section on one of our final reports.
            <br><br>Each trial starts with the relevant gene(s) in bold which mirror the orange tags on the recommender widget.
            <br><br>If the patient was from a Pittsburgh hospital and the trial is available there, the <b><i>*Available in Pittsburgh</i></b>
            text also appears and that trial gets sorted to the top of the list.
            <br><br>My Clinical Trial Recommender system allows our lab to find and include clinical trial information without leaving our main application
            or typing any of this trial text manually.
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
  font-size: 10.3pt;

  img {
    width: 100%;
    cursor: zoom-in;
  }
}
</style>