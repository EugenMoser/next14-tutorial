import Link from 'next/link';

import Card from '@/components/card';

interface NotificationsProps {}
//da mit @ werden die page.tsx als props in layout.tsx übergeben und
//werden in der url z.B. /users oder /@users NICHT angezeigt
function Notifications({}: NotificationsProps): JSX.Element {
  return (
    <Card>
      <div>Notifications</div>
      <Link
        className='text-blue-500 underline'
        href={'/complex-dashboard/archived'}
      >
        Archived Notifications
      </Link>
    </Card>
  );
}

export default Notifications;
