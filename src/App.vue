<script setup lang="ts">
</script>

<template>
  <div class="grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto]">
    <AppHeader />

    <main class="min-h-screen">
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </main>

    <AppFooter />
  </div>
</template>
