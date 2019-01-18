import React, { Component, Fragment } from 'react';
import ReactMapGL from 'react-map-gl';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import mapBox from '../../services/mapbox';

import { Creators as DevelopersActions } from '../../store/ducks/developers';

import ModalDeveloper from '../Developers/Modal';
import CustomMarker from './Marker';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -3.806182,
      longitude: -38.5912083,
      zoom: 14,
    },
    visibleModal: false,
    developer: {
      input: '',
      latitude: 0,
      longitude: 0,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);

    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  openModalDeveloper = (e) => {
    const { developer } = this.state;

    const [longitude, latitude] = e.lngLat;

    this.setState({ developer: { ...developer, latitude, longitude } });

    this.handleDisplayModal();
  };

  handleDisplayModal = () => {
    const { resetFeedback } = this.props;
    const { developer, visibleModal } = this.state;

    this.setState({
      developer: { ...developer, input: '' },
      visibleModal: !visibleModal,
    });

    resetFeedback();
  };

  onStoreDeveloper = (e) => {
    e.preventDefault();

    const { developer } = this.state;

    const { addDevelopersRequest } = this.props;

    addDevelopersRequest(developer);

    this.setState({
      developer: {
        input: '',
        latitude: 0,
        longitude: 0,
      },
    });
  };

  handleMapClick = (e) => {
    console.log(e);
  };

  render() {
    const { developers } = this.props;
    const { viewport, visibleModal, developer } = this.state;

    return (
      <Fragment>
        <ReactMapGL
          onClick={this.openModalDeveloper}
          mapboxApiAccessToken={mapBox.token}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          onViewportChange={data => this.setState({ viewport: data })}
          {...viewport}
        >
          {developers.data.map(item => (
            <CustomMarker developer={item} key={item.id} />
          ))}
        </ReactMapGL>
        <ModalDeveloper
          show={visibleModal}
          onSubmited={this.onStoreDeveloper}
          loading={developers.loading}
          feedback={developers.feedback}
          developerInput={developer.input}
          handleDisplayModal={this.handleDisplayModal}
          onChanged={e => this.setState({ developer: { ...developer, input: e.target.value } })}
        />
      </Fragment>
    );
  }
}

Map.propTypes = {
  resetFeedback: PropTypes.func.isRequired,
  addDevelopersRequest: PropTypes.func.isRequired,
  developers: PropTypes.shape({
    feedback: PropTypes.shape({
      type: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
    loading: PropTypes.oneOfType([PropTypes.bool]),
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        login: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        node: PropTypes.string.isRequired,
      }).isRequired,
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DevelopersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
