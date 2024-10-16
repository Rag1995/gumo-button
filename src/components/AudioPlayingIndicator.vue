<template>
  <div class="relative flex size-[1.5em] items-center justify-center">
    <span class="loader" />
  </div>
</template>

<style lang="scss" scoped>
.loader {
  width: 0.25em;
  height: 1.25em;
  border-radius: 0.125em;
  display: block;
  margin: 0 auto;
  position: relative;
  background: currentColor;
  // color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.3s -0.15s linear infinite alternate;
}

.loader::after, .loader::before {
  content: '';
  width: 0.25em;
  height: 1.25em;
  border-radius: 0.125em;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.5em;
  box-sizing: border-box;
  animation: animloader 0.3s 0s linear infinite alternate;
}
.loader::before {
  left: -0.5em;
  animation-delay: -0.45s;
}

@keyframes animloader {
  0%   { height: 1.5em}
  100% { height: 0.125em}
}
</style>