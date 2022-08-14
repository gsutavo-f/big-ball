interface Props {
  team1: string;
  team2: string;
};

export default function Game({ team1, team2 }: Props) {

  const setWinner = () => {

  };

  return (
    <>
      <div onClick={setWinner}>{team1}</div>
      <div onClick={setWinner}>{team2}</div>
    </>
  );

}