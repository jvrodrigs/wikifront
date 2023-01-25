import { LineDivider } from "./styles";

interface ILineProps {
    side: boolean;
}
export function Line({ side } : ILineProps) {
    return <LineDivider side={ side } />
}