import { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap"
import React from "react";

const boxcad_style = {
    padding: '2px',
    borderRadius: '10px',
    border: '2px solid black',
    width:'380px'
}

const boxcadall_style = {
    padding: '5px',
    borderRadius: '10px',
    border: '3px solid black',
    height: '680px'
}

export default function FormTurma(props) {
    const [validado, setValidado] = useState(false);
    const [turma, setTurma] = useState({
        Professor: "",
        Turma: "",
        Curso: "",
        Data: "",
        Hora: "",
        NumeroDaTurma: "",
        Aluno1: "",
        Aluno2: "",
        Aluno3: "",
        Aluno4: "",
        Aluno5: "",
        Aluno6: "",
        TipoDeAula: "",
    });

    function manipulaMudanca(e){
        const elementForm = e.currentTarget;
        const id = elementForm.id;
        const valor = elementForm.value;
        setTurma({...turma, [id]:valor});
    }

    function manipulaSbmissao(evento){
        const form = evento.currentTarget;
        if (form.checkValidity()){
            setValidado(false);
        }
        else{
            setValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }
    return (
        <div className="mt-5 d-flex justify-content-center flex-column" style={boxcadall_style}>
            <hr/>
            <Container className="text-center" style={boxcad_style}>
                <h3>CADASTRO DE TURMAS</h3>
                </Container>
                <hr/>
            <Form noValidate validated={validado} onSubmit={manipulaSbmissao}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><strong>Professor</strong></Form.Label>
                            <Form.Control type="text" placeholder="Nome do Professor" required value={turma.Professor} id="Professor" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe o Nome!</Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><strong>Turma</strong></Form.Label>
                            <Form.Control type="text" placeholder="A ; B ; C ; D" required value={turma.Turma} id="Turma" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe a Turma!</Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><strong>Curso</strong></Form.Label>
                            <Form.Control type="text" placeholder="Fisioterapia" required value={turma.Curso} id="Curso" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe o Curso!</Form.Control.Feedback>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><strong>Data</strong></Form.Label>
                            <Form.Control type="date" placeholder="" required value={turma.Data} id="Data" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe a Data!</Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><strong>Hora</strong></Form.Label>
                            <Form.Control type="text" placeholder="13:00" required value={turma.Hora} id="Hora" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe a Hora!</Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><strong>Numero da Turma</strong></Form.Label>
                            <Form.Control type="text" placeholder="01" required value={turma.NumeroDaTurma} id="NumeroDaTurma" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe o Numero da Turma!</Form.Control.Feedback>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><strong>Alunos</strong></Form.Label>
                            <Form.Control type="text" placeholder="Nome do Aluno" required value={turma.Aluno1} id="Aluno1" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe o Nome do Aluno!</Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><strong>Alunos</strong></Form.Label>
                            <Form.Control type="text" placeholder="Nome do Aluno" required value={turma.Aluno2} id="Aluno2" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe o Nome do Alunos!</Form.Control.Feedback>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Nome do Aluno" required value={turma.Aluno3} id="Aluno3" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe o Nome do Aluno!</Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Nome do Aluno" required value={turma.Aluno4} id="Aluno4" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe o Nome do Alunos!</Form.Control.Feedback>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Nome do Aluno" required value={turma.Aluno5} id="Aluno5" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe o Nome do Aluno!</Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Nome do Aluno" required value={turma.Aluno6} id="Aluno6" onChange={manipulaMudanca}/>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid"> Por Favor Informe o Nome do Alunos!</Form.Control.Feedback>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><strong>Tipo de Aula</strong></Form.Label>
                            <Form.Select aria-label="Default select example" value={turma.TipoDeAula} id="TipoDeAula" onChange={manipulaMudanca}>
                                <option value="Prática" selected>Prática</option>
                                <option value="Estágio">Estágio</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <center><Col md={2}>
                    <Button type="submit" variant="primary">Cadastrar</Button>
                    {' '}
                    <Button type="button" variant="primary" onClick={()=>{
                        props.exibirTabela(true);
                    }}>Voltar</Button>
                    </Col></center>
                </Row>
            </Form>
        </div>
    );
}