const Component = {
    data() {
        return {
            newTodoText: '',
            editing: false,
            // main list
            todos: [],
            // in progress todos
            progressTodo: [],
            // done todos
            doneTodo: [],
            // hide or show lists
            toggleToDo: true,
            progressToDo: true,
            doneToDo: true
        }
    },
    methods: {
        // add new item
        addNewTodo() {
            this.todos.push(this.newTodoText);
            this.newTodoText = ''
        },
        // move to done list from main list
        removeItemsTodos(index) {
            this.doneTodo.push(this.todos[index]);
            this.todos.splice(index, 1);
        },
        // move to progress list from main list
        progressItemsMain(index) {
            this.progressTodo.push(this.todos[index]);
            this.todos.splice(this.index, 1);
        },
        // move from progress to done list
        removeItemsProgress(index) {
            this.doneTodo.push(this.progressTodo[index]);
            this.progressTodo.splice(index, 1);
        },
        // delete forever
        deletePermanently(index) {
            this.doneTodo.splice(index, 1)
        },
        // edit text
        onEdit(index) {
            let newTitle = index.target.innerText;
            index.title = newTitle
        },
        endEdit(index) {
            index.title.blur()
        }
    }
};

const app = Vue.createApp(Component);
const vm = app.mount('#go');