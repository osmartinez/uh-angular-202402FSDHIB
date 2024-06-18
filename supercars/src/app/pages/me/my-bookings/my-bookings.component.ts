import { Component } from '@angular/core';
import { Booking } from '../../../interfaces/booking';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css',
})
export class MyBookingsComponent {
  bookings: Booking[] = [
    {
      user: { name: 'oscar', email: 'oscar@mail.com', token: '' },
      discount: 0,
      price: 100,
      endDate: new Date(),
      startDate: new Date(),
      vehicle: {
        _id: '0000000',
        __v: 0,
        available: true,
        brand: 'mercedes',
        description: '....',
        image: '....',
        model: 'S',
        pricePerDay: 150,
        year: 2020,
      },
    },
  ];
}
