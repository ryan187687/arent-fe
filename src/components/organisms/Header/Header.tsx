import { Container } from '@/components/atoms/Container';
import { HealthyIcon, MenuIcon } from '@/components/atoms/Icons';
import { APP_PAGES } from '@/config';
import Link from 'next/link';
import { MenuList } from '../MenuList';
const Header: React.FC = () => (
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
          <MenuIcon />
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
