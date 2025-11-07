import { ChallengeIcon, InfoIcon, MemoIcon } from '@/components/atoms/Icons';
import { MenuItem } from '@/components/molecules/MenuItem';
import { MenuItemProps } from '@/components/molecules/MenuItem/MenuItem';
import { APP_MENU_LABELS, APP_PAGES } from '@/config/constants';
import { IMenu } from '@/types';

const MENU_ITEMS: MenuItemProps[] = [
  {
    icon: <MemoIcon />,
    label: APP_MENU_LABELS.MY_RECORD,
    href: APP_PAGES.MY_RECORD,
  },
  {
    icon: <ChallengeIcon />,
    label: APP_MENU_LABELS.CHALLENGE,
    href: APP_PAGES.CHALLENGE,
  },
  {
    icon: <InfoIcon />,
    label: APP_MENU_LABELS.ANNOUNCEMENT,
    href: APP_PAGES.ANNOUNCEMENT,
  },
];

const MenuList: React.FC = () => {
  return (
    <ul className="flex items-center justify-center">
      {MENU_ITEMS.map((menu: IMenu) => (
        <li key={menu.label}>
          <MenuItem {...menu} />
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
