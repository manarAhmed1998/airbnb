import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 

  private  constructor ( public myclient: HttpClient ) { }

private readonly Base_URL = "https://jsonplaceholder.typicode.com/users";

GetAllUsers(){
  return this.myclient.get(this.Base_URL);
}

GetUsersById(id:any){
  return this.myclient.get(this.Base_URL + "/" + id);
}
  }
