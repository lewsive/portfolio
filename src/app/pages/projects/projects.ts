import { Component, computed, signal } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  //every tech used accross all projects, sorted alphabetically and with duplicates removed
  protected readonly allTech = [...new Set(PROJECTS.flatMap((project) => project.tech))].sort();

  //signal that holds the currently selected tech, or null if no tech is selected
  protected readonly selectedTech = signal<string | null>(null);

  //computed property that returns the projects that match the selected tech, or all projects if no tech is selected
  protected readonly visibleProjects = computed(() => {
    const tech = this.selectedTech();
    return tech ? PROJECTS.filter((project) => project.tech.includes(tech)) : PROJECTS;
  })

}