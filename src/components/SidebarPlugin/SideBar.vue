<template>
  <div class="sidebar">
    <div class="logo">
      <a href="#" class="logo-link">
        <img :src="imgLogo"/>
      </a>
    </div>
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <md-list class="nav">
        <slot>
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :to="link.path"
            :link="link"
          >
          </sidebar-link>
        </slot>
      </md-list>
    </div>
  </div>
</template>
<script>
import SidebarLink from "./SidebarLink.vue";

export default {
  components: {
    SidebarLink
  },
  props: {
    imgLogo: {
      type: String,
      default: require("@/assets/img/vue-logo.png")
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  computed: {
    sidebarStyle() {
      return {};
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  padding: 10px;
  background-color: #4caf50;

  .logo-link {
    text-align: center;
    display: block;

    img {
      width: 220px;
      background-color: #66d86a;
      border-radius: 12px;
      margin: auto;
      padding: 5px;
    }
  }
}
.sidebar-wrapper {
  background-color: #4caf50;
}
</style>
<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
</style>
