import { useCallback, useState } from "react";
import Button from "../button";

export const AlbyNotDetected = () => {
  const [clicked, setClicked] = useState(false);

  const openAlby = useCallback(() => {
    window.open("https://getalby.com/", "_blank");
    setClicked(true);
  }, []);

  return (
    <div>
      <div>Alby no detectado</div>
      {clicked ? (
        <div>
          <div>Refrescá la página para detectarlo</div>

          <Button label='Refrescar' onClick={() => window.location.reload()} />
        </div>
      ) : (
        <div>
          <div>Por favor instalá la extensión</div>

          <Button
            label='Create una cuenta'
            onClick={() => window.location.reload()}
          />

          <Button label='Descargar Alby' onClick={() => openAlby()} />
        </div>
      )}
    </div>
  );
};

export default AlbyNotDetected;
