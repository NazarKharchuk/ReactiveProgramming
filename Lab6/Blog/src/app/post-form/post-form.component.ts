import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../app.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  title = '';
  text = '';

  myDate$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })

  date1!: Date
  ngOnInit(): void {
    this.myDate$.subscribe(date => {
      this.date1 = date
    })
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: Math.floor(Math.random() * 1000) + 1,
        date: this.date1
      }
      this.onAdd.emit(post);
      console.log('New post', post);
      this.title = this.text = ''; // очищення полів
    }
  }
}
