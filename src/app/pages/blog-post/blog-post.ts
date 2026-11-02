import { Component, computed, effect, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { marked } from 'marked';
import { BlogService } from '../../services/blog-service';

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.css',
})
export class BlogPost {
  //detecting the slug from the route parameters and injecting it into the component
  readonly slug = input.required<string>();

  protected readonly blog = inject(BlogService);
  private readonly title = inject(Title);

  /** This post's title, date and summary from posts.json. */
  protected readonly details = computed(() => this.blog.findPost(this.slug()));

  //requesting the post's markdown file
  protected readonly markdown = httpResource.text(() =>
    this.details() ? `content/posts/${this.slug()}.md` : undefined,
  );

  //convert markdown to html
  protected readonly html = computed(() =>
    this.markdown.hasValue() ? marked.parse(this.markdown.value(), { async: false }) : '',
  );

  constructor() {
    //put the post's title in the browser tab once its details load.
    effect(() => {
      const post = this.details();
      if (post) {
        this.title.setTitle(`${post.title} | Noah Coe`);
      }
    });
  }
}