<template>
<div class="fixed top-0 left-0 z-10 bg-slate-400/50 w-screen h-screen flex items-center justify-center px-5 md:px-0" :class="modalClass">
    <the-card size="w-full md:w-3/4 lg:w-1/3" class="p-0">
        <div class="w-full bg-violet-600 p-5">
            <h1 class="text-white text-lg font-semibold">{{ title }}</h1>
        </div>
        <div class="w-full p-5 flex flex-col">
            <div class="w-full">
                <p class="text-md">{{ description }}</p>
            </div>
            <div class="mt-6 w-full flex justify-end">
                <secondary-button title="CANCEL" class="mr-3" @click="close"></secondary-button>
                <primary-button title="CONFIRM" @click="confirm"></primary-button>
            </div>
        </div>
    </the-card>
</div>

</template>

<script>
import { computed } from '@vue/runtime-core'
import PrimaryButton from './buttons/PrimaryButton.vue'
import SecondaryButton from './buttons/SecondaryButton.vue'
import TheCard from './TheCard.vue'
export default {
  components: { SecondaryButton, PrimaryButton, TheCard },
    props: ['title', 'description', 'isShown'],
    emits: ['close', 'confirm'],
    setup(props, {emit}) {

        const modalClass = computed(() =>{
            return props.isShown ? 'flex' : 'hidden';
        })

        const close = () => {
            emit('close', props.isShown)
        }

        const confirm = () =>{
            emit('confirm')
        }

        return {modalClass, close, confirm}
    }
}
</script>