<style lang="scss" scoped src="@/styles/views/HomeView.scss"></style>

<template>
  <div class="hv-container">
    <div class="hv-header">
      <h1>Trailate</h1>
    </div>

    <div class="hv-body">
      <ion-label position="floating">username</ion-label>
      <ion-input></ion-input>

      <ion-label position="floating">email</ion-label>
      <ion-input></ion-input>

      <ion-label position="floating">password</ion-label>
      <ion-input></ion-input>

      <ion-label position="floating">confirm password</ion-label>
      <ion-input></ion-input>

      <ion-button
        color="danger"
        expand="block"
        strong="true"
        href="/login/"
        >Register</ion-button
      >

    </div>
  </div>
</template>

<script>
import { IonLabel, IonInput, IonButton } from "@ionic/vue";
import axios from "axios";

export default {
  components: {
    IonLabel,
    IonInput,
    IonButton,
  },
};

//if the route accepts params, you can also use
//this.$router.push({name:'home', params: {id: '[paramdata]'}});
</script>