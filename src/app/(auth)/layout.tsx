'use client';
import './styles.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/register', name: 'Register' },
  { href: '/login', name: 'Login' },
  { href: '/forgot-password', name: 'Forgot Password' },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log('pathname', pathname);

  return (
    <>
      <h2>Inner layout</h2>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            key={link.name}
            href={link.href}
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
