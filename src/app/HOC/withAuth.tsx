"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState, ComponentType } from 'react';
import { getUser } from '../utils/user-helpers';


const withAuth = (WrappedComponent: ComponentType<any>, allowedRoles: string[]) => {
  return (props: any) => {
    const Router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        const user:any = getUser();
        if (user && allowedRoles.includes(user.profile?.user.position)) {
          setIsAuthenticated(true);
        } else {
          Router.replace('/login');
        }
      } else {
        Router.replace('/login');
      }
    }, []);

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
