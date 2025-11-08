'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Badge } from '@/components/atoms/Badge';
import { APP_MENU_LABELS } from '@/config';
import type { IMenu } from '@/types';
import { cn } from '@/utils/cn';

const MenuItem: React.FC<IMenu> = ({ icon, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      title={label}
      className={cn(
        'flex items-center text-base gap-2 text-white hover:text-orange-default min-w-[160px]',
        isActive && 'text-orange-default',
      )}
    >
      <span className="size-[32px] relative">
        {icon}
        {label === APP_MENU_LABELS.ANNOUNCEMENT && (
          <Badge label="1" className="absolute -top-1 -right-1" />
        )}
      </span>
      {label}
    </Link>
  );
};

export default MenuItem;
