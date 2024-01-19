<!--
@Project: Berry
@author: Rain
@createDate: 2023
-->
<script setup lang="ts">
import { computed, ref } from "vue"
import { useNS } from "berry-ui/hooks/useNS"
import { InputProps, InputEmits } from "./Input"

defineOptions({
    name: "BerryInput"
})

const ns = useNS("input")
const props = defineProps({ ...InputProps })
let staging = ref<String>("")


const ber_input = computed(() => {
    return [
        ns.namespace,
        ns.m(props.disabled ? "disabled" : ""),
        ns.fo(props.required, ns.namespace + '-required'),
        ns.fo(props.required && staging.value === "", ns.namespace + '-invalid')
    ]
})
const ber_input_el = computed(() => {
    return [
        ns.m("el"),
        ns.m(props.size),
    ]
})
const ber_input_length = computed(() => {
    return [
        ns.m("length"),
    ]
})

const emits = defineEmits({ ...InputEmits })
const inputChange = (e: any) => {
    staging.value = e.target.value
    emits('update:modelValue', staging.value)
    emits('change', staging.value)
}

const passwordView = ref(false)
const input = ref<HTMLInputElement | null>(null);

function mousedown(): void {
    props.passwordOn == "click" ? passwordView.value = !passwordView.value : passwordView.value = true
    passwordView.value ? input.value!.type = 'text' : input.value!.type = 'password'

}
function mouseup(): void {
    props.passwordOn == "click" ? void 0 : passwordView.value = false
    passwordView.value ? input.value!.type = 'text' : input.value!.type = 'password'
}
function focus(e: FocusEvent) {
    emits('focus', e)
}
function blur(e: FocusEvent): void {
    emits('blur', e)
}
</script>

<template>
    <div :class="ber_input">
        <slot name="prefix"></slot>
        <input v-if="type != 'textarea'" ref="input" :class="ber_input_el" :type="type" :placeholder="placeholder"
            :disabled="disabled" :value="modelValue" @input="inputChange" @focus="focus" @blur="blur" :maxlength="maxLength"
            :minlength="minLength" :autocomplete="autocomplete ? 'on' : 'off'" :required="required">
        <!-- cols="30" rows="10" -->
        <textarea v-else name="" id="" :class="ber_input_el" :type="type" :placeholder="placeholder" :disabled="disabled"
            :value="modelValue" @input="inputChange" @focus="focus" @blur="blur" :maxlength="maxLength"
            :minlength="minLength"></textarea>
        <slot name="suffix" v-if="type == 'text'"></slot>
        <span :class="ber_input_length" v-if="showCount">{{ +maxLength >= 100 ? `99+` : modelValue.length + '/' + maxLength
        }}</span>
        <BerryIcon class="ber_icon_hover" v-if="type == 'password'" :name="passwordView ? 'view' : 'hide'"
            @mousedown="mousedown" @mouseup="mouseup" size="18px">
        </BerryIcon>
    </div>
</template>

<style lang="scss" scoped>
.ber_icon_hover:hover {
    cursor: pointer;
}
</style>