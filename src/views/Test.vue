<template>
  <h1>Test</h1>
  {{ data }}
</template>

<script>
import { PushNotifications } from "@capacitor/push-notifications";

export default {
  name: "Test-component",
  data: () => ({
    data: "",
  }),
  mounted() {
    console.log("Initializing HomePage");

    PushNotifications.requestPermissions().then((res) => {
      if (res.receive === "granted") {
        //register with Google / Apple
        PushNotifications.register();
      } else {
        console.error("Did not get permission to send Notifications");
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token) => {
      console.log("Push registration success, token: " + token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error) => {
      console.log("Error on registration: " + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification) => {
        console.log("Push received: " + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification) => {
        alert("Push action performed: " + JSON.stringify(notification));
      }
    );

    console.log("mounted");
  },
};
</script>
