<template>
  <div class="container">
    <div class="row mt-5">

      <div class="col-10">
        <div v-if="employee" class="card float-color">
          <div class="card-header">
            <h5 class="text-white mb-0 text-center">Employee Details</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-3">
                <div class="card bg-dark">
                  <div class="card-body">
                    <i class="fas fa-user fa-10x text-muted"></i>
                  </div>
                </div>
              </div>
              <div class="col-9">
                <div class="row align-items-center justify-content-center mb-10">
                  <div class="col-lg-5 col-md-12 mb-10">
                    <h5 class="text-white">First Name</h5>
                    <h5><small class="bold">{{employee.first_name}}</small></h5>
                  </div>
                  <div class="col-lg-5 col-md-12 mb-10">
                    <h5 class="text-white">Last Name</h5>
                    <h5><small class="bold">{{employee.last_name}}</small></h5>
                  </div>
                </div>
                <div class="row align-items-center justify-content-center mb-10">
                  <div class="col-lg-5 col-md-12 mb-10">
                    <h5 class="text-white">Username</h5>
                    <h5><small class="bold">{{employee.username}}</small></h5>
                  </div>
                  <div class="col-lg-5 col-md-12 mb-10">
                    <h5 class="text-white">Email</h5>
                    <h5><small class="bold">{{employee.email}}</small></h5>
                  </div>
                </div>
                <div class="row align-items-center justify-content-center mb-10">
                  <div class="col-lg-5 col-md-12 mb-10">
                    <h5 class="text-white">Country</h5>
                    <h5><small class="bold">{{employee.address.country}}</small></h5>
                  </div>
                  <div class="col-lg-5 col-md-12 mb-10">
                    <h5 class="text-white">City</h5>
                    <h5><small class="bold">{{employee.address.city}}</small></h5>
                  </div>
                </div>
                <div class="row align-items-center justify-content-center mb-10">
                  <div class="col-lg-5 col-md-12 mb-10">
                    <h5 class="text-white">Address</h5>
                    <h5><small class="bold">{{employee.address.address}}</small></h5>
                  </div>
                  <div class="col-lg-5 col-md-12 mb-10">
                    <h5 class="text-white">Store</h5>
                    <h5><small class="bold">Store Nº{{employee.store_id}}</small></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!--col-10-->

      <div class="col-2">
        <div class="card float-color p-0">
          <div class="card-body">
            <router-link to="/" class="btn btn-sm btn-info btn-block mb-2">Back</router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AdminService from '../../services/admin.service';

export default {
  name: 'employee-details',

  props: {
  },

  components: {
  },

  data() {
    return {
      employee: null,
      adminService: AdminService
    }
  },

  methods: {
    getEmployeeByParamId(){
      const { id } = this.$route.params;
      return this.adminService.getStaffMemberById(id);
    }
  },

  created() {

  },

  async mounted() {
    this.employee = await this.getEmployeeByParamId();
    console.log({...this.employee});
  },
};
</script>

<style scoped>
</style>