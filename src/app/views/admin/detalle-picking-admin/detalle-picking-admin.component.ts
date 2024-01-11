import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AndService } from 'src/app/service/and-service/and.service';

@Component({
  selector: 'app-detalle-picking-admin',
  templateUrl: './detalle-picking-admin.component.html',
  styleUrls: ['./detalle-picking-admin.component.css']
})
export class DetallePickingAdminComponent implements OnInit{

  
  constructor(private aRoute:ActivatedRoute, private andService:AndService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
