<template>
  <div id='page_not_found'>
    <div>
      <h1>{{ message }}</h1>
      <h5>{{ number }}</h5>
      <h3>{{ title }}</h3>
      <h2>Back to
        <router-link to="/">Home</router-link>
      </h2>
      <h4>{{ note }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  data () {
    return {
      message: 'Upsss!',
      number: '404',
      title: 'Page Not Found',
      note: 'Sorry but the page you are looking for doesn\'t exist.'
    }
  }
}
</script>

<style lang='scss' scoped>
#page_not_found {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background: #e14eca;
  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);
}
#page_not_found > div {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
h1 {
  position: absolute;
  top: 110px;
  left: 60px;
  margin: 0 auto;
  font-size: 10em;
  color: white;
}
h5 {
  position: relative;
  z-index: 1;
  font-size: 15em;
  margin-left: -4px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.2) !important;
  margin: 0 auto;
}
h3 {
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 3em;
}
h4 {
  font-size: 1em;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
}
h2 {
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}
</style>
