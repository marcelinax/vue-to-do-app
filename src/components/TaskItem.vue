<template>
<the-card size="basis-1/4" :class="{'opacity-60': isFinished}">
    <div class="w-full flex justify-between">
        <h3 class="font-semibold w-3/4">{{ title }}</h3>
        <the-switch :value="isFinished" @click="toggleIsFinished" :class="{active : isFinished}"></the-switch>
    </div>
    <div class="w-full mt-1">
        <p class="text-xs font-semibold text-violet-600" :class="{'text-rose-600': isEndDateExpired}">
            {{ endDate }}
        </p>
    </div>
    <div class="mt-5 w-full">
        <p class="text-sm text-zinc-500">{{content}}</p>
    </div>
    <div class="w-full mt-5">
    </div>
    <div class="w-full flex items-center mt-3">
        <button-with-icon icon="edit" class="hover:text-violet-600" @click="editTask"></button-with-icon>
        <button-with-icon icon="trash-alt" class="hover:text-rose-600" @click="deleteTask"></button-with-icon>
    </div>
</the-card>
</template>

<script>
import { computed } from '@vue/runtime-core';
import ButtonWithIcon from "./buttons/ButtonWithIcon.vue";
import TheSwitch from "./buttons/TheSwitch.vue";
import TheCard from "./TheCard.vue";
import moment from 'moment';

export default {
    components: { ButtonWithIcon, TheSwitch, TheCard },
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
        },
        content: {
            type: String
        },
        isFinished: {
            type: Boolean,
            default: false
        },
        end: {
            type: String,
            required: true
        },
    },
    emits: ['toggleIsFinished', 'delete', 'edit'],
    setup(props, {emit}) {

        const endDate = computed(()=>{
           return moment(props.end).calendar({
                lastDay : '[Yesterday at]  HH:mm',
                sameDay : '[Today at] HH:mm',
                nextDay : '[Tomorrow] HH:mm',
                lastWeek : '[last] dddd [at] HH:mm',
                nextWeek : 'dddd [at] HH:mm',
                sameElse : 'dddd, DD.MM.YYYY [at] HH:mm'
            })
        })

        const toggleIsFinished = () =>{
            emit('toggleIsFinished', props.id)
        }

        const deleteTask = () => {
            emit('delete', props.id)
        }

        const editTask = () => {
            emit('edit', props.id)
        }

        const isEndDateExpired = computed(() =>{
            return moment().diff(props.end) >= 0
        }) 

        return {endDate, toggleIsFinished, isEndDateExpired, deleteTask, editTask}

    },
    
}
</script>