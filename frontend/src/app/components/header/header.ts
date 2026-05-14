import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  authService = inject(AuthService);
  router = inject(Router);

  get userFullName() {
    return localStorage.getItem('user_name') || 'Usuario';
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}