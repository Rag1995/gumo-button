<script setup lang="ts">

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'night',
  valueLight: 'light',
})

</script>

<template>
  <div>
    <label class="btn btn-circle btn-ghost swap btn-sm shrink-0">
      <input v-model="isDark" type="checkbox">
      <i class="swap-on i-solar-sun-bold" />
      <i class="swap-off i-solar-moon-stars-bold" />
    </label>
  </div>
</template>
