<template>
  <section>
    <div v-if="!isModifying">
      <el-card class="box-card" style="margin-top: 22px;margin-bottom: 30px;">
        <div slot="header" class="clearfix">
          <span>{{ user.name }}</span>
        </div>
        <div v-for="(val, key, index) in user" :key="index" class="text item">
          <span style="color: blue;font-weight:900;">{{key}}</span>&nbsp;&nbsp;&nbsp;{{val}}
        </div>
      </el-card>
      <el-button @click="updateUser">{{$t('m.message.update')}}</el-button>
      <el-button @click="deleteUser">{{$t('m.message.delete')}}</el-button>
    </div>
    <div v-if="isModifying" style="margin: 20px;">
      <b style="font-size: 20px;font-weight: bold;">修改信息</b>
      <el-form :label-position="left" label-width="50%;" style="margin-bottom: 20px;">
        <el-form-item label="id" disabled="true">
          <b style="font-size: 12px;font-weight: 800;">{{user.id}}</b>
        </el-form-item>
        <el-form-item label="name">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="sex">
          <el-input v-model="user.sex"></el-input>
        </el-form-item>
        <el-form-item label="mail">
          <el-input v-model="user.mail"></el-input>
        </el-form-item>
        <el-form-item label="birth_year">
          <el-input v-model="user.birth_year"></el-input>
        </el-form-item>
        <el-form-item label="birth_month">
          <el-input v-model="user.birth_month"></el-input>
        </el-form-item>
        <el-form-item label="birth_day">
          <el-input v-model="user.birth_day"></el-input>
        </el-form-item>
        <el-form-item label="address_province">
          <el-input v-model="user.address_province"></el-input>
        </el-form-item>
        <el-form-item label="address_city">
          <el-input v-model="user.address_city"></el-input>
        </el-form-item>
        <el-form-item label="address_county">
          <el-input v-model="user.address_county"></el-input>
        </el-form-item>
        <el-form-item label="address_detail">
          <el-input v-model="user.address_detail"></el-input>
        </el-form-item>
        <el-form-item label="familyId">
          <el-input v-model="user.familyId"></el-input>
        </el-form-item>
        <el-form-item label="identityId">
          <el-input v-model="user.identityId"></el-input>
        </el-form-item>
        <el-form-item label="job">
          <el-input v-model="user.job"></el-input>
        </el-form-item>
        <el-form-item label="contactInfo">
          <el-input v-model="user.contactInfo"></el-input>
        </el-form-item>
        <el-form-item label="introduce">
          <el-input v-model="user.introduce"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="sureModify">{{$t('m.message.sureUpdateBtn')}}</el-button>
      <el-button @click="back">{{$t('m.message.goBack')}}</el-button>
    </div>
  </section>
</template>

<script>
import { getSelfInfo, delUser, updateFamilyMemInfo } from '../../request/api'
export default {
  name: 'detail',
  data () {
    return {
      isModifying: false,
      userId: -1,
      user: {}
    }
  },
  created () {
    this.userId = this.$route.query.id
  },
  methods: {
    updateUser () {
      this.isModifying = true
    },
    deleteUser () {
      this.$confirm(this.$t('m.message.sureDelete'), this.$t('m.common.tip'), {})
        .then(() => {
          delUser({
            id: this.userId
          }).then(res => {
            if (res.status === 200) {
              this.$message({
                message: res.describe,
                type: 'success'
              })
              this.$router.push('/user')
            } else {
              this.$message.error(res.describe)
            }
          })
        }).catch(() => {
        })
    },
    sureModify () {
      updateFamilyMemInfo({
        id: this.user.id,
        identityId: this.user.identityId,
        name: this.user.name,
        sex: this.user.sex,
        mail: this.user.mail,
        job: this.user.job,
        contactInfo: this.user.contactInfo,
        introduce: this.user.introduce,
        birth_year: this.user.birth_year,
        birth_month: this.user.birth_month,
        birth_day: this.user.birth_day,
        address_province: this.user.address_province,
        address_city: this.user.address_city,
        address_county: this.user.address_county,
        address_detail: this.user.address_detail
      }).then(res => {
        if (res.status === 200) {
          this.$message({
            message: res.describe,
            type: 'success'
          })
          this.isModifying = false
        } else {
          this.$message.error(res.describe)
        }
      })
    },
    back () {
      this.isModifying = false
    }
  },
  mounted () {
    getSelfInfo({
      id: this.userId
    }).then(res => {
      if (res.status === 200) {
        this.user = res.data
      } else {
        this.$message.error(res.describe)
      }
    }).catch(err => {
      console.log('detail err' + err)
    })
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
