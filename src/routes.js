import Home from './views/Home.vue'
import Login from './views/Login.vue'
import PageNotFound from './views/404.vue'
import Dashboard from './views/Dashboard.vue'
import User from './views/user-manage/User.vue'
import Admin from './views/user-manage/Admin.vue'
import Notice from './views/Notice.vue'
import Setting from './views/Setting.vue'
import Detail from './views/user-manage/Detail'
import FamilyUser from './views/user-manage/FamilyUser'

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
    iconCls: 'el-icon-data-analysis',
    leaf: true,
    permission: ['super', 'admin'],
    children: [
      { path: '/dashboard', component: Dashboard, name: 'm.common.dashboard' }
    ]
  },
  {
    path: '/',
    name: 'm.common.manage',
    component: Home,
    iconCls: 'el-icon-s-promotion',
    permission: ['super'],
    children: [
      { path: '/user', component: User, name: 'm.common.manage' },
      { path: '/admin', component: Admin, name: 'm.common.adminManage' }
    ]
  },
  {
    path: '/',
    name: 'm.common.manage',
    component: Home,
    iconCls: 'el-icon-s-promotion',
    leaf: true,
    permission: ['admin'],
    children: [
      { path: '/family_user', component: FamilyUser, name: 'm.common.manage' }
    ]
  },
  {
    path: '/',
    name: '',
    component: Home,
    iconCls: 'el-icon-chat-square',
    leaf: true,
    permission: ['super', 'admin'],
    children: [
      { path: '/notice', component: Notice, name: 'm.common.notice' }
    ]
  },
  {
    path: '/',
    name: '',
    component: Home,
    iconCls: 'el-icon-setting',
    leaf: true,
    permission: ['super', 'admin'],
    children: [
      { path: '/setting', component: Setting, name: 'm.common.setting' }
    ]
  },
  {
    path: '/',
    name: '',
    component: Home,
    hidden: true,
    leaf: true,
    permission: ['super', 'admin'],
    children: [
      { path: '/detail', component: Detail, name: 'm.common.detail' }
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]

export default routes
