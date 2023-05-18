import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import type { ProviderType } from "../../../types/provider";
import GithubUsernameSetup from "../providers/github/UsernameSetup";
import LocalUsernameSetup from "../providers/local/UsernameSetup";
import { useCallback, useState } from "react";
import { useConfig } from "../../../contexts/Config";
import Button from "../button";

interface NostrConfigStepProps {
  username: string;
  next: () => void;
}

const providerComponents: { [key in ProviderType]: any } = {
  github: () => GithubUsernameSetup,
  local: () => LocalUsernameSetup,
};

export const NostrConfigStep = ({ username, next }: NostrConfigStepProps) => {
  const ProviderInstructions = providerComponents["github"]({});
  const { refresh } = useConfig();

  const [isLoading, setIsLoading] = useState(false);

  const verify = useCallback(async () => {
    setIsLoading(true);

    try {
      const config = await refresh();

      if (!config || !config.username) {
        throw new Error("No se encontró el usuario en la configiuración");
      }

      if (config.username !== username) {
        throw new Error("El usuario no coincide");
      }

      next();
    } catch (e) {
      alert((e as Error).message);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          <h4 className='mt-3 mb-4 text-2xl text-center'>
            Completá la verificación
          </h4>

          <ProviderInstructions username={username} />
        </div>
      </div>

      <div className='mt-4 text-center relative'>
        <Button
          label={isLoading ? "Verificando..." : "Verificar"}
          onClick={verify}
          prefix={
            isLoading ? (
              <MagnifyingGlassIcon
                className='text-blue-900/50'
                width={20}
                height={20}
              />
            ) : undefined
          }
        />
      </div>
    </>
  );
};

export default NostrConfigStep;
