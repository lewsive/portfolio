import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common'
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog-service';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
})
export class BlogList {
  protected readonly blog = inject(BlogService);
}
