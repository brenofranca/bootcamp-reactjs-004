import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

export const Feedback = styled.div`
  border-radius: 3px;
  color: #fff;
  font-size: 15px;
  margin-top: 10px;
  max-width: 500px;
  padding: 10px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${props => (props.feedbackType !== 'SUCCESS' ? '#e86d6d' : '#03a903')};
`;

export const Form = styled.form`
  background-color: #fff;
  margin-top: 20px;
  max-width: 400px;
  padding: 20px;
  width: 100%;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: ${props => (props.feedbackType !== '' ? '230px' : '200px')};

  header {
    color: #000;
    display: flex;
    justify-content: center;
    font-size: 15px;
  }

  input {
    height: 45px;
    padding: 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.feedbackType !== '' && props.feedbackType !== 'SUCCESS'
    ? '2px solid #e86d6d'
    : '2px solid #ccc')};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  button {
    border: 0;
    border-radius: 3px;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    flex: 1;

    &:nth-child(1) {
      background-color: #999;
      color: #fff;
      margin-right: 5px;

      &:hover {
        background-color: #666;
      }
    }
    &:nth-child(2) {
      background-color: #03a903;
      color: #fff;
      margin-left: 5px;

      &:hover {
        background-color: #008000;
      }
    }
  }
`;
