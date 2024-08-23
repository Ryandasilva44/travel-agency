import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  textTitle: string = 'Good Trips Only'
  secundaryText: string = '"significa focar em ter experiências de viagem positivas, buscando apenas viagens que tragam alegria e satisfação. A frase sugere evitar situações negativas, aproveitando ao máximo cada jornada com boas"'
  textButton: string = 'LEARN MORE'
  imgNoite: string = 'assets/noite-estrelada.gif'

}
