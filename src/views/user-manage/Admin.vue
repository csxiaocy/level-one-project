<template>
  <section>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top: 24px;">
      <el-form-item label="家族ID">
        <el-input v-model="familyId" placeholder="请输入要查询的家族ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="checkFamily">查询</el-button>
      </el-form-item>
    </el-form>
    <el-card class="box-card" style="margin-top: 20px;" v-show="checked">
      <div slot="header" class="clearfix">
        <span>家族名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'内容 ' + o }}
      </div>
    </el-card>
  </section>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      familyId: '',
      checked: false,
    }
  },
  methods: {
    checkFamily() {
      this.$message.error('check family');
      this.checked = true;
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
  }
</style>
