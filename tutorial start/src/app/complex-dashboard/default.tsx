//! wird der Pfad /complex-dashboard/archived reloaded, kommt eine Fehlermeldung, da in allen
//! children nach dem "archived"-Pfad gesucht wird. Da diese nicht vorhanden sind wird eine Fehler
//! geworfen. Deshalb benötigt man ein fallback -> default.tsx in JEDEM children

interface DefaultComplexDashboardProps {}

function DefaultComplexDashboard({}: DefaultComplexDashboardProps): JSX.Element {
  return <h1>Complex Dashboard Page</h1>;
}

export default DefaultComplexDashboard;
