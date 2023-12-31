import { Component, Input } from '@angular/core';

@Component({
  selector: 'sobol-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input({ required: false })
  errorMessage?: string | null | unknown;

  @Input({ required: false })
  successMessage?: string | null;

  @Input({ required: false })
  info?: string | null;
}
