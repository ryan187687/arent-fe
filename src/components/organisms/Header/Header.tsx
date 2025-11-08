'use client';
import Link from 'next/link';

import { Container } from '@/components/atoms/Container';
import { HealthyIcon, MenuIcon } from '@/components/atoms/Icons';
import { APP_PAGES } from '@/config';
import { useModal } from '@/hooks';
import { EnumModal } from '@/types';

import { MenuList } from '../MenuList';
const Header: React.FC = () => {
  const { toggleModal } = useModal();
  return (
    <header className="bg-gray-default flex items-center justify-between h-[4rem]">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="flex">
            <Link href={APP_PAGES.TOP} title="Top" className="flex">
              <HealthyIcon />
            </Link>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <MenuList />
            <div
              className="cursor-pointer"
              onClick={() => toggleModal(EnumModal.NAVIGATION_MENU, true)}
            >
              <MenuIcon />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
