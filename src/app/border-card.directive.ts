import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[patientBorderCard]'
})

export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor : string = '#009688';
  private defaultHeight : number = 210;

  constructor(private el: ElementRef) { 
    this.setColorBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('patientBorderCard') borderColor: string; 

  @HostListener('mouseenter') onMouseEnter(){
    this.setColorBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setColorBorder(this.initialColor)
  }

  setHeight(height : number){
    this.el.nativeElement.style.height = height + 'px';
  }
  
  setColorBorder(color : string){
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;

  }
}
