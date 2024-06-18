import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MiComponente1Component } from './components/mi-componente-1/mi-componente-1.component';


export function HttpLoaderFactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient)
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TranslateModule, MiComponente1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'i18n-testing';

  constructor(public translate: TranslateService){
    const misIdiomas = ['es','en','fr']
    translate.addLangs(misIdiomas)
    translate.setDefaultLang('en') // idioma de fallback

    // const idiomaNavegador: string = translate.getBrowserLang() === undefined ? translate.getDefaultLang() : translate.getBrowserLang()
    const idiomaNavegador: string = translate.getBrowserLang() ?? translate.getDefaultLang()
    if(misIdiomas.includes(idiomaNavegador)){
      translate.use(idiomaNavegador)
    }
    else{
      translate.use(translate.getDefaultLang())
    }

  }

  cambiarIdioma(event: Event){
    const elementoHtml = event.target as HTMLSelectElement
    this.translate.use(elementoHtml.value)

  }


}
