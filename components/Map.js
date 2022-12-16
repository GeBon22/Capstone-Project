import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import {useEffect, useState, React, useMemo} from "react";
const containerStyle = {
  width: "75vw",
  height: "50vh",
  borderRadius: "10px",
  border: "1px solid #572887",
};
const libraries = ["places", "geometry"];

export default function Map() {
  const [status, setStatus] = useState(null);
  const [center, setCenter] = useState(null);
  const [lawyers, setLawyers] = useState([]);
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const onLoadMap = map => {
    loadLawyers(center, map);
  };
  const options = useMemo(
    () => ({
      mapId: "terrain",
      disableDefaultUI: true,
      clickableIcons: false,
      gestureHandling: "greedy",
    }),
    []
  );
  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus(
        "It seems your browser does not support geolocation. Switch to another browser."
      );
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        position => {
          setStatus(null);
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          setStatus("Locating failed");
        }
      );
    }
  }, []);
  function loadLawyers(location, map) {
    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location: location,
      radius: 5000, // 5 km
      type: ["lawyer"],
    };
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setLawyers(results);
      }
    });
  }

  if (!isLoaded) return "Loading map";
  return (
    <>
      {center && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          options={options}
          onLoad={onLoadMap}
        >
          <Marker position={center} />
          {lawyers.length > 0 &&
            lawyers.map(lawyer => (
              <Marker
                key={lawyer.place_id}
                position={lawyer.geometry.location}
              />
            ))}
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      )}
    </>
  );
}
