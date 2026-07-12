import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  
  activeFilter: 'all' |  'fullstack' | 'frontend' | 'backend' = 'all';
  selectedProject: Project | null = null;

  filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'frontend', label: 'Frontend' },
    // { key: 'ai-ml', label: 'AI & ML' },
    { key: 'backend', label: 'Backend' },

    
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe((projects) => {
      this.allProjects = projects;
      this.filterProjects();
    });
  }

  setFilter(filterKey: any): void {
    this.activeFilter = filterKey;
    this.filterProjects();
  }

  openDetails(project: Project): void {
    this.selectedProject = project;
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeDetails(): void {
    this.selectedProject = null;
    // Restore body scrolling
    document.body.style.overflow = '';
  }

  private filterProjects(): void {
    if (this.activeFilter === 'all') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter(
        (p) => p.category === this.activeFilter
      );
    }
  }
}
