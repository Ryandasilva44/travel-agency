import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  textParagrafo: string = 'TRAVEL AGENCY';
  textPrincipal: string = 'Your Adventure Starts Here';
  textButton: string = 'START PLANNING';
}
