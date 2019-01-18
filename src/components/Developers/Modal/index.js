import React from 'react';
import PropTypes from 'prop-types';

import { Container, Form, Feedback } from './styles';

const ModalDeveloper = ({
  show,
  onSubmited,
  onChanged,
  feedback,
  loading,
  handleDisplayModal,
  developerInput,
}) => (
  <div>
    {show && (
      <Container>
        <Form onSubmit={onSubmited} feedbackType={feedback.type}>
          <header>
            <h3>Adicionar novo usuário</h3>
          </header>
          <input
            type="text"
            placeholder="Usuário no Github"
            value={developerInput}
            onChange={e => onChanged(e)}
          />
          <div>
            <button type="button" onClick={handleDisplayModal}>
              Cancelar
            </button>
            <button type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
            </button>
          </div>
          {!!feedback.message && (
            <Feedback feedbackType={feedback.type}>{feedback.message}</Feedback>
          )}
        </Form>
      </Container>
    )}
  </div>
);

ModalDeveloper.propTypes = {
  show: PropTypes.bool.isRequired,
  handleDisplayModal: PropTypes.func.isRequired,
  feedback: PropTypes.shape({
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.oneOfType([PropTypes.bool]).isRequired,
  developerInput: PropTypes.oneOfType([PropTypes.string]).isRequired,
  onChanged: PropTypes.func.isRequired,
  onSubmited: PropTypes.func.isRequired,
};

export default ModalDeveloper;
