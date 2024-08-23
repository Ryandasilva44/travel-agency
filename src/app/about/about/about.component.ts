import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  textTitle: string = 'TRAVEL AGENCY';
  textTitle2: string = 'Wanderlust';
  textTitle3: string = 'Wonderful tours';
  textTitle4: string =
    '"Duis aute irure dolor in reprehenderit in voluptate velit esse."';
  textButton: string = 'READ MORE';

  imgIcon: string = 'assets/icon-tour-removebg-preview.png';
  imgIcon1: string = 'assets/icon-mundo-removebg-preview.png';
  imgIcon2: string = 'assets/icon-adventure-removebg-preview.png';
  imgIcon3: string = 'assets/icon-hotel-removebg-preview.png';

  textParagrafo: string = 'Traveller Tours';
  textDestacado: string =
    '"significa uma empresa ou serviço que organiza e oferece passeios e excursões para viajantes."';
  textParagrafo1: string = 'Explore The World';
  textDestacado1: string =
    '"significa descobrir e vivenciar diferentes lugares, culturas e experiências ao redor do mundo.';
  textParagrafo2: string = 'Adventure Vacations';
  textDestacado2: string =
    '"significa férias focadas em atividades emocionantes  e aventuras em ambientes naturais."';
  textParagrafo3: string = 'Luxurious Hotels';
  textDestacado3: string =
    '"refere-se a hotéis de alto padrão que oferecem acomodações sofisticadas"';


    titleText: string = 'Good Trips Only'
    titleTextSecundary: string = '"significa a busca por experiências de viagem positivas e agradáveis, evitando situações negativas."'
    buttonText: string = 'LEARN MORE'
    getImag: string = 'assets/home-mulher.jpeg'


    getImag1: string = 'assets/floresta-fumaça.jpeg'
    getImag2: string = 'assets/montanha-fumaça.jpeg'
    getImag3: string = 'assets/montanha-gelo.jpeg'

    paragrafoText: string = 'Backpacking Trips'
    paragrafoTextSecundary: string = '"significa viagens econômicas e independentes, onde o viajante explora destinos carregando uma mochil"'
    textButton1: string = 'READ MORE'


    textTitle01: string = 'Small group travel that`s good all over'
    textButton2: string = 'READ MORE'
    getImagem: string = 'assets/homem-sentado.jpeg'

}
