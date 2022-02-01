<template>
  <h1>Test</h1>
  {{ data }}
</template>

<script>
import { Geolocation } from "@capacitor/geolocation";
import { instance } from "../common/api";

export default {
  name: "Test-component",
  data: () => ({
    data: "",
  }),
  mounted() {
    console.log("Initializing HomePage");

    instance
      .get("train/routesearch?from=Bern&to=Basel")
      .then((res) => console.log(res));

    Geolocation.watchPosition({ enableHighAccuracy: true }, (pos, err) => {
      if (err) return err;

      console.log(pos);
      return pos;
    });

    console.log("mounted");
  },
};
</script>
