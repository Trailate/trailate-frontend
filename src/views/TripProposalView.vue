<style lang="scss" scoped src="@/styles/views/TripProposalView.scss"></style>

<template>
    <ion-page>
      <ion-list>
        <ion-card>
          <ion-card-content>
              <ion-row class="proposalRow1">
                <ion-badge color="danger">S 11</ion-badge>
                <ion-text>Richtung, <b>Aarau</b></ion-text>
              </ion-row>
              <ion-row class="proposalRow2">
                <ion-text><b>15:09</b></ion-text>
                  <div><i class='bx bxs-left-arrow'></i><hr><i class='bx bxs-right-arrow'></i></div>
                <ion-text><b>15:28</b></ion-text>
              </ion-row>
              <ion-row class="proposalRow2">
                <ion-text>Winterthur, HB</ion-text>
                <ion-text>Zürich, HB</ion-text>
              </ion-row>
          </ion-card-content>
        </ion-card>
      </ion-list>
    </ion-page>
</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";
import 'boxicons';

export default {
  components: {
    IonPage,
  },
};
</script>
