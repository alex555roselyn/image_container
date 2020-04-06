import React from 'react';
import {google,GoogleMaps, InfoWindow} from 'react-google-maps';
import GoogleMapReact from 'google-map-react';

class Marcador extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      zoomLevel: 3,
      center: new google.maps.LatLng(14.509, 90.2256)
    };
  }

  render() {
    return (
      <GoogleMaps containerProps={{
          style: {
            height: '100%'
          }
        }}
        googleMapsApi={google.maps}
        ref="map"
        zoom={this.state.zoomLevel}
        center={this.state.center}
        onCenterChanged={this._handleCenterChanged.bind(this)}
        onZoomChanged={this._handleZoomChanged.bind(this)}>

        <InfoWindow content={`count: ${this.props.data}`} position={{lat: 44, lng: 44}}></InfoWindow>

      </GoogleMaps>
    );
  }

  _handleZoomChanged() {
    const zoomLevel = this.refs.map.getZoom();
    if (zoomLevel !== this.state.zoomLevel) {
      this.setState({zoomLevel});
    }
  }

  _handleCenterChanged() {
    const center = this.refs.map.getCenter();
    if (!center.equals(this.state.center)) {
      this.setState({center});
    }
  }

}
Marcador.defaultProps = {
  data: 1
};

export default Marcador;
