import { cn } from '@/lib/utils';
import { Center } from '@/components/layouts/center';

type SectionProps = {
  className?: string;
  as?: 'div' | 'section';
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Grid = ({
  children,
  className,
  as: Tag = 'div',
  ...forwardedProps
}: SectionProps) => {
  return (
    <Tag className={cn('grid gap-bento', className)} {...forwardedProps}>
      {children}
    </Tag>
  );
};
