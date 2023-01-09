<template>
  <div>
    <header>
      <h1>Twitter管理アプリ</h1>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'HeaderView',
});
</script>

<style scoped>
header {
  width: 100%;
  background-color: aliceblue;
}
</style>
