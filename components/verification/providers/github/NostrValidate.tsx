import { useConfig } from "../../../../contexts/Config";

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
  const { provider } = useConfig();
  const githubUsername = provider?.getUsername();
  return (
    <div className='w-full'>
      <div>
        Asegurate de reemplazar <b>YOUR_NPUB</b> por
      </div>
      <input type='text' disabled={true} value={npub} />
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
    </div>
  );
};

export default NostrValidate;
