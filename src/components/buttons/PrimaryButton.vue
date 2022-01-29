<template>
    <button class="bg-violet-600 text-white py-3 px-6 rounded-md font-semibold cursor-pointer hover:scale-95 transition-all">
        {{ title }}
    </button>
</template>

<script>
    export default {
        props: ['title'],
        setup() {

        }
    }
</script>