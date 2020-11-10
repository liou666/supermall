import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const home=()=>import('views/home/home');
const car=()=>import('views/car/car');
const category=()=>import('views/category/category');
const profile=()=>import('views/profile/profile');
const detail=()=>import('views/detail/detail')
const routes=[
    {path:'/',redirect: '/home'},
    {path:'/home',component:home},
    {path:'/car',component:car},
    {path:'/category',component:category},
    {path:'/profile',component:profile},
    {path:'/detail/:id',component:detail},
];
const router=new VueRouter({
    routes,
    mode:'history'
});

export default router