import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkPythonBackend();
    this.checkJavaBackend();
  }

  checkPythonBackend() {
    this.http.get<any>('/python/api/message').subscribe({
      next: (data) => {
        this.pythonMessage = data.message;
        this.pythonStatus = 'healthy ✅';
        console.log('Python backend response:', data);
      },
      error: (err) => {
        this.pythonMessage = 'Could not connect';
        this.pythonStatus = 'unreachable ❌';
        console.error('Python backend error:', err);
      }
    });
  }

  checkJavaBackend() {
    this.http.get<any>('/java/api/message').subscribe({
      next: (data) => {
        this.javaMessage = data.message;
        this.javaStatus = 'healthy ✅';
        console.log('Java backend response:', data);
      },
      error: (err) => {
        this.javaMessage = 'Could not connect';
        this.javaStatus = 'unreachable ❌';
        console.error('Java backend error:', err);
      }
    });
  }
}
