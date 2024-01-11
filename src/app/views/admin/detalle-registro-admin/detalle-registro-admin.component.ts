import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AndService } from 'src/app/service/and-service/and.service';

@Component({
  selector: 'app-detalle-registro-admin',
  templateUrl: './detalle-registro-admin.component.html',
  styleUrls: ['./detalle-registro-admin.component.css']
})
export class DetalleRegistroAdminComponent implements OnInit{

  idRegistro:any;
  registro?:any;

  ngOnInit(): void {
    this.idRegistro = this.aRoute.snapshot.params['id'];
    this.andService.obtenerRegistroByid(this.idRegistro).subscribe(
      (data)=>{
        console.log(data);
        this.registro = data;
      }
    );
  }

  constructor(private aRoute:ActivatedRoute, private andService:AndService){}

}
