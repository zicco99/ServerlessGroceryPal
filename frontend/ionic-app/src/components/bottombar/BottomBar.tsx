import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonTabBar, IonTabButton } from '@ionic/react';
import { camera, person, home, search, chatbubble, barcode } from 'ionicons/icons';
import './BottomBar.scss';

interface Props {
  new_message?: number;
  new_activities?: number;
}

const BottomBar: React.FC<Props> = ({ new_message, new_activities }) => {
  const goToPictures = () => {
    console.log('Navigating to pictures...');
  };

  return (
    <div>
    <IonTabBar slot="bottom" className="bottom-bar">
        <IonTabButton tab="tab1" href="/home">
          <IonIcon icon={ home } />
        </IonTabButton>
        <IonTabButton tab="tab2" href="/scan">
          <IonIcon icon={ search } />
        </IonTabButton>

        <IonTabButton className='middle-tab'>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={ chatbubble } />
        </IonTabButton>

        <IonTabButton tab="tab4" href="/tab4">
          <IonIcon icon={ person } />
        </IonTabButton>
      </IonTabBar>
      <IonFab vertical='bottom' horizontal='center' slot="fixed" className='scan-fab'>
        <IonFabButton onClick={goToPictures} className='scan-button'>
          <IonIcon icon={barcode} />
        </IonFabButton>
      </IonFab>
    </div>
  );
};

export default BottomBar;
