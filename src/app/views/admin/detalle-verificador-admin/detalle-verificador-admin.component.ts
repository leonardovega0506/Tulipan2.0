import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/service/and-service/and.service';

@Component({
  selector: 'app-detalle-verificador-admin',
  templateUrl: './detalle-verificador-admin.component.html',
  styleUrls: ['./detalle-verificador-admin.component.css']
})
export class DetalleVerificadorAdminComponent {
  verificador?:any;
  idVerificador:any;

  ngOnInit(): void {
   this.idVerificador = this.aRoute.snapshot.params['id'];
   this.andService.obtenerVerificadorById(this.idVerificador).subscribe(
    (data)=>{
      console.log(data);
      this.verificador = data;
    }
   );

  }

  constructor(private aRoute:ActivatedRoute,private andService:AndService, private modal:NgbModal,private router:Router){}

  abrirModal(editarVerificador){
    this.modal.open(editarVerificador);
  }

  actualizarVerificador(){
    this.andService.actualizarVerificador(this.verificador).subscribe(
      (data)=>{
        this.modal.dismissAll();
        this.ngOnInit();
      }
    );
  }

  eliminarVerificador(){
    this.andService.eliminarVerificador(this.idVerificador).subscribe(
      (data)=>{
        this.router.navigate(['/admin/verificador']);
      }
    );
  }
}
