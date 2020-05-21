<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <sidebar-link to="/dashboard">
        <p>Link</p>
      </sidebar-link>
      <sidebar-link to="/dashboard">
        <p>Link</p>
      </sidebar-link>
      <p class="menu-sup">Submenu</p>
      <sidebar-link to="/dashboard">
        <p>Link</p>
      </sidebar-link>
      <sidebar-link to="/dashboard">
        <p>Link</p>
      </sidebar-link>
      <p class="menu-sup">Submenu</p>
      <sidebar-link to="/dashboard">
        <p>Link</p>
      </sidebar-link>
      <sidebar-link to="/dashboard">
        <p>Link</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <test-content> </test-content>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import TestContent from "./Content.vue";

export default {
  components: {
    TopNavbar,
    TestContent
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg")
    };
  }
};
</script>

<style lang="scss">
.menu-sup {
  font-size: 20px!important;
  padding-left: 20px;
  margin-top: 10px;
  color: white;
  background-color: #66d86a87;
}
</style>
