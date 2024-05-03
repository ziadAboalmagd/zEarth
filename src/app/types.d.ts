export interface linkitem {
    label: string;
    link: string;
    icon?: React.node | string
}
export interface comment {
    name: string;
    comment: string;
    icon?: React.node | string
}
export interface country {
    id: number,
    name: string,
    city: string,
    desc: string,
    color: string,
    x: number,
    y: number
}
export interface data {
    time: string,
    date: string,
    cdegree: string,
    weather: string,
}