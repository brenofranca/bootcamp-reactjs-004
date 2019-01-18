import styled from 'styled-components';

export const NotFound = styled.div`
  font-weight: normal;
  font-size: 20px;
  text-align: center;
`;

export const Sidebar = styled.ul`
  color: #333;
  background-color: #fff;
  height: 95vh;
  margin: 0 20px;
  max-width: 300px;
  width: 100%;
  padding: 10px;
  overflow: auto;
  position: absolute;
  z-index: 4;

  li {
    border-bottom: 1px solid #f1ecec;
    display: flex;
    padding: 10px;

    :nth-child(1) {
      padding-top: 0;
    }

    div {
      display: flex;
      flex: 1;
    }

    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
`;
