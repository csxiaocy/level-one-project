<template>
  <div id="background">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">Admin Login</h3>
      <el-form-item prod="account">
        <el-input type="text" v-model="ruleForm.account" autocomplete="off" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prod="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loding="logining">Login</el-button>
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
        password: '123456'
      },
      rules: {
        account: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit2 (ev) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true
          // let loginParams = { username: this.ruleForm.account, password: this.ruleForm.password }
          // requestLogin(loginParams).then(data => {
          //   this.logining = false;
          //   let { msg, code, user } = data;
          //   if (code !== 200) {
          //     this.$message({
          //       message: msg,
          //       type: 'error'
          //     });
          //   } else {
          //     sessionStorage.setItem('user', JSON.stringify(user));
          //     this.$router.push({ path: '/table' });
          //   }
          // });
          adminLogin({
            account: this.ruleForm.account,
            password: this.ruleForm.password
          }).then(res => {
            console.log(res)
            if (!res.code) {
              this.$message({
                message: `欢迎回来${this.ruleForm.account}!`,
                type: 'success'
              })
              sessionStorage.setItem('user', JSON.stringify(this.ruleForm))
              this.logining = false
              this.$router.push({ path: '/dashboard' })
            } else {
              this.$message.error(res.data.msg)
              this.logining = false
            }
          })
          // if (this.ruleForm.account === 'admin' && this.ruleForm.password === '123456') {
          //   this.$message({
          //     message: `欢迎回来${this.ruleForm.account}!`,
          //     type: 'success'
          //   })
          //   sessionStorage.setItem('user', JSON.stringify(this.ruleForm))
          //   this.logining = false
          //   this.$router.push({ path: '/dashboard' })
          // } else {
          //   this.$message.error('账号或密码错误')
          //   this.logining = false
          // }
        } else {
          this.logining = false
          console.log('error submit!!')
          return false
        }
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
