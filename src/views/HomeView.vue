<style lang="scss" scoped src="@/styles/views/HomeView.scss"></style>

<template>
  <ion-page>
    <div class="searchitem-section">
      <!-- <ion-searchbar
        color="light"
        class="searchbar-from"
        placeholder="From"
      ></ion-searchbar>
      <ion-searchbar
        color="light"
        class="searchbar-to"
        placeholder="To"
      ></ion-searchbar> -->

      <ion-item class="item-from">
        <ion-label position="floating">From</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item class="item-to">
        <ion-label position="floating">To</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <div id="app">
        {{ info }}
      </div>
    </div>
  </ion-page>
</template>

<script>
import { IonPage, IonItem, IonLabel, IonInput,  } from "@ionic/vue";
import axios from "axios";

export default {
  components: {
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
  },

  el: "#app",
  data() {
    return {
      info: " ",
    };
  },
  mounted() {
    axios
      //.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .get('https://trailate.com/api/v1/train/routesearch/?from=Waffenplatzstrasse&to=SihlcityNord')
      .then((response) => (this.info = response.data));
  },
};
</script>

<style>
.searchitem-section {
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
