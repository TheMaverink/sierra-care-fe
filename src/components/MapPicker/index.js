import React from "react";
import styled from "styled-components";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { setDefaults, fromLatLng } from "react-geocode";
import PlacesAutocomplete from "./PlacesAutoComplete";
import Button from "@mui/material/Button";

setDefaults({
  key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  language: "en",
  region: "us",
});

const MapPickerWrapper = styled.div`
  width: 100%;
  height: 360px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .places-container {
  }

  .map-container {
    height: 100%;
    width: 100%;
    border-radius: 6px;
  }

  .map-button {
  }
`;

const MapPicker = ({ locationCoordinates, setCurrentAddressLoc }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [selectedAddress, setSelectedAddress] = React.useState({
    lat: locationCoordinates?.lat,
    lng: locationCoordinates?.lng,
  });

  const [selectedAddressFormatted, setSelectedAddressFormatted] =
    React.useState("");

  const onMapClick = (e) => {
    setSelectedAddress({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  React.useEffect(() => {
    const convertToAddress = async () => {
      const result = await fromLatLng(selectedAddress.lat, selectedAddress.lng);
      setSelectedAddressFormatted(result?.results[0]?.formatted_address);
    };

    if (selectedAddress) {
      convertToAddress();
    }
  }, [selectedAddress]);

  return (
    <MapPickerWrapper>
      {!isLoaded || !selectedAddress ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="places-container">
            <PlacesAutocomplete setSelectedAddress={setSelectedAddress} />
          </div>
          <GoogleMap
            zoom={10}
            center={selectedAddress}
            mapContainerClassName="map-container"
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            onClick={onMapClick}
          >
            {selectedAddress && <MarkerF position={selectedAddress} />}
          </GoogleMap>

          <Button
            className="map-button"
            variant="contained"
            color="primary"
            onClick={() => setCurrentAddressLoc(selectedAddress,selectedAddressFormatted)}
          >
            Confirm this is where you live
          </Button>
        </>
      )}
    </MapPickerWrapper>
  );
};

export default MapPicker;
