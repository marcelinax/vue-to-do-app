<template>
<div class="w-full grid grid-cols-3 gap-8" v-if="tasks.length > 0" >
    <task-item v-for="task in tasks" :key="task._id" :id="task._id" :content="task?.content" :title="task?.title" :end="task?.end" :isFinished="task?.finished" @toggleIsFinished="toggleTaskStatus" @delete="emitDelete" @edit="moveToEditForm"></task-item>
</div>
</template>
    
<script>

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import TaskItem from './TaskItem.vue'
export default {
  components: { TaskItem },
    props: {
        tasks: {
            type: Array,
            default: () => []
        }
    },
    emits: ['delete'],
    setup(props, {emit}) {
        const store = useStore()
        const router = useRouter()

        const toggleTaskStatus = (taskId) =>{
             store.dispatch('toggleTaskStatus', taskId)
        }

        const emitDelete = (taskId) =>{
             emit('delete', taskId)
        }

        const moveToEditForm =  (taskId) => {
            router.push({
                path: '/edit-task',
                name: 'edit',
                params:  {id: taskId}
            })
        }

        return {toggleTaskStatus, moveToEditForm, emitDelete}
    },
}
</script>