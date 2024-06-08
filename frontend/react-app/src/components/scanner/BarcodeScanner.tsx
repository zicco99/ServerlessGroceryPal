import React, { useState } from "react";
import { useZxing } from "react-zxing";

interface BarcodeScannerProps {
  scanningAreaStyle?: React.CSSProperties;
}

export const BarcodeScanner: React.FC<BarcodeScannerProps> = ({
  scanningAreaStyle,
}) => {
  const [isScanning, setIsScanning] = useState<boolean>(true);
  const {
    ref,
    torch: { on, off, status },
  } = useZxing({
    onError: (err) => {
      console.log(err);
      setIsScanning(false);
    },
  });

  const toggleTorch = () => {
    if (status === "on") {
      off();
    } else if (status === "off") {
      on();
    }
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ...scanningAreaStyle,
        }}
      >
        {isScanning && <p>Scanning...</p>}
        <div style={{ position: "relative", width: "80%", maxWidth: "500px" }}>
          <video
            ref={ref}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        {status !== "unavailable" ? (
          <button style={{ marginTop: "20px" }} onClick={toggleTorch}>
            {status === "on" ? "Turn off" : "Turn on"} torch
          </button>
        ) : (
          <strong>Unfortunately, torch is not available on this device.</strong>
        )}
      </div>
      {/* Floating button */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 999,
        }}
      >
        <button onClick={toggleTorch}>
          {status === "on" ? "Turn off" : "Turn on"} torch
        </button>
      </div>
    </div>
  );
};
