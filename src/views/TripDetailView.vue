<style lang="scss" scoped src="@/styles/views/TripDetailView.scss"></style>

<template>
    <ion-page>
        <ion-card>

          <ion-card-content>

              <ion-row>
                <ion-text>Wochentage</ion-text> 
              </ion-row>
              <ion-row id="weekdays">
                <ion-button fill="outline" color="danger">Mo</ion-button>
                <ion-button fill="outline" color="danger">Di</ion-button>
                <ion-button fill="outline" color="danger">Mi</ion-button>
                <ion-button fill="outline" color="danger">Do</ion-button>
                <ion-button fill="outline" color="danger">Fr</ion-button>
                <ion-button fill="outline" color="danger">Sa</ion-button>
                <ion-button fill="outline" color="danger">So</ion-button>
              </ion-row>
              <ion-row>
                <ion-text>Home-Office Tracker</ion-text>
                <ion-toggle></ion-toggle>  
              </ion-row>

              <ion-button expand="full" strong="true" color="danger">Save Changes</ion-button>

          </ion-card-content>
        </ion-card>
    </ion-page>
</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";

export default {
  components: {
    IonPage,
  },
};
</script>
