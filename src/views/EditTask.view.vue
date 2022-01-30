<template>
    <div class="h-screen">
    <the-header></the-header>
    <div class="container mx-auto mt-24 flex">
        <the-form class="mx-auto" title="Create Task">
            <the-input type="text" id="title" title="title" v-model="dataForm.title" class="mt-10"></the-input>
            <the-input type="text" id="content" title="content" v-model="dataForm.content"></the-input>
            <div class="w-full flex">
                <the-input type="date" id="date" title="date" v-model="dataForm.date" class="basis-1/2 mr-5"></the-input>
                <the-input type="time" id="time" title="time" v-model="dataForm.time" class="basis-1/2"></the-input>
            </div>
            <div class="w-full mt-5 justify-end flex">
                <secondary-button title="CANCEL" class="mr-3" @click="cancelForm"></secondary-button>
                <primary-button title="SAVE"></primary-button>
            </div>
        </the-form>
    </div>
</div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter()

         const cancelForm = () =>{
            router.push('/');
        }

        

        return {cancelForm}
    },
}
</script>