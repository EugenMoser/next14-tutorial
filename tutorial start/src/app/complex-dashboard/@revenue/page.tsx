import Card from '@/components/card';

interface RevenueProps {}
//da mit @ werden die page.tsx als props in layout.tsx übergeben und
//werden in der url z.B. /users oder /@users NICHT angezeigt
function Revenue({}: RevenueProps): JSX.Element {
  return <Card>Revenue Metrics</Card>;
}

export default Revenue;