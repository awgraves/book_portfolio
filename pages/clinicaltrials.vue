<template>
    <FullBook>
      <template v-slot:content>
      <Page :pageIndex="0" :canFlip="true">
        <template v-slot:front>
            <picture>
              <img src="/images/clinicaltrials/search_params.png">
            </picture>
            <p style="text-align: center; margin-top: 3em;">
              I built a complete system to discover, tag, then suggest relevant clinical trials for our patients based on their age, type of cancer,
              and genetic alterations identified.
              <br>
            </p>
        </template>
        <template v-slot:back>
          <picture>
            <img src="/images/clinicaltrials/trial_email.png">
          </picture>
          <p style="margin-top: 3em;">
            Every weekday morning the system automatically scans clinicaltrials.gov for new trials to add to our database.
            <br><br>Trials must be active, focus on cancer, and discuss at least 1 genetic alteration that we test for in our lab in order to be picked up.
            <br><br>Relevant trials are parsed, classified, then saved.  Non-relevant trials are added to an ignore list.
            <br><br>These actions are summarized in a daily email report that goes out to my colleagues and myself.
          </p>
        </template>
      </Page>
      <Page :pageIndex="1" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img src="/images/clinicaltrials/oncotree_keyword_manager.png">
          </picture>
          <p style="margin-top: 3em;">
            In order for our system to recommend trials appropriately, it needs to know which type of cancer a trial is targeting.
            I wrote a text mining algorithm based on keyword mappings for this purpose.
            <br><br>My colleagues provided me a list of words/phrases related to each oncotree level 1 tissue type that I then codified in our database.
            The algorithm checks for the presence of keywords in specific fields in the XML doc from clinicaltrials.gov then tags the trials with the oncotree node
            associated with those keywords.
            <br><br>I also created an 'Oncotree Keywords Manager' UI to easily add, modify, or remove these keyword associations. 
          </p>
        </template>
        <template v-slot:back>
            <picture>
              <img src="/images/clinicaltrials/trial_manager.png">
            </picture>
            <p style="margin-top: 3em;">
              Not all trials can be fully classif
            </p>
        </template>
      </Page>
      <Page :pageIndex="2" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img src="/images/clinicaltrials/manual_review.png">
          </picture>
          <p style="margin-top: 3em;">
            Reviewing
            <br><br>
          </p>
        </template>
        <template v-slot:back>
            <picture>
              <img src="/images/clinicaltrials/editing_trial.png">
            </picture>
            <p style="margin-top: 3em;">
              Not all trials can be fully classif
            </p>
        </template>
      </Page>
      <Page :pageIndex="3" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img src="/images/clinicaltrials/adding_node.png">
          </picture>
          <p style="margin-top: 3em;">
            Reviewing
            <br><br>
          </p>
        </template>
        <template v-slot:back>
            <picture>
              <img src="/images/clinicaltrials/search_params.png">
            </picture>
            <p style="margin-top: 3em;">
              Not all trials can be fully classif
            </p>
        </template>
      </Page>
      <Page :pageIndex="4" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img src="/images/clinicaltrials/search_NCT.png">
          </picture>
          <p style="margin-top: 3em;">
            Reviewing
            <br><br>
          </p>
        </template>
        <template v-slot:back>
            <picture>
              <img src="/images/clinicaltrials/trials_on_report.png">
            </picture>
            <p style="margin-top: 3em;">
              Not all trials can be fully classif
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
  }
}
</script>

<style lang="scss">
$coverColor:  #205493;

html, body {
  overflow: hidden;
}

.fullbook--styled {
  background-color:  $coverColor;  // color of the cover
  border: $coverColor solid 8px;
  font-size: 10pt;

  img {
    width: 100%;
    cursor: zoom-in;
  }
}
</style>