<template>
    <div class="relative">
        <input type="text" @input="handleInput" :value="modelValue" :placeholder="locales.search" class="border w-full text-slate-400 rounded-md py-3 pl-2 pr-8 outline-none"/>
        <i class='bx bx-search text-slate-400 absolute top-1/2 -translate-y-1/2 right-2'></i>
    </div>
</template>

<script>
import { locales } from "../../locales"

export default {
    props: {
        modelValue: {
            type: String,
            required:true
        },
    },
    emits: ['update:modelValue'],
    setup(props, {emit}) {

        const handleInput = (e) =>{
            emit('update:modelValue', e.target.value)
        }

        return {locales, handleInput}
    },
}
</script>