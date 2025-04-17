import { Component } from '@angular/core';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaymentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fsd-frontend';
}
