import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SkillGroup {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})


export class Home {
  protected readonly skillGroups: SkillGroup[] = [
    { name: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'C#'] },
    { name: 'Frameworks', skills: ['Angular', 'React', 'Node.js', 'Express', 'FastAPI'] },
    { name: 'Tools', skills: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'Linux'] },
  ];
}
