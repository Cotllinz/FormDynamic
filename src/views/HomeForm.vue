<template>
  <div class="home">
    <Navbar />
    <Forms />
  </div>
</template>

<script>
// @ is an alias to /src
import Forms from '@/components/_base/formComponents/Forms.vue'
import Navbar from '@/components/NavigationBar.vue'
export default {
  name: 'HomeForm',
  components: {
    Forms,
    Navbar
  }
}
</script>
<style scoped>
.home {
  background: #fff;
  min-height: 100vh;
  height: auto;
}
</style>
