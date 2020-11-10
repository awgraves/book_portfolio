<template>
  <div>
    <FullBook>
      <template v-slot:content>
      <Page :pageIndex="0" :canFlip="true">
        <template v-slot:front>
            <picture>
              <img @click.stop="zoom($event)" src="/images/signoutqas/main_QA_results.png">
            </picture>
            <p style="margin-top: 3em;">
              An electronic QA system for pathologists and fellows to review difficult cases and record their feedback to one another.
              <br><br>
              My system replaced their previous paper-based records and gave them a faster, more robust way to provide feedback,
              bookmark interesting cases, and export full data for documentation.
            </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/QA_options_case_page.png">
          </picture>
          <p style="margin-top: 3em;">
            Pathologists and fellows in our lab have a 'Signout QA' button on each case.
            <br><br>QAs are completed either person to person, or as a group at a weekly meeting called 'Consensus'.
            <br><br>Any existing QAs entered for that case can be accessed from this dropdown as well.
          </p>
        </template>
      </Page>
      <Page :pageIndex="1" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/selecting_agree.png">
          </picture>
          <p style="margin-top: 1em;">
            The only difference in appearance between the 2 types of QAs are who is listed as the reviewer (either an individual or the Consensus group).
            <br><br>A conclusion category is always selected and further comment is usually provided.
            <br><br>If the reviewer believes this case should be bookmarked for wider discussion, he/she can click the star icon at the top to flag it.
          </p>
        </template>
        <template v-slot:back>
            <picture>
              <img @click.stop="zoom($event)" src="/images/signoutqas/view_existing_on_case.png">
            </picture>
            <p style="margin-top: 3em;">
              Here is an example of a QA on a case entered during Consensus.
              <br><br>It had been entered after the pathologist had signed out that case (meaning the patient's report had been finalized)
              and the case itself was marked as interesting.
            </p>
        </template>
      </Page>
      <Page :pageIndex="2" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/main_QA_results.png">
          </picture>
          <p style="margin-top: 1em;">
            I also created a 'Signout QA Manager' as the main location to search and export the QA data.
            Users can view <u>all</u> QAs entered in our system during a given time span.
            <br><br>Our pathologists sometimes offer feedback on special cases not available in our application.
            These can be entered here on a popup form similar to the usual one found on the case pages.
          </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/only_interesting_QAs_cropped.png">
          </picture>
          <p style="margin-top: 3em;">
            Sometimes the pathologists look for only the bookmarked cases as shown earlier.  Clicking the star next to the date filters does this for them.
            <br><br>They can then click the name of a case from the list to open it in a new tab.
          </p>
        </template>
      </Page>
      <Page :pageIndex="3" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/filtered_MET.png">
          </picture>
          <p style="margin-top: 3em;">
            Results can be refined even further with the searchbar in the top right.
            <br><br>In this example, we can see the bookmarked cases that discussed the MET gene.
          </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/export_options.png">
          </picture>
          <p style="margin-top: 3em;">
            Lastly, the lab management often desires a comprehensive list of QAs that had been performed.
            <br><br>The QA Manager makes this quick and easy for them with options to export a specific date range or a total data export.
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
  font-size: 14pt;

  img {
    width: 100%;
    cursor: zoom-in;
  }
}
</style>