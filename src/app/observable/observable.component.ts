import { Component, OnInit } from '@angular/core';
import { Observable, timeout } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
   orderStatus:any;
   data!: Observable<any>;
   data2!: Observable<any>;
  constructor() { }

  ngOnInit(): void {

    // new Observable(observer =>{
    //   //Business logic comes here
    //   setTimeout(() => {
    //     observer.next('In Progress');
    //   },2000);
    //     //Business logic comes here
    //   setTimeout(() => {
    //     observer.next('Processing');
    //   },5000);

    //   //Business logic comes here

    //   setTimeout(() => {
    //     observer.next('Completed');
    //   },8000);

    // }).subscribe(val =>{
    //   this.orderStatus = val;
    // });

      this.data = new Observable(observer =>{
        //Business logic comes here
        setTimeout(() => {
          observer.next('In Progress');
        },2000);
          //Business logic comes here
        setTimeout(() => {
          observer.next('Processing');
        },5000);
  
        //Business logic comes here
  
        setTimeout(() => {
          observer.next('Completed');
        },8000);

      //how to complete the observable
        setTimeout(() => {
          observer.complete();//it will no more listen or track for changes
        },8000);


        setTimeout(() => {
          observer.next('After completion'); //it will not show/process this data as we have completed
        },8000);

        setTimeout(() => {
          observer.error();
        },8000);

  
      });
      this.data.subscribe(val =>{
        this.orderStatus = val;
      });
      

      this.data.subscribe(val2 =>{
        this.orderStatus = val2;
      });

      






  }

}
