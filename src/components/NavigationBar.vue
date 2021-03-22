<template>
  <div class="navigation">
    <b-navbar class="navigationBar pb-4 d-flex align-items-center">
      <b-container>
        <b-navbar-brand @click="onHome" class="navbar_title"
          >Form<span class="dynamic_nav">Dynamic.</span>
        </b-navbar-brand>
        <b-navbar-nav class="mx-auto">
          <b-nav-item class="isActived" @click="onHome">Home</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {}
  },
  methods: {
    onHome() {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style scoped>
.navbar_title {
  font-weight: 700;
  cursor: pointer;
  color: #000 !important;
  font-family: 'Poppins', sans-serif;
}
.dynamic_nav {
  color: #b693fe;
}
.isActived .nav-link,
.isActived .nav-link:hover,
.isActived .nav-link:focus {
  color: #b693fe !important;
  font-size: 17px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}
</style>
