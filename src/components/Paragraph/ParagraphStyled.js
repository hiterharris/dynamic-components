import styled, { css } from 'styled-components';

export default styled.div.attrs({
  className: 'Paragraph',
})`
  ${(props) => {
    const { style } = props;
    return css
  }};
`;
