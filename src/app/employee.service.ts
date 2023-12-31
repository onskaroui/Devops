import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseURL = "http://backemployee.local/SpringMVC/employees";
;


  constructor(private http:HttpClient) {
     console.log("EmployeeService created...");   
   }
   

  addEmployee(employee:any) :Observable<any>{
    return this.http.post(this.baseURL,employee);
  }

}

