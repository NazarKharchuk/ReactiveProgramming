import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
<hr> Вправа 1: Інтерполяція <br>

<p>Ім'я: {{name}}</p>
<p>Вік: {{age}}</p>

<hr> Вправа 2: Прив'язка властивостей елементів HTML <br>

<input type="text" [value]="name" />
<input type="text" [value]="age" />

<hr> Вправа 3. Прив'язка до атрибуту <br>

<table border="1">
    <tr><td [attr.colspan]="colspan">One-Two</td></tr>
    <tr><td>Three</td><td>Four</td></tr>
    <tr><td>Five</td><td>Six</td></tr>
</table>

<hr> Вправа 4. Прив'язка до події <br>

<p>Кількість кліків {{count}}</p>
<button (click)="increase()">Click</button>

<p>Кількість кліків {{count_2}}</p>
<button (click)="increase_2($event)">Click</button>

<hr> Вправа 5. Двостороння прив'язка <br>

<p>Привіт {{name}}</p>
<input type="text" [(ngModel)]="name" /> <br><br>
<input type="text" [(ngModel)]="name" />
`
})
export class AppComponent {
    name = "Tom";
    age = 25;
    colspan = 2;
    count: number = 0;
    increase(): void {
        this.count++;
    }
    count_2: number = 0;
    increase_2($event: any): void {
        this.count_2++;
        console.log($event);
    }

}