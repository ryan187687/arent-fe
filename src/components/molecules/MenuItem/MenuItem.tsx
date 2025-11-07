'use client';
import { IMenu } from '@/types';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface MenuItemProps extends IMenu {}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href }) => {
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
      {icon}
      {label}
    </Link>
  );
};

export default MenuItem;
