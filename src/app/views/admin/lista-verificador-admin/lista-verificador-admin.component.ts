import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/service/and-service/and.service';

@Component({
  selector: 'app-lista-verificador-admin',
  templateUrl: './lista-verificador-admin.component.html',
  styleUrls: ['./lista-verificador-admin.component.css']
})
export class ListaVerificadorAdminComponent {

  listaVerificador:any[];
  verificador={
    nombrePersona:'',
    estatusPersonal:'Libre',
    clavePersonal:'',
    mesaPersonal:''
  }

  ngOnInit(): void {
    this.rellenarVerificador();
  }



  constructor(private andService:AndService,private modal:NgbModal){}

  rellenarVerificador() {
    this.andService.listarVerificador("0","10","idPersonal","asc").subscribe(
      (data:any)=>{
        console.log(data);
        this.listaVerificador = data.content;
      }
    );
  }

  abrirModal(crearVerificador){
    this.modal.open(crearVerificador);
  }

  guardarVerificador(){
    this.andService.guardarVerificador(this.verificador).subscribe(
      (data)=>{
        console.log(data);
        this.modal.dismissAll();
        this.ngOnInit();
      }
    );
  }
}
