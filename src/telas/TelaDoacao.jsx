import Pagina from "../templates/Pagina";
import FormDoacao from "../formularios/FormDoacao";
import TabelaDoacao from "../tabelas/TabelaDoacao";
import listaDoadores from "../dadosMock/dadosDoacao";
import { useState } from "react";
import { Alert, Container } from "react-bootstrap";

export default function TelaDoacao(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [doadores, setDoadores] = useState(listaDoadores);
    return (
        <Pagina>
            <Container className="border m-6">
                <Alert variant={"secondary"} className="text-center m-3">
                    <font size="6"><strong>Cadastro de Doadores</strong></font></Alert>
                {
                    exibirTabela ?
                        <TabelaDoacao listaDoadores={doadores} setDoadores={setDoadores}
                            exibirTabela={setExibirTabela} />
                        :
                        <FormDoacao listaDoadores={doadores} setDoadores={setDoadores}
                            exibirTabela={setExibirTabela} />
                }
            </Container>
        </Pagina>
    );
}