import { Component } from '@angular/core';
import { Booking } from '../../../interfaces/booking';
import { BookingService } from '../../../services/booking.service';
import { FormatDatePipe } from '../../../pipes/format-date.pipe';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [FormatDatePipe],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css',
})
export class MyBookingsComponent {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService){
    this.bookingService.getBookingsByUserId("666d700ab9be50163c943e6a").subscribe({
      next: (response)=>{
        this.bookings = response as Booking[]
      },
      error: ()=>{

      }
    })
  }
}
