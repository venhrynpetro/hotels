/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapCont extends React.Component {
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
      <Map
        // eslint-disable-next-line react/prop-types
        google={this.props.google}
        zoom={14}
        style={style}
        initialCenter={{
          lat: 49.86472288353224,
          lng: 24.050930595874682
        }}
        onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick}
          title="Volter"
          name="Volter"
          position={{ lat: 49.86472298385324, lng: 24.050930595874682 }}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDZZspKs5RpgXerC3ZuzjXSfBfTQ4pcWb4'
})(MapCont)