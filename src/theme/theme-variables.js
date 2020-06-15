import { css } from 'styled-components'

export const themeVariables = css`
  .light-mode {
    --colour-background: ${({ theme }) => theme.colors.gray[100]};
    --colour-on-background: ${({ theme }) => theme.colors.gray[900]};
    --colour-primary: ${({ theme }) => theme.colors.primary[700]};
    --colour-warn: ${({ theme }) => theme.colors.red[500]};
    --colour-on-warn: ${({ theme }) => theme.colors.black};
    --colour-secondary: ${({ theme }) => theme.colors.gray[800]};
    --colour-on-secondary: ${({ theme }) => theme.colors.gray[400]};
    --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --box-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --title-gradient-from: ${({ theme }) =>
      theme.colors.primary[200]};
    --title-gradient-to: ${({ theme }) => theme.colors.primary[500]};
    --scrollbar-bg: ${({ theme }) => theme.colors.primary[100]};
    --thumb-bg: ${({ theme }) => theme.colors.primary[500]};
    --rainbow-one: #9349f0;
    --rainbow-two: #8f6f14;
    --rainbow-three: #da0498;
    --rainbow-four: #b05d2e;
    --rainbow-five: #864bfe;
    --rainbow-six: #cc4438;
  }
  .dark-mode {
    --colour-background: ${({ theme }) => theme.colors.gray[900]};
    --colour-on-background: ${({ theme }) => theme.colors.gray[100]};
    --colour-primary: ${({ theme }) => theme.colors.primary[300]};
    --colour-warn: ${({ theme }) => theme.colors.red[200]};
    --colour-on-warn: ${({ theme }) => theme.colors.white};
    --colour-secondary: ${({ theme }) => theme.colors.gray[300]};
    --colour-on-secondary: ${({ theme }) => theme.colors.gray[700]};
    --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 5);
    --box-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 4);
    --title-gradient-from: ${({ theme }) =>
      theme.colors.primary[100]};
    --title-gradient-to: ${({ theme }) => theme.colors.primary[300]};
    --scrollbar-bg: ${({ theme }) => theme.colors.primary[900]};
    --thumb-bg: ${({ theme }) => theme.colors.primary[500]};
    --rainbow-one: #a269ee;
    --rainbow-two: #fab319;
    --rainbow-three: #f81cb1;
    --rainbow-four: #f16623;
    --rainbow-five: #976cf6;
    --rainbow-six: #d86253;
  }
`
