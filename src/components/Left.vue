<template>
  <b-container id='left'>
   <b-nav vertical class='w-25'>
   <b-nav-item active><router-link  to='/sample1'>{{ $t('left.SAMPLE_1') }}</router-link></b-nav-item>
   <b-nav-item active><router-link  to='/sample2'>{{ $t('left.SAMPLE_2 ') }}</router-link></b-nav-item>
   </b-nav>
  </b-container>
</template>

<script>
export default {
  name: 'left'
}
</script>

<style>
</style>
