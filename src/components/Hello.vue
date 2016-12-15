<template>
  <div>
    <h1 ref="eiei">Hello</h1>
    {{ name }}
  </div>  
</template>

<script>
  export default {
    props: {
      name: {
        required: true
      }
    },
    created () {
      // console.log(this.$refs.eiei)
      this.$nextTick(() => {
        console.log(this.$refs.eiei.textContent)
      })
      // console.log(this.$refs.eiei)
    },
    mounted () {
      console.log($(this.$el))
      // console.log(this.$el)
      // console.log(this.$refs.eiei)
    }
  }
</script>

<style>
  
</style>