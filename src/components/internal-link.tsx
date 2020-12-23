/** @jsx jsx */
import { GatsbyLinkProps, Link } from 'gatsby'
import { AnchorHTMLAttributes, FunctionComponent } from 'react'
import { jsx, SxStyleProp } from 'theme-ui'

export interface InternalLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    GatsbyLinkProps<{}> {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
}

export const InternalLink: FunctionComponent<InternalLinkProps> = ({
  children,
  to,
  sx,
  ...rest
}) => (
  <Link
    to={to}
    sx={{ ...sx }}
    {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
  >
    {children}
  </Link>
)
