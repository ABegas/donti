import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '500px'
}

export const customMapStyle = [
    {
      elementType: "geometry",
      stylers: [{ color: "#232323" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#c7caa8" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#232323" }],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [{ color: "#c7caa8" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#2f2f2f" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#c7caa8" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#3b3b3b" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1a1a1a" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#c7caa8" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2a2a2a" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#1a1a1a" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#c7caa8" }],
    }
]
  
const center = {
    lat: 51.51251115840285,
    lng: -0.08842531579294725
};

const FooterGoogleMap = () => {
    let customIcon = null
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) {
        return <p>Loading map...</p>
    } else {
        customIcon = {
            url: '/icons/marker.png', // can be local or external
            scaledSize: new window.google.maps.Size(240, 240), // optional size
            anchor: new window.google.maps.Point(120, 238),    // optional anchor
        }
    } 
    
    return (
        <div className="relative shadow-[0_28px_25px_3px_rgba(0,0,0,0.3)] z-10">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                options={{ styles: customMapStyle }}
            >
                <Marker position={center} icon={customIcon} />
            </GoogleMap>
        </div>
    )
}

export default FooterGoogleMap
