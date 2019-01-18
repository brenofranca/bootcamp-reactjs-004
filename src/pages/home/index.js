import React from 'react';

import { Container } from './styles';

import Map from '../../components/Map';
import Developers from '../../components/Developers';

const Home = () => (
  <Container>
    <Developers />
    <Map />
  </Container>
);

export default Home;
