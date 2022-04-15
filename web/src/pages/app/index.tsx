import { useUser, getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';

const App = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Hello World</h1>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

// export const getServerSideProps = withPageAuthRequired();
export const getServerSideProps = async ({ req, res }) => {
  const token = await getAccessToken(req, res);

  console.log({ token });

  return {
    props: {}
  }
}

export default App;
