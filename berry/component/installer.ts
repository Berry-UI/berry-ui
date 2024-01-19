import { App } from "vue";
import BerryButton from "./Button";
import BerryIcon from "./Icon";
import BerryInput from "./Input";
import BerryButtonGroup from "./ButtonGroup";
import BerryRadio from "./Radio"
import BerrtInputGroup from "./InputGroup";
import BerrtCheckBox from "./CheckBox";
import BerrtCheckBoxGroup from "./CheckBoxGroup";
import BerrySwitch from "./Switch";

const comps = [
  BerryButton,
  BerryIcon,
  BerryInput,
  BerrtInputGroup,
  BerryButtonGroup,
  BerryRadio,
  BerrtCheckBox,
  BerrtCheckBoxGroup,
  BerrySwitch
]

export default function (Vue: App) {
  for (let key in comps) {
    const comp = Reflect.get(comps, key)
    Vue.use(comp)
  }
}

