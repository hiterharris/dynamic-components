import styled, { css } from 'styled-components';

export default styled.div.attrs({
  className: 'App',
})`
  ${(props) => {
    const { style } = props;
    return css
  }};
`;