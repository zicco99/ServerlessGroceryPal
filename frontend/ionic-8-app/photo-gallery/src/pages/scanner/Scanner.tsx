import React, { useState, useEffect } from 'react';
import {
  BarcodeScanner,
  BarcodeFormat,
} from '@capacitor-mlkit/barcode-scanning';

const BarcodeScannerComponent = () => {
  const [barcodeData, setBarcodeData] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      startScan();
    }
    return () => {
      stopScan();
    };
  }, [isActive]);

  const startScan = async () => {
    document.body.classList.add('barcode-scanner-active');
    
    const listener = await BarcodeScanner.addListener('barcodeScanned', async result => {
      setBarcodeData(result.barcode);
      await listener.remove();
      stopScan();
    });

    await BarcodeScanner.startScan();
  };

  const stopScan = async () => {
    document.body.classList.remove('barcode-scanner-active');
    await BarcodeScanner.removeAllListeners();
    await BarcodeScanner.stopScan();
  };

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
