import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { ContadoComponent } from './pages/contado/contado.component';
import { AboutComponent } from './about/about/about.component';
import { SectionComponent } from './about/section/section.component';
import { GalleryComponent } from './about/gallery/gallery.component';
import { ImgfooterComponent } from './about/imgfooter/imgfooter.component';
import { PageComponent } from './pages/page/page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    ContadoComponent,
    AboutComponent,
    SectionComponent,
    GalleryComponent,
    ImgfooterComponent,
    PageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
