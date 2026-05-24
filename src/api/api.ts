import axios from 'axios';



const api = axios.create({

  baseURL: 'http://163.176.204.45:8080/api/v1/',

  timeout: 30000,

 

});