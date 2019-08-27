import {Component, OnInit} from "@angular/core";
import { VMservice } from 'src/app/vm.service';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
@Component({
    selector:'app-vm-create',
    templateUrl:'./vm-create.component.html',
    styleUrls:['./vm-create.component.css']
})
export class VMCreateComponent implements OnInit{
    enteredVMtype=""
    enteredVM_Memmory=""
    constructor(private vmService:VMservice){}

    onClick(){
        this.vmService.addVms(this.enteredVMtype,this.enteredVM_Memmory);
    }
    ngOnInit(){
         
    }

    

}