import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useTranslation } from 'react-i18next';
import templeIconSvg from '../../assets/temple-icon.svg';

const customTempleIcon = new L.Icon({
  iconUrl: templeIconSvg,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const MapComponent = ({ temples, onMarkerClick }) => {
  const { t } = useTranslation();
  const centerPosition = [22.998, 120.203];

  return (
    <MapContainer center={centerPosition} zoom={16} className="map-container">
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {temples.map((temple) => (
        <Marker
          key={temple.id}
          position={temple.coords}
          icon={customTempleIcon}
          eventHandlers={{
            click: () => {
              onMarkerClick(temple);
            },
          }}
        >
          <Popup>
            {t(`${temple.translationKey}.name`)}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
