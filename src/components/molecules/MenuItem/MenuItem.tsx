import { IMenu } from '@/types';
import Link from 'next/link';

export interface MenuItemProps extends IMenu {}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href }) => {
  return (
    <Link
      href={href}
      title={label}
      className="flex items-center text-base gap-2 text-base text-white hover:text-orange-default min-w-[160px]"
    >
      {icon}
      {label}
    </Link>
  );
};

export default MenuItem;
