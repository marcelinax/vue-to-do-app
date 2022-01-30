export default [
    { path: '/', component:()=> import ('../views/Homepage.view.vue') },
    { path: '/create-task', component: () => import ('../views/CreateTask.view.vue') },
    { path: '/edit-task/:id', component: () => import ('../views/EditTask.view.vue') },
]