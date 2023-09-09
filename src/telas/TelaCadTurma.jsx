import Pagina from "../templates/Pagina";
import FormTurma from "../formularios/FormTurma";
import TabelaTurmas from "../tabelas/tabelaTurma";
import listaTurmas from "../dadosMock/dadosTurma";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function TelaCadTurma(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [turmas, setTurmas] = useState(listaTurmas);
    return (
        <Pagina>
            <Container className="m-3">
                {
                    exibirTabela ?
                        <TabelaTurmas listaTurmas={turmas}
                            setTurmas={setTurmas}
                            exibirTabela={setExibirTabela} />
                        :
                        <FormTurma listaTurmas={turmas}
                            setTurmas={setTurmas}
                            exibirTabela={setExibirTabela} />
                }
            </Container>
        </Pagina>
    );
}