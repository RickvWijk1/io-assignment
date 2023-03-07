<template>
  <div class="layout-body">
    <VitePwaManifest />
    <NuxtPage />
  </div>
</template>

<script>

</script>

<style>
*{
  padding: 0;
}
  html,
  body,
  #__nuxt,
  #__layout {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .layout-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>