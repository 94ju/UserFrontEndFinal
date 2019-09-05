import {Component, OnInit} from "@angular/core";
import { VMservice } from 'src/app/vm.service';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { NgForm } from '@angular/forms';
@Component({
    selector:'app-vm-create',
    templateUrl:'./vm-create.component.html',
    styleUrls:['./vm-create.component.css']
})
export class VMCreateComponent implements OnInit{
    enteredVMtype=""
    enteredVM_Memmory=""
    constructor(private vmService:VMservice){}

    onAddVM(form:NgForm){
        if(!form.valid){
            return; 
        }
        this.vmService.addVms(form.value.type,form.value.memory);
    }
    ngOnInit(){
         
    }

    

}