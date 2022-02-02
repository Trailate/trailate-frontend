<style lang="scss" scoped src="@/styles/views/HomeView.scss"></style>

<template>
  <ion-page>
    <div class="grid-container">
      <div class="grid-item">
        <h1>Welcome to Trailate</h1>
      </div>
      <div class="grid-item">
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
      </div>
    </div>


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

.grid-container {
  display: grid;
  grid-template-columns: auto;
  background-color: #262626;
  padding: 5%;
  margin: 5%;
}

.grid-item {
  padding: 1%;
  margin: 1%;
  font-size: 20vw;
  text-align: center;
  font-weight: bold;
}

</style>
