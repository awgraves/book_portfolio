<template>
  <div>
    <FullBook>
      <template v-slot:content>
        <Page :pageIndex="0" :canFlip="true" key="hd-0">
          <template v-slot:front>
            <div class="page__title">Introduction</div>
            <img
              @click.stop="zoom($event)"
              src="/images/helpdesk/helpdesk_dash.png"
            />
            <p>
              Email just wasn't cutting it. We needed a better way to
              communicate and track technical issues.
              <br /><br />
              I designed an in-house ticketing system with speed and efficiency
              in mind. It is directly integrated inside our main application.
            </p>
            <div class="page__number">1 of 8</div>
          </template>
          <template v-slot:back>
            <div class="page__title">Easily Accessible</div>
            <img
              @click.stop="zoom($event)"
              src="/images/helpdesk/autodetect_current_page.png"
            />
            <p>
              The 'Get Help' button is always available in the bottom left of
              our application.
              <br /><br />If a user clicks to open a new ticket while viewing a
              case page, info about this page can be auto-included so they won't
              have to type it.
            </p>
            <div class="page__number">2 of 8</div>
          </template>
        </Page>
        <Page :pageIndex="1" :canFlip="true" key="hd-1">
          <template v-slot:front>
            <div class="page__title">Streamlined Submission Process</div>
            <img
              @click.stop="zoom($event)"
              src="/images/helpdesk/most_frequent_issues.png"
            />
            <p>
              'Speed dial' options and targeted prompts have worked well.
              <br /><br />Users can enter tickets in a few clicks, and we on the
              BI team are sure to receive the details we need.
            </p>
            <div class="page__number">3 of 8</div>
          </template>
          <template v-slot:back>
            <div class="page__title">Live Monitoring</div>
            <img
              @click.stop="zoom($event)"
              src="/images/helpdesk/follow_a_ticket.png"
            />
            <p>
              Each ticket shows the current status and who on the BI team is
              working on it. Users can monitor other tickets they find in
              addition to their own.
              <br /><br />Active tickets display at the top of any associated
              case pages. A user need only click a button to begin monitoring
              it.
            </p>
            <div class="page__number">4 of 8</div>
          </template>
        </Page>
        <Page :pageIndex="2" :canFlip="true" key="hd-2">
          <template v-slot:front>
            <div class="page__title">Admin Process</div>
            <img
              @click.stop="zoom($event)"
              src="/images/helpdesk/completing_a_ticket.png"
            />
            <p>
              A new ticket triggers a batch email to all BI team members with
              details and a link to the Help Desk admin dashboard.
              <br /><br />A team member assigns it to themselves, then marks it
              as 'completed' once finished.
            </p>
            <div class="page__number">5 of 8</div>
          </template>
          <template v-slot:back>
            <div class="page__title">In-App Notifications</div>
            <img
              @click.stop="zoom($event)"
              src="/images/helpdesk/user_confirms_ticket_resolution.png"
            />
            <p>
              A 'completed' ticket triggers the Help Desk window to open on the
              initiator of the ticket.
              <br /><br />Confirming the ticket closes it and alerts all who are
              monitoring. Declining provides an optional textbox to explain,
              then kicks the ticket back to the BI team.
            </p>
            <div class="page__number">6 of 8</div>
          </template>
        </Page>
        <Page :pageIndex="3" :canFlip="true" key="hd-3">
          <template v-slot:front>
            <div class="page__title">Admin Stats</div>
            <img
              @click.stop="zoom($event)"
              src="/images/helpdesk/helpdesk_stats.png"
            />
            <p>
              It's useful to track the frequency and types of issues we get over
              time.
              <br /><br />Line and bar charts can visualize data from the
              previous 7 days up to 1 year. Clicking on a bar from the bar chart
              will provide more details (see next page).
            </p>
            <div class="page__number">7 of 8</div>
          </template>
          <template v-slot:back>
            <div class="page__title">Detailed Records</div>
            <img
              @click.stop="zoom($event)"
              src="/images/helpdesk/helpdesk_details.png"
            />
            <p>
              More granular data about our tickets are available by category.
              <br /><br />The table has sortable columns and a search bar to
              filter for specific keywords.
            </p>
            <div class="page__number">8 of 8</div>
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
$coverColor: seagreen;

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
