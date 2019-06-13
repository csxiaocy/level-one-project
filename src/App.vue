<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    let user = sessionStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.$store.commit('judgeAdminType', user.adminType)
    }
  }
}
</script>

<style lang="scss">
</style>
