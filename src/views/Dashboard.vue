<template>
  <section>
    <el-row :gutter="40" class="panel-group" v-if="this.adminType==='super'">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-people">
            <!-- <svg-icon icon-class="peoples" class-name="card-panel-icon" /> -->
            <i class="iconfont" style="font-size: 40px;">&#xe600;</i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              <!-- New Visits -->
              {{ $t('m.common.dashboard_userNum') }}
            </div>
            <count-to :start-val="0" :end-val="userNum" :duration="2800" class="card-panel-num" />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-message">
            <!-- <svg-icon icon-class="message" class-name="card-panel-icon" /> -->
            <i class="iconfont" style="font-size: 40px;">&#xe620;</i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              <!-- Messages -->
              {{ $t('m.common.dashboard_adminNum') }}
            </div>
            <count-to :start-val="0" :end-val="adminNum" :duration="3000" class="card-panel-num" />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-money">
            <!-- <svg-icon icon-class="money" class-name="card-panel-icon" /> -->
            <i class="iconfont" style="font-size: 40px;">&#xe623;</i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              <!-- Purchases -->
              {{ $t('m.common.dashboard_familyNum') }}
            </div>
            <count-to :start-val="0" :end-val="auditNum" :duration="3200" class="card-panel-num" />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-shopping">
            <!-- <svg-icon icon-class="shopping" class-name="card-panel-icon" /> -->
            <i class="iconfont" style="font-size: 40px;">&#xe609;</i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              <!-- Shoppings -->
              {{ $t('m.common.dashboard_noticeNum') }}
            </div>
            <count-to :start-val="0" :end-val="msgNum" :duration="3600" class="card-panel-num" />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="40" class="panel-group" v-else>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-people">
            <!-- <svg-icon icon-class="peoples" class-name="card-panel-icon" /> -->
            <i class="iconfont" style="font-size: 40px;">&#xe600;</i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              <!-- New Visits -->
              {{ $t('m.common.dashboard_userNum') }}
            </div>
            <count-to :start-val="0" :end-val="familyMemNum" :duration="2800" class="card-panel-num" />
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  name: 'dashboard',
  data () {
    return {
      // super
      userNum: 102400,
      adminNum: 81212,
      auditNum: 9280,
      msgNum: 13600,
      // admin
      familyMemNum: 128,
    }
  },
  components: {
    CountTo
  },
  computed: {
    adminType: function () {
      return this.$store.state.adminType
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
