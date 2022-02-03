<style lang="scss" scoped src="@/styles/views/HomeView.scss"></style>

<template>

    <div class="hv-container">

      <div class="hv-header">
        <h1>Trailate</h1>
      </div>

      <div class="hv-body">

          <ion-label position="floating">Start</ion-label>
            <ion-input></ion-input>

          <ion-label position="floating">Destination</ion-label>
            <ion-input></ion-input>

          <ion-button @click="goToHome()" color="danger" expand="block" strong="true">Search Connection</ion-button>

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


</template>


<script>
import { IonLabel, IonInput } from "@ionic/vue";
import axios from "axios";

export default {
  components: {
    IonLabel,
    IonInput,
  },

  //inside the script section, define the function:
 methods:{
   goToHome(){
   this.$router.push('/trips/proposals'); 
      }
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

//if the route accepts params, you can also use
//this.$router.push({name:'home', params: {id: '[paramdata]'}}); 
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

.grid-container-button {
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
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%
}

.grid-item-button {
  padding: 1%;
  margin: 1%;
  font-size: 20vw;
  text-align: center;

  position: fixed;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.titleh1 {
 font-weight: 700;
 font-size: 34px;
}

.titleh2 {
 font-weight: 500;
 font-size: 20px;
}
</style>
