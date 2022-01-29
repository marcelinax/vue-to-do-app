export default [
    { path: '/', component:()=> import ('../views/Homepage.view.vue') },
    { path: '/create-task', component: () => import ('../views/CreateTask.view.vue') },
]