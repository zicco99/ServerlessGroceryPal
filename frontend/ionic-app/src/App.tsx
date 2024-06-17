import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  IonSpinner,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Auth from './pages/auth/Auth';
import Scan from './pages/scan/Scan';
import Profile from './pages/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import { Amplify } from 'aws-amplify';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import awsExports from './aws-exports';

import './global.scss';

// Configure Amplify
Amplify.configure(awsExports);

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userAttributes, setUserAttributes] = useState<any>(null); // Adjust type based on your user attribute structure
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getCurrentUser(); // Check if user is already signed in
        setIsAuthenticated(true);
        const attributes = await fetchUserAttributes(); // Fetch user attributes
        setUserAttributes(attributes);
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <IonApp><IonSpinner name="circular" /></IonApp>;
  }

  return (
    <IonApp>
      <IonReactRouter>
        {isAuthenticated && userAttributes && <Sidebar userAttributes={userAttributes} isOpen={false} onToggle={() => {}} />}
        <IonContent id="main-content">
          <IonRouterOutlet>
            <Route exact path="/auth">
              <Auth />
            </Route>
            <Route exact path="/home">
              {isAuthenticated ? <Home /> : <Redirect to="/auth" />}
            </Route>
            <Route exact path="/scan">
              {isAuthenticated ? <Scan /> : <Redirect to="/auth" />}
            </Route>
            <Route exact path="/profile">
              {isAuthenticated ? <Profile /> : <Redirect to="/auth" />}
            </Route>
            <Route exact path="/">
              {isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/auth" />}
            </Route>
          </IonRouterOutlet>
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
