<template>
<div class="h-screen">
    <the-header></the-header>
    <div class="container mx-auto mt-24 flex">
        <the-form class="mx-auto" :title="locales.create_task" @submit="createTask">
            <the-input type="text" id="title" :title="locales.title" v-model="dataForm.title" class="mt-10" :error="useFilterErrorMessages(errors, messages.TITLE_CANNOT_BE_EMPTY)"></the-input>
            <the-input type="text" id="content" :title="locales.content" v-model="dataForm.content" :error="useFilterErrorMessages(errors, messages.CONTENT_CANNOT_BE_EMPTY)"></the-input>
            <div class="w-full flex">
                <the-input type="date" id="date" :title="locales.date" v-model="dataForm.date" class="basis-1/2 mr-5" :error="useFilterErrorMessages(errors, messages.DATE_CANNOT_BE_EMPTY)"></the-input>
                <the-input type="time" id="time" :title="locales.time" v-model="dataForm.time" class="basis-1/2" :error="useFilterErrorMessages(errors, messages.TIME_CANNOT_BE_EMPTY)"></the-input>
            </div>
            <div class="w-full mt-5 justify-end flex">
                <secondary-button :title="locales.cancel" class="mr-3" @click.prevent="cancelForm" type="button"></secondary-button>
                <primary-button :title="locales.create" @click="createTask" type="submit"></primary-button>
            </div>
        </the-form>
    </div>
</div>
</template>

<script>
import TheForm from "../components/TheForm.vue";
import TheInput from "../components/inputs/TheInput.vue";
import { computed, reactive, ref} from "vue";
import TheHeader from "../components/TheHeader.vue";
import PrimaryButton from "../components/buttons/PrimaryButton.vue";
import SecondaryButton from "../components/buttons/SecondaryButton.vue";
import {  useRouter } from "vue-router";
import { useStore } from 'vuex';
import useFilterErrorMessages from "../hooks/useFilterErrorMessages";
import messages from "../../messages";
import { locales } from "../../locales";


export default {
    components: { TheForm, TheInput, TheHeader, PrimaryButton, SecondaryButton },
    setup () {
        
        const router = useRouter()
        const store = useStore()

        const dataForm = reactive({
            title: '',
            content: '',
            date: '',
            time: ''
        })

        const errors = ref([])

        const cancelForm = () =>{
            router.push('/');
        }

        const checkForm = () => {
            let isValid = true;
            if(!dataForm.date){
                isValid = false;
                errors.value.push(messages.DATE_CANNOT_BE_EMPTY)
            }
            if(!dataForm.time){
                isValid = false;
                errors.value.push(messages.TIME_CANNOT_BE_EMPTY)
            }
            if(!dataForm.content){
                isValid = false;
                errors.value.push(messages.CONTENT_CANNOT_BE_EMPTY)
            }
            if(!dataForm.title){
                isValid = false;
                errors.value.push(messages.TITLE_CANNOT_BE_EMPTY)
            }

            return isValid
        }

        const createTask = async () =>{
            if(checkForm()){
                await store.dispatch('createTask', {
                    title: dataForm.title,
                    content: dataForm.content,
                    end: parseDate.value
                })
                router.push('/')
            }
        }

        const parseDate = computed(()=>{
            return dataForm.date + 'T' + dataForm.time
        })

        return {cancelForm, dataForm, createTask, useFilterErrorMessages, messages, errors, locales}
    }
}
</script>