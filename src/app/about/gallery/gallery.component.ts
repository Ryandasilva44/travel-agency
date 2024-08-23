import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  imgIcon: string = 'assets/citar.png'
  textAspa: string = '"Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc"'
  aspaName: string = 'CELIA ALMEDA'
  aspaName1: string = 'SASHA PAYNE'
  aspaName2: string = 'ANN RICHMOND'
  aspaName3: string = 'PETER HOWARD'
  aspaName4: string = 'PHOEBE NELSON'
  aspaName5: string = 'MONICA POULI'

}
