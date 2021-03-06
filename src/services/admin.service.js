import Axios from 'axios';
import axiosConfig from '../axios.config';

const axios = Axios.create(axiosConfig);

class AdminService {
  
  constructor(){
    this._staff = [];
  }

  async getStaff(){
    const { data } = await axios.get('/staff');
    this._staff = data.body;    
    return this._staff;
  }

  async getStaffMemberById(staffId){
    if(this._staff.length === 0){
      try {
        const { data } = await axios.get(`/staff/${staffId}`);
        return data.body
          .shift();
      } 
      catch (error) {
        console.error(error);
      }
    }
    else {
      return this._staff
        .filter(employee => employee.staff_id == staffId)
        .shift();
    }
  }

  async deleteStaffMemberById(staffId){
    try {
      const { data } = await axios.delete(`/staff/${staffId}`);
      return data.body;
    } 
    catch (error) {
      console.error(error);
    }
  }

} export default new AdminService();