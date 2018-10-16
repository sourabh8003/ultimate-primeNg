import { Component } from '@angular/core';

@Component({
    templateUrl: './dialogdemo.html'
})
export class DialogDemo {

    display: boolean = false;

    showDialog() {
        this.display = true;
    }

    hideDialog() {
        this.display = false;
    }

    public hide(): void {
        console.log('Hello world');
    }

}
