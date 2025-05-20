import { cn } from '@/lib/utils';

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  className?: string;
  as?: HeadingLevels;
  looksLike?: HeadingLevels;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function H({
  children,
  className,
  as: Tag = 'h1',
  looksLike,
  ...forwardedProps
}: HeadingProps) {
  return (
    <Tag className={cn('', looksLike, className)} {...forwardedProps}>
      {children}
    </Tag>
  );
}
