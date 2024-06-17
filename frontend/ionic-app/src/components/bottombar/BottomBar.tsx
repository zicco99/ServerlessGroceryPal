import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonTabBar, IonTabButton, IonBadge } from '@ionic/react';
import { camera, compass, chatbubbles, notifications, person, home, search, chatbubble, barcode } from 'ionicons/icons';
import './BottomBar.scss';

const BottomBar: React.FC = () => {
  const goToPictures = () => {
    console.log('Navigating to pictures...');
  };

  return (
    <>
    <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/home">
          <IonIcon icon={ home } />
        </IonTabButton>
        <IonTabButton tab="tab2" href="/scan">
          <IonIcon icon={ search } />
        </IonTabButton>

        <IonTabButton className='middle_tab' disabled={false}>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={ chatbubble } />
        </IonTabButton>

        <IonTabButton tab="tab4" href="/tab4">
          <IonIcon icon={ person } />
        </IonTabButton>
      </IonTabBar>
      <IonFab vertical='bottom' horizontal='center' slot="fixed">
        <IonFabButton onClick={goToPictures}>
          <IonIcon icon={barcode} color='primary' />
        </IonFabButton>
      </IonFab>
    </>
  );
};

export default BottomBar;
