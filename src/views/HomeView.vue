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

      <ion-button
        @click="goToPropoosals()"
        color="danger"
        expand="block"
        strong="true"
        href="/trips/proposals/"
        >Search Connection</ion-button
      >
    </div>
  </div>
</template>

<script>
import { IonLabel, IonInput, IonButton } from "@ionic/vue";

export default {
  components: {
    IonLabel,
    IonInput,
    IonButton,
  },

  //inside the script section, define the function:
  methods: {
    goToPropoosals() {
      this.$router.push("/trips/proposals");
    },
  },
};

//if the route accepts params, you can also use
//this.$router.push({name:'home', params: {id: '[paramdata]'}});
</script>