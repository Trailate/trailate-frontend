<style lang="scss" scoped src="@/styles/views/TripComponent.scss"></style>

<template>
        <ion-card id="trip">
          <ion-card-content>
              <ion-row class="proposalRow1">
                <ion-badge color="danger">S 00</ion-badge>
                <ion-text>Towards, <b>Destination</b></ion-text>
              </ion-row>
              <ion-row class="proposalRow2">
                <ion-text>Start</ion-text>
                <ion-text>End</ion-text>
              </ion-row>
              <ion-row class="proposalRow2">
                <ion-text><b>00:00</b></ion-text>
                  <div><i class='bx bxs-left-arrow'></i><hr><i class='bx bxs-right-arrow'></i></div>
                <ion-text><b>00:00</b></ion-text>
              </ion-row>
          </ion-card-content>
        </ion-card>
</template>

<script lang="ts">
import { IonCard, IonBadge, IonText, IonRow, IonCardContent } from "@ionic/vue";
import "boxicons";

export default {
  components: {
    IonCard,
    IonBadge,
    IonText,
    IonRow,
    IonCardContent,
  },
};
</script>
