import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login-service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  loginForm = {
    "username": '',
    "password": ''
  }
  //Constructor
  constructor(private login: LoginService , private router: Router) { }

  ngOnInit(): void {}

  //Metodo para ingresar al dashboard corresponiente
  loginSubmit() {
    if (this.loginForm.username.trim() == '' || this.loginForm.username.trim() == null) {
      Swal.fire("Ingreso","Verifica que estes poniendo el usuario","warning");
      return;
    }
    if (this.loginForm.password.trim() == '' || this.loginForm.password.trim() == null) {
      Swal.fire("Ingreso","Verifica que estes poniendo la contraseña","warning");
      return;
    }
    console.log(this.loginForm);
    //Conexion al service login
    this.login.loginToken(this.loginForm).subscribe(
      (data: any) => {
        console.log(data);
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user: any) => {
            console.log(user);
            this.login.setUser(user);
            //Verificacion de Roles
            if (this.login.getUserRoles() == "ROLE_ADMIN") {
              Swal.fire("Ingreso","Ingreso Correcto","success");
              this.router.navigate(['admin']);
            }
            else{
              Swal.fire("Ingreso","Ocurrio un error al ingresar","error");
              this.login.logout();
            }
          }
        )
      },
      (error) => {
        Swal.fire("Error","Usuario o contraseña incorrecta, favor de intentar","error");
       
      }
    )
}
}
