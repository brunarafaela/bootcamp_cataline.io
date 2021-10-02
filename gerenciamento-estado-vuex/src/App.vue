<template>
    <ul>
        <h3>Todo list:</h3>
        <li v-for="todo in $allTodos" :key="todo.id">
            {{ todo.text }}
        </li>
        <h3>Done list:</h3>
        <li v-for="todo in $doneTodos" :key="todo.id">
            {{ todo.text }}
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        $allTodos() {
            return this.$store.getters.$allTodos
        },
        $doneTodos() {
            return this.$store.getters.$doneTodos
        },
    },
    created() {
        this.$store.dispatch('fetchTodos')
    },
    methods: {
    }
}
</script>