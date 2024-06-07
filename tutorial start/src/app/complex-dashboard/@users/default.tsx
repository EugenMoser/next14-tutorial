//!siehe Beschreibung für default.tsx im übergeordneten Pfad in der default.tsx

import Card from '@/components/card';

interface DefaultUsersProps {}
//da mit @ werden die page.tsx als props in layout.tsx übergeben und
//werden in der url z.B. /users oder /@users NICHT angezeigt
function DefaultUsers({}: DefaultUsersProps): JSX.Element {
  return <Card>User Analytics</Card>;
}

export default DefaultUsers;
