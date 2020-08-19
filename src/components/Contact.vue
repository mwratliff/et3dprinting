<template>
  <div>
    <h1>Get in touch!</h1>
    <div>
      <ul>
        <li>Email: {{ email }}</li>
        <li>Website: {{ web }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: 'et3dprinting@gmail.com',
      web: 'etprinting.io'
    }
  }
}
</script>

<style scoped>

</style>
