import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    //this._elementRef.nativeElement.style.backgroundColor = 'Yellow'; (Vulnerável a ataques.)
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'Yellow')

   }

}
