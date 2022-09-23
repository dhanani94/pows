<template>
  <div class="app">
    <SideBar></SideBar>
    <router-view />
  </div>
</template>

<script setup>
import SideBar from "./components/SideBar.vue";
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --negative: #de4a56;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>
