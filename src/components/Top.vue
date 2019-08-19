<template>
<b-container id="Top">
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">SUBJECT SAMPLE</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">top menu1</b-nav-item>
        <b-nav-item href="#" disabled>top menu2</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown text="drop down" right>
        <b-dropdown-item href="#">sub menu1</b-dropdown-item>
        <b-dropdown-item href="#">sub menu2</b-dropdown-item>
        <b-dropdown-item href="#">sub menu3</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
  </b-navbar>
</b-container>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style>
</style>
