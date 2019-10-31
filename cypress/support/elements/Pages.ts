import DashboardPage from './DashboardPage';
import LogInPage from './LogInPage';
import OrderCreatePage from './OrderCreatePage';

const Pages = () => {
  const logInPage = new LogInPage();
  const dashboardPage = new DashboardPage();
  const orderCreatePage = new OrderCreatePage();

  return {
    logInPage,
    dashboardPage,
    orderCreatePage
  };
};

export default Pages;
