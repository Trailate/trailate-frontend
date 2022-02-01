import { Geolocation } from "@capacitor/geolocation";

async function printCurrentPosition() {
  return await Geolocation.getCurrentPosition();
}

async function watchPosition() {
    Geolocation.watchPosition({enableHighAccuracy: true}, (pos, err) => {
        if(err) return err;

        console.log(pos)
        return pos;
    })
}

export { printCurrentPosition, watchPosition };
