import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  posts: Post[] = [
    { title: 'Вивчаю компоненти', text: 'Створюю проект "Блог"', id: 1, date: new Date() },
    { title: 'Вивчаю директиви', text: 'Все ще створюю "Блог"', id: 2, date: new Date() },
  ];

  updatePosts(post: Post) {
    console.log('Post', post);
    this.posts.unshift(post);
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }

  search: string = '';
}
