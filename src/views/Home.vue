/* eslint-disable */
<template>
  <el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="5" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				<!-- logo -->
				<img v-show="!collapsed" src="../assets/logo.png" class="logo-img">
			</el-col>
			<el-col :span="14">
				<div class="tools" @click.prevent="collapse">
					<i class="el-icon-s-operation"></i>
					<!-- <i :class="collapsed?'el-icon-s-unfold':'el-icon-s-fold'"></i> -->
				</div>
			</el-col>
			<el-col :span="1">
				<el-dropdown trigger="hover">
					<!-- 切换中英文 -->
					<i class="iconfont" style="font-size: 24px;color: #fff;">&#xe602;</i>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="changeLangZh">中文</el-dropdown-item>
						<el-dropdown-item @click.native="changeLangEn">English</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img src="../assets/default-avatar.png" />{{user.account}}</span>
					<el-dropdown-menu slot="dropdown">
						<!-- 我的消息 -->
						<el-dropdown-item>{{$t("m.common.myMessage")}}</el-dropdown-item>
						<el-dropdown-item>{{$t("m.common.setting")}}</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">{{ $t('m.common.logout') }}</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!--导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden && (item.permission.indexOf(user.adminType) > -1)">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{ $t(item.name) }}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{ $t(child.name) }}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{ $t(item.children[0].name) }}</el-menu-item>
					</template>
				</el-menu>
				<!--导航菜单-折叠后-->
				<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
					<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
						<template v-if="!item.leaf">
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"> 
								<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
							</ul>
						</template>
						<template v-else>
							<li class="el-submenu">
								<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
							</li>
						</template>
					</li>
				</ul>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{ $t($route.name) }}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ $t(item.name) }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      collapsed: false,
			user: {}
    }
  },
  mounted() {
    let user = sessionStorage.getItem('user')
    if (user) {
			this.user = JSON.parse(user)
		}
  },
  methods: {
		handleopen () {},
		handleclose () {},
		changeLangZh () {
			this.$i18n.locale = 'zh'
		},
		changeLangEn () {
			this.$i18n.locale = 'en'
		},
    handleselect: function (a, b) {
    },
    collapse: function () {
			// TODO 有bug
      // this.collapsed = !this.collapsed
    },
    logout: function () {
      const that = this
      this.$confirm(this.$t('m.common.sureLogout'), this.$t('m.common.tip'), {
      }).then(() => {
        sessionStorage.removeItem('user')
        that.$router.push('/login')
      }).catch(() => {
      })
    },
    showMenu (i, status) {
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display == status ? 'block' : 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background: rgb(32, 160, 255);
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.logo-img {
					width: 196.5px;
					height: 76.5px;
					margin-top: -7px;
					margin-left: 0;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu{
					height: 100%;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px;
			}
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
