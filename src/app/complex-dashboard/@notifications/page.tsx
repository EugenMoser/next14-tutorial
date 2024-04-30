import Card from '@/components/card';

interface NotificationsProps {}
//da mit @ werden die page.tsx als props in layout.tsx übergeben und
//werden in der url z.B. /users oder /@users NICHT angezeigt
function Notifications({}: NotificationsProps): JSX.Element {
  return <Card>Notifications</Card>;
}

export default Notifications;
