import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkTheme = true;
  isMobileMenuOpen = false;
  isScrolled = false;

  navItems = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Skills', route: '/skills' },
    { label: 'Projects', route: '/projects' },
    { label: 'Experience', route: '/experience' },
    { label: 'Contact', route: '/contact' }
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkTheme$.subscribe(
      (isDark) => (this.isDarkTheme = isDark)
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}

