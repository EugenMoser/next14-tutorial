import Card from '@/components/card';

interface DashboardLayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}

function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: DashboardLayoutProps): JSX.Element {
  return (
    <>
      <div>{children}</div>{' '}
      {/* equivalent to complex-dashboard/@children/page.tsx */}
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
