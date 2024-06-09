import Link from 'next/link';

import { ThemeContext } from '@/components/theme-provider';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link href={'/dashboard'}>Dashboard</Link>
    </main>
  );
}
