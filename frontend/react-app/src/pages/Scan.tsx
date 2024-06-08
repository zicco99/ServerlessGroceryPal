// Scan.tsx
import React from "react";
import { BarcodeScanner } from "../components/scanner/BarcodeScanner";

const Scan: React.FC = () => {
  return (
    <div>
      <h1>Scan Barcode</h1>
      <BarcodeScanner />
    </div>
  );
};

export default Scan;
