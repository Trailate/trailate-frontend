<style lang="scss" scoped src="@/styles/views/TripProposalView.scss"></style>

<template>
    <ion-page>
        <ion-card>
          <ion-card-content>
              <ion-row id="proposalRow1">
                <ion-badge color="danger">S 11</ion-badge>
                <ion-text>Richtung, <b>Aarau</b></ion-text>
              </ion-row>
              <ion-row id="proposalRow2">
                <ion-text><b>15:09</b></ion-text>
                <div id="proposalLine"><hr><i class='bx bx-right-arrow-alt'></i></div>
                <ion-text><b>15:28</b></ion-text>
              </ion-row>
              <ion-row id="proposalRow2">
                <ion-text>Winterthur, HB</ion-text>
                <ion-text>Zürich, HB</ion-text>
              </ion-row>
          </ion-card-content>
        </ion-card>
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
