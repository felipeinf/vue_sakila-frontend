<template>
  <div>

    <div class="container">
      <div class="row mt-5">

        <div class="col-10">
          <div class="card float-color">
            <div class="card-header">
              <h5 class="text-white mb-0 text-center">New employee</h5>
            </div>
            <div class="card-body">

              <div class="row">

                <div class="col-12">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">First and last name</span>
                    </div>
                    <input type="text" aria-label="First name" class="form-control">
                    <input type="text" aria-label="Last name" class="form-control">
                  </div>
                </div>

                <div class="col-8">

                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username"
                      aria-label="Recipient's username" aria-describedby="basic-addon2"
                    >
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                  </div>

                  <label for="basic-url">Your vanity URL</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    </div>
                    <input type="text" class="form-control" id="basic-url"
                      aria-describedby="basic-addon3"
                    >
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Amount">
                    <div class="input-group-append">
                      <span class="input-group-text">.00</span>
                    </div>
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

                </div><!--col-8-->

                <div class="col-4">
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
                      <label class="input-group-text" for="inputGroupSelect02">Ciudad</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div class="input-group flex-nowrap mb-3">
                    <input type="text" class="form-control" placeholder="Stree name"
                    aria-label="Stree name" aria-describedby="addon-wrapping">
                  </div>

                  <div class="input-group flex-nowrap mb-3">
                    <input type="number" class="form-control" placeholder="Stree number"
                    aria-label="Stree number" aria-describedby="addon-wrapping">
                  </div>

                </div><!--col-4-->

              </div>

            </div><!--card-body-->
          </div>
        </div><!--col-10-->

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
import axios from '@/lib/axios';

export default {
  name: 'new-employee',
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
    const { data } = await this.readStaff();
    this.staff = data.body;
    this.staff.forEach(item => console.log(item));
  },

  methods: {
    readStaff() {
      return axios.get('staff');
    },
    selectEmployee(employee) {
      this.selectedEmployee = employee;
      console.log(this.selectedEmployee);
    },
    d() {
      console.log('hola mundo');
    },
  },
};
</script>
