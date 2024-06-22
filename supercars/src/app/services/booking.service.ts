import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  url: string = 'http://localhost:3000/api/bookings';
  constructor(private http: HttpClient, private authService: AuthService) {}

  getBookingsByUserId(userId: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.user?.token}`,
    });

    return this.http.get(`${this.url}/user/${userId}`, { headers });
  }

  saveBooking(
    userId: string,
    vehicleId: string,
    sDate: string,
    eDate: string,
    price: number,
    discount: number
  ) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.user?.token}`,
    });

    return this.http.post(this.url, {
      user: userId,
      vehicle: vehicleId,
      startDate: sDate,
      endDate: eDate,
      price: price,
      discount: discount,
    }, {headers});
  }
}
