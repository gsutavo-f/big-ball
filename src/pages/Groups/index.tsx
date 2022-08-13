import { Group } from 'components/Group';
import ButtonBracketRedirect from 'components/ButtonBracketRedirect'
import styles from './Groups.module.scss';

export function Groups() {
    return (
        <>
            <div className={styles.gridGroup}>
                <Group index={0} groupName="Grupo A" />
                <Group index={1} groupName="Grupo B" />
                <Group index={2} groupName="Grupo C" />
                <Group index={3} groupName="Grupo D" />
                <Group index={4} groupName="Grupo E" />
                <Group index={5} groupName="Grupo F" />
                <Group index={6} groupName="Grupo G" />
                <Group index={7} groupName="Grupo H" />
            </div>
            <ButtonBracketRedirect />
        </>
    );
}