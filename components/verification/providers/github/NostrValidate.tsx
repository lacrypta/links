import { useCallback, useEffect, useState } from "react";
import { useConfig } from "../../../../contexts/Config";
import Button from "../../button";

interface NostrValidateProps {
  npub: string;
}

const Comment = ({ children }: { children: React.ReactNode }) => {
  return <span className='text-gray-400 text-xs'>{children}</span>;
};

const Line = ({ children }: { children?: React.ReactNode }) => {
  return <div className='h-4'>{children}</div>;
};

export const NostrValidate = ({ npub }: NostrValidateProps) => {
  const { config, provider, refresh } = useConfig();
  const githubUsername = provider?.getUsername();
  const [isLoading, setIsLoading] = useState(false);

  const verify = useCallback(async () => {
    setIsLoading(true);
    await refresh();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.info("config:");
    console.dir(config);
    if (config?.nostr?.npub === npub) {
      alert("OHHHH YEAHHHH!!!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);
  return (
    <div className='w-full flex flex-col'>
      <div>
        Asegurate de reemplazar <b>YOUR_NPUB</b> por
      </div>
      <textarea
        className='w-full border-gray-500 border text-sm p-2'
        disabled={true}
        value={npub}
      />
      <div>
        Hace click{" "}
        <b>
          <a
            href={`https://github.com/${githubUsername}/.hodl.ar/edit/main/config.yml`}
            target='_blank'
            rel='noreferrer'
          >
            ACÁ
          </a>
        </b>{" "}
        para Editar el archivo.
      </div>
      <div className='bg-white border border-gray-500 p-2 text-sm w-full'>
        <div>
          <Line>
            <Comment># NOSTR Settings</Comment>
          </Line>

          <Line>
            nostr <Comment># Sin el # adelante</Comment>
          </Line>
          <div className='ml-2'>
            <Line>
              npub: YOUR_NPUB <Comment># Entre comillas dobles</Comment>
            </Line>
          </div>
        </div>
      </div>
      <Button label='Verificar' disabled={isLoading} onClick={() => verify()} />
    </div>
  );
};

export default NostrValidate;
