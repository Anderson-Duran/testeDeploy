import FormVisitante from "../formularios/FormVisitantes";
import { Container } from "react-bootstrap";
import TabelaVisitantes from "../tabelas/tabelaVisitantes";
import listaVisitantes from "../dadosMock/dadosVisitantes";
import { useState } from "react";
import Pagina from "../templates/Pagina";

export default function TelaCadastroVisitantes(props){

    const [exibirTabela, setExibirTabela] = useState(true);
    const [visitantes, setVisitantes] = useState(listaVisitantes);
    

    return (
        <>
                {
                    exibirTabela? 
                    <Pagina>
                        <Container id="brasao">
                            <TabelaVisitantes listaVisitantes={visitantes} setVisitantes={setVisitantes}
                                                exibirTabela={setExibirTabela}/> 
                        </Container>
                    </Pagina>
                    :
                    <Pagina>
                        <Container id="brasao">
                            <FormVisitante listaVisitantes={visitantes} setVisitantes={setVisitantes} 
                                                    exibirTabela={setExibirTabela}/>
                        </Container>
                     </Pagina>
                }
            
        </>      
    );
}