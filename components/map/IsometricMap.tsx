import React from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface IsometricMapProps {
  center?: [number, number];
  zoom?: number;
}

// Create dynamic component with no SSR
const MapWithNoSSR = dynamic(
  () => import('./MapComponent'),
  { ssr: false }
);

export default function IsometricMap({ center = [-18.7669, 46.8691], zoom = 6 }: IsometricMapProps = {}): React.ReactElement {
  return (
    <div className='h-[500px] w-full rounded-lg overflow-hidden shadow-lg'>
      <MapWithNoSSR center={center} zoom={zoom} />
    </div>
  );
}
