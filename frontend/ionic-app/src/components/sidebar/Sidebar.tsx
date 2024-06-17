import React, { useState, useEffect } from 'react';
import { IonHeader, IonContent, IonList, IonItem, IonIcon, IonMenu, IonLabel, IonImg, IonCard, IonMenuToggle } from '@ionic/react';
import { home, barcode, car, pricetag, people, basket, person } from 'ionicons/icons';
import { menuController } from '@ionic/core/components';
import { useIonRouter } from '@ionic/react';
import { FetchUserAttributesOutput } from 'aws-amplify/auth';
import './Sidebar.scss';

interface LateralMenuProps {
    userAttributes: FetchUserAttributesOutput;
    isOpen: boolean;
    onToggle: (isOpen: boolean) => void;
}

const SideBar: React.FC<LateralMenuProps> = ({ userAttributes, isOpen, onToggle }) => {
    const [menuOpen, setMenuOpen] = useState(isOpen);
    const router = useIonRouter();

    useEffect(() => {
        setMenuOpen(isOpen);
    }, [isOpen]);

    const toggleMenu = () => {
        const newMenuState = !menuOpen;
        setMenuOpen(newMenuState);
        onToggle(newMenuState);
    };

    const accountInfo = [
        { label: 'Name', value: userAttributes.name || 'No name provided' },
        { label: 'Email', value: userAttributes.email || 'No email provided' },
    ];

    return (
        <IonMenu
            type="overlay"
            menuId="lateral-menu"
            contentId="main-content"
            className="lateral-menu">
      <IonContent>
        <div className="sidebar-header">
          <h2>Shopping</h2>
        </div>
        <IonList lines="none">
          <IonMenuToggle auto-hide="false">
            <IonItem routerLink="/dashboard" routerDirection="none" className="selected">
              <IonIcon icon={person} slot="start" />
              <IonLabel>Ajendra S.</IonLabel>
            </IonItem>
            <IonItem routerLink="/dashboard" routerDirection="none">
              <IonLabel>Dashboard</IonLabel>
            </IonItem>
            <IonItem routerLink="/products" routerDirection="none">
              <IonLabel>Products</IonLabel>
            </IonItem>
            <IonItem routerLink="/categories" routerDirection="none">
              <IonLabel>Categories</IonLabel>
            </IonItem>
            <IonItem routerLink="/orders" routerDirection="none">
              <IonIcon icon={basket} slot="start" />
              <IonLabel>Orders</IonLabel>
            </IonItem>
            <IonItem routerLink="/customers" routerDirection="none">
              <IonIcon icon={people} slot="start" />
              <IonLabel>Customers</IonLabel>
            </IonItem>
            <IonItem routerLink="/sales-offers" routerDirection="none">
              <IonIcon icon={pricetag} slot="start" />
              <IonLabel>Sales Offers</IonLabel>
            </IonItem>
            <IonItem routerLink="/dealership" routerDirection="none">
              <IonIcon icon={car} slot="start" />
              <IonLabel>Dealership</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
    );
};

export default SideBar;
