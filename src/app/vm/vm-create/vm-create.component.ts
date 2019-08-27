import {Component} from "@angular/core";
@Component({
    selector:'app-vm-create',
    templateUrl:'./vm-create.component.html',
    styleUrls:['./vm-create.component.css']
})
export class VMCreateComponent{
    createNew=""
    newPost = "No Content"
    onClick(){
       this.newPost=this.createNew;
    }

}