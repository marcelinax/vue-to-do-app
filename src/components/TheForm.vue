<template>
    <the-card size="basis-1/2">
     <h1 class="text-lg font-medium text-violet-600">{{ title }}</h1>
        <form @submit.prevent="">
            <slot></slot>
        </form>
    </the-card>
</template>

<script>
import TheCard from './TheCard.vue'
export default {
    props: ['title'],
    components: { TheCard },
    emits: ['submit'],
    setup () {

    }
}
</script>