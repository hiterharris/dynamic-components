import styled, { css } from 'styled-components';
import convertHexToRgba from '~/helpers/convertHexToRgba';

export default styled.button.attrs({
  className: 'btn',
  type: 'button',
})`
  ${({ theme, $fixed, $hide, $loading, $small, secondary }) => {
    const { media, colors } = theme;

    return css`
      background-color: ${secondary ? colors.primary.white : colors.primary.red};
      border: 1px solid ${secondary ? colors.primary.darkBlue : colors.primary.red};
      color: ${secondary ? colors.primary.darkBlue : colors.primary.white};
      cursor: pointer;
      display: inline-block;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.25;
      height: ${$small ? '40px' : 'auto'};
      text-decoration: none;
      text-transform: none;
      margin: 0;
      border-radius: 32px;
      padding: ${$small ? '0 24px' : '14px'};
      width: ${$small ? '160px' : '255px'};
      transition: background-color 0.2s, color 0.2s;

      &:disabled {
        background-color: ${convertHexToRgba(colors.primary.red, 0.5)};
        border-color: transparent;
        color: ${colors.primary.white};
        cursor: no-drop;

        &:hover {
          background-color: ${convertHexToRgba(colors.primary.red, 0.5)};
          color: ${colors.primary.white};
        }
      }

      &.is-electric {
        background-color: ${colors.tertiary.teal};
        border-color: ${colors.tertiary.teal};
        color: ${colors.primary.black};

        &:hover {
          background-color: ${colors.primary.darkBlue};
          border-color: ${colors.primary.darkBlue};
          color: ${colors.tertiary.teal};
        }
      }

      &.is-gravity {
        background-color: ${colors.primary.darkBlue};
        border-color: ${colors.primary.gray};
        color: ${colors.primary.whiteSmoke};

        &:hover {
          background-color: ${colors.primary.aluminum};
          border-color: ${colors.primary.gray};
          color: ${colors.primary.whiteSmoke};
        }
      }

      ${!$loading &&
      css`
        &:hover {
          background-color: ${colors.primary.white};
          color: ${secondary ? colors.primary.darkBlue : colors.primary.red};
        }

        &:focus {
          background-color: ${colors.primary.white};
          color: ${colors.primary.red};
        }
      `}

      ${$hide &&
      css`
        display: none !important;
      `}

      ${$loading &&
      css`
        cursor: not-allowed;
        align-items: center;
        display: flex;
        justify-content: center;
      `}

      ${media.mobile.down} {
        ${!$fixed &&
        css`
          width: 100%;
          max-width: 100%;
        `}
      }
    `;
  }};
`;