import { Component } from '@angular/core';


@Component({
  selector: 'app-contado',
  templateUrl: './contado.component.html',
  styleUrls: ['./contado.component.scss'],
})
export class ContadoComponent {
textCadastro: string = 'Formulário de Contado';

handleSubmit(){
  const name = (document.getElementById('name') as HTMLInputElement).value
  const email = (document.getElementById('email') as HTMLInputElement).value
  const message = (document.getElementById('message') as HTMLTextAreaElement).value

  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  (document.getElementById('name') as HTMLInputElement).value = '';
  (document.getElementById('email') as HTMLInputElement).value = '';
  (document.getElementById('message') as HTMLTextAreaElement).value = ''
}

}
