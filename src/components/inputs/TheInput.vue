<template>
    <div class="flex flex-col relative mb-6 ">
        <input :type="type" :id="id" @input="handleInput" :value="modelValue" class="border text-slate-400 rounded-md py-3 px-2 transition-all peer-focus:text-red-500 focus:border-2 focus:border-violet-500 outline-none"/>
        <label :for="id" class="font-semibold text-zinc-300 absolute -top-2 left-3 text-xs bg-white px-1 z-10 transition-all">{{ title.toUpperCase() }}</label>
    </div>
</template>
<script>

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            required:true
        },
        id:{
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    emits: ['input'],
    setup (_, {emit}) {
        const handleInput = (e) => {
            emit('update:modelValue', e.target.value)
        }
        
        return {handleInput}
    }
}
</script>