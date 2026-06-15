import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'CI/CD GitOps Dashboard';
  pythonMessage: string = 'Loading...';
  javaMessage: string = 'Loading...';
  pythonStatus: string = 'checking...';
  javaStatus: string = 'checking...';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkPythonBackend();
      this.checkJavaBackend();
    }
  }

  checkPythonBackend() {
    this.http.get<any>('/python/api/message').subscribe({
      next: (data) => {
        this.pythonMessage = data.message;
        this.pythonStatus = 'healthy ✅';
        this.cdr.detectChanges();
      },
      error: () => {
        this.pythonMessage = 'Could not connect';
        this.pythonStatus = 'unreachable ❌';
        this.cdr.detectChanges();
      }
    });
  }

  checkJavaBackend() {
    this.http.get<any>('/java/api/message').subscribe({
      next: (data) => {
        this.javaMessage = data.message;
        this.javaStatus = 'healthy ✅';
        this.cdr.detectChanges();
      },
      error: () => {
        this.javaMessage = 'Could not connect';
        this.javaStatus = 'unreachable ❌';
        this.cdr.detectChanges();
      }
    });
  }
}
