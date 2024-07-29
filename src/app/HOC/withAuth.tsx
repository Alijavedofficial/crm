"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState, ComponentType } from 'react';
import { getUser } from '../utils/user-helpers';

const withAuth = (WrappedComponent: ComponentType<any>, allowedRoles: string[]) => {
  const WithAuthComponent = (props: any) => {
    const Router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        const user: any = getUser();
        if (user && allowedRoles.includes(user.profile?.user.position)) {
          setIsAuthenticated(true);
        } else {
          Router.replace('/login');
        }
      } else {
        Router.replace('/login');
      }
    }, [Router]); // Include Router in the dependency array

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };

  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuthComponent;
};

export default withAuth;