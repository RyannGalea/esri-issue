import { Injectable, RendererFactory2, Injector, Renderer2 } from '@angular/core'
import Map from 'esri/Map'
import MapView from 'esri/views/MapView'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MapService  {

  public _map: Map
  public _mapView: MapView
  public _container: HTMLDivElement
  public _renderer: Renderer2
  public _mapView$: BehaviorSubject<MapView> = new BehaviorSubject<MapView>(null)

  constructor(
    protected injector: Injector,
    private rendererFactory: RendererFactory2,
  ) {

    this._renderer  = this.rendererFactory.createRenderer(null, null)
    this._container = this._renderer.createElement('div')
    this._map       = new Map({basemap: 'topo-vector'})
    this._mapView   = new MapView({ container: this._container, map: this._map })
    this._mapView.when(() => this._mapView$.next(this._mapView))

  }
  
}
