import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul `
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 35px;
`;

export const FeedbackOptionsBtn = styled.button `
  font-family: monospace;
  background-color: #f3f7fe;
  color: #3b82f6;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 45px;
  transition: 0.3s;
  font-size: 17px;

  &:hover {
    background-color: #3b82f6;
    box-shadow: 0 0 0 5px #3b83f65f;
    color: #fff;
    cursor: pointer;
  }
`;