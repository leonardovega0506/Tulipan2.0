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
  public asignarSurtidor(claveSurtidor,absEntry,tipo){
    return this.http.post(this.baseAnd+"/picking/surtidor?absEntry="+absEntry+"&claveSurtidor="+claveSurtidor+"&tipo="+tipo,absEntry);
  }
  public asignarVerificador(claveVerificador,absEntry,tipo){
    return this.http.post(this.baseAnd+"/picking/verificador?absEntry="+absEntry+"&claveVerificador="+claveVerificador+"&tipo="+tipo,absEntry);
  }
  public listarPicking(pageNumber,pageSize,orderBy,sortDir){
    return this.http.get(this.baseAnd+"/picking?orderBy="+orderBy+"&pageNo="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }
  public listarPickingByDate(pageNumber,pageSize,orderBy,sortDir,fecha,tipo){
    return this.http.get(this.baseAnd+"/picking/fecha?date="+fecha+"&orderBy="+orderBy+"&pageNo="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sortDir+"&tipo="+tipo);
  }

  public obtenerPickingByAbsentry(absEntry,tipo){
    return this.http.get(this.baseAnd+"/picking/absEntry?absEntry="+absEntry+"&tipo="+tipo);
  }

  public obtenerPickingById(idPicking,tipo){
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

  generarTiempoIniciosurtido(registro,tipo){
    return this.http.put(this.baseAnd+"/registro/inicio_surtido?tipo="+tipo,registro);
  }

  generarTiempoTerminoSurtido(registro,tipo){
    return this.http.put(this.baseAnd+"/registro/termino_surtido?tipo="+tipo,registro);
  }

  generarTiempoInicioVerificado(registro,tipo){
    return this.http.put(this.baseAnd+"/registro/inicio_verificado?tipo="+tipo,registro);
  }
  
  generarTiempoTerminoVerificado(registro,tipo){
    return this.http.put(this.baseAnd+"/registro/termino_verificado?tipo="+tipo,registro);
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
