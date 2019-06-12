import Home from '@/views/Home.vue'

export default [{
  path: '/',
  name: 'home',
  component: Home,
  props: route => ({
    food: route.query.food
  })
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  props: {
    parm: 'banana'
  }
},
{
  path: '/argu/:name',
  name: 'argu',
  component: () => import('@/views/argu.vue'),
  props: true
},
{
  path: '/parent',
  component: () => import('@/views/parent.vue'),
  children: [{
    path: 'child',
    component: () => import('@/views/child.vue')
  }]
},
{
  path: '/name_view',
  components: {
    default: () => import('@/views/child.vue'),
    top: () => import('@/views/Home.vue'),
    foot: () => import('@/views/About.vue')
  }
}, {
  path: '/main',
  // redirect: '/'
  redirect: {
    name: 'home'
  }
  // redirect:to=>{
  //   return {
  //     name:'home'
  //   }
  // }
}

]
