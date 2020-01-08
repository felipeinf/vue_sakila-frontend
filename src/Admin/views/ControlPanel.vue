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
                      v-bind:class="{ 'bg-primary': selectedStaffMember == employee }"
                    >
                      <th scope="row">{{employee.staff_id}}</th>
                      <td>{{employee.first_name + ' ' + employee.last_name}}</td>
                      <td>
                        <span v-if="employee.active">Active</span>
                        <span v-else>Unactive</span>
                      </td>
                      <td>{{employee.email}}</td>
                    </tr>

                  </tbody>
                </table>
              </div><!--Staff Table-->

            </div>
          </div>
        </div>

        <!--delete modal-->
        <div v-if="selectedStaffMember" class="modal fade" id="deleteModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content bg-dark">
              <div class="modal-header bg-dark">
                <h5 class="modal-title text-light" id="staticBackdropLabel">Delete employee</h5>
                <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body divider-color p-0">
                <div class="row">
                  <div class="col text-center">
                    <p class="m-4"> 
                      Are you sure you want to
                      <strong>remove {{`${selectedStaffMember.first_name} ${selectedStaffMember.last_name}`}}</strong>
                      from the staff?
                    </p>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger"
                  v-on:click="deleteSelectedStaffMember()"
                >Confirm</button>
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div><!--delete modal-->

        <div class="col col-lg-3">
          <div class="card float-color p-0">
            <div class="card-header bg-dark">
              <p v-if="!selectedStaffMember" class="text-white text-center mb-0">Select an employee</p>
              <p v-else class="text-white text-center mb-0">Options</p>
            </div>
            <div class="card-body">
              <button class="btn btn-sm btn-info btn-block mb-2" 
                v-bind:class="{disabled : ! selectedStaffMember}"
                v-on:click="viewDetailsEmployee()"
              >
                Employee Details
              </button>

              <router-link class="btn btn-sm btn-success btn-block mb-2"
                to="add" 
              >
                Add Employee
              </router-link>

              <button class="btn btn-sm btn-warning btn-block mb-2"
                v-bind:class="{disabled : ! selectedStaffMember}"
              >
                Edit Employee
              </button>

              <button class="btn btn-sm btn-danger btn-block mb-2"
                v-bind:class="{disabled : ! selectedStaffMember}"
                v-on:click="showDeleteModal"
              >
                Delete Employee
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import AdminService from '../../services/admin.service';

export default {
  name: 'control-panel',
  components: {
  },

  data() {
    return {
      staff: [],
      selectedStaffMember: null,
      adminService: AdminService,
    };
  },

  async created() {
    this.staff = await this.adminService.getStaff();
    
  },

  mounted() {
  },

  methods: {
    showDeleteModal: function(event){
      this.selectedStaffMember == null ? 
        event.stopPropagation() : $('#deleteModal').modal('show');
    },

    selectEmployee(staffMember) {
      this.selectedStaffMember = staffMember;
    },

    async deleteSelectedStaffMember(){
      const staffMemberDeleted = await this.adminService.deleteStaffMemberById(this.selectedStaffMember.staff_id);
      
      for (let i = 0; i < this.staff.length; i++) {
        const staffMember = this.staff[i];
        
        if(staffMember.staff_id == staffMember.staff_id){
          this.staff.pop();
        }
      }

      return staffMemberDeleted;
    },

    viewDetailsEmployee(){
      if(this.selectedStaffMember != null){
        this.$router.push({ path: `employee/${this.selectedStaffMember.staff_id}`});
      }
    }
  },
};
</script>
