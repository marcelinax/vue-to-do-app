<template>
    <div class="min-w-[40px] h-5 relative cursor-pointer rounded-lg shadow-lg switch" :class="switchClass" @click="toggle"></div>
</template>

<script>import { computed } from "vue";

    export default {
        props: ['value'],
        emits: ['toggle'],
        setup(props, {emit}) {

            const switchClass = computed(()=>{
                return props.value && 'active'
            })

            const toggle = () => emit('toggle', props.value)

            return {switchClass, toggle}
        }
    }
</script>