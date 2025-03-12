<template>
  <div>
    <FullBook>
      <template v-slot:content>
        <Page :pageIndex="0" :canFlip="true" key="gs-0">
          <template v-slot:front>
            <div class="page__title">Introduction</div>
            <img
              @click.stop="zoom($event)"
              src="/images/geneticsearch/TDB_home.png"
            />
            <p>
              Our lab had no way to search our full ThyroSeq* case archive for
              specific genetic or demographic criteria; at least until now!
              <br /><br />
              *
              <a href="https://www.thyroseq.com/" target="_blank">
                ThyroSeq
                <ExternalLinkIcon style="font-size: small"></ExternalLinkIcon>
              </a>
              is our lab's flagship product and a thyroid cancer test utilizing
              Next Generation Sequencing.
            </p>
            <div class="page__number">1 of 6</div>
          </template>
          <template v-slot:back>
            <div class="page__title">Collapsable Filter Groups</div>
            <img
              @click.stop="zoom($event)"
              src="/images/geneticsearch/uncollapsed_section.png"
            />
            <p>
              There are 48 total queriable fields & subfields that can be
              combined however the user wants.
              <br /><br />To keep the UI clean, query filters are grouped under
              general category boxes that expand/collapse.
            </p>
            <div class="page__number">2 of 6</div>
          </template>
        </Page>
        <Page :pageIndex="1" :canFlip="true" key="gs-1">
          <template v-slot:front>
            <div class="page__title">Alteration Query Subfields</div>
            <img
              @click.stop="zoom($event)"
              src="/images/geneticsearch/opened_variants.png"
            />
            <p>
              Each type of genetic alteration can have multiple entries, such as
              multiple variants the user wants to be present in the resulting
              cases.
              <br /><br />Users describe each alteration using 1 or more
              subfields then click to add that alteration to the main query
              list.
            </p>
            <div class="page__number">3 of 6</div>
          </template>
          <template v-slot:back>
            <div class="page__title">Results Screen</div>
            <img
              @click.stop="zoom($event)"
              src="/images/geneticsearch/results_tooltip_case.png"
            />
            <p>
              The query panel collapses once the server sends back the search
              results.
              <br /><br />Icons on the left indicate which types and how many
              filters are active. <br /><br />Hovering over these icons shows
              full details for each group.
            </p>
            <div class="page__number">4 of 6</div>
          </template>
        </Page>
        <Page :pageIndex="2" :canFlip="true" key="gs-2">
          <template v-slot:front>
            <div class="page__title">Altering the Query</div>
            <img
              @click.stop="zoom($event)"
              src="/images/geneticsearch/reopened_params.png"
            />
            <p>
              The query panel can expand out again for the user to add, modify,
              or remove search criteria.
              <br /><br />There is also a reset button to easily clear all
              inputs and start fresh.
            </p>
            <div class="page__number">5 of 6</div>
          </template>
          <template v-slot:back>
            <div class="page__title">Export</div>
            <img
              @click.stop="zoom($event)"
              src="/images/geneticsearch/export_reports.png"
            />
            <p>
              Full data for resulting cases can be exported to Excel. This data
              includes more info about the case than the results table preview
              shows.
              <br /><br />Larger exports (greater than 20 cases) take longer to
              compile, so a download link is sent to the user once the file is
              prepared.
            </p>
            <div class="page__number">6 of 6</div>
          </template>
        </Page>
        <AuthorPage @zoom="zoom($event)"></AuthorPage>
      </template>
    </FullBook>
    <div
      @click="closeModal"
      v-if="zoomedPicURL !== null"
      class="pic-modal-wrapper"
    >
      <div style="position: relative; height: 100%; width: 100%">
        <div class="pic-modal-overlay"></div>
        <div class="pic-modal">
          <picture>
            <img :src="zoomedPicURL" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLinkIcon from "~/assets/external-link.svg";
import { ref } from "vue";

definePageMeta({
  layout: "openbook",
});

const zoomedPicURL = ref(null);

function zoom(ev) {
  zoomedPicURL.value = ev.target.attributes.src.value;
}

function closeModal() {
  zoomedPicURL.value = null;
}
</script>

<style lang="scss">
$coverColor: rgb(138, 31, 31);

html,
body {
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
    opacity: 0.5;
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
  background-color: $coverColor; // color of the cover
  border: $coverColor solid 8px;

  img {
    width: 100%;
    cursor: zoom-in;
  }
}
</style>
