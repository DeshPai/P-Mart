import { Input, Output } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '@core/user';


@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
//component communication

 @Input ()
 user:User;
 
 // communication from Headercomponet to  AppComponent
 @Output()
 logoutEvent = new EventEmitter<any>();
 

  constructor() { }

  ngOnInit(): void {
  }

  
logout() {
  this.logoutEvent.emit();
 }    
 
}
