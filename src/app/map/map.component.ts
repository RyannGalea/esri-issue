import { Component, OnInit, ElementRef, ViewChild, Renderer2, RendererFactory2 } from '@angular/core';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'fr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('map', {static: true}) private map: ElementRef

  public mapp: Map
  public mapView: MapView
  public container: HTMLDivElement
  public renderer: Renderer2
  public mapView$: BehaviorSubject<MapView> = new BehaviorSubject<MapView>(null)

  constructor(private rendererFactory: RendererFactory2) { 

    this.renderer  = this.rendererFactory.createRenderer(null, null)
    this.container = this.renderer.createElement('div')
    this.mapp      = new Map({basemap: 'topo-vector'} as any)
    this.mapView   = new MapView({ container: this.container, map: this.mapp })
    this.mapView.when(() => this.mapView$.next(this.mapView))

  }

  ngOnInit(): void {
    this.renderer.appendChild(this.map.nativeElement, this.container)
  }

}
