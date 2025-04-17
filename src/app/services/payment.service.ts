import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseUrl = 'https://fsd-springboot-axh8.onrender.com/payment';

  constructor(private http: HttpClient) {}

  submitPayment(userId: number, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add/${userId}`, data);
  }

  getAllPayments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get`);
  }
}
