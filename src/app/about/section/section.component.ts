import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  textPrincipal: string = 'Enjoy the perfect blend of adventure tours';

  getImage: string = 'assets/montanha-neve.jpeg';
  paragrafoText: string = 'Mountains';
  paragrafoSecundaryText: string =
    '"são grandes elevações naturais da superfície terrestre, geralmente com picos altos e terrenos acidentados."';
  secundaryText: string = 'MORE';

  getImage1: string = 'assets/img-waterfalls.jpeg';
  paragrafoText1: string = 'WATERFALLS';
  paragrafoSecundaryText1: string =
    '"são quedas naturais de água, onde um rio ou córrego desce verticalmente de uma altura."';
  secundaryText1: string = 'MORE';

  getImage2: string = 'assets/imagem-estrada-preview.png';
  paragrafoText2: string = 'Road Travel';
  paragrafoSecundaryText2: string =
    '"significa viagens feitas por estradas usando veículos como carros, ônibus ou motocicletas."';
  secundaryText2: string = 'MORE';

  pathImage: string = 'assets/mulher-olhando.jpeg';
  textPrincipal01: string = 'Your adventure starts here';
  textParagrafo01: string =
    '"Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too."';
  textButton01: string = 'READ MORE';
}
