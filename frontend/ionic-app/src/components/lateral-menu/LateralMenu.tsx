import "./LateralMenu.scss";
import React, { useState, useEffect } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonList, IonItem, IonIcon, IonMenu, IonLabel, IonImg, IonCard } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import { FetchUserAttributesOutput } from 'aws-amplify/auth';

interface LateralMenuProps {
    userAttributes: FetchUserAttributesOutput;
    isOpen: boolean;
    onToggle: (isOpen: boolean) => void;
}

const LateralMenu: React.FC<LateralMenuProps> = ({ userAttributes, isOpen, onToggle }) => {
    const [menuOpen, setMenuOpen] = useState(isOpen);

    useEffect(() => {
        setMenuOpen(isOpen);
    }, [isOpen]);

    const toggleMenu = () => {
        const newMenuState = !menuOpen;
        setMenuOpen(newMenuState);
        onToggle(newMenuState);
    };

    const viewMenu = (menuId: string) => {
        console.log(`Clicked menu ${menuId}`);
        toggleMenu();
    };

    return (
        <>
         <IonMenu contentId="main-content">
            <IonHeader>
            </IonHeader>
            <IonContent>
                <IonCard className="profile-img-container" onClick={toggleMenu}>
                    <IonImg className="profile-img" src={userAttributes.picture || "./assets/imgs/1.png"}/>
                </IonCard>
                <IonList>
                    <IonItem>
                        <NavLink to="/scan">
                            <IonIcon slot="start" icon="home" />
                            <IonLabel>Aggiungi Prodotti</IonLabel>
                        </NavLink>
                    </IonItem>
                    <IonItem>
                        <NavLink to="/recipes">
                            <IonIcon slot="start" icon="restaurant" />
                            <IonLabel>Recipes</IonLabel>
                        </NavLink>
                    </IonItem>
                </IonList>
            </IonContent>
            
            </IonMenu>
        </>
    );
};

export default LateralMenu;
