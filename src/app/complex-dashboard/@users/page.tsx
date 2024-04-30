import Card from '@/components/card';

interface UsersProps {}
//da mit @ werden die page.tsx als props in layout.tsx übergeben und
//werden in der url z.B. /users oder /@users NICHT angezeigt
function Users({}: UsersProps): JSX.Element {
  return <Card>User Analytics</Card>;
}

export default Users;
