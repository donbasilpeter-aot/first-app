import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists:any ;
  tasks :any;
  

  constructor(private taskService:TaskService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(
    (params:Params)=> {
      this.taskService.getTask(params.list_id).subscribe((tasks:any)=>{
        this.tasks =tasks;
      });
    });
    
    this.taskService.getList().subscribe((lists:any) => {
      this.lists = lists;
    
    });


  }

  createList(title:string){
 
        this.taskService.createList(title).subscribe((response:any)=>{
          
              this.taskService.getList().subscribe((lists:any) => {
                this.lists = lists;
              
              });

          });
        }

  createTask( title:string){

    this.route.params.subscribe((params:Params)=> {

            this.taskService.createTask(params.list_id, title).subscribe((response:any)=>{ 

              
                this.taskService.getTask(params.list_id).subscribe((tasks:any)=>{
                  this.tasks =tasks;
                });
      
            });

      });


    
 

      }
    

}
