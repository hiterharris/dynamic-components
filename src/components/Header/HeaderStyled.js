import styled, { css } from 'styled-components';

export default styled.div.attrs({
  className: 'Header',
})`
  ${(props) => {
    const { style } = props;
    return css
  }};
`;
