import styled, { css } from 'styled-components';

export default styled.div.attrs({
  className: 'component',
})`
  ${(props) => {
    return css
  }};
`;