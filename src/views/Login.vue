<template>
  <div id="background">
    <el-form :model="ruleForm" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">Admin Login</h3>
      <el-form-item prod="account" :rules="[
        { required: true, message: '账号不能为空', trigger: 'blur' }
      ]">
        <el-input type="text" v-model="ruleForm.account" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prod="password" :rules="[
        { required: true, message: '密码不能为空', trigger: 'blur' }
      ]">
        <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loding="logining">Login</el-button> -->
        <el-button type="primary" style="width:100%;" @click="handleLogin" :loding="logining">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { adminLogin } from '../request/api'
export default {
  name: 'login',
  data () {
    return {
      logining: false,
      ruleForm: {
        account: 'admin',
        password: '123456',
        loginId: -1,
        adminType: ''
      }
    }
  },
  methods: {
    handleLogin () {
      this.logining = true
      if (!this.ruleForm.account) {
        this.$message.error('账号不能为空')
        return false
      }
      if (!this.ruleForm.password) {
        this.$message.error('密码不能为空')
        return false
      }
      if (this.ruleForm.account === 'admin' && this.ruleForm.password === '123456') {
        this.$message({
          message: `欢迎回来${this.ruleForm.account}!`,
          type: 'success'
        })
        sessionStorage.setItem('user', JSON.stringify(this.ruleForm))
        this.$store.commit('judgeAdminType', 'super')
        // console.log(this.$store.state.adminType)
        this.logining = false
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$message.error('账号或密码错误')
        this.logining = false
      }
      adminLogin({
        Email: this.ruleForm.account,
        password: this.ruleForm.password
      }).then(res => {
        if (res.status === 200) {
          let data = res.data
          if (data.type !== 'familyMember') {
            let adminType = data.type === 'admin' ? 'super' : 'admin'
            this.$store.commit('judgeAdminType', adminType)
            this.ruleForm.adminType = adminType
            this.$message({
              message: `欢迎回来${this.ruleForm.account}!`,
              type: 'success'
            })
            this.ruleForm.loginId = data.id
            sessionStorage.setItem('user', JSON.stringify(this.ruleForm))
            this.logining = false
            this.$router.push({ path: '/dashboard' })
            return true
          }
          this.$message.error('非管理员账号，无法登录!')
        } else {
          this.$message.error(res.describe)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  #background {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("../assets/login-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
