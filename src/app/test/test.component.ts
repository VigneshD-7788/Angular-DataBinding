import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  appName="My second app in Angular 8";
  userName ="John";
  myCssclass = "red";
  applyCssClass = false;
  myColor = "green";
  ngOnInit(){
  
  }
  constructor(){}

  showData($event:any){
    console.log("button is clicked");
    if($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }
 

}
