import { App } from "vue";
import BerryButton from "./Button";
import BerryIcon from "./Icon";
import BerryInput from "./Input";
import BerryButtonGroup from "./ButtonGroup";
import BerryRadio from "./Radio"
import BerrtInputGroup from "./InputGroup";
import BerrtCheckBox from "./CheckBox";
<<<<<<< HEAD
import BerrySelect from "./Select";
=======
import BerrtCheckBoxGroup from "./CheckBoxGroup";
>>>>>>> 80efeeddabcd7a1c7e98774890e82758f0941f21

const comps = [
  BerryButton,
  BerryIcon,
  BerryInput,
  BerrtInputGroup,
  BerryButtonGroup,
  BerryRadio,
  BerrtCheckBox,
<<<<<<< HEAD
  BerrySelect
=======
  BerrtCheckBoxGroup
>>>>>>> 80efeeddabcd7a1c7e98774890e82758f0941f21
]

export default function (Vue: App) {
  for (let key in comps) {
    const comp = Reflect.get(comps, key)
    Vue.use(comp)
  }
}

