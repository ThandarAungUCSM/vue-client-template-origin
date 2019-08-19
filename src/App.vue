<template>
  <b-container id='app'>
    <b-row id = 'top'>
      <b-col><Top/></b-col>
    </b-row>
    <b-row>
      <b-col cols='2' id='left'><Left/></b-col>
      <b-col id='center'><router-view></router-view></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Top from '@/components/Top'
import Left from '@/components/Left'
export default {
  name: 'App',
  components: {
    Top,
    Left
  }
}
</script>

<style lang='scss' src='@/assets/scss/app.scss'></style>
