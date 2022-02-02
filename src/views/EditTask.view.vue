<template>
    <div class="h-screen">
    <the-header></the-header>
    <div class="container mx-auto mt-24 flex">
        <the-form  class="mx-auto" :title="locales.edit_task" @submit="editTask">
            <the-input type="text" id="title" :title="locales.title" v-model="dataForm.title" :error="useFilterErrorMessages(errors, messages.TITLE_CANNOT_BE_EMPTY)" class="mt-10"></the-input>
            <the-input type="text" id="content" :title="locales.content" v-model="dataForm.content" :error="useFilterErrorMessages(errors,messages.CONTENT_CANNOT_BE_EMPTY)"></the-input>
            <div class="w-full flex">
                <the-input type="date" id="date" :title="locales.date" :model-value="date" @update:modelValue="handleDateChange" class="basis-1/2 mr-5" :error="useFilterErrorMessages(errors,messages.DATE_CANNOT_BE_EMPTY)"></the-input>
                <the-input type="time" id="time" :title="locales.time"  :model-value="time" @update:modelValue="handleTimeChange"  class="basis-1/2" :error="useFilterErrorMessages(errors,messages.TIME_CANNOT_BE_EMPTY)"></the-input>
            </div>
            <div class="w-full mt-5 justify-end flex">
                <secondary-button :title="locales.cancel" class="mr-3" @click.prevent="cancelForm" type="button"></secondary-button>
                <primary-button :title="locales.save" @click="editTask" type="submit"></primary-button>
            </div>
        </the-form>
    </div>
</div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from 'vuex';
import TheHeader from '../components/TheHeader.vue';
import TheForm from '../components/TheForm.vue';
import TheInput from '../components/inputs/TheInput.vue';
import SecondaryButton from '../components/buttons/SecondaryButton.vue';
import PrimaryButton from '../components/buttons/PrimaryButton.vue';
import { computed, reactive, ref, watch } from 'vue';
import messages from "../../messages";
import useFilterErrorMessages from "../hooks/useFilterErrorMessages";
import { locales } from "../../locales";



export default {
  components: { TheHeader, TheForm, TheInput, SecondaryButton, PrimaryButton },
     setup() {
        const router = useRouter()
        const route = useRoute();
        const store = useStore()

        const errors = ref([])

        store.dispatch('fetchAndSetTask', route.params.id)

        watch(() => store.getters.task, () => {
            dataForm.title = store.getters.task.title
            dataForm.content = store.getters.task.content
            dataForm.end = store.getters.task.end
        })

        const dataForm = reactive({
            title: '',
            content: '',
            end: ''
        })

        const cancelForm = () =>{
            router.replace('/');
        }

        const date = computed(() => {
            if (!dataForm.end) return '';
            const endDateElements = dataForm.end.split('T');
            return endDateElements[0]
        })

        const time =  computed(()=> {
            if (!dataForm.end) return '';
            const endDateElements = dataForm.end.split('T');
            return endDateElements[1].slice(0, endDateElements[1].length - 8 )
        }) 

        const checkForm = () => {
            let isValid = true;
            if(!date.value){
                isValid = false;
                errors.value.push(messages.DATE_CANNOT_BE_EMPTY)
            }
            if(!time.value){
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

        const editTask = async () => {
            if(checkForm()){
                await store.dispatch('editTask', {...dataForm, end: date.value + 'T' + time.value, _id: route.params.id})
                router.replace('/')
            }
        }

        const handleDateChange = (value) => {
            const endDateElements = dataForm.end.split('T');
            dataForm.end = value  + "T" + endDateElements[1];
        }

        const handleTimeChange = (value) => {
            const endDateElements = dataForm.end.split('T');
            dataForm.end = endDateElements[0] + "T" + value + ":00.000Z";
        }
      
        return {cancelForm, date, time, dataForm, editTask, messages, useFilterErrorMessages, errors, handleDateChange, handleTimeChange, locales}
    },
}
</script>