import { Group } from './Group';
import '../styles/groups.css'
import ButtonBracketRedirect from './ButtonBracketRedirect'

export function Groups() {
    return (
        <div>
            <div className='group-on'>
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
        </div>
    );
}