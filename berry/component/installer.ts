import { App } from "vue";
import BerryButton from "./Button";
import BerryIcon from "./Icon";

const comps = [
  BerryButton,
  BerryIcon
]

export default function (Vue: App) {
  for (let key in comps) {
    const comp = Reflect.get(comps, key)
    Vue.use(comp)
  }
}

