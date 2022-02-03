import { PushNotifications } from "@capacitor/push-notifications";

function initNotifications() {
  PushNotifications.requestPermissions().then((res) => {
    if (res.receive === "granted") {
      PushNotifications.register();
    } else {
      console.error("Did not get permission to send Notifications");
    }
  });

  PushNotifications.addListener("registration", (token) => {
    // fetch("http://example.com/api/endpoint/", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     userId: "getUserToken",
    //     fcmToken: token.value,
    //   }),
    // }).then((res) => {
    //   console.log(res);
    // });

    console.log(token.value);
  });

  PushNotifications.addListener("registrationError", (error) => {
    console.log(error);
    alert("An Error has occured while registering your application.");
  });

  PushNotifications.addListener("pushNotificationReceived", (notification) => {
    console.log("Push received: " + JSON.stringify(notification));
  });

  PushNotifications.addListener(
    "pushNotificationActionPerformed",
    (notification) => {
      alert("Push action performed: " + JSON.stringify(notification));
    }
  );
}

export { initNotifications };
