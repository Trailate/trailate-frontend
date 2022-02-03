<style lang="scss" scoped src="@/styles/views/TripProposalView.scss"></style>

<template>
  <ion-header translucent>
    <ion-toolbar>
      <ion-title>Trip Proposals</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-page>
    <ion-content>
      <ion-list id="list">
        <trip-component href="/trip/1"></trip-component>
        <trip-component href="/trip/1"></trip-component>
        <trip-component href="/trip/1"></trip-component>
      </ion-list>

      <ion-infinite-scroll threshold="100px" id="infinite-scroll">
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data..."
        >
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonList,
  IonInfiniteScrollContent,
  IonInfiniteScroll,
  IonContent,
} from "@ionic/vue";
import TripComponent from "./components/TripComponent.vue";
import "boxicons";

export default {
  components: {
    TripComponent,
    IonPage,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonList,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonContent,
  },
};
</script>
