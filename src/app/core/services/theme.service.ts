import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDarkSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$: Observable<boolean> = this.isDarkSubject.asObservable();
  
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === 'dark') {
        this.setDarkTheme();
      } else {
        this.setLightTheme();
      }
    }
  }

  toggleTheme(): void {
    if (this.isDarkSubject.value) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  private setLightTheme(): void {
    this.isDarkSubject.next(false);
    if (this.isBrowser) {
      localStorage.setItem('portfolio-theme', 'light');
      document.body.classList.add('light-theme');
    }
  }

  private setDarkTheme(): void {
    this.isDarkSubject.next(true);
    if (this.isBrowser) {
      localStorage.setItem('portfolio-theme', 'dark');
      document.body.classList.remove('light-theme');
    }
  }
}
