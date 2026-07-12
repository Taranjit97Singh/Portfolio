import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Profile } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profile!: Profile;

  stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '12+', label: 'Projects Built' },
    { value: '4+', label: 'State Departments Served' },
    { value: '1cr+', label: 'Beneficiaries Impacted' }
  ];

  highlights = [
    'Backend security (JWT, API encryption, Rate limiting)',
    'Dynamic frontend layouts with Angular & React.js',
    'AI-powered computer vision (YOLOv8, TensorFlow)',
    'E-Governance solutions & portal development'
  ];

  education = [
    {
      degree: 'Bachelor of Engineering (B.E.) in Computer Science & Engineering',
      institution: 'Chandigarh College of Engineering and Technology (CCET), Sec-26',
      period: '2015 - 2019'
    },
    // {
    //   degree: 'Class XII (Senior Secondary)',
    //   institution: 'Govt. Model Senior Secondary School, Sec-33 D, Chandigarh',
    //   period: '2014 - 2015'
    // }
    // ,
    // {
    //   degree: 'Class X (Matriculation)',
    //   institution: 'Govt. Model Senior Secondary School, Sec-33 D, Chandigarh',
    //   period: '2012 - 2013'
    // }
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe((p) => (this.profile = p));
  }
}
