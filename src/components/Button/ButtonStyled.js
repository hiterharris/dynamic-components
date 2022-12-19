import styled, { css } from 'styled-components';

export default styled.div.attrs({
  className: 'Button',
})`
  ${(props) => {
    const { style } = props;
    return css
  }};
`;