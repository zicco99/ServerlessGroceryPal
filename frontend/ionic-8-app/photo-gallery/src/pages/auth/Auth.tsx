import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonSegment,
  IonSegmentButton,
  IonButton,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  useIonRouter
} from '@ionic/react';

import styles from './Auth.module.scss';
import { SignInInput, signIn } from 'aws-amplify/auth';

const Auth: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [segment, setSegment] = useState<'login' | 'signup'>('login');

  const router = useIonRouter();


  const handleSegmentChange = (value: 'login' | 'signup') => {
    setSegment(value);
  };

  const handleSubmit = () => {
    if (!email || !password) {
      return;
    }
    // Handle form submission
    if (segment === 'login') {
      signIn({
        username: email,
        password: password
      } as SignInInput);
      router.goBack();
    } else {
      console.log('Signing up with', email, password);
    }
  };



  return (
    <IonPage className={styles.ios}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{segment === 'login' ? 'Login' : 'Sign Up'}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className={styles.banner}>
          <div className={styles.logo}>
            <img src="/assets/logo.png" alt="Logo" />
            <h2>Welcome</h2>
          </div>
          <IonSegment value={segment} onIonChange={e => handleSegmentChange(e.detail.value as 'login' | 'signup')}>
            <IonSegmentButton value="login">
              Login
            </IonSegmentButton>
            <IonSegmentButton value="signup">
              Sign Up
            </IonSegmentButton>
          </IonSegment>
        </div>

        <div className={styles.form}>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
            </IonItem>
          </IonList>
          <IonButton expand="block" className="btn button-block" onClick={handleSubmit}>
            {segment === 'login' ? 'Login' : 'Sign Up'}
          </IonButton>
        </div>

        <div className={styles.social_media}>
          <p>Or connect with</p>
          <IonRow>
            <IonCol>
              <IonButton className="btn fb_btn" expand="block">
                <img src="/assets/facebook.png" alt="Facebook" />
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className="btn google_btn" expand="block">
                <IonIcon/>
                Google
              </IonButton>
            </IonCol>
          </IonRow>
        </div>

        <h6>
          {segment === 'login' ? (
            <>
              Don't have an account? <span onClick={() => handleSegmentChange('signup')}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account? <span onClick={() => handleSegmentChange('login')}>Login</span>
            </>
          )}
        </h6>
      </IonContent>
    </IonPage>
  );
};

export default Auth;
