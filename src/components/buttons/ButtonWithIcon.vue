<template>
    <button class="mr-2 last:mr-0 cursor-pointer group transition-all">
        <i :class='iconClass' class="text-xl font-medium"></i>
    </button>
</template>

<script>
import { computed } from "vue";

    export default {
        props: ['icon'],
        setup (props) {
            const iconClass = computed(()=>{
                return `bx bx-${props.icon}`
            })

            return {iconClass}
        }
    }
</script>