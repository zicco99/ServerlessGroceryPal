import React, { useState, useEffect } from 'react';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

const BarcodeScannerComponent: React.FC = () => {
  const [barcodeData, setBarcodeData] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let listener: any;

    const startScan = async () => {
      try {
        document.body.classList.add('barcode-scanner-active');

        listener = await BarcodeScanner.addListener('barcodeScanned', (result: any) => {
          setBarcodeData(result.barcode);
          setIsActive(false); // Stop scanning after a barcode is found
        });

        await BarcodeScanner.startScan();
      } catch (error) {
        console.error('Error starting scan:', error);
        setIsActive(false);
      }
    };

    const stopScan = async () => {
      try {
        document.body.classList.remove('barcode-scanner-active');
        if (listener) {
          listener.remove();
        }
        await BarcodeScanner.stopScan();
      } catch (error) {
        console.error('Error stopping scan:', error);
      }
    };

    if (isActive) {
      startScan();
    } else {
      stopScan();
    }

    return () => {
      stopScan();
    };
  }, [isActive]);

  const handleScanClick = () => {
    setIsActive(true);
  };

  const handleStopClick = () => {
    setIsActive(false);
  };

  return (
    <div>
      <button onClick={handleScanClick}>Start Scan</button>
      <button onClick={handleStopClick}>Stop Scan</button>
      {barcodeData && <p>Scanned Barcode: {barcodeData}</p>}
    </div>
  );
};

export default BarcodeScannerComponent;
