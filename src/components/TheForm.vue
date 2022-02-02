<template>
    <the-card size="w-full lg:basis-3/4 xl:basis-1/2">
     <h1 class="text-lg font-medium text-violet-600">{{ title }}</h1>
        <form @submit.prevent="submit">
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
    setup (props, {emit}) {

        const submit = () =>{
            emit('submit')
        }

        return {submit}
    }
}
</script>