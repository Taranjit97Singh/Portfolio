import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Skill } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  allSkills: Skill[] = [];
  filteredSkills: Skill[] = [];
  
  activeTab: 'all' | 'languages' | 'frontend' | 'backend' | 'devops' | 'databases' | 'ai-ml' = 'all';

  tabs = [
    { key: 'all', label: 'All Skills' },
    { key: 'languages', label: 'Languages' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'databases', label: 'Databases' },
    { key: 'devops', label: 'DevOps & Tools' },
    { key: 'ai-ml', label: 'AI & ML' }
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getSkills().subscribe((skills) => {
      this.allSkills = skills;
      this.filterSkills();
    });
  }

  setTab(tabKey: any): void {
    this.activeTab = tabKey;
    this.filterSkills();
  }

  private filterSkills(): void {
    if (this.activeTab === 'all') {
      this.filteredSkills = this.allSkills;
    } else {
      this.filteredSkills = this.allSkills.filter(
        (s) => s.category === this.activeTab
      );
    }
  }
}
