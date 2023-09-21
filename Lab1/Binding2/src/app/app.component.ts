import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
<hr> Вправа 6. Прив'язка до класів CSS <br>

<div [class.isredbox]="isRed"></div>
<div [class.isredbox]="!isRed"></div>
<input type="checkbox" [(ngModel)]="isRed" />

<div [class]="blue"></div>

<hr> Вправа 7. Прив'язка стилів <br>

<div [style.backgroundColor]="isyellow? 'yellow' : 'blue'"></div>
<div [style.background-color]="!isyellow ? 'yellow' : 'blue'"></div>
<input type="checkbox" [(ngModel)]="isyellow" />

`,
    styles: [`
 div {width:50px; height:50px; border:1px solid #ccc}
 .isredbox{background-color:red;}
 .isbluebox{background-color:blue;}
 `]
})
export class AppComponent {
    isRed = false;
    blue = "isbluebox";
    isyellow = false;

}