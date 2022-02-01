import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "ch.trailate.app",
  appName: "Trailate",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
