<style lang="scss" scoped src="@/styles/views/TripSavedView.scss"></style>

<template>

  <ion-header translucent>
    <ion-toolbar>
      <ion-title>My Trips</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-page>

    <ion-content>

      <ion-list id="list">
        <trip-component href="/trip/1"></trip-component>
        <trip-component href="/trip/2"></trip-component>
        <trip-component href="/trip/3"></trip-component>
      </ion-list>

      <ion-infinite-scroll threshold="100px" id="infinite-scroll">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>  

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button color="danger" href="/trips/proposals">
          <i class='bx bx-plus-medical'></i>
        </ion-fab-button>
    </ion-fab>

    </ion-content>

  </ion-page>

</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";
import TripComponent from './components/TripComponent.vue';
import 'boxicons';

export default {
  components: {
    IonPage,
    TripComponent,
  },
};
</script>