import { Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog-service';

interface SkillGroup {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly blog = inject(BlogService);

  protected readonly skillGroups: SkillGroup[] = [
    { name: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'C#'] },
    { name: 'Frameworks', skills: ['Angular', 'React', 'Node.js', 'Express', 'FastAPI'] },
    { name: 'Tools', skills: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'Linux'] },
  ];

  /** The three newest posts, for the "Latest writing" section. */
  protected readonly latestPosts = computed(() => this.blog.sortedPosts().slice(0, 3));
}