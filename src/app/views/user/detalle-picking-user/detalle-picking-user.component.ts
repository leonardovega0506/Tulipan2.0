import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AndService } from 'src/app/service/and-service/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-picking-user',
  templateUrl: './detalle-picking-user.component.html',
  styleUrls: ['./detalle-picking-user.component.css']
})
export class DetallePickingUserComponent implements OnInit {

  absEntry: any;
  picking?: any;
  surtidor: boolean = false;
  verificador: boolean = false;
  estatus: any;
  claveSurtidor:any;
  claveVerificador:any;
  botones:boolean = true;
  registro:any;
  tipo:any;

  ngOnInit(): void {
    this.absEntry = "";
    this.picking = null;
    this.surtidor =false;
    this.verificador = false;
    this.claveSurtidor = null;
    this.botones = false;
  }

  constructor(private andService: AndService,private datePipe:DatePipe) { }



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
          this.andService.obtenerPickingByAbsentry(this.absEntry,this.tipo)
        ).subscribe(
          (data) => {
            Swal.close();
            if (data != null) {
              Swal.fire({
                icon: "success",
                title: 'Exito',
                text: "Exito al traer el picking",
                timer: 2000
              })
            }
            this.picking = data;
            this.tipo = this.picking.tipoCanal;
            this.estatus = this.picking?.estatus;
            console.log(this.estatus);
            this.registro = this.picking?.registro;
            if(this.picking.surtidor!=null || this.picking.verificador !=null){
              this.botones = true;
            }
            if (this.picking.surtidor == null) {
              this.surtidor = true;
            }
            if (!this.picking.verificador && this.picking.surtidor && this.picking.estatus==3) {
              this.verificador = true;
            }

          }
        );
      }
    })

  }
  asignarSurtidor(){
    Swal.fire({
      title:'Asignar',
      text:'¿Desea asignar a este surtidor?',
      icon:'info',
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText:'Asignar',
      cancelButtonText:'Cancelar'
    }).then((e)=>{
      if(e.isConfirmed){
        Swal.fire({
          text: 'Buscando',
          didOpen: () => {
            Swal.showLoading();
          },
        });
        from(
         this.andService.asignarSurtidor(this.claveSurtidor,this.absEntry,this.tipo)
        ).subscribe(
          (data)=>{
            console.log(data);
            Swal.fire({
              title:'Exito',
              showCloseButton:false,
              text:'Exito al asignar el surtidor',
              timer:2000
            });
            this.absEntry = "";
            this.surtidor = false;
            this.verificador = false;
          },
          (error)=>{
            Swal.fire('Error',"Error al asignar", 'error');
          }
        )
      }
    })
  }

  asignarVerificador(){
    Swal.fire({
      title:'Asignar',
      text:'¿Desea asignar a este verificador?',
      icon:'info',
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText:'Asignar',
      cancelButtonText:'Cancelar'
    }).then((e)=>{
      if(e.isConfirmed){
        Swal.fire({
          text: 'Buscando',
          didOpen: () => {
            Swal.showLoading();
          },
        });
        from(
         this.andService.asignarVerificador(this.claveVerificador,this.absEntry,this.tipo)
        ).subscribe(
          (data)=>{
            console.log(data);
            Swal.fire({
              title:'Exito',
              icon:'success',
              showCloseButton:false,
              text:'Exito al asignar el Verificador',
              timer:2000
            });
            this.verificador = false;
          },
          (error)=>{
            Swal.fire('Error',"Error al asignar", 'error');
          }
        )
      }
    })
  }

  registrarTiempoInicioSurtido(){
    Swal.fire({
      title:'Generar',
      text:'¿Desea generar el tiempo de inicio surtido?',
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText:'Generar',
      cancelButtonText:'Cancelar'
    }).then((e)=>{
      if(e.isConfirmed){
        Swal.fire({
          text: 'Generando',
          didOpen: () => {
            Swal.showLoading();
          },
        });
        from(
          this.andService.generarTiempoIniciosurtido(this.registro,this.tipo)
        ).subscribe(
          (data)=>{
            console.log(data);
            Swal.fire({
              title:'Exito',
              text:'Exito al generar el tiempo',
              icon:'success',
              timer:2000
            });
            this.ngOnInit();
          },
          (error)=>{
            console.log(error);
          }
        )
      }
    })
  }
  
  registrarTiempoTerminoSurtido(){
    Swal.fire({
      title:'Generar',
      text:'¿Desea generar el tiempo de termino surtido?',
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText:'Generar',
      cancelButtonText:'Cancelar'
    }).then((e)=>{
      if(e.isConfirmed){
        Swal.fire({
          text: 'Generando',
          didOpen: () => {
            Swal.showLoading();
          },
        });
        from(
          this.andService.generarTiempoTerminoSurtido(this.registro,this.tipo)
        ).subscribe(
          (data)=>{
            Swal.fire({
              title:'Exito',
              text:'Exito al generar el tiempo',
              icon:'success',
              timer:2000
            });
            this.ngOnInit()
          },
          (error)=>{
            Swal.fire('Error',"Error al generar el tiempo "+error,'error');
          }
        )
      }
    })
  }
  
  registrarTiempoInicioVerificado(){
    Swal.fire({
      title:'Generar',
      text:'¿Desea generar el tiempo de inicio verificado?',
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText:'Generar',
      cancelButtonText:'Cancelar'
    }).then((e)=>{
      if(e.isConfirmed){
        Swal.fire({
          text: 'Generando',
          didOpen: () => {
            Swal.showLoading();
          },
        });
        from(
          this.andService.generarTiempoInicioVerificado(this.registro,this.tipo)
        ).subscribe(
          (data)=>{
            Swal.fire({
              title:'Exito',
              text:'Exito al generar el tiempo',
              icon:'success',
              timer:2000
            });
            this.ngOnInit();
          },
          (error)=>{
            Swal.fire('Error',"Error al generar el tiempo "+error,'error');
          }
        )
      }
    })
  }

  registrarTiempoTerminoVerificado(){
    Swal.fire({
      title:'Generar',
      text:'¿Desea generar el tiempo de termino verificado?',
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText:'Generar',
      cancelButtonText:'Cancelar'
    }).then((e)=>{
      if(e.isConfirmed){
        Swal.fire({
          text: 'Generando',
          didOpen: () => {
            Swal.showLoading();
          },
        });
        from(
          this.andService.generarTiempoTerminoVerificado(this.registro,this.tipo)
        ).subscribe(
          (data)=>{
            Swal.fire({
              title:'Exito',
              text:'Exito al generar el tiempo',
              icon:'success',
              timer:2000
            });
            this.ngOnInit();
          },
          (error)=>{
            Swal.fire('Error',"Error al generar el tiempo "+error,'error');
          }
        )
      }
    })
  }
}
