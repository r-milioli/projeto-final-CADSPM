import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="show" class="notification" [class]="type">
      <div class="notification-content">
        <i [class]="iconClass"></i>
        <span class="notification-message">{{ message }}</span>
        <button class="notification-close" (click)="close()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      min-width: 300px;
      max-width: 400px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      animation: slideIn 0.3s ease-out;
    }

    .notification-content {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
    }

    .notification-message {
      flex: 1;
      font-weight: 500;
    }

    .notification-close {
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .notification-close:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    .success {
      background: var(--success-color);
      color: white;
    }

    .error {
      background: var(--danger-color);
      color: white;
    }

    .warning {
      background: var(--accent-color);
      color: white;
    }

    .info {
      background: var(--primary-color);
      color: white;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `]
})
export class NotificationComponent {
  @Input() show = false;
  @Input() message = '';
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';

  get iconClass(): string {
    switch (this.type) {
      case 'success': return 'fas fa-check-circle';
      case 'error': return 'fas fa-exclamation-circle';
      case 'warning': return 'fas fa-exclamation-triangle';
      case 'info': return 'fas fa-info-circle';
      default: return 'fas fa-info-circle';
    }
  }

  close() {
    this.show = false;
  }
}
