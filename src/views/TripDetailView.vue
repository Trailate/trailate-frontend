<style lang="scss" scoped src="@/styles/views/TripDetailView.scss"></style>

<template>

<ion-header translucent>
    <ion-toolbar>
      <ion-title>Edit Trip</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-page>

    <ion-content>
      <ion-list id="list">
        <trip-component href="/trips/proposals"></trip-component>
        <trip-changes-component></trip-changes-component>
      </ion-list>

    </ion-content>

  </ion-page>

</template>


<script lang="ts">
import { IonPage } from "@ionic/vue";
import TripComponent from './components/TripComponent.vue';
import TripChangesComponent from './components/TripChangesComponent.vue';

export default {
  components: {
    IonPage,
    TripComponent,
    TripChangesComponent,
  },
};
</script>

    TripChangesComponent