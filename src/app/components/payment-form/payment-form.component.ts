import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css',
})
export class PaymentFormComponent {
  payment = {
    userId: 0,
    status: 'Success',
    amount: 0,
    paymentMethod: 'Card',
    transactionId: '',
    tStamp: new Date().toISOString(),
  };

  response: any;
  errorMessage: string = '';

  constructor(private paymentService: PaymentService) {}

  submitPayment() {
    console.log(this.payment);
    if (!this.payment.userId || this.payment.userId <= 0) {
      this.errorMessage = 'Invalid User ID. Please enter a positive number.';
      return;
    }
    if (!this.payment.amount || this.payment.amount <= 0) {
      this.errorMessage = 'Invalid Amount. Please enter a valid amount.';
      return;
    }
    this.paymentService
      .submitPayment(this.payment.userId, this.payment)
      .subscribe({
        next: (res) => {
          this.response = res;
          this.payment = {
            userId: 0,
            status: 'Success',
            amount: 0,
            paymentMethod: 'Card',
            transactionId: '',
            tStamp: new Date().toISOString(),
          };
        },
        error: (err) => {
          if (err.status === 404) {
            this.errorMessage = 'User not found.';
          } else if (err.status === 400) {
            this.errorMessage = 'Invalid payment data.';
          } else {
            this.errorMessage = 'An unexpected error occurred.';
          }
        },
      });
  }
}
