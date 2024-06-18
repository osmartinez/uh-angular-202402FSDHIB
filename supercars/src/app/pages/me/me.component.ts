import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css'
})
export class MeComponent {

}
