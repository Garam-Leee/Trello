import React from 'react';
import styled from '@emotion/styled';

export default function CustomBtn(props) {
  const { text, backgroundColor, fontColor, fontSize, width, height, onClick } =
    props;
  return (
    <Button
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      fontSize={fontSize}
      width={width}
      height={height}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`;
