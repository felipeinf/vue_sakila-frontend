<template>
  <div>

    <div class="container">
      <div class="row mt-5">
        <div class="col col-lg-9">
          <div class="card float-color mb-3">
            <div class="card-header bg-dark">
              <h5 class="text-white mb-0 text-center">Staff</h5>
            </div>
            <div class="card-body p-0">

              <!--Staff Table-->
              <div class="table-responsive">
                <table class="table table-sm table-hover table-dark float-color mb-0">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">State</th>
                      <th scope="col">E-mail</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr v-for="employee in staff" :key="employee.staff_id"
                      v-on:click="selectEmployee(employee)"
                      v-bind:class="{ 'bg-primary': selectedEmployee == employee }"
                    >
                      <th scope="row">{{employee.staff_id}}</th>
                      <td>{{employee.first_name + ' ' + employee.last_name}}</td>
                      <td>
                        <span v-if="employee.active">Activo</span>
                        <span v-else>Inactivo</span>
                      </td>
                      <td>{{employee.email}}</td>
                    </tr>

                  </tbody>
                </table>
              </div><!--Staff Table-->

            </div>
          </div>
        </div>

<div class="modal fade bd-example-modal-sm" tabindex="-1"
  role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true"
>
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content p-0">
      <div class="alert alert-dark mb-0" role="alert">
        A simple dark alert—check it out!
      </div>
    </div>
  </div>

      
</div>

        <div class="col col-lg-3">
          <div class="card float-color p-0">
            <div class="card-header bg-dark">
              <p v-if="!selectedEmployee" class="text-white text-center mb-0">Select an employee</p>
              <p v-else class="text-white text-center mb-0">Options</p>
            </div>
            <div class="card-body">
              <button class="btn btn-sm btn-info btn-block mb-2"
                v-bind:class="{disabled : ! selectedEmployee}"
              >Employee details</button>

              <router-link :to="'add/' + 1" 
                class="btn btn-sm btn-success btn-block mb-2">Add Employee
              </router-link>

              <button class="btn btn-sm btn-warning btn-block mb-2"
                v-bind:class="{disabled : ! selectedEmployee}"
              >Edit Employee</button>

              <button class="btn btn-sm btn-danger btn-block mb-2"
                v-bind:class="{disabled : ! selectedEmployee}"
              >Delete Employee</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

/* {
  "staff_id": 16,
  "first_name": "Hector",
  "last_name": "Gutierrez",
  "address": {
    "address_id": 182,
    "address": "1891 Rizhao Boulevard",
    "city": "Santa Brbara dOeste",
    "country": "Brazil"
  },
  "picture": null,
  "email": "guti@gmail.com",
  "store": 1,
  "active": 1,
  "username": "guti69",
  "password": "Soyguti299",
  "last_update": "2020-01-04T21:00:01.000Z"
}
*/
// @ is an alias to /src
import adminService from '@/services/admin.service';

export default {
  name: 'control-panel',
  components: {
  },

  data() {
    return {
      staff: null,
      selectedEmployee: null,
    };
  },

  created() {
    
  },

  async mounted() {
    this.staff = await this.getStaff();
    this.staff.forEach(item => console.log({...item}));
  },

  methods: {
    getStaff() {
      return adminService.getStaff();
    },

    selectEmployee(employee) {
      this.selectedEmployee = employee;
    },
  },
};
</script>
