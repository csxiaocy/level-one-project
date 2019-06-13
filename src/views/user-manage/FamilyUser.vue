<template>
  <section>
    <!-- 工具条 -->
		<el-col :span="16" class="toolbar" style="padding-bottom: 0px;margin-top: 20px;">
			<el-form :inline="true">
				<el-form-item>
					<el-input v-model="userName" :placeholder="$t('m.message.inputName')" v-if="checkUserWay==='user'"></el-input>
					<el-input v-model="userId" :placeholder="$t('m.message.inputID')" v-if="checkUserWay==='id'"></el-input>
				</el-form-item>
				<el-form-item>
					<el-dropdown split-button type="primary" @click="getUsers" @command="changeCheckWay">
						{{ $t('m.message.search') }}
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item command="user">{{ $t('m.message.searchByName') }}</el-dropdown-item>
							<el-dropdown-item command="id">{{ $t('m.message.searchById') }}</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-form-item>
			</el-form>
		</el-col>
		<el-button @click="addUser" style="margin: 20px;">{{$t('m.message.addUserBtn')}}</el-button>
		<el-form v-if="isAddingUser" style="padding: 10px;margin-bottom: 10px;">
			<el-form-item label="name">
				<el-input v-model="newUser.name"></el-input>
			</el-form-item>
			<el-form-item label="identityId">
				<el-input v-model="newUser.identityId"></el-input>
			</el-form-item>
			<el-form-item label="fatherId">
				<el-input v-model="newUser.fatherId"></el-input>
			</el-form-item>
			<el-form-item label="Email">
				<el-input v-model="newUser.Email"></el-input>
			</el-form-item>
			<el-form-item label="password">
				<el-input v-model="newUser.password" type="password"></el-input>
			</el-form-item>
			<el-form-item label="sex">
				<el-input v-model="newUser.sex"></el-input>
			</el-form-item>
			<el-button @click="superAddUser">{{$t('m.message.sureAddBtn')}}</el-button>
		</el-form>
    <!-- 列表 -->
		<el-table
    v-if="isCheck"
    :data="tableData"
    border
    style="width: 100%;">
    	<el-table-column
      	fixed
      	prop="id"
      	label="ID"
      	width="150">
    	</el-table-column>
			<el-table-column
				prop="name"
				label="Name"
				width="120">
			</el-table-column>
			<el-table-column
				prop="sex"
				label="Sex"
				width="120">
			</el-table-column>
			<el-table-column
				prop="familyId"
				label="Family ID"
				width="120">
			</el-table-column>
			<el-table-column
				prop="birthday"
				label="Birthday"
				width="120">
			</el-table-column>
			<el-table-column
				prop="email"
				label="Email"
				width="300">
			</el-table-column>
			<el-table-column
				fixed="right"
				label="Operation"
				width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">{{$t('m.message.checkDetail')}}</el-button>
				</template>
			</el-table-column>
		</el-table>
  </section>
</template>

<script>
import { getUserInfoList, searchUserByName, getSelfInfo, addFamilyMember } from '../../request/api'

export default {
  name: 'FamilyUser',
  data () {
    return {
      isCheck: false,
			checkUserWay: 'user',
			userName: '',
			userId: '',
			tableData: [],
			isAddingUser: false,
			newUser: {
				name: '',
				identityId: '',
				fatherId: '',
				Email: '',
				password: '',
				sex: ''
			}
		}
  },
	methods: {
		changeCheckWay(command) {
			this.checkUserWay = command
			this.userName = ''
			this.userId = ''
		},
		getUsers() {
      this.isAddingUser = false
      this.isCheck = true
			// 根据姓名搜索用户
			if (this.checkUserWay === 'user') {
				if (!this.userName) {
          this.isCheck = false
          return
        }
				searchUserByName({
					name: this.userName
				}).then(res => {
					if (res.status === 200) {
						let data = res.data
						let user
						this.tableData = []
						data.forEach(e => {
							user = {}
							user.id = e.id
							user.name = e.name
							user.sex = e.sex
							user.familyId = e.familyId
							user.email = e.mail
							user.birthday = `${e.birth_year}-${e.birth_month}-${e.birth_day}`
							this.tableData.push(user)
						})
					} else {
						this.$message.error(res.describe)
					}
				}).catch(err => {
					console.log('err'+err)
				})
			}
			// 根据ID搜索用户
			if (this.checkUserWay === 'id') {
				if (!this.userId) {
          this.isCheck = false
          return
        }
				getSelfInfo({
					id: this.userId
				}).then(res => {
					if (res.status === 200) {
						let data = res.data
						let user
						this.tableData = []
						user = {}
						user.id = data.id
						user.name = data.name
						user.sex = data.sex
						user.familyId = data.familyId
						user.email = data.mail
						user.birthday = `${data.birth_year}-${data.birth_month}-${data.birth_day}`
						this.tableData.push(user)
					} else {
						this.$message.error(res.describe)
					}
				}).catch(err => {
					console.log('err'+err)
				})
			}
		},
		handleClick(row) {
			this.$router.push({
				path: '/detail',
				query: {
					id: row.id
				}
			})
		},
		addUser () {
			this.isAddingUser = true
		},
		superAddUser () {
			let user = this.newUser
			if (!user.name || !user.identityId || !user.fatherId || !user.Email || !user.password || !user.sex) {
				this.$message.error('所有参数必填')
				return
			}
			addFamilyMember({
				name: this.newUser.name,
				identityId: this.newUser.identityId,
				fatherId: this.newUser.fatherId,
				Email: this.newUser.Email,
				password: this.newUser.password,
				sex: this.newUser.sex,
			}).then(res => {
				if (res.status === 200) {
					let data = res.data
					this.$message({
						$message: '添加成功',
						type: 'success'
					})
					this.$router.push({
						path: '/detail',
						query: {
							id: data.id
						}
					})
				} else {
					this.$message.error(res.describe)
				}
			}).catch({})
		}
	}
}
</script>

<style scoped>

</style>
