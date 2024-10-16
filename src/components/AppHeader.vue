<script setup lang="ts">
</script>

<template>
  <header class="bg-base-200">
    <div class="container py-4">
      <div class="flex flex-row flex-wrap items-center justify-start gap-4">
        <!-- Brand -->
        <div class="text-nowrap text-4xl font-black">
          ⚗<span class="font-jp">ぐもボタン</span>☁
        </div>

        <!-- Nav -->
        <nav class="ml-auto flex flex-row items-center justify-start gap-2">
          <!-- <ThemeControl /> -->
          <VolumeControl />
        </nav>
      </div>
    </div>
  </header>
</template>
