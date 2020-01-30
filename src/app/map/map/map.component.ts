import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'fr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('map', {static: true}) private map: ElementRef

  constructor(private ms: MapService) { }

  ngOnInit(): void {
    this.ms.renderer.appendChild(this.map.nativeElement, this.ms.container)
  }

}
