import Link from 'next/link';

import Card from '@/components/card';

interface LoginProps {}
//da mit @ werden die page.tsx als props in layout.tsx übergeben und
//werden in der url z.B. /users oder /@users NICHT angezeigt
function Login({}: LoginProps): JSX.Element {
  return <Card>Please login to continue</Card>;
}

export default Login;
