import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: '+this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck(){
    console.log('ngDocheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
    console.log('Text Content: '+this.header.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }
}
