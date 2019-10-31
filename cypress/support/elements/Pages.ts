import DashboardPage from './DashboardPage';
import LogInPage from './LogInPage';

const Pages = () => {
  const logInPage = new LogInPage();
  const dashboardPage = new DashboardPage();

  return {
    logInPage,
    dashboardPage
  };
};

export default Pages;
