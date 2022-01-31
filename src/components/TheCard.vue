<template>
<div class="shadow-3xl flex flex-col h-fit bg-white p-8 rounded-md overflow-hidden" :class="size">
    <slot></slot>
</div>
</template>

<script>import { computed } from "vue";

export default {
    props: {
        /**
         * The size of the card
         * @values "1/4", "1/2", "1/8"
         */
        size: {
            type: String,
            required: true
        }
    },
    setup(props) {
       
    }
}
</script>