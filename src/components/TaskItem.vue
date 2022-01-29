<template>
<div class="shadow-3xl flex flex-col h-fit bg-white basis-1/4  p-8 rounded-md">
    <div class="w-full flex justify-between">
        <h3 class="font-semibold w-3/4">{{ title }}</h3>
        <the-switch :value="true"></the-switch>
    </div>
    <p class="text-xs font-semibold text-violet-600">5 days </p>
    <div class="mt-5 w-full">
        <p class="text-sm text-zinc-500">{{content}}</p>
    </div>
    <div class="w-full mt-5">
    </div>
    <div class="w-full flex items-center mt-3">
        <button-with-icon icon="edit" class="hover:text-violet-600"></button-with-icon>
        <button-with-icon icon="trash-alt" class="hover:text-rose-600"></button-with-icon>
    </div>
</div>
</template>

<script>
import ButtonWithIcon from "./buttons/ButtonWithIcon.vue";
import TheSwitch from "./buttons/TheSwitch.vue";
export default {
    components: { ButtonWithIcon, TheSwitch },
    props: {
        title: {
            type: String,
        },
        content: {
            type: String
        },
        isFinished: {
            type: Boolean,
            default: false
        },
        end: {
            type: Date,
            required: true
        },
    },
    setup() {
    },
    
}
</script>