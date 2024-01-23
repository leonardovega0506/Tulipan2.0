import { DatePipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { AndService } from 'src/app/service/and-service/and.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { from, catchError } from 'rxjs';



@Component({
  selector: 'app-lista-picking-admin',
  templateUrl: './lista-picking-admin.component.html',
  styleUrls: ['./lista-picking-admin.component.css'],
})
export class ListaPickingAdminComponent implements OnInit {

  listaPicking: any[];
  absEntry: any;
  fecha: string = "";
  fechaObj = new Date(this.fecha);
  cantidad: any;
  page: number = 0;
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  columnaOrdenada: string = '';
  picking?: any;
  pages:number=0;

  constructor(private andService: AndService, private modal: NgbModal, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.cantidad = 10
    this.rellenarPicking(this.pageActual, this.cantidad, "idPicking", this.sortDir);
  }

  buscarPickingByFecha() {
    let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');

    Swal.fire({
      icon:'info',
      'title': "Buscar",
      'text': '¿Desea buscar los picking con esa fecha?',
      showConfirmButton: true,
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true
    }).then((e) => {
      if (e.isConfirmed) {
        Swal.fire({
          title: 'Buscando',
          didOpen: () => {
            Swal.showLoading();
          },
        })
        from(
          this.andService.listarPickingByDate("0", "10", "idPicking", "asc", latest_date)
        ).pipe().subscribe((data: any) => {
          Swal.close();
          if(data!=null){
            Swal.fire({
              icon:'success',
              title:'Exito',
              text:'Exito al traer los picking',
              timer:2000
            })
            console.log(data);
            this.listaPicking = data.content;  
          }
          
        }
        )
      }
    }
    );


  }

  buscarAbsEntry() {
    Swal.fire({
      title: 'Buscar',
      text: "¿Desea buscar por entrada?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then((e) => {
      if (e.isConfirmed) {
        Swal.fire({
          text: 'Buscando',
          didOpen: () => {
            Swal.showLoading();
          },
        });
        from(
          this.andService.obtenerPickingByAbsentry(this.absEntry)
        ).subscribe(
          (data) => {
            Swal.close();
            if(data!=null){
              Swal.fire({
                icon:"success",
                title:'Exito',
                text:"Exito al traer el picking",
                timer:2000
              })
            }
            console.log(data);
            this.ngOnInit();
          }
        );
      }
    })

  }

  changePage(page: number) {
    this.currentPage = page;
    this.rellenarPicking(this.currentPage - 1, this.cantidad, "idPicking", this.sortDir);
  }

  getPageNumbers(pages: number): number[] {
    return Array.from({ length: pages }, (_, index) => index + 1);
  }

  obtenerDetallePicking(idPickingDetalle, detallesModal) {
    this.modal.open(detallesModal);
    this.andService.obtenerPickingById(idPickingDetalle).subscribe(
      (data) => {
        console.log(data);
        this.picking = data;
      }
    );
  }

  rellenarPicking(pagina, cantidad, orderBy, sortDir) {
    this.andService.listarPicking(pagina, cantidad, orderBy, sortDir).subscribe(
      (data: any) => {
        this.listaPicking = data.content;
        this.pages = data.allPage;
      }
    );
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
  
}
