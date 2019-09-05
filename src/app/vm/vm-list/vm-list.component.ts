import { Component, OnInit } from '@angular/core';
import { VMservice } from 'src/app/vm.service';
import {VM} from '../vm.model'

@Component({
  selector: 'app-vm-list',
  templateUrl: './vm-list.component.html',
  styleUrls: ['./vm-list.component.css']
})
export class VmListComponent implements OnInit {

  constructor(private vmService:VMservice){}
  // vms = [
  //   // {type:"A1", memory:"16 GB"},
  //   // {type:"T2", memory:"64 GB"},
  //   // {type:"A3", memory:"32 GB"}
  // ]
  vms=this.vmService.getVMs();
  

  ngOnInit() {
  }

}
