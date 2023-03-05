import { useEffect, useState } from "react";
import { Button } from "../atoms/Button";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  // if (!isStandalone || !deferredPrompt) {
  //   return null;
  // }

  return (
    <div style={{ margin: "1rem 0 0" }}>
      <Button
        onClick={handleInstallClick}
        label="홈 화면에 설치하기"
        color="blue"
      />
    </div>
  );
};

export default InstallButton;
