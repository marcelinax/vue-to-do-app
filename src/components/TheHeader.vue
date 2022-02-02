<template>
    <header class="w-full h-24 shadow-sm border-b-2 border-zinc-200 flex items-center">
        <div class="container mx-auto text-center md:text-left">
            <router-link to="/">
            <h1 class="font-semibold text-3xl text-violet-600">{{locales.tasks_manager}} </h1>
            </router-link>
        </div>
    </header>
</template>

<script>
import { locales } from "../../locales"

export default {
    setup() {

        return {locales}
    }
}
</script>