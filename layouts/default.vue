<template>
  <div class="a-cbm">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader.vue";
import TheSidenav from "@/components/navigation/TheSidenav.vue";

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
