import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AndService } from 'src/app/service/and-service/and.service';

@Component({
  selector: 'app-lista-surtidor-admin',
  templateUrl: './lista-surtidor-admin.component.html',
  styleUrls: ['./lista-surtidor-admin.component.css']
})
export class ListaSurtidorAdminComponent {
  listaSurtidor:any[];

  ngOnInit(): void {
    this.rellenarSurtidor();
  }

  surtidor={
    nombrePersona:'',
    estatusPersonal:'Libre',
    clavePersonal:''
  }

  fecha:string='';

  constructor(private andService:AndService,private modal:NgbModal){}

  rellenarSurtidor() {
    this.andService.listarSurtidor("0","10","idPersonal","asc").subscribe(
      (data:any)=>{
        console.log(data);
        this.listaSurtidor = data.content;
      }
    );
  }

  abrirModal(crearSurtidor){
    this.modal.open(crearSurtidor);
  }

  guardarSurtidor(){
    this.andService.guardarSurtidor(this.surtidor).subscribe(
      (data)=>{
        console.log(data);
        this.modal.dismissAll();
        this.ngOnInit();
      }
    );
  }
}
