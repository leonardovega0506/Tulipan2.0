import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../util/helper';

@Injectable({
  providedIn: 'root'
})
export class AndService {

  baseAnd:string =`${baseUrl}`;

  constructor(private http:HttpClient) { }

  /* **Picking** */
  public asignarSurtidor(claveSurtidor,absEntry){
    return this.http.post(this.baseAnd+"/picking/surtidor?absEntry="+absEntry+"&claveSurtidor="+claveSurtidor,absEntry);
  }
  public asignarVerificador(claveVerificador,absEntry){
    return this.http.post(this.baseAnd+"/picking/verificador?absEntry="+absEntry+"&claveVerificador="+claveVerificador,absEntry);
  }
  public listarPicking(pageNumber,pageSize,orderBy,sortDir){
    return this.http.get(this.baseAnd+"/picking?orderBy="+orderBy+"&pageNo="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }
  public listarPickingByDate(pageNumber,pageSize,orderBy,sortDir,fecha){
    return this.http.get(this.baseAnd+"/picking/fecha?date="+fecha+"&orderBy="+orderBy+"&pageNo="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerPickingByAbsentry(absEntry){
    return this.http.get(this.baseAnd+"/picking/absEntry?absEntry="+absEntry);
  }

  public obtenerPickingById(idPicking){
    return this.http.get(this.baseAnd+"/picking/"+idPicking);
  }


  /* **Registro** */
  public listarRegistros(pageNumber,pageSize,orderBy,sortDir){
    return this.http.get(this.baseAnd+"/registro?orderBy="+orderBy+"&pageNo="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerRegistroByid(idRegistro){
    return this.http.get(this.baseAnd+"/registro/"+idRegistro);
  }
  
  /* **Surtidor** */
  public actualizarSurtidor(surtidor){
    return this.http.put(this.baseAnd+"/surtidor",surtidor);
  }

  public eliminarSurtidor(idSurtidor){
    return this.http.delete(this.baseAnd+"/surtidor/"+idSurtidor);
  }

  generarTiempoIniciosurtido(registro){
    return this.http.put(this.baseAnd+"/registro/inicio_surtido",registro);
  }

  generarTiempoTerminoSurtido(registro){
    return this.http.put(this.baseAnd+"/registro/termino_surtido",registro);
  }

  generarTiempoInicioVerificado(registro){
    return this.http.put(this.baseAnd+"/registro/inicio_verificado",registro);
  }
  
  generarTiempoTerminoVerificado(registro){
    return this.http.put(this.baseAnd+"/registro/termino_verificado",registro);
  }

  public guardarSurtidor(surtidor){
    return this.http.post(this.baseAnd+"/surtidor",surtidor);
  }

  public listarSurtidor(pageNumber,pageSize,orderBy,sortDir){
    return this.http.get(this.baseAnd+"/surtidor?orderBy="+orderBy+"&pageNo="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerSurtidorById(idSurtidor){
    return this.http.get(this.baseAnd+"/surtidor/"+idSurtidor)
  }

  /* **Verificador** */
  public actualizarVerificador(verificador){
    return this.http.put(this.baseAnd+"/verificador",verificador);
  }
  public eliminarVerificador(idVerificador){
    return this.http.delete(this.baseAnd+"/verificador/"+idVerificador);
  }
  public guardarVerificador(verificador){
    return this.http.post(this.baseAnd+"/verificador",verificador);
  }
  public listarVerificador(pageNumber,pageSize,orderBy,sortDir){
    return this.http.get(this.baseAnd+"/verificador?orderBy="+orderBy+"&pageNo="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }
  public obtenerVerificadorById(idVerificador){
    return this.http.get(this.baseAnd+"/verificador/"+idVerificador);
  }
}
