<template>
  <div class="content">
    <card-employee
      @editSalary="editSalary"
      :user="item"
      v-for="(item, index) in users"
      :key="index"
    />
    <modal
      :user="userEditing"
      v-if="showModal"
      @updateSalary="updateSalary"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import axios from "axios";
import { CardEmployee, Modal } from "@/components";

export default {
  components: {
    CardEmployee,
    Modal
  },
  data() {
    return {
      showModal: false,
      userEditing: {},
      users: []
    };
  },
  methods: {
    editSalary(user) {
      this.userEditing = user;
      this.showModal = true;
    },
    getAllUsers() {
      axios
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => {
          this.users = response.data.data;
          for (let index = 0; index < this.users.length; index++)
            this.users[index].addedValue = 0;
        })
        .catch(err => alert("Ocorreu um erro ao buscar os usuários"));
    },
    updateSalary(value, user) {
      this.showModal = false;
      for (let index = 0; index < this.users.length; index++) {
        if (this.users[index].id == user.id) {
          if (this.users.addedValue < 200 || user.addedValue + value <= 200) {
            this.users[index].addedValue = user.addedValue + value;
            this.users[index].employee_salary = parseInt(this.users[index].employee_salary) + value;
            user.salary = this.users[index].employee_salary;
          } else {
            alert("O valor máximo para aumento é R$200");
            return;
          }
        }
      }
      let users = this.users;
      this.users = [];
      setTimeout(() => {
        this.users = users;
      }, 2);
      axios
        .put(`http://dummy.restapiexample.com/api/v1/update/${user.id}`, {
          name: user.employee_name,
          salary: user.salary,
          age: user.employee_age
        })
        .then(resp => {});
    }
  },
  beforeMount() {
    this.getAllUsers();
  }
};
</script>
