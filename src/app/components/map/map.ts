import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.html',
  styleUrls: ['./map.css'],
})
export class Map implements OnInit, OnDestroy {
  private map?: any;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const { default: L } = await import('leaflet');

    const container = this.el.nativeElement.querySelector('#map');
    this.map = L.map(container, { attributionControl: false }).setView([41.0082, 28.9784], 12);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      detectRetina: true,
      crossOrigin: true,
    }).addTo(this.map);

    L.marker([41.015137, 28.97953]).addTo(this.map).bindPopup('İstanbul');

    setTimeout(() => this.map.invalidateSize(), 300);
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
      this.map = undefined;
    }
  }
}
