import React from 'react';
import PropTypes from 'prop-types';

import { Username, Actions } from './styles';

const Item = ({ developer, onRemoveDeveloper }) => (
  <li>
    <div>
      <img src={developer.avatar} alt={developer.login} />
    </div>
    <Username>
      <strong>{developer.login}</strong>
      <span>{developer.node}</span>
    </Username>
    <Actions>
      <button type="button" onClick={() => onRemoveDeveloper(developer.id)}>
        <i className="fa fa-remove" />
      </button>
      <a href={developer.url} target="href">
        <i className="fa fa-chevron-right" />
      </a>
    </Actions>
  </li>
);

Item.propTypes = {
  onRemoveDeveloper: PropTypes.func.isRequired,
  developer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    node: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
