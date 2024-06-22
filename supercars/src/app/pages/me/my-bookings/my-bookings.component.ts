import { Component } from '@angular/core';
import { Booking } from '../../../interfaces/booking';
import { BookingService } from '../../../services/booking.service';
import { FormatDatePipe } from '../../../pipes/format-date.pipe';
import { DivisaPipe } from '../../../pipes/divisa.pipe';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [FormatDatePipe,DivisaPipe],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css',
})
export class MyBookingsComponent {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService, private authService: AuthService){
    this.bookingService.getBookingsByUserId(authService.user!.id).subscribe({
      next: (response)=>{
        this.bookings = response as Booking[]
      },
      error: ()=>{

      }
    })
  }
}
