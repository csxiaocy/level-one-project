<template>
  <section>
    <!-- 工具条 -->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;margin-top: 20px;">
			<el-form :inline="true">
				<el-form-item>
					<el-input placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-dropdown split-button type="primary" @click="getUsers">
						查询
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>按姓名查询</el-dropdown-item>
							<el-dropdown-item>按ID查询</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-form-item>
			</el-form>
		</el-col>
    <!-- 列表 -->
		<el-table
		:data="tableData"
    style="width: 100%">
    	<el-table-column type="expand">
      	<template slot-scope="props">
        	<el-form label-position="left" inline class="demo-table-expand">
          	<el-form-item label="商品名称">
            	<span>{{ props.row.name }}</span>
          	</el-form-item>
          	<el-form-item label="所属店铺">
            	<span>{{ props.row.shop }}</span>
          	</el-form-item>
          	<el-form-item label="商品 ID">
            	<span>{{ props.row.id }}</span>
          	</el-form-item>
          	<el-form-item label="店铺 ID">
            	<span>{{ props.row.shopId }}</span>
          	</el-form-item>
          	<el-form-item label="商品分类">
            	<span>{{ props.row.category }}</span>
          	</el-form-item>
          	<el-form-item label="店铺地址">
            	<span>{{ props.row.address }}</span>
          	</el-form-item>
          	<el-form-item label="商品描述">
            	<span>{{ props.row.desc }}</span>
          	</el-form-item>
        	</el-form>
      	</template>
    	</el-table-column>
    	<el-table-column
      	label="商品 ID"
      	prop="id">
    	</el-table-column>
    	<el-table-column
    	  label="商品名称"
      	prop="name">
    	</el-table-column>
    	<el-table-column
      	label="描述"
      	prop="desc">
    	</el-table-column>
  	</el-table>
  </section>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {}
  },
	methods: {
		handleClick(choose) {
      alert('button click ' + choose);
    }
	},
}
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
