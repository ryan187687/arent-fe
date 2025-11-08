'use client';
import { X } from 'lucide-react';
import Link from 'next/link';

import { APP_PAGES } from '@/config';
import { useModal } from '@/hooks';
import { EnumModal } from '@/types';

const MenuDrawer = [
  {
    label: '自分の記録',
    href: APP_PAGES.MY_RECORD,
  },
  {
    label: '体重グラフ',
    href: APP_PAGES.CHALLENGE,
  },
  {
    label: '目標',
    href: APP_PAGES.ANNOUNCEMENT,
  },
  {
    label: '選択中のコース',
    href: '/',
  },
  {
    label: 'コラム一覧',
    href: APP_PAGES.COLUMN,
  },
  {
    label: '設定',
    href: '/',
  },
];

const DrawerMenu: React.FC = () => {
  const { modal, toggleModal } = useModal();
  return (
    <div className="relative">
      {modal[EnumModal.NAVIGATION_MENU] && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => toggleModal(EnumModal.NAVIGATION_MENU, false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#777] text-white z-50 transform transition-transform duration-300
        ${modal[EnumModal.NAVIGATION_MENU] ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={() => toggleModal(EnumModal.NAVIGATION_MENU, false)}
          className="absolute top-4 right-4 text-orange-400"
        >
          <X size={28} />
        </button>

        <nav className="mt-16 flex flex-col divide-y divide-gray-500">
          {MenuDrawer.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="py-6 px-8 hover:bg-gray-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DrawerMenu;
