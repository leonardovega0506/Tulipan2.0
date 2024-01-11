import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/service/and-service/and.service';

@Component({
  selector: 'app-detalle-surtidor-admin',
  templateUrl: './detalle-surtidor-admin.component.html',
  styleUrls: ['./detalle-surtidor-admin.component.css']
})
export class DetalleSurtidorAdminComponent implements OnInit{

  surtidor?:any;
  idSurtidor:any;

  ngOnInit(): void {
   this.idSurtidor = this.aRoute.snapshot.params['id'];
   this.andService.obtenerSurtidorById(this.idSurtidor).subscribe(
    (data)=>{
      console.log(data);
      this.surtidor = data;
    }
   );

  }

  constructor(private aRoute:ActivatedRoute,private andService:AndService, private modal:NgbModal,private router:Router){}

  abrirModal(editarSurtidor){
    this.modal.open(editarSurtidor);
  }

  actualizarSurtidor(){
    this.andService.actualizarSurtidor(this.surtidor).subscribe(
      (data)=>{

        this.modal.dismissAll();
        this.ngOnInit();
      }
    );
  }

  eliminarSurtidor(){
    this.andService.eliminarSurtidor(this.idSurtidor).subscribe(
      (data)=>{
        this.router.navigate(['/admin/surtidor']);
      }
    );
  }
}
