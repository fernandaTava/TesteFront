<template>
  <div class="modal">
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">
          Quantos reais adicionar para {{ user.employee_name }}?
        </h6>
        <a @click="$emit('close')" class="close"><i class="icon">clear</i></a>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="add-value" @click="$emit('updateSalary', 25, user)">
            R$ 25
          </div>
          <div class="add-value" @click="$emit('updateSalary', 50, user)">
            R$ 50
          </div>
        </div>
        <div class="row">
          <div class="add-value" @click="$emit('updateSalary', 75, user)">
            R$ 75
          </div>
          <div class="add-value" @click="$emit('updateSalary', 125, user)">
            R$ 125
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      addValue: 0
    };
  }
};
</script>
<style lang="scss" scoped>
$green: #059d42;

.modal {
  width: 100%;
  height: 100vh;
  background-color: #afb0b29c;
  position: absolute;
  top: 0;
  margin: auto;
  z-index: 999;

  .card {
    background-color: white;
    width: 55%;
    margin: 15vh auto;

    .card-header {
      background-color: $green;
      color: white;
      padding: 10px 20px;
      display: inline-flex;
      width: 100%;

      .card-title {
        font-size: 17px;
        font-weight: 450;
        text-transform: inherit;
        margin: 0;
      }

      .close {
        margin: 0px 0px 0px auto;
        display: inline;
        right: 0;

        .icon {
          font-family: Material Icons;
          font-style: normal;
          font-size: 30px;
          color: white;
        }
      }
    }

    .card-body {
      padding: 35px 60px;

      .row {
        display: flex;
        width: 100%;
        height: 100%;

        .add-value {
          background-color: #d4e4db;
          color: $green;
          font-weight: 900;
          display: block;
          padding: 25px;
          margin: 20px;
          width: 50%;
          font-size: 30px;
          text-align: center;
        }
      }
    }
  }
}
</style>
<style lang="scss">
@media (max-width: 991px){
  .row {
    display: block;
  }
}
</style>