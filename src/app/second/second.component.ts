import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-seconds',
    template: `<p> Second works <br> <br> {{secondMessage ? secondMessage : "_______"}}   </p>`,
    styles: ['p {color:red}']
})
export class SecondComponent{
    @Input() secondMessage = "";


}
