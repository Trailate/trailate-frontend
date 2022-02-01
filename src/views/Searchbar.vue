<style lang="scss" scoped src="@/styles/views/Searchbar.scss"></style>

<template>
    <ion-page>
        <br>
        <ion-searchbar class="from" placeholder="From"></ion-searchbar>
        <ion-searchbar class="to" placeholder="To"></ion-searchbar>
    </ion-page>
</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";

export default {
  name: 'SearchbarField',

  components: {
    IonPage,
  },
};
</script>
