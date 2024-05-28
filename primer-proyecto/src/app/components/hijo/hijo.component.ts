import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() nombre: string = ""
  @Input() contadorHijo!: number 
  @Input() colorHijo: string = "green"
}
