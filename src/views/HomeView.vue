<style lang="scss" scoped src="@/styles/views/HomeView.scss"></style>

<template>
  <ion-page>
    <div class="searchbar-section">
      <ion-searchbar class="searchbar-from" placeholder="From"></ion-searchbar>
      <ion-searchbar class="searchbar-to" placeholder="To"></ion-searchbar>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";

export default {
  components: {
    IonPage, IonContent
  },
};
</script>

<style>
  .searchbar-section {
    min-width: 30%;
    max-width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .searchbar-from {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .searchbar-to {
    
  }
</style>