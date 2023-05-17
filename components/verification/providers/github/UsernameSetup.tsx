import { useConfig } from "../../../../contexts/Config";

interface UsernameSetupProps {
  username: string;
}

const Comment = ({ children }: { children: React.ReactNode }) => {
  return <span className='text-gray-400 text-xs'>{children}</span>;
};

const Line = ({ children }: { children?: React.ReactNode }) => {
  return <div className='h-4'>{children}</div>;
};

export const UsernameSetup = ({ username }: UsernameSetupProps) => {
  const { provider } = useConfig();
  const githubUsername = provider?.getUsername();
  return (
    <div className='w-full'>
      <div>Asegurate de que tu username quede igual al ejemplo</div>
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
            <Comment># ESTO ES UN COMENTARIO</Comment>
          </Line>

          <Line>
            version: 0.3.5 <Comment># NO TOCAR</Comment>
          </Line>
          <Line></Line>
          <Line>
            <Comment># HODL username</Comment>
          </Line>
          <Line>
            username: &quot;<b>{username}</b>&quot;
            <Comment> # &lt; TU_USUARIO@hodl.ar</Comment>
          </Line>
        </div>
      </div>
    </div>
  );
};

export default UsernameSetup;
