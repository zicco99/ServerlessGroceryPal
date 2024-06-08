import React, { useState } from "react";
import { useZxing } from "react-zxing";
import { Hero, Container, Columns, Button, Content } from "react-bulma-components";

interface BarcodeScannerProps {}

export const BarcodeScanner: React.FC<BarcodeScannerProps> = () => {
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
    <Hero color="dark">
      <Hero.Body>
        {isScanning && (
          <Container>
            <Content>
              <p className="title has-text-centered">Scanning...</p>
            </Content>
          </Container>
        )}
        <Container>
          <Columns centered>
            <Columns.Column size={9}>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <video
                  ref={ref}
                  className="video"
                  autoPlay
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Columns.Column>
          </Columns>
        </Container>
        {status !== "unavailable" && (
          <Button
            color="primary"
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              zIndex: 999,
            }}
            onClick={toggleTorch}
          >
            {status === "on" ? "Turn off" : "Turn on"} torch
          </Button>
        )}
      </Hero.Body>
    </Hero>
  );
};
