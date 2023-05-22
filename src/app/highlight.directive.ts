import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight],.appHighlight'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseover') fl() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') f2() {
    this.el.nativeElement.style.backgroundColor = '';
  }  

}
