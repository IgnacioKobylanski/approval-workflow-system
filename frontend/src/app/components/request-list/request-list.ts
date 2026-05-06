import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../services/request.service';
import { Request } from '../../models/request.model';

@Component({
  selector: 'app-request-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request-list.html',
  styleUrl: './request-list.scss'
})
export class RequestListComponent implements OnInit {
  private requestService = inject(RequestService);

  requests = signal<Request[]>([]);

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.requestService.getRequests().subscribe({
      next: (data) => {
        console.log('Datos recibidos del back:', data);
        this.requests.set(data);
      },
      error: (err) => console.error('Error al cargar solicitudes:', err)
    });
  }
}