import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import { env } from "../env.mjs";
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

//this is almost assuredly not how you are supposed to type this env variable, but Zod was being hateful so this is my solution for now. 

//to use mapbox, sign up for a free account on Mapbox, generate a public token, and paste it in your env file as NEXT_PUBLIC_MAPBOX_TOKEN. Note that this has been validated in env.mjs.

const mapboxToken: string = env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = () => {
  return (
    <div className="h-96 w-96">
      <MapContainer center={[40.8054,-74.0241]} zoom={14} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
          <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${mapboxToken}`}
          attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        />
        {/* <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    /> */}
        <Marker 
        position={[40.8054,-74.0241]}
        draggable={true}
        //below temporarily disabled due to typeerror 
        // animate={true}
        >
          <Popup>
            Hey ! you found me
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map