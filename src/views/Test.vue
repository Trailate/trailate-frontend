<template>
  <div>
    <h1>Test</h1>
  </div>
</template>

<script>
import { Geofence } from "@ionic-native/geofence/vue";
import { instance } from "../common/api";

export default {
  name: "Test-component",
  data: () => ({}),
  async mounted() {
    console.log("Initializing HomePage");

    //console.log(await Geolocation.getCurrentPosition());

    // initialize the plugin
    Geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log("Geofence Plugin Ready"),
      (err) => console.log(err)
    );

    console.log("mounted");
  },
};
</script>
