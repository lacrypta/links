interface UsernameSetupProps {
  username: string;
}

export const UsernameSetup = ({ username }: UsernameSetupProps) => {
  return <div>Hay que verificar {username} en Github</div>;
};

export default UsernameSetup;
