import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import { useEffect, useState } from 'react';
import axios from '@/services/axios';
import '@/styles/globals.css';

const publicPaths = ['/login', '/register', '/resetPassword'];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isPublicPath = publicPaths.some((path) =>
      router.pathname.startsWith(path)
    );

    if (isPublicPath) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    const validateSession = async () => {
      try {
        await axios.get('/users/me', { withCredentials: true });
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        router.replace('/login');
      } finally {
        setLoading(false);
      }
    };

    validateSession();
  }, [router.pathname]);

  const isPublicPath = publicPaths.some((path) =>
    router.pathname.startsWith(path)
  );

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#00ffc3',
          fontSize: '1.5rem',
          backgroundColor: '#1a1a1a',
        }}
      >
        Cargando...
      </div>
    );
  }

  if (!isAuthenticated && !isPublicPath) {
    return null;
  }

  if (isPublicPath) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}