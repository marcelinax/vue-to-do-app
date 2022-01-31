<template>
    <div class="h-screen">
    <the-header></the-header>
    <div class="container mx-auto mt-24 flex">
        <the-form  class="mx-auto" title="Create Task">
            <the-input type="text" id="title" title="title" v-model="dataForm.title" class="mt-10"></the-input>
            <the-input type="text" id="content" title="content" v-model="dataForm.content"></the-input>
            <div class="w-full flex">
                <the-input type="date" id="date" title="date" v-model="date" class="basis-1/2 mr-5"></the-input>
                <the-input type="time" id="time" title="time" v-model="time" class="basis-1/2"></the-input>
            </div>
            <div class="w-full mt-5 justify-end flex">
                <secondary-button title="CANCEL" class="mr-3" @click="cancelForm"></secondary-button>
                <primary-button title="SAVE" @click="editTask"></primary-button>
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
import { computed, reactive, watch } from 'vue';


export default {
  components: { TheHeader, TheForm, TheInput, SecondaryButton, PrimaryButton },
     setup() {
        const router = useRouter()
        const route = useRoute();
        const store = useStore()

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

        const editTask = async () => {
            await store.dispatch('editTask', {...dataForm, _id: route.params.id})
            router.replace('/')
        }

      
        return {cancelForm, date, time, dataForm, editTask}
    },
}
</script>