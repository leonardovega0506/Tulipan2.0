import { Component } from '@angular/core';
import { AndService } from 'src/app/service/and-service/and.service';

@Component({
  selector: 'app-lista-registro-admin',
  templateUrl: './lista-registro-admin.component.html',
  styleUrls: ['./lista-registro-admin.component.css']
})
export class ListaRegistroAdminComponent {
  
  listaRegistro:any[];
  cantidad: any;
  page: number = 0;
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  columnaOrdenada: string = '';
  pages:number=0;

  ngOnInit(): void {
    this.cantidad = 10;
    this.rellenarPicking(this.pageActual, this.cantidad, "idRegistro", "asc");
  }

  fecha:string='';

  constructor(private andService:AndService){}

  
  changePage(page: number) {
    this.currentPage = page;
    this.rellenarPicking(this.currentPage - 1, this.cantidad, "idRegistro", this.sortDir);
  }

  getPageNumber(pages: number): number[] {
    return Array.from({ length: pages }, (_, index) => index + 1);
  }


  sortColumn(columna) {
    this.rellenarPicking(this.currentPage - 1, this.cantidad, columna, this.sortDir);
    if (this.columnaOrdenada == columna) {
      this.sortDir = !this.sortDir;
    }
    else {
      this.sortDir = true;
    }
    this.columnaOrdenada = columna;
    this.rellenarPicking(this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
  }
  
  
  rellenarPicking(pagina,cantidad,orderBy,sortDir) {
    this.andService.listarRegistros(pagina,cantidad,orderBy,sortDir).subscribe(
      (data:any)=>{
        console.log(data);
        this.listaRegistro = data.content;
        this.pages = data.allPage;
      }
    );
  }
}
