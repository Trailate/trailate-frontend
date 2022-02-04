<style lang="scss" scoped src="@/styles/views/SearchbarComponent.scss"></style>

<template>
        <ion-card id="trip">
            <div class="sb-container">
                <ion-input placeholder="Start"></ion-input>
                <ion-input placeholder="Destination"></ion-input>
            </div>
        </ion-card>
</template>

<script lang="ts">
import { IonCard } from "@ionic/vue";
import "boxicons";

export default {
  components: {
    IonCard,
  },
};
</script>
