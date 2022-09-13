import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({ // angular decorators this is class decorator changes the behaviour and attributes of a class
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {

  @Input('LightBox') highLightColor:string="yellow"; //properity directive
  @Input() defaultColor:string="darkblue"; //properity directive
  constructor(private eleRef: ElementRef) {
    //this.eleRef.nativeElement.style.border=`2px solid ${this.defaultColor}`;
   }
  ngOnChanges(): void {
    this.eleRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
  }


   @HostListener('mouseover') onMouseOver(){ //method directive
    this.eleRef.nativeElement.style.border=`3px solid ${this.highLightColor}`;
   }

   @HostListener('mouseout') onMouseOut(){
    this.eleRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
   }

}
