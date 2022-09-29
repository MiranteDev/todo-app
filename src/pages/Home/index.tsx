
import { Card, ListOfBoards } from "../Home/styles";
export function Home(){
    return (
        <>
        <h1>Meus Projetos</h1>
        <ListOfBoards>
            <Card>
                <h4>Galileu</h4>
            </Card>
            <Card>
                <h4>Projeto 2</h4>
            </Card>
            <Card>
                <h4>Projeto 3</h4>
            </Card>
            <Card>
                <h4>Projeto 4</h4>
            </Card>
        </ListOfBoards>
        </>
    )
}