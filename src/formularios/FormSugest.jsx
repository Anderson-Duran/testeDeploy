import { Container, FloatingLabel } from "react-bootstrap";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

const boxcad_style = {
    padding: '2px',
    borderRadius: '10px',
    border: '2px solid black',
    width: '380px'
}

const boxcadall_style = {
    padding: '5px',
    borderRadius: '10px',
    border: '3px solid black',
    height: '450px',
}

export default function FormSugest(props) {

    //validação
    const [validado, setValidacao] = useState(false);
    const [sugestao, setSugestao] = useState({
        cpf: "",
        nome: "",
        sobreNome: "",
        sugestao: ""
    });

    function manipulaMudanca(e) {
        const elemForm = e.currentTarget;
        const id = elemForm.id;
        const valor = elemForm.value;
        setSugestao({ ...sugestao, [id]: valor });
    }

    function manipulaSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {

            let sugestoes = props.listaSugest;
            sugestoes.push(sugestao);
            props.setSugestao(sugestoes);

            props.exibirTabela(true);
            setValidacao(false);
        }
        else {
            setValidacao(true);
        }
        evento.preventDefault();
        evento.stopPropagation();

    }

    return (

        <div className="mt-5" style={boxcadall_style}>
            <Container>
                <Form noValidate validated={validado} onSubmit={manipulaSubmissao}>
                    <hr />
                    <div className="d-flex justify-content-center mt-3"><h3 className="text-center " style={boxcad_style}>Deixa uma sugestão</h3></div>
                    <hr />
                    <Row>
                        <Col>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                required
                                placeholder="Nome"
                                value={sugestao.nome}
                                id="nome"
                                onChange={manipulaMudanca} />
                            <Form.Control.Feedback type="invalid">Insira um nome</Form.Control.Feedback>
                        </Col>
                        <Col>
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control
                                required
                                placeholder="Sobrenome"
                                value={sugestao.sobreNome}
                                id="sobreNome"
                                onChange={manipulaMudanca} />
                            <Form.Control.Feedback type="invalid">Insira um sobrenome</Form.Control.Feedback>
                        </Col>
                        <Col>
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="111.222.333-00"
                                value={sugestao.cpf}
                                id="cpf"
                                onChange={manipulaMudanca} />
                            <Form.Control.Feedback type="invalid">Insira um CPF</Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Form.Label className="mt-4">Descreva a sugestão</Form.Label>
                    <FloatingLabel label="Sugestão">
                        <Form.Control
                            required
                            as="textarea"
                            placeholder="Deixe um comentário"
                            style={{ height: '100px' }}
                            value={sugestao.sugestao}
                            id="sugestao"
                            onChange={manipulaMudanca} />
                        <Form.Control.Feedback type="invalid">Insira uma sugestão</Form.Control.Feedback>
                    </FloatingLabel>

                    <Button className="mt-3" variant="primary" type="submit">
                        Cadastrar
                    </Button>
                    {' '}
                    <Button className="mt-3" variant="primary" type="button" onClick={() => {
                        props.exibirTabela(true);
                    }}>Voltar</Button>
                </Form>
            </Container>
        </div>


    )
}
