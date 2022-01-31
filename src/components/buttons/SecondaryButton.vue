<template>
    <button class="border border-violet-600 text-violet-600 py-3 px-6 rounded-md cursor-pointer hover:scale-95 transition-all" :type="type">
        <p >{{ title }}</p>
    </button>
</template>

<script>
    export default {
        props: ['title', 'type'],
        setup() {

        }
    }
</script>