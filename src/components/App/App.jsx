import { UserRoutes } from 'UserRoutes';
import { MainNav } from 'components/MainNav/MainNav';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <MainNav />
      <UserRoutes />
    </Container>
  );
};
