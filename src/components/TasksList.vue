<template>
<div class="w-full grid grid-cols-3 gap-8" v-if="tasks.length > 0">
    <task-item v-for="task in tasks" :key="task.id" :content="task?.content" :title="task?.title"></task-item>
</div>
</template>
    
<script>
import TaskItem from './TaskItem.vue'
export default {
  components: { TaskItem },
    props: {
        tasks: {
            type: Array,
            default: () => []
        }
    },
    setup() {

    },
}
</script>