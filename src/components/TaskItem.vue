<template>
<the-card size="basis-1/4">
    <div class="w-full flex justify-between">
        <h3 class="font-semibold w-3/4">{{ title }}</h3>
        <the-switch :value="true"></the-switch>
    </div>
    <div class="w-full mt-1">
        <p class="text-xs font-semibold text-violet-600">5 days </p>
    </div>
    <div class="mt-5 w-full">
        <p class="text-sm text-zinc-500">{{content}}</p>
    </div>
    <div class="w-full mt-5">
    </div>
    <div class="w-full flex items-center mt-3">
        <button-with-icon icon="edit" class="hover:text-violet-600"></button-with-icon>
        <button-with-icon icon="trash-alt" class="hover:text-rose-600"></button-with-icon>
    </div>
</the-card>
</template>

<script>
import ButtonWithIcon from "./buttons/ButtonWithIcon.vue";
import TheSwitch from "./buttons/TheSwitch.vue";
import TheCard from "./TheCard.vue";
export default {
    components: { ButtonWithIcon, TheSwitch, TheCard },
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