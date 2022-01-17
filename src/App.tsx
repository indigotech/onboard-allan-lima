import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import getApolloClient from 'data/graphql/apollo.client';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies] = useCookies(['token']);

  return (
    <div>
      <ApolloProvider client={getApolloClient(cookies.token)}>
        <Outlet />
      </ApolloProvider>
    </div>
  );
}

export default App;
