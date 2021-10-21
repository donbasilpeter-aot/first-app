import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReq:WebRequestService) {
   }

   createList(title:string){
    return this.webReq.post("lists",{title});
   }

   getList(){
     return this.webReq.get("lists"); 
   }

   getTask(list_id:string){
     return this.webReq.get(`tasks/${list_id}`)
   }

}


