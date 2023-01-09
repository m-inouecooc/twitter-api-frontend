<template>
  <div>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { errorMessages } from '../consts/error-message'

export default defineComponent({
  name: 'ModeSelect',
  data(): {
    count: number
  } {
    return {
      count: 2
    }
  },
  mounted: function () {
    console.log("マウント成功")
  },
});
</script>

<style scoped>

</style>
