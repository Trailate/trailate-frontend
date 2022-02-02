<style lang="scss" scoped src="@/styles/views/HomeView.scss"></style>

<template>
  <ion-page>
    <div class="grid-container-title">
      <div class="grid-item-title">
        <h1>Welcome to Trailate</h1>
      </div>
    </div>

    <div class="grid-container-search">
      <div class="grid-item-search">
        <ion-item class="item-from">
            <ion-label position="floating">From</ion-label>
            <ion-input></ion-input>
          </ion-item>

          <ion-item class="item-to">
            <ion-label position="floating">To</ion-label>
            <ion-input></ion-input>
          </ion-item>
      </div>
    </div>


<!--
    <div class="searchitem-section">
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
-->

  </ion-page>
</template>

<script>
import { IonPage, IonItem, IonLabel, IonInput, } from "@ionic/vue";
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

.grid-container-title {
  display: grid;
  grid-template-columns: auto;
  padding: 5%;
  margin: 5%;
}

.grid-container-search {
  display: grid;
  grid-template-columns: auto;
  padding: 5%;
  margin: 5%;
}

.grid-item-title {
  padding: 1%;
  margin: 1%;
  font-size: 20vw;
  text-align: center;

  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.grid-item-search {
  padding: 1%;
  margin: 1%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%
}

</style>
