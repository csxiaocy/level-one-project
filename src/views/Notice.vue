<template>
  <section style="margin-top: 20px;">
    <div class="notice-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="通知内容">
          <el-input type="textarea" v-model="form.message"></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.time" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布通知</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="block" style="margin-top: 40px;">
      <el-timeline>
        <el-timeline-item v-for="(notice, index) in noticeList" :key="index" :timestamp="notice.date" placement="top">
          <el-card>
            <h4>{{ notice.message }}</h4>
            <p>{{ notice.sender + " 发布于 " + notice.date + " " + notice.time }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </section>
</template>

<script>
export default {
  name: 'notice',
  data () {
    return {
      form: {
        message: '',
        date: '',
        time: '',
        sender: 'admin',
      },
      noticeList: [
        {
          date: '2019/6/8',
          message: '六一儿童节快乐!',
          sender: 'admin',
          time: '03:30',
        },
        {
          date: '2019/6/7',
          message: '六一儿童节快乐!',
          sender: 'admin',
          time: '03:30',
        },
        {
          date: '2019/6/6',
          message: '六一儿童节快乐!',
          sender: 'admin',
          time: '03:30',
        },
        {
          date: '2019/6/5',
          message: '六一儿童节快乐!',
          sender: 'admin',
          time: '03:30',
        },
      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.form.message === '') {
        this.$message.error('通知内容不能为空');
        return;
      }
      if (this.form.date === '') {
        this.$message.error('日期不能为空');
        return;
      }
      if (this.form.time === '') {
        this.$message.error('时间不能为空');
        return;
      }
      this.noticeList.splice(0, 0, form);
    }
  }
}
</script>

<style scoped>
.notice-form {
  width: 50%;
}
</style>

