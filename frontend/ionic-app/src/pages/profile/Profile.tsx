import React, { useEffect, useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonIcon, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import { FetchUserAttributesOutput, fetchUserAttributes } from 'aws-amplify/auth';

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState<FetchUserAttributesOutput | null>(null);

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const user = await fetchUserAttributes();
            setCurrentUser(user);
        } catch (error) {
            console.error('Error fetching user', error);
        }
    };

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="" icon="chevron-back-outline"></IonBackButton>
                    </IonButtons>
                    <IonTitle>My Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className="banner">
                    <div className="profile_box">
                        <div className="profile_img">
                            <img src="assets/imgs/my_pic.png" alt="Profile Pic" />
                        </div>
                        <IonIcon className="zmdi zmdi-camera"></IonIcon>
                    </div>
                </div>

                <div className="form">
                    <IonList lines="none">
                        <IonItem lines="none">
                            <div className="item_inner">
                                <IonLabel position="floating">Full Name</IonLabel>
                                <IonInput mode="md" type="text" value={currentUser?.name}></IonInput>
                            </div>
                        </IonItem>
                        <IonItem lines="none">
                            <div className="item_inner">
                                <IonLabel position="floating">Email Address</IonLabel>
                                <IonInput mode="md" type="email" value={currentUser?.email}></IonInput>
                            </div>
                        </IonItem>
                        <IonItem lines="none">
                            <div className="item_inner">
                                <IonLabel position="floating">Phone number (optional)</IonLabel>
                                <IonInput mode="md" type="tel" value={currentUser?.phone_number}></IonInput>
                            </div>
                        </IonItem>
                    </IonList>
                    <IonButton size="large" shape="round" className="btn">Update Profile</IonButton>
                </div>
            </IonContent>
        </>
    );
}

export default ProfilePage;
