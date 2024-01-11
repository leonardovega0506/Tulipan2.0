import { DatePipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { AndService } from 'src/app/service/and-service/and.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-lista-picking-admin',
  templateUrl: './lista-picking-admin.component.html',
  styleUrls: ['./lista-picking-admin.component.css'],
})
export class ListaPickingAdminComponent implements OnInit{

  listaPicking:any[];
  absEntry:any;
  fecha:string = "";
  fechaObj = new Date(this.fecha);

  picking?:any;

  ngOnInit(): void {
    this.rellenarPicking();
  }

  constructor(private andService:AndService,private modal:NgbModal,private datepipe:DatePipe){}

  buscarPickingByFecha(){
    let latest_date =this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
    this.andService.listarPickingByDate("0","10","idPicking","asc",latest_date).subscribe(
      (data:any)=>{
        console.log(data);
        this.listaPicking = data.content;
      }
    );
  }

  buscarAbsEntry(){
    this.andService.obtenerPickingByAbsentry(this.absEntry).subscribe(
    (data)=>{
      console.log(data);
      this.ngOnInit();
    }
    );
  }

  rellenarPicking() {
    this.andService.listarPicking("0","10","idPicking","asc").subscribe(
      (data:any)=>{
        console.log(data);
        this.listaPicking = data.content;
      }
    );
  }
  obtenerDetallePicking(idPickingDetalle,detallesModal){
    this.modal.open(detallesModal);
    this.andService.obtenerPickingById(idPickingDetalle).subscribe(
      (data)=>{
        console.log(data);
        this.picking = data;
      }
    );
  }

}
