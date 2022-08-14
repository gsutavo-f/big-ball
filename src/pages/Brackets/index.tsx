import { useEffect, useState } from 'react';
import Game from '../../components/Game';
import { Country, Match } from '../../types';
import styles from './Brackets.module.scss';

export function Brackets() {

  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const groupsStored = JSON.parse(localStorage.getItem('groups')!);
    let classifieds: Match[] = [];
    groupsStored.forEach((group: Country[], index: number) => {
      if (index % 2 == 0) {
        classifieds.push({ team1: group[0], team2: (groupsStored[index + 1])[1] });
        classifieds.push({ team1: (groupsStored[index + 1])[0], team2: group[1] });
      }
    });
    setMatches(classifieds);
  }, []);

  return (
    <>
      <button />
      <div>
        <Game
          team1='Ecuador'
          team2='Irã'
        />
        <Game
          team1='Argentina'
          team2='Australia'
        />
      </div>
      <div> // 3
        <Game
          team1='Ecuador'
          team2='Irã'
        />
        <Game
          team1='Argentina'
          team2='Australia'
        />
      </div>
      <div>
        <Game
          team1='Ecuador'
          team2='Irã'
        />
        <Game
          team1='Argentina'
          team2='Australia'
        />
      </div>

    </>
  );
}