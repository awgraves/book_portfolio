<template>
  <div>
    <FullBook>
      <template v-slot:content>
      <Page :pageIndex="0" :canFlip="true">
        <template v-slot:front>
            <picture>
              <img @click.stop="zoom($event)" src="/images/geneticsearch/TDB_home.png">
            </picture>
            <p style="margin-top: 3rem;">
              A custom-built search engine and interface to find patient testing results by demographic, genetic, and/or administrative criteria.
              <br><br>
              This was built specifically for our lab's flagship test <a href="https://www.thyroseq.com/" target="_blank">ThyroSeq</a>, which
              is a thyroid cancer test utilizing Next Generation Sequencing.
            </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/geneticsearch/uncollapsed_section.png">
          </picture>
          <p style="margin-top: 3rem;">
            Query filters are grouped under general category boxes that expand/collapse.
            <br><br>Uses can add as many or as few criteria as they wish.
          </p>
        </template>
      </Page>
      <Page :pageIndex="1" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/geneticsearch/opened_variants.png">
          </picture>
          <p style="margin-top: 3rem;">
            Each type of genetic alteration category can have multiple entries, such as multiple variants.
            <br><br>Users can fill out the appropriate subfields to describe each alteration then add it to the query list.
          </p>
        </template>
        <template v-slot:back>
            <picture>
              <img @click.stop="zoom($event)" src="/images/geneticsearch/results_tooltip_case.png">
            </picture>
            <p style="margin-top: 3rem;">
              The query panel collapses once the server sends back the search results.
              <br><br>Icons are still present to remind the user which and how many search parameters they selected.
              <br><br>Hovering over the icons provides the full description of active filters under each grouping.
            </p>
        </template>
      </Page>
      <Page :pageIndex="2" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/geneticsearch/reopened_params.png">
          </picture>
          <p style="margin-top: 3rem;">
            The query panel can expand out again for the user to tweak their search.
            <br><br>There are a total of 48 query fields & subfields that can be combined to build a search.
          </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/signoutqas/only_interesting_QAs_cropped.png">
          </picture>
          <p style="margin-top: 3rem;">
            The full case data for any search results can be exported to excel.  Full case data includes many other fields in addition to the ones visible
            on the results table.
            <br><br>Larger results (greather than 20 cases) take longer to compile, so a download link is sent to the user once the file is prepared.
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
$coverColor:  rgb(138, 31, 31);

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
  font-family: "Times New Roman", Times, serif;

  img {
    width: 100%;
    cursor: zoom-in;
  }
}
</style>