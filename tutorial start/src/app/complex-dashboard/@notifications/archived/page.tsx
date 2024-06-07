import Link from 'next/link';

import Card from '@/components/card';

interface ArchivedNotificationsProps {}
//da mit @ werden die page.tsx als props in layout.tsx übergeben und
//werden in der url z.B. /users oder /@users NICHT angezeigt
function ArchivedNotifications({}: ArchivedNotificationsProps): JSX.Element {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link
        className='text-blue-500 underline'
        href={'/complex-dashboard'}
      >
        Default
      </Link>
    </Card>
  );
}

export default ArchivedNotifications;
