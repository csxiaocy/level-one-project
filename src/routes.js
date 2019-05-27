import Home from './views/Home.vue'
import Login from './views/Login.vue'
import PageNotFound from './views/404.vue'
import Dashboard from './views/Dashboard.vue'
import User from './views/user-manage/User.vue'
import Admin from './views/user-manage/Admin.vue'
import Notice from './views/Notice.vue'
import Setting from './views/Setting.vue'

let routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: PageNotFound,
    hidden: true
  },
  {
    path: '/',
    name: '',
    component: Home,
    iconCls: 'el-icon-message',
    leaf: true,
    children: [
      { path: '/dashboard', component: Dashboard, name: 'Dashboard' }
    ]
  },
  {
    path: '/',
    name: '用户管理',
    component: Home,
    iconCls: 'el-icon-s-promotion',
    children: [
      { path: '/user', component: User, name: '用户管理' },
      { path: '/admin', component: Admin, name: '管理员管理' }
    ]
  },
  {
    path: '/',
    name: '',
    component: Home,
    iconCls: 'el-icon-chat-square',
    leaf: true,
    children: [
      { path: '/notice', component: Notice, name: '发布通知' }
    ]
  },
  {
    path: '/',
    name: '',
    component: Home,
    iconCls: 'el-icon-setting',
    leaf: true,
    children: [
      { path: '/setting', component: Setting, name: '设置' }
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]

export default routes
