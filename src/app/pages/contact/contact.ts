import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeeppyy';

type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly http = inject(HttpClient);

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
    _gotcha: [''], // Spam trap: hidden from people, but bots fill it in.
  });

  protected readonly status = signal<SendStatus>('idle');

  protected send(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // Show every error message at once.
      return;
    }

    this.status.set('sending');
    this.http
      .post(FORMSPREE_ENDPOINT, this.form.getRawValue(), {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: () => {
          this.status.set('sent');
          this.form.reset();
        },
        error: () => this.status.set('error'),
      });
  }

  /** True once the visitor has left a field and its value is invalid. */
  protected showError(field: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[field];
    return control.touched && control.invalid;
  }
}