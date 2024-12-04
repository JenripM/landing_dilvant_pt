import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Seccion1Component } from "../../components/inicio/seccion1/seccion1.component";
import { Seccion2Component } from "../../components/inicio/seccion2/seccion2.component";
import { Seccion3Component } from "../../components/inicio/seccion3/seccion3.component";
import { Seccion4Component } from "../../components/inicio/seccion4/seccion4.component";
import { Seccion5Component } from "../../components/inicio/seccion5/seccion5.component";
import { Seccion6Component } from "../../components/inicio/seccion6/seccion6.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, Seccion1Component, Seccion2Component, Seccion3Component, Seccion4Component, Seccion5Component, Seccion6Component],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
