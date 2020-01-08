<template>
  <div>

    <div class="container">
      <div class="row mt-5">

        <div class="col-12 col-lg-10 mb-2">
          <div class="card float-color">
            <div class="card-header">
              <h5 class="text-white mb-0 text-center">New employee</h5>
            </div>
            <div class="card-body">

              <div class="row">

                <div class="col-12 col-lg-12">
                  <div class="input-group mb-3">
                    <input type="text" aria-label="First name" class="form-control" placeholder="First name">
                    <input type="text" aria-label="Last name" class="form-control" placeholder="Last name">
                  </div>
                </div>

                <div class="col-12 col-lg-8">

                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="email@example.com"
                      aria-label="email@example.com" aria-describedby="basic-addon2"
                    >
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username"
                      aria-label="Username" aria-describedby="basic-addon1"
                    >
                  </div>

                  <div class="input-group mb-3">
                    <input type="password" class="form-control"
                      id="inputPassword2" placeholder="Password"
                    >
                  </div>

                  <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label text-light" for="customCheck1">Active Employee</label>
                  </div>
                </div><!--col-8-->

                <div class="col-12 col-lg-4">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">Country</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect02">City</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div class="input-group">
                    <input type="text" aria-label="Stree name" class="form-control" placeholder="Stree name">
                    <input type="number" aria-label="Stree number" class="form-control" placeholder="Stree number">
                  </div>

                </div><!--col-4-->

              </div>

            </div><!--card-body-->
          </div>
        </div><!--col-10-->

        <div class="col-12 col-lg-2">
          <div class="card float-color p-0">
            <div class="card-body">
              <button class="btn btn-sm btn-success btn-block mb-2">Add</button>
              <router-link to="/" class="btn btn-sm btn-warning btn-block mb-2">Cancel</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import adminService from '@/services/admin.service';

export default {
  name: 'new-employee',

  components: {
  },

  data() {
    return {
    };
  },

  created() {
  },

  async mounted() {    
  },

  methods: {
    
  },
};

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
</script>
