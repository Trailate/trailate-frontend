<style lang="scss" scoped src="@/styles/views/Searchbar.scss"></style>

<template>
  <ion-page>
    <ion-content>
      <ion-searchbar class="searchbar-from" placeholder="From"></ion-searchbar>
      <ion-searchbar class="searchbar-to" placeholder="To"></ion-searchbar>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";
import { IonSearchbar } from "@ionic/vue";

export default {
  name: "SearchbarField",
  components: {
    IonPage,
    IonSearchbar,
  },
};
</script>

<style scoped></style>
