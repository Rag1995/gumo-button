<template>
  <span class="loader" />
</template>

<style lang="scss" scoped>
.loader {
  width: 1.5em;
  height: 1.5em;
  border: 0.25em solid currentColor;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
