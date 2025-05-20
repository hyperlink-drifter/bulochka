import { cn } from '@/lib/utils';

type SectionProps = {
  className?: string;
  as?: 'section' | 'div';
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Section = ({
  children,
  className,
  as: Tag = 'section',
  ...forwardedProps
}: SectionProps) => {
  return (
    <Tag className={cn('relative py-6 sm:py-8', className)} {...forwardedProps}>
      {children}
    </Tag>
  );
};
