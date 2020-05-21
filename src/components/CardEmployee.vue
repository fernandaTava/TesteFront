<template>
  <div class="card-employee col-md-12">
    <span class="add-info" v-if="added == 0">
      <i class="icon info-icon">attach_money</i>
      Você ainda não adicionou nada
    </span>
    <span class="add-info" v-else style="background-color: #4caf50;">
      <i class="icon info-icon">attach_money</i>
      Você adicionou R${{ added }},00
    </span>
    <div class="row">
      <div><i class="icon">attach_money</i></div>
      <div class="number-info">
        <h6 class="employee-name">{{ user.employee_name }}</h6>
        <div class="bar">
          <span class="total-value">Total R$200,00</span>
          <div class="progressbar">
            <div class="continuebar" :style="`width: ${added / 2}%;`">
              <span class="partial-value">R${{ added }},00</span>
            </div>
          </div>
        </div>
        <a class="button-modal" @click="$emit('editSalary', user)">
          <i class="icon icon-modal">add</i>
          Clique aqui para adicionar reais
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card-employee",
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    added() {
      return this.user.addedValue;
    }
  }
};
</script>
<style lang="scss" scoped>
.card-employee {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  background-color: white;
  padding: 20px;
  position: relative;
  width: 75vw;
  align-self: center;
  margin: auto;
  margin-bottom: 30px;

  .add-info {
    background-color: #e63c38;
    position: absolute;
    right: 15px;
    top: -15px;
    color: white;
    padding: 10px;
    font-weight: 600;
    width: 35%;

    .info-icon {
      color: white;
      font-size: 30px;
      margin: auto;
    }
  }

  .icon {
    font-family: Material Icons;
    font-style: normal;
    font-size: 50px;
    color: #4caf50;
    margin: auto;
    display: inline;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 10%;
  }

  .row {
    display: flex;
  }

  .number-info {
    padding-left: 10px;
    width: 88%;

    .employee-name {
      margin: auto;
      text-transform: capitalize;
      font-size: 100%;
      color: #4caf50;
      font-weight: 600;
    }

    .bar {
      margin: 5px 0px;

      .progressbar {
        background-color: #bbbaba;
        width: 100%;
        height: 15px;
        border-radius: 12px;

        .continuebar {
          background-color: #4caf50;
          height: 100%;
          overflow: hidden !important;
          border-radius: 12px;
          color: #fff;
          font-size: 80%;
          text-align: end;
        }
        .partial-value {
          padding-right: 10px;
        }
      }

      .total-value {
        margin: auto;
        display: block;
        text-align: right;
        font-size: inherit;
      }
    }

    .button-modal {
      cursor: pointer;
      font-weight: 400;
      color: #4caf50;

      .icon-modal {
        font-size: 25px;
      }

      &:hover,
      &:focus {
        color: #4caf50;
      }
    }
  }
}
</style>
