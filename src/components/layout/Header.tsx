import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import { useAppSelector } from '@/hooks/redux';

export default function Header() {
  const { user } = useAppSelector(({ user }) => user);

  React.useMemo(() => {
    user;
  }, [user]);

  const links = [
    {
      href: user?.token || user?.admin ? '/logout' : '/login',
      label: user?.token || user?.admin ? 'Logout' : 'Login',
    },
  ];
  user?.token && links.unshift({ href: '/cart', label: 'Cart' });
  !user.admin &&
    links.unshift(
      { href: '/electronics', label: 'Electronics' },
      { href: '/jewelery', label: 'Jewelery' },
      { href: '/mens-clothing', label: "Men's Clothing" },
      { href: '/womens-clothing', label: "Women's Clothing" }
    );
  user?.admin && links.unshift({ href: '/admin/sales', label: 'Sales Recap' });
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink
          href={user?.admin ? '/admin' : '/'}
          className='font-bold hover:text-gray-600'
        >
          Home
        </UnstyledLink>
        <nav className='flex gap-4'>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
