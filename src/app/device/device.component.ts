import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() appareilName: string ;
  @Input() appareilStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red'
    }
  }

}
