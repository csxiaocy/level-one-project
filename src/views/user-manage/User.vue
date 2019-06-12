<template>
  <section>
    <!-- 工具条 -->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;margin-top: 20px;">
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
    <!-- 列表 -->
		<el-table
    :data="tableData"
    border
    style="width: 100%;">
    	<el-table-column
      	fixed
      	prop="date"
      	label="id"
      	width="150">
    	</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="120">
			</el-table-column>
			<el-table-column
				prop="sex"
				label="性别"
				width="120">
			</el-table-column>
			<el-table-column
				prop="familyId"
				label="家族ID"
				width="120">
			</el-table-column>
			<el-table-column
				prop="birthday"
				label="生日"
				width="120">
			</el-table-column>
			<el-table-column
				prop="email"
				label="email"
				width="300">
			</el-table-column>
			<el-table-column
				fixed="right"
				label="操作"
				width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
				</template>
			</el-table-column>
		</el-table>
  </section>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
			checkUserWay: 'user',
			userName: '',
			userId: '',
			tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        sex: '上海',
        familyId: '普陀区',
        email: '上海市普陀区金沙江路 1518 弄',
        birthday: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        sex: '上海',
        familyId: '普陀区',
        email: '上海市普陀区金沙江路 1517 弄',
        birthday: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        sex: '上海',
        familyId: '普陀区',
        email: '上海市普陀区金沙江路 1519 弄',
        birthday: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        sex: '上海',
        familyId: '普陀区',
        email: '上海市普陀区金沙江路 1516 弄',
        birthday: 200333
      }]
		}
  },
	methods: {
		changeCheckWay(command) {
			this.checkUserWay = command;
			this.userName = '';
			this.userId = '';
		},
		getUsers() {
			this.$message.error('check user');
		},
		handleClick(row) {
      console.log(row);
    }
	},
	computed: {

	}
}
</script>

<style scoped>

</style>
