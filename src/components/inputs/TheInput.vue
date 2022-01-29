<template>
    <div class="flex flex-col relative mt-10 w-1/2 ml-3">
        <label class="font-semibold text-zinc-300 absolute -top-2 left-3 text-xs bg-white px-1 z-10">{{ title }}</label>
        <input type="text" @input="handleInput" class="border border-zinc-200 rounded-md py-2"/>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        value: {
            type: String
        }
    },
    emits: ['input'],
    setup (props, {emit}) {
        const inputValue = props.value;

        const handleInput = (e) => {
            emit('input', inputValue)
        }
    }
}
</script>