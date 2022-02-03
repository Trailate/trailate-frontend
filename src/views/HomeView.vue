<style lang="scss" scoped src="@/styles/views/HomeView.scss"></style>

<template>
  <ion-page>
    <div class="searchbar-section">
      <ion-searchbar
        color="light"
        class="searchbar-from"
        placeholder="From"
      ></ion-searchbar>
      <ion-searchbar
        color="light"
        class="searchbar-to"
        placeholder="To"
      ></ion-searchbar>
    </div>
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

<style>
.searchbar-section {
  min-width: 30%;
  max-width: 80%;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
