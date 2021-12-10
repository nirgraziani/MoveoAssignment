import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useUsers } from "../../store/usersContext";

const GOOGLE_MAPS_API_KEY = "AIzaSyC0QHEHzp8gfuh-Qlmf4I9E4K1HTbZfi4A";

const mapContainerStyle = {
  width: "50vw",
  height: "50vh",
  margin: "auto",
  borderRadius: "25px",
  marginTop: "25px",
};

const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY, // ,
  });
  const { selectedUser: userData } = useUsers();
  const lat = Number(userData?.location.coordinates.latitude);
  const lng = Number(userData?.location.coordinates.longitude);
  const center = {
    lat: lat,
    lng: lng,
  };
  const renderMap = () => {
    return (
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>
        <Marker position={center}></Marker>
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Loading...</div>;
};

export default GoogleMaps;
