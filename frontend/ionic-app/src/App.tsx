import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRouterOutlet,
  setupIonicReact,
  useIonAlert,
  IonSpinner
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Auth from './pages/auth/Auth';
import Scanner from './pages/scanner/Scanner';
import Profile from './pages/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { Amplify } from 'aws-amplify';
import { getCurrentUser, fetchUserAttributes, FetchUserAttributesOutput} from 'aws-amplify/auth';
import awsExports from './aws-exports';

import './global.scss';
import BottomBar from './components/bottombar/BottomBar';

setupIonicReact();

Amplify.configure(awsExports);

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userAttributes, setUserAttributes] = useState<FetchUserAttributesOutput | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [presentAlert] = useIonAlert();

  useEffect(() => {
    getCurrentUser()
      .then(() => {
        setIsAuthenticated(true);
        fetchUserAttributes().then(
          (userAttributes) => { //Fulfilled
            setUserAttributes(userAttributes);
            setTimeout(() => setIsLoading(false), 3000);
          },
          () => setIsAuthenticated(false)  //Rejected
        )
        setIsLoading(false);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setIsLoading(false);
        presentAlert({
          header: 'Error',
          subHeader: 'Authentication failed',
          message: 'Please try again',
          buttons: ['OK'],
        })
      });
  }, []);

  return (
    <IonApp>
      {isLoading && <IonSpinner name="circular" />}
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
              {isAuthenticated ? <Scanner /> : <Redirect to="/auth" />}
            </Route>
            <Route exact path="/profile">
              {isAuthenticated ? <Profile /> : <Redirect to="/auth" />}
            </Route>
            <Route exact path="/">
              {isAuthenticated ? <Home /> : <Redirect to="/auth" />}
            </Route>
            
          </IonRouterOutlet>
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
