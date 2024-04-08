// no export, no display
function NoDisplay() {
  return <h1>BarChart</h1>;
}

//export = display
interface DashboardProps {}

function Dashboard({}: DashboardProps): JSX.Element {
  return <h1>Dashboard</h1>;
}

export default Dashboard;
