import { MessageService } from './../../services/message.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  page:number = 0;
  count:number = 5;
  pages:Array<number>;
  message: {};
  classCss: {};
  clientes = [];

  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.clienteService.findAll().subscribe((responseApi: ResponseApi) => {
      this.clientes = responseApi['data'];
    }, error => {
      this.showMessage({
        type: 'error',
        text: error['error']['errors']
      });
    });
  }

  edit(id:string){
    this.router.navigate(['/cliente-edit',id]);
  }

  delete(id:string){
    this.messageService.confirm('Você irá deletar o cliente ?')
      .then((candelete:boolean) => {
        if(candelete){
          this.message = {};
          this.clienteService.delete(id).subscribe(() => {
            this.showMessage({
              type: 'success',
              text: 'Registro deletado'
            });
            this.findAll();
          }, error => {
            this.showMessage({
              type: 'error',
              text: error['error']['errors'][0]
            });
          });
        }
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
