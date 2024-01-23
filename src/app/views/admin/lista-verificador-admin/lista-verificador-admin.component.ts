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
  cantidad: any;
  page: number = 0;
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  columnaOrdenada: string = '';
  pages:number=0;

  ngOnInit(): void {
    this.cantidad = 10;
    this.rellenarVerificador(this.pageActual,this.cantidad,"idPersonal",this.sortDir);
  }



  constructor(private andService:AndService,private modal:NgbModal){}


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
   changePage(page: number) {
    this.currentPage = page;
    this.rellenarVerificador(this.currentPage - 1, this.cantidad, "idItem", this.sortDir);
  }

  getPageNumber(pages: number): number[] {
    return Array.from({ length: pages }, (_, index) => index + 1);
  }

  rellenarVerificador(pagina,cantidad,orderBy,sortDir) {
    this.andService.listarVerificador(pagina,cantidad,orderBy,sortDir).subscribe(
      (data:any)=>{
        console.log(data);
        this.listaVerificador = data.content;
        this.pages = data.allPage;
      }
    );
  }

  sortColumn(columna) {
    this.rellenarVerificador(this.currentPage - 1, this.cantidad, columna, this.sortDir);
    if (this.columnaOrdenada == columna) {
      this.sortDir = !this.sortDir;
    }
    else {
      this.sortDir = true;
    }
    this.columnaOrdenada = columna;
    this.rellenarVerificador(this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
  }
}
