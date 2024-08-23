import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  textTitle: string = 'OCEAN CRUISING';
  textSecundary: string = '"Ocean Cruising é uma forma de viagem de lazer pelo mar em navios de cruzeiro, oferecendo experiências turísticas a bordo e em diversas paradas ao longo da rota."'
  getImagem1: string = 'assets/img-mar.jpeg';

  textTitle2: string = 'LAND ADVENTURES'
  textSecundary2: string = '"Land Adventures pode se referir a aventuras e atividades ao ar livre que ocorrem em terra, como trilhas, passeios ou explorações em ambientes naturais."'
  getImagem2: string = 'assets/homens-montanha.jpeg'

  textTitle3: string = 'NEARBY ADVENTURES'
  textSecundary3: string = '"Nearby Adventures refere-se a aventuras ou atividades ao ar livre que estão localizadas próximas ao local onde você está."'
  getImagem3: string = 'assets/homem.jpg'

  textTitle4: string = 'RIVER CRUISING'
  textSecundary4: string = '"River cruising é uma forma de viagem de lazer em que se navega por rios em barcos ou cruzeiros, explorando paisagens e cidades ao longo das margens."'
  getImagem4: string = 'assets/imagem-barco.jpeg'


  textTitle5: string = 'ROMANTIC TOURS'
  textSecundary5: string = '"Romantic Tours são passeios ou viagens especialmente planejados para casais, focados em criar experiências românticas, como visitas a destinos encantadores ou atividades que celebram o relacionamento."'
  getImagem5: string = 'assets/imagem-casal.jpeg'


  textTitle6: string = 'MULTI-ADVENTURE TOURS'
  textSecundary6: string = '"Multi-Adventure Tours são viagens que combinam diversas atividades ao ar livre, como caminhada, ciclismo, caiaque, e outras, oferecendo uma experiência variada e emocionante em diferentes ambientes."'
  getImagem6: string = 'assets/imagem-homem-bike.jpeg'

  // imagem de outra seçao

  pathImag: string = 'assets/casal-mochila.jpg'
  textPrincipal: string = 'International Land Adventures'
  textPrincipal2: string = 'Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
  textButton2: string = 'CONTACT US'



  // terceira seção

    textSumer: string = 'off Summer Tours'
    textSumer2: string = '"Conveniently book your personal appointment online. Choose your preferred date, time, service, Stylist or Barber, and receive an email confirming all the details."'
    textButtomSumer: string = 'LEARN MORE!'
    imgSumer: string = 'assets/casal-feminino.jpeg'

// quarta seção

textPrincipal3: string = 'The perfect vacation starts with the right travel partner'
pathImagem1: string = 'assets/home-mulher.jpeg'
textSecundario: string = '"Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."'






}

