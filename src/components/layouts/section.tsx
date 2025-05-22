import { cn } from '@/lib/utils';
import { Center } from '@/components/layouts/center';

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
    <Tag
      className={cn('relative py-12 sm:py-16', className)}
      {...forwardedProps}
    >
      <Center>{children}</Center>
    </Tag>
  );
};
