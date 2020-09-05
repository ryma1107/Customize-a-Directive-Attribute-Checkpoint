import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @Input() out = 'yellow';
  @Input() in = 'red';
  @HostBinding('style.backgroundColor') bg = this.out;

   @HostBinding('style.color') color;
  @HostBinding('style.bordercolor') bc;
     generateRandomColor(): string{
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  constructor() { }

  @HostListener('keyup') changeColor() {
    this.bc = this.generateRandomColor();
    this.color = this.generateRandomColor();
  }

  @HostListener('mouseenter') enter(){
    this.bg = this.in;
  }
  @HostListener('mouseleave') leave(){
    this.bg = this.out;
  }

}
