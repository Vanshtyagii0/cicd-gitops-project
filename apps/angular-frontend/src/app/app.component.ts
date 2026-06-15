import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CI/CD GitOps Dashboard';
  pythonMessage: string = 'Loading...';
  javaMessage: string = 'Loading...';
  pythonStatus: string = 'checking...';
  javaStatus: string = 'checking...';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Sirf browser mein HTTP calls karo, SSR mein nahi
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
      },
      error: (err) => {
        this.pythonMessage = 'Could not connect';
        this.pythonStatus = 'unreachable ❌';
      }
    });
  }

  checkJavaBackend() {
    this.http.get<any>('/java/api/message').subscribe({
      next: (data) => {
        this.javaMessage = data.message;
        this.javaStatus = 'healthy ✅';
      },
      error: (err) => {
        this.javaMessage = 'Could not connect';
        this.javaStatus = 'unreachable ❌';
      }
    });
  }
}
