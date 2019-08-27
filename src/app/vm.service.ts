export class VMservice{
    vms = [
        {type:"A1", memory:"16 GB"},
        {type:"T2", memory:"64 GB"},
        {type:"A3", memory:"32 GB"}
      ];
      getVMs(){
          return this.vms;
      }
      addVms(type:string ,memory:string){
        this.vms.push({type:type,memory:memory});
      }
    
}