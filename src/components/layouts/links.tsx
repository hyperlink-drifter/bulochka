import { cn } from '@/lib/utils';
import { Link } from 'waku';
import { RouteConfig } from 'waku/router';

type AllowPathDecorators<Path extends string> = Path extends unknown
  ? Path | `${Path}?${string}` | `${Path}#${string}`
  : never;

type InferredPaths = RouteConfig extends {
  paths: infer UserPaths extends string;
}
  ? AllowPathDecorators<UserPaths>
  : string;

type Link = {
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

type InternalLink = {
  to: InferredPaths;
  href?: never;
} & Link;

type ExternalLink = {
  href: string;
  to?: never;
} & Link;

type LinkProps = InternalLink | ExternalLink;

export default function A({
  children,
  className,
  external = false,
  to,
  href,
  ...forwardedProps
}: LinkProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        className={cn('', className)}
        {...forwardedProps}
      >
        {children}
      </a>
    );
  } else {
    if (to) {
      return (
        <Link to={to} className={cn('', className)} {...forwardedProps}>
          {children}
        </Link>
      );
    }
  }
}
