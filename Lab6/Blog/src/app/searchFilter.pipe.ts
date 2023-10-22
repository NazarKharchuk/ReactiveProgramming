import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './app.component';

@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchFilterPipe implements PipeTransform {
    transform(posts: Post[], search: string = ''): Post[] {
        if (!search.trim()) {
            return posts;
        }
        return posts.filter(post => { return post.title.toLowerCase().includes(search.toLowerCase()) })
    }
}