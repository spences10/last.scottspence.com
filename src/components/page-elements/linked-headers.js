export const AutoLink = `
  a {
    float: left;
    margin-left: -24px;
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    svg {
      visibility: visible;
      height: 25px;
      width: 20px;
      fill: ${({ theme }) => theme.colors.gray[900]};
    }
  }
`
