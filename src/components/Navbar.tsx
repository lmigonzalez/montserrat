'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu } from './MobileMenu';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);
  return (
    <div className="absolute top-0  z-20 flex w-full justify-center bg-my_light_black px-0 py-4">
      <header className="flex h-12 w-[1200px] max-w-full items-center justify-between px-8   text-white md:h-16 ">
        <Link href="/">
          <Image
            src="/teacher.png"
            alt="business logo"
            width={60}
            height={60}
          />
        </Link>
        <nav>
          <ul className="hidden items-center justify-between gap-8 text-2xl md:flex ">
            <li>
              {' '}
              <Link href="/">Inicio</Link>{' '}
            </li>
            <li>
              {' '}
              <Link href="/servicios">Servicios</Link>{' '}
            </li>
            <li>
              {' '}
              <Link href="/acerca">Acerca de mí</Link>{' '}
            </li>
            <li>
              {' '}
              <Link href="/contact">Contáctame</Link>{' '}
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="block select-none transition-all hover:scale-90 md:hidden"
        >
          <MobileMenu />
        </button>
      </header>
      {showMenu && (
        <div className="bg-blur-md absolute left-0 top-full block w-full  bg-white bg-opacity-95 p-4 shadow-2xl md:hidden">
          <nav>
            <ul className="flex flex-col items-center justify-between gap-8 text-2xl font-medium">
              <li>
                <Link href="/">Inicio</Link>{' '}
              </li>
              <li>
                <Link href="/servicios">Servicios</Link>{' '}
              </li>
              <li>
                <Link href="/acerca">Acerca de mí</Link>{' '}
              </li>
              <li>
                <Link href="/contact">Contáctame</Link>{' '}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
