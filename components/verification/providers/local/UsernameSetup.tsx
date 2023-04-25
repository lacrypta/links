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
  const { config } = useConfig();
  return (
    <div className='w-full'>
      <div>Asegurate de que tu username quede igual al ejemplo</div>
      <div>
        El archivo se encuentra en <b>/public/config/config.yml</b>
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
            username: <b>{username}</b>
            <Comment> # TU_USUARIO@hodl.ar</Comment>
          </Line>
        </div>
      </div>
    </div>
  );
};

export default UsernameSetup;
