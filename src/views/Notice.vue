<template>
  <section style="margin-top: 20px;">
    <div class="notice-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="通知标题">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="通知内容">
          <el-input type="textarea" v-model="content"></el-input>
        </el-form-item>
        <el-form-item label="发布日期">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="date" style="width: 100%;">
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布通知</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-divider style="margin-top: 20px;"><i class="el-icon-time"></i></el-divider>
    <div class="block" style="margin-top: 40px;">
      <!-- 时间轴 -->
      <el-timeline>
        <el-timeline-item v-for="(notice, index) in noticeList" :key="index" :timestamp="notice.date" placement="top">
          <el-card>
            <!-- 标题 -->
            <h3>{{ notice.title }}</h3>
            <!-- 内容 -->
            <p>{{ notice .content }}</p>
            <!-- 发布人及时间 -->
            <p><b>{{ notice.sender }}</b>{{" 发布于 " + notice.date }}</p>
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
      title: '',
      content: '',
      sender: 'admin',
      date: '',
      noticeList: [
        {
          date: '2019-06-08',
          title: '六一儿童节快乐!',
          content: '六一儿童节快乐!',
          sender: 'admin',
        },
        {
          date: '2019-06-07',
          title: '六一儿童节快乐!',
          content: '六一儿童节快乐!',
          sender: 'admin',
        },
        {
          date: '2019-06-06',
          title: '六一儿童节快乐!',
          content: '六一儿童节快乐!',
          sender: 'admin',
        },
        {
          date: '2019-06-05',
          title: '六一儿童节快乐!',
          content: '六一儿童节快乐!',
          sender: 'admin',
        },
      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.title === '') {
        this.$message.error('通知标题不能为空');
        return;
      }
      if (this.content === '') {
        this.$message.error('通知内容不能为空');
        return;
      }
      if (this.date === '') {
        this.$message.error('通知日期不能为空');
        return;
      }
      let notice = {};
      notice.title = this.title;
      notice.content = this.content;
      notice.sender = this.sender;
      notice.date = this.moment(this.date).format("YYYY-MM-DD");
      this.noticeList.splice(0, 0, notice);
    }
  }
}
</script>

<style scoped>
.notice-form {
  width: 50%;
}
</style>

