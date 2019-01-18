import React from 'react';
import { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

import { Container } from './styles';

const CustomMarker = ({ developer }) => (
  <Marker latitude={developer.latitude} longitude={developer.longitude}>
    <Container>
      <img src={developer.avatar} alt={developer.login} />
    </Container>
  </Marker>
);

CustomMarker.propTypes = {
  developer: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default CustomMarker;
