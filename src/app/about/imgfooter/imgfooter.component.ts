import { Component } from '@angular/core';

@Component({
  selector: 'app-imgfooter',
  templateUrl: './imgfooter.component.html',
  styleUrl: './imgfooter.component.scss'
})
export class ImgfooterComponent {
  titleText: string = 'Tours Nature & Wildlife'
  titleTextSecundary: string = 'Fly with who you want, stay wherever you want — now that`s a dream holiday!'
  logoFacebook: string = 'assets/logo-do-facebook.png'
  logoTwiter: string = 'assets/twitter.png'
  logoInstagram: string = 'assets/instagram.png'
  logoGooglePlus: string = 'assets/google-plus.png'


}
