import styled, { css } from 'styled-components';

export default styled.div.attrs({
  className: 'Image',
})`
  ${(props) => {
    const { style } = props;
    return css
  }};
`;