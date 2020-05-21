<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>
      </div>
      <div class="md-toolbar-section-start">
        <h1 class="md-title">Pessoas que vão ganhar dinheiro</h1>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  }
};
</script>

<style lang="scss">
.md-title {
  font-weight: 900;
}
</style>
