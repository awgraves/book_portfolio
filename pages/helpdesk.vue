<template>
  <div>
    <FullBook>
      <template v-slot:content>
      <Page :pageIndex="0" :canFlip="true">
        <template v-slot:front>
            <picture>
              <img @click.stop="zoom($event)" src="/images/helpdesk/helpdesk_dash.png">
            </picture>
            <p style="margin-top: 3em;">
              A fully integrated Help Desk system to report and track technical issues inside our application.
              Includes both email and in-app notifications.
              <br><br>
              My system offers greatly streamlined issue communication and monitoring to save time for both our users and our BI team.
              Prior to my system, email had been the only means for us.
            </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/helpdesk/autodetect_current_page.png">
          </picture>
          <p style="margin-top: 3em;">
            Users hover their mouse over the bottom left from any page in our app to access the Help Desk menu.
            <br><br>Selecting 'Submit a Ticket' while on a case page automatically detects which case the user is viewing.
            This often spares the user from copy/pasting or typing the case name when reporting an issue.
          </p>
        </template>
      </Page>
      <Page :pageIndex="1" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/helpdesk/most_frequent_issues.png">
          </picture>
          <p style="margin-top: 2em;">
            The ticket submission process asks a series of questions and includes 'speed dial' like options for known, relatively common issues.
            <br><br>This design (coupled with automated inclusion of details behind the scenes) allows users to quickly provide us all the info we need with just a few simple clicks.
          </p>
        </template>
        <template v-slot:back>
            <picture>
              <img @click.stop="zoom($event)" src="/images/helpdesk/issue_summary_step.png">
            </picture>
            <p style="margin-top: 2em;">
              At the end of the guided questions is a summary screen for the user to double-check their info.
              <br><br>Users can opt to include further details with their ticket by clicking a button at the bottom and entering their message
              in a text box.
            </p>
        </template>
      </Page>
      <Page :pageIndex="2" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/helpdesk/follow_a_ticket.png">
          </picture>
          <p style="margin-top: 3em;">
            Users can select 'Ticket Monitor' from the Help Desk menu at any time to view the status of any tickets they are following.
            <br><br>An active ticket for a case is displayed at the top of that case page.  Any user accessing that case can see it and click to
            monitor it if they too want to be notified when it has been resolved.
          </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/helpdesk/completing_a_ticket.png">
          </picture>
          <p style="margin-top: 2em;">
            The BI team receives an email when a new ticket is submitted and can click a link to go directly to our admin ticket dashboard.
            <br><br>One of us assigns the ticket to ourselves which then triggers another email just to our team so we all know who is handling it.
            <br><br>Once we fix the issue, we change the ticket status to 'completed'.
          </p>
        </template>
      </Page>
      <Page :pageIndex="3" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/helpdesk/user_confirms_ticket_resolution.png">
          </picture>
          <p style="margin-top: 1.5em;">
            A 'completed' ticket triggers the Help Desk window to open on the initiator of the ticket, regardless of which page they are on.
            <br><br>The initiator can either confirm the issue has been fixed, or click to notify us that it isn't.
            <br><br>Confirming closes the ticket and notifies any subscribers. Rejecting provides a text box to explain, kicks back the ticket, then 
            emails the BI team with the message.
          </p>
        </template>
        <template v-slot:back>
          <picture>
            <img @click.stop="zoom($event)" src="/images/helpdesk/helpdesk_stats.png">
          </picture>
          <p style="margin-top: 3em;">
            The BI team can access the statistics page on the admin dashboard to view trends.  Time periods range from 7 days to 1 calendar year.
            <br><br>Clicking on a bar from the barchart will provide more details (see next page).
          </p>
        </template>
      </Page>
      <Page :pageIndex="4" :canFlip="true">
        <template v-slot:front>
          <picture>
            <img @click.stop="zoom($event)" src="/images/helpdesk/helpdesk_details.png">
          </picture>
          <p style="margin-top: 3em;">
            A details screen appears with all tickets from that category during the specified time period.
            <br><br>The table has sortable columns and a search bar to filter more granular issue descriptions.
          </p>
        </template>
        <template v-slot:back>
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
$coverColor:  seagreen;

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