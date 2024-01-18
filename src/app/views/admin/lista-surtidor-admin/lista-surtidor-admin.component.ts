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
  surtidor={
    nombrePersona:'',
    estatusPersonal:'Libre',
    clavePersonal:''
  }

  fecha:string='';
  cantidad: any;
  page: number = 0;
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  columnaOrdenada: string = '';


  ngOnInit(): void {
    this.cantidad=10;
    this.rellenarSurtidor(this.pageActual,this.cantidad,"idPersonal",this.sortDir);
  }


  constructor(private andService:AndService,private modal:NgbModal){}

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

  changePage(page: number) {
    this.currentPage = page;
    this.rellenarSurtidor(this.currentPage - 1, this.cantidad, "idItem", this.sortDir);
  }

  getPageNumber(pages: number): number[] {
    return Array.from({ length: pages }, (_, index) => index + 1);
  }

  
  rellenarSurtidor(pagina,cantidad,orderBy,sortDir) {
    this.andService.listarSurtidor(pagina,cantidad,orderBy,sortDir).subscribe(
      (data:any)=>{
        console.log(data);
        this.listaSurtidor = data.content;
      }
    );
  }


  sortColumn(columna) {
    this.rellenarSurtidor(this.currentPage - 1, this.cantidad, columna, this.sortDir);
    if (this.columnaOrdenada == columna) {
      this.sortDir = !this.sortDir;
    }
    else {
      this.sortDir = true;
    }
    this.columnaOrdenada = columna;
    this.rellenarSurtidor(this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
  }
}
