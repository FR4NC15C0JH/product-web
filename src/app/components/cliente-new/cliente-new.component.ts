import { Cliente } from './../../model/cliente.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';

@Component({
  selector: 'app-cliente-new',
  templateUrl: './cliente-new.component.html',
  styleUrls: ['./cliente-new.component.css']
})
export class ClienteNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  cliente = new Cliente('','','','',null,null);
  message: {};
  classCss: {};

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(){
    this.message = {};
    this.clienteService.createOrUpdate(this.cliente).subscribe((responseApi: ResponseApi) => {
      this.cliente = new Cliente(null,'','','',null,null);
      let clienteReturn : Cliente = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type: 'success',
        text: `Registered successfully`
      });
      // this.router.navigate(['/login']);
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors']
      });
    });
  }

  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 5000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    }
    this.classCss['alert-'+type] =  true;
  }

}
