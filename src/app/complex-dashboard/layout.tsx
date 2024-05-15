interface DashboardLayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: JSX.Element;
}

function DashboardLayout({
  children,
  login,
  users,
  revenue,
  notifications,
}: DashboardLayoutProps): JSX.Element {
  const isLoggedIn: boolean = false;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      {/* equivalent to complex-dashboard/@children/page.tsx */}
      <div className='flex'>
        <div className='flex flex-col'>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className='flex flex-1'>{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
}

export default DashboardLayout;
