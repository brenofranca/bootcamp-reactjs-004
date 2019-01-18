import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DevelopersActions } from '../../store/ducks/developers';

import { Sidebar, NotFound } from './styles';

import DeveloperItem from './Item';

class Developers extends Component {
  onRemoveDeveloper = (id) => {
    const { removeDevelopersRequest } = this.props;

    removeDevelopersRequest({ id });
  };

  render() {
    const { developers } = this.props;

    return (
      <Sidebar>
        {developers.data.length === 0 ? (
          <NotFound>
            Adicione o primeiro desenvolvedor clicando no
            {' '}
            <strong>MAPA</strong>
            {' '}
ao lado!
          </NotFound>
        ) : (
          developers.data.map(developer => (
            <DeveloperItem
              key={developer.id}
              developer={developer}
              onRemoveDeveloper={id => this.onRemoveDeveloper(id)}
            />
          ))
        )}
      </Sidebar>
    );
  }
}

Developers.propTypes = {
  removeDevelopersRequest: PropTypes.func.isRequired,
  developers: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.string]),
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        login: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        node: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DevelopersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Developers);
