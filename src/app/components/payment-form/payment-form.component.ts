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

  constructor(private paymentService: PaymentService) {}

  submitPayment() {
    console.log(this.payment);
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
        error: (err) => console.error('Error submitting payment:', err),
      });
  }
}
