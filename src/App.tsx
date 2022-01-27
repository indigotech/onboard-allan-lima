import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import getApolloClient from 'server/apollo.client';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies] = useCookies(['token']);

  return (
    <div className='App'>
      <ApolloProvider client={getApolloClient(cookies.token)}>
        <Outlet />
      </ApolloProvider>
    </div>
  );
}

export default App;
