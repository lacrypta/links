import { useCallback, useState } from "react";
import Button from "../button";

interface AlbyNotDetectedProps {}

export const AlbyNotDetected = () => {
  const [clicked, setClicked] = useState(false);

  const openAlby = useCallback(() => {
    window.open("https://getalby.com/", "_blank");
    setClicked(true);
  }, []);

  return (
    <div>
      {clicked ? (
        <div>
          <div>- Poné conectar con LNDHUB</div>
          <div>- Copiá y pegá esto:</div>
          <div>- LNDHUB ....</div>
          <div>- Refrescá la página</div>
          <Button label='Refrescar' onClick={() => window.location.reload()} />
        </div>
      ) : (
        <div>
          <div>Alby no detectado</div>
          <div>- Instalá la extensión</div>
          <div>- Registrá tu contraseña y volvé a esta pestaña</div>

          <Button label='Descargar Alby' onClick={() => openAlby()} />
        </div>
      )}
    </div>
  );
};

export default AlbyNotDetected;
