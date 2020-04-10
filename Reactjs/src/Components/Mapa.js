
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import {PushpinFilled,ShopOutlined } from '@ant-design/icons';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Mapa extends Component {
  static defaultProps = {
    center: {
      lat: 14.084208,
      lng: -90.3784522
    },
    zoom: 10
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '50vh', display: "flex",  marginLeft: "auto"  }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBpqErtiD3LOcJkKarGH8CsQdU0oos0vgM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={14.084208}
            lng={-90.3784522}
            text=<div style={{ fontSize: '16px', color: '#6A82EE' }}><PushpinFilled style={{ fontSize: '19px', color: 'red' }}  />Spring Cleaning<ShopOutlined /></div>
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Mapa;