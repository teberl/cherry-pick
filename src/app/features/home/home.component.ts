import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../core/services/supabase.service';

@Component({
    selector: 'app-home',
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  connectionStatus: 'checking' | 'connected' | 'error' = 'checking';

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    try {
      const ok = await this.supabaseService.healthCheck();
      this.connectionStatus = ok ? 'connected' : 'error';
    } catch {
      this.connectionStatus = 'error';
    }
  }
}
