<template>
  <section>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top: 24px;display: inline-block;">
      <el-form-item :label="$t('m.message.family')">
        <el-input v-model="familyId" :placeholder="$t('m.message.inputFamilyID')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="checkFamily">{{ $t('m.message.search') }}</el-button>
      </el-form-item>
    </el-form>
    <el-button style="margin-left: 40px;margin-top: 24px;" @click="addFamily">{{$t('m.message.addFamilyBtn')}}</el-button>
    <div v-if="checked">
      <el-card class="box-card" style="margin-top: 20px; margin-bottom: 20px;">
        <div slot="header" class="clearfix">
          <span>{{familyInfo.familyName}}</span>
        </div>
        <div class="text item">{{$t('m.common.family_familyAncestor')}}&nbsp;&nbsp;{{familyInfo.topMemberId}}</div>
        <div class="text item">{{$t('m.common.family_familyMemberNum')}}&nbsp;&nbsp;{{familyInfo.memberNumber}}</div>
        <div class="test item">{{$t('m.common.family_familyAdmin')}}&nbsp;&nbsp;{{familyInfo.administratorId}}</div>
      </el-card>
      <el-button v-if="!isChanging" @click="changeFamAdmin">{{$t('m.message.changeFamilyAdmin')}}</el-button>
      <el-input v-if="isChanging" :placeholder="$t('m.message.inputChangeAdminID')" v-model="changeAdminId"></el-input>
      <el-button v-if="isChanging" @click="superChangeAdmin" style="margin-top: 20px;">{{$t('m.message.sureUpdateBtn')}}</el-button>
    </div>
  </section>
</template>

<script>
import { searchFamilyByID, changeFamilyAdmin } from '../../request/api'
export default {
  name: 'admin',
  data () {
    return {
      familyId: '',
      checked: false,
      isChanging: false,
      familyInfo: {
        id: '',
        familyName: '',
        topMemberId: '',
        memberNumber: '',
        administratorId: ''
      },
      changeAdminId: ''
    }
  },
  methods: {
    checkFamily () {
      searchFamilyByID({
        id: this.familyId
      }).then(res => {
        if (res.status === 200) {
          this.familyInfo = res.data
          console.log(res.data)
        } else {
          this.$message.error(res.describe)
        }
      }).catch({})
      this.checked = true;
    },
    changeFamAdmin () {
      this.isChanging = true;
    },
    superChangeAdmin () {
      changeFamilyAdmin({
        familyId: this.familyId,
        newManagerId: this.changeAdminId
      }).then(res => {
        if (res.status === 200) {
          this.$message({
            message: res.describe,
            type: 'success'
          })
          this.familyInfo.administratorId = this.changeAdminId
          this.isChanging = false
          this.changeAdminId = ''
        } else {
          this.$message.error(res.describe)
        }
      }).catch({})
    },
    addFamily () {
      this.checked = false
      this.isChanging = false
    },
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
