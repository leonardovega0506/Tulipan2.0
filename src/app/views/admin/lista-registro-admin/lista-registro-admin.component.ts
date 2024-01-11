import { Component } from '@angular/core';
import { AndService } from 'src/app/service/and-service/and.service';

@Component({
  selector: 'app-lista-registro-admin',
  templateUrl: './lista-registro-admin.component.html',
  styleUrls: ['./lista-registro-admin.component.css']
})
export class ListaRegistroAdminComponent {
  
  listaRegistro:any[];

  ngOnInit(): void {
    this.rellenarPicking();
  }

  fecha:string='';

  constructor(private andService:AndService){}

  rellenarPicking() {
    this.andService.listarRegistros("0","10","idRegistro","asc").subscribe(
      (data:any)=>{
        console.log(data);
        this.listaRegistro = data.content;
      }
    );
  }

}
