import { Injectable, RendererFactory2, Renderer2 } from '@angular/core'
import Map from 'arcgis-js-api/Map'
import MapView from 'arcgis-js-api/views/MapView'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MapService  {

  public map: Map
  public mapView: MapView
  public container: HTMLDivElement
  public renderer: Renderer2
  public mapView$: BehaviorSubject<MapView> = new BehaviorSubject<MapView>(null)

  constructor(private rendererFactory: RendererFactory2) {

    this.renderer  = this.rendererFactory.createRenderer(null, null)
    this.container = this.renderer.createElement('div')
    this.map       = new Map({basemap: 'topo-vector'})
    this.mapView   = new MapView({ container: this.container, map: this.map })
    this.mapView.when(() => this.mapView$.next(this.mapView))

  }
  
}
