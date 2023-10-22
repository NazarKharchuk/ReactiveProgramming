import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'root'
})
export class RootPipe implements PipeTransform {
    transform(value: number, args?: any): number {
        return Math.sqrt(value);
    }
}