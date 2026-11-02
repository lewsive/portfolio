import { Injectable, computed } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { PostMeta } from '../models/posts';

@Injectable({ providedIn: 'root' })
export class BlogService {
  readonly posts = httpResource<PostMeta[]>(() => 'content/posts.json');

  readonly sortedPosts = computed(() =>
    this.posts.hasValue() ? [...this.posts.value()].sort((a, b) => b.date.localeCompare(a.date)) : [],
  );

  findPost(slug: string): PostMeta | undefined {
    return this.sortedPosts().find((post) => post.slug === slug);
  }
}