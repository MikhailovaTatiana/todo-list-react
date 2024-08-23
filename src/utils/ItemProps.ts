export interface ItemProps {
    id: number,
    task: string,
    checked: boolean,
    removeItem: () => void,
    toggleChecked: () => void
}