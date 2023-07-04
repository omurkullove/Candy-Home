import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  useMapEvents,
} from 'react-leaflet';

//Для отображения маркера
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 55.75222, lng: 37.61556 });

  const center = [geoData.lat, geoData.lng];

  const [currentLocation, setCurrentLocation] = useState(null);
  const [isFitMarkers, setIsFitMarkers] = useState(false);

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation([latitude, longitude]);
          },
          (error) => {
            console.error('Ошибка при получении местоположения:', error);
          }
        );
      } else {
        console.error('Ваш браузер не поддерживает геолокацию');
      }
    };

    getCurrentLocation();
  }, []);

  const AlignMap = () => {
    const map = useMap();

    if (currentLocation && isFitMarkers) {
      map.fitBounds([currentLocation, geoData]);
    }

    useMapEvents({
      dragend: () => setIsFitMarkers(false),
    });
  };
  function ChangeView({ coords }) {
    const map = useMap();
    map.setView(coords, 12);
    return null;
  }

  return (
    <div>
      <MapContainer
        center={center}
        zoom={20}
        style={{
          height: '26.6vw',
          borderRadius: '1vw',
          width: '67vw',
          maxWidth: '1020px',
          maxHeight: '400px',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[geoData.lat, geoData.lng]}>
          <Popup>Торговый дом - Дарица</Popup>
        </Marker>
        {currentLocation && (
          <Marker position={currentLocation}>
            <Popup>Моя геолокация</Popup>
          </Marker>
        )}
        <ChangeView coords={center} />
        <AlignMap />
      </MapContainer>
      <button onClick={() => setIsFitMarkers(true)}></button>
    </div>
  );
}
