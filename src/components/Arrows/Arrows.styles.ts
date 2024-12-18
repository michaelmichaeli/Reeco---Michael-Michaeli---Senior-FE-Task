import styled from 'styled-components';

export const ArrowButton = styled.button<{ direction: 'prev' | 'next'; orientation: 'horizontal' | 'vertical' | undefined }>`
  position: relative;
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  ${(props) =>
    props.orientation === 'horizontal'
      ? props.direction === 'prev'
        ? 'left: 20px;'
        : 'right: 20px;'
      : props.direction === 'prev'
      ? 'top: 20px;'
      : 'bottom: 20px;'
    }
  opacity: ${(props) => (props.disabled ? '0.3' : ' 0.6')};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transition: opacity 0.3s ease, transform 0.2s;
  font-size: xxx-large;

  &:hover {
    opacity: ${(props) => (props.disabled ? '0.3' : '0.8')};
  }

  &:active {
    transform: ${(props) => (props.disabled ? 'none' : 'scale(0.75)')};  }
`;
