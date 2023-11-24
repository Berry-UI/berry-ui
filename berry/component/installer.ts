import { App } from "vue";
import BerryButton from "./Button";
import BerryIcon from "./Icon";
import BerryInput from "./Input";

const comps = [
  BerryButton,
  BerryIcon,
  BerryInput
]

export default function (Vue: App) {
  for (let key in comps) {
    const comp = Reflect.get(comps, key)
    Vue.use(comp)
  }
}

