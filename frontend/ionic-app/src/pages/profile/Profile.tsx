import React, { useEffect, useState } from 'react';
import {
    IonContent,
    IonIcon,
    IonFab,
    IonFabButton,
    IonCard,
    IonCardContent,
    IonImg,
    IonRow,
    IonGrid,
    IonCol,
    IonText,
    IonTitle
} from '@ionic/react';
import { camera, cameraOutline, cameraSharp, phonePortrait } from 'ionicons/icons';
import { fetchUserAttributes } from 'aws-amplify/auth';

import "./Profile.module.scss";

const ProfilePage: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = await fetchUserAttributes();
                setCurrentUser(user);
            } catch (error) {
                console.error('Error fetching user', error);
            }
        };

        fetchCurrentUser();
    }, []);

    const handleUpdateProfile = () => {
        console.log('Updating profile...');
    };

    const handleOpenCamera = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'environment';
        input.onchange = (event: any) => {
            const file = event.target.files[0];
            if (file) {
                console.log('Selected file:', file);
            }
        };
        input.click();
    };

    return (
        <IonContent className="ion-padding">
            <IonCard className="profile-card">
                <IonCardContent className="ion-text-center">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="9" push="3">
                                <IonTitle className="profile-title">Profile</IonTitle>
                            </IonCol>
                            <IonCol size="3" pull="9">
                                <IonImg 
                                    src={currentUser?.picture || '/assets/imgs/1.png'} 
                                    alt="Profile Pic" 
                                    className="profile-pic"
                                />
                                <IonFab vertical="bottom" className="camera-btn">
                                    <IonFabButton onClick={handleOpenCamera}>
                                        <IonIcon icon={cameraOutline}/>
                                    </IonFabButton>
                                </IonFab>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </IonContent>
    );
}

export default ProfilePage;
