import Vue from 'vue';
import VueRouter from 'vue-router';

const home=()=>import('views/home/home')
const category=()=>import('views/category/category')
const car=()=>import('views/car/car')
const profile=()=>import('views/profile/profile')
const detial=()=>import('views/detial/detial')
Vue.use(VueRouter);
const  routes=[
    {path:"/",redirect: "/home"},
    { path:"/home",component:home},
    { path:"/category",component:category},
    { path:"/car",component:car},
    { path:"/profile",component:profile},
    { path:"/detial/:iid",component:detial},
]
 const router =new VueRouter({
     routes,
     mode:"history"
 })

 export default router