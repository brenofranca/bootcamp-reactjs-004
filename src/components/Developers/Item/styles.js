import styled from 'styled-components';

export const Username = styled.div`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;

  span {
    font-size: 14px;
    color: #999;
    width: 170px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  button {
    background: #f56c6c;
    border-radius: 50%;
    border: 0;
    font-size: 12px;
    height: 20px;
    margin-right: 15px;
    width: 20px;

    i {
      color: #fff !important;
    }

    &:hover {
      background: #ff3737;
    }
  }

  a {
    color: #999;
    font-size: 12px;

    &:hover {
      color: #000;
    }
  }
`;
