import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TaskDetails from '../TaskDetails.js';


const map_style = {
  width: '100%',
  height: '100%'
}
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render(props) {

    const tasks=this.props.tasks;
    let i=0;
    let ini_lat,ini_lng;

    for(i=0;i<tasks.length;i++)
    { if(tasks[i].seq===1)
     {  ini_lat=tasks[i].location.lat;
        ini_lng=tasks[i].location.lon;
     }
    }

    return (
      <div>

          <Map google={this.props.google}
              onClick={this.onMapClicked}
              initialCenter={{lat: ini_lat, lng: ini_lng}}
              style={map_style}
          >

            {tasks.map(
                (task)=>(

                    <Marker
                        onClick={this.onMarkerClick}
                        name={task.name}
                        seq={task.seq}
                        info={task.customerInfo}
                        position={{lat: task.location.lat, lng: task.location.lon}}
                    >
                    </Marker>
                )
            )}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
               <TaskDetails thiss={this}/>
            </InfoWindow>


          </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB2V12YUrtSFbAjTZqT0Yh4gXsrUGHtypI")
})(MapContainer)