import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
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
  IonToast,
  IonActionSheet,
  useIonRouter,
  IonImg,
  IonText,
} from '@ionic/react';

import { SignInInput, SignInOutput, SignUpInput, signIn, signUp, ResetPasswordInput} from 'aws-amplify/auth';

import './Auth.module.scss';

const AuthComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [segment, setSegment] = useState<'login' | 'signup' | 'reset'>('login');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);

  const router = useIonRouter();

  const handleSegmentChange = (value: 'login' | 'signup' | 'reset') => {
    setSegment(value);
  };

  const login = async () => {
    try {
      const input : SignInInput = {
        username: email,
        password: password,
      }
      await signIn(input);
      console.log('Signed in with', email);
      router.push('/home', 'forward', 'replace');
    } catch (error: any) {
      setToastMessage(error.message);
      setShowToast(true);
    }
  };

  const signup = async () => {
    try {
      const input : SignUpInput = {
        username: email,
        password: password
      }
      await signUp(input);
      setToastMessage('Sign up successful! Please confirm your email.');
      setShowToast(true);
      handleSegmentChange('login');
    } catch (error: any) {
      setToastMessage(error.message);
      setShowToast(true);
    }
  };

  const requestPasswordReset = async () => {
    try {
      //Implement reset Password
      setToastMessage('Password reset code sent to your email.');
      setShowToast(true);
      setShowActionSheet(true);
    } catch (error: any) {
      setToastMessage(error.message);
      setShowToast(true);
    }
  };

  const resetPassword = async () => {
    try {
      //Implement reset Password
      setToastMessage('Password reset successful! You can now log in with your new password.');
      setShowToast(true);
      handleSegmentChange('login');
    } catch (error: any) {
      setToastMessage(error.message);
      setShowToast(true);
    }
  };

  const handleSubmit = async () => {
    if (!email || (segment !== 'reset' && !password)) {
      setToastMessage('Email and password are required.');
      setShowToast(true);
      return;
    }
    if (segment === 'login') {
      await login();
    } else if (segment === 'signup') {
      await signup();
    } else if (segment === 'reset') {
      await resetPassword();
    }
  };

  return (
    <IonPage className="auth_page">
      <IonContent>
        <div className="auth_banner">
          <IonImg src="assets/imgs/logo.png"/>
          <IonText color="light">GroceryPal [alpha]</IonText>
          <IonSegment value={segment} onIonChange={e => handleSegmentChange(e.detail.value as 'login' | 'signup' | 'reset')}>
            <IonSegmentButton value="login">
              Login
            </IonSegmentButton>
            <IonSegmentButton value="signup">
              Sign Up
            </IonSegmentButton>
            <IonSegmentButton value="reset">
              Reset Password
            </IonSegmentButton>
          </IonSegment>
        </div>

        <div className="login-form">
          <IonList>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
            </IonItem>
            {segment !== 'reset' && (
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
              </IonItem>
            )}
            {segment === 'reset' && (
              <>
                <IonItem>
                  <IonLabel position="floating">Reset Code</IonLabel>
                  <IonInput type="text" value={code} onIonChange={e => setCode(e.detail.value!)} />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">New Password</IonLabel>
                  <IonInput type="password" value={newPassword} onIonChange={e => setNewPassword(e.detail.value!)} />
                </IonItem>
              </>
            )}
          </IonList>
          <IonButton expand="block" className="btn button-block" onClick={handleSubmit}>
            {segment === 'login' ? 'Login' : segment === 'signup' ? 'Sign Up' : 'Reset Password'}
          </IonButton>
          {segment === 'login' && (
            <IonButton expand="block" className="btn button-block" onClick={requestPasswordReset}>
              Forgot Password?
            </IonButton>
          )}
        </div>

        <div className="social_media_login">
          <p>Or connect with</p>
          <IonRow>
            <IonCol>
              <IonButton className="btn fb_btn" expand="block">
                <img src="/assets/facebook.png" alt="Facebook" />
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className="btn google_btn" expand="block">
                <IonIcon />
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
          ) : segment === 'signup' ? (
            <>
              Already have an account? <span onClick={() => handleSegmentChange('login')}>Login</span>
            </>
          ) : (
            <>
              Remembered your password? <span onClick={() => handleSegmentChange('login')}>Login</span>
            </>
          )}
        </h6>
      </IonContent>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={3000}
      />
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: 'Submit Reset Code',
            handler: () => {
              handleSegmentChange('reset');
              setShowActionSheet(false);
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
          },
        ]}
      />
    </IonPage>
  );
};

export default AuthComponent;
