import styled, { css } from 'styled-components';

const prefix = 'ant-card';

const CardWrapper = Component => styled(Component)`
    ${props => {

    return css`
      font-size: 14px;
      border-radius: 4px;
      border: 0;

      .${prefix}-head {
        font-size: 16px;
        border-bottom: 0;
        color: #333;

        &-title {
          .title-description {
            color: #ddd;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }

      &.${prefix}-bordered {
        border: 1px solid #efefef;

        .${prefix}-head {
          border-bottom: 1px solid #efefef;
        }
      }
      
      &:not(.${prefix}-bordered) {
        .${prefix}-head + .${prefix}-body {
          padding-top: 0;
        }
      }
    `;
  }}
`;

export default CardWrapper;
