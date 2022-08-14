export type GroupProps = {
    index: number;
    groupName: string;
}

export type FlagProps = {
    code: string;
}

export type Country = {
    id: string,
    country: string,
    code: string
}

export type Match = {
    team1: Country,
    team2: Country
}