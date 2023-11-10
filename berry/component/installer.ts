import { App } from "vue";
import BerryButton from "./Button";

const comps = {
  BerryButton
}

export default function (Vue: App) {
  for (let key in comps) {
    const comp = Reflect.get(comps, key)
    Vue.use(comp)
  }
}