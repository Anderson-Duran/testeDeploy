import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import React from "react";


export default function Fichario(props) {
  const [validado, setValidado] = useState(false);
  const [doador, setDoador] = useState({
    nome: "",
    cpf: "",
    dataNasc: "",
    genero: "",
    endereco: "",
    bairro: "",
    cep: "",
    cidade: "",
    estado: ""
  });

  function manipularMudanca(e) {
    const elemForm = e.currentTarget;
    const id = elemForm.id;
    const valor = elemForm.value;
    setDoador({ ...doador, [id]: valor });
  }

  function manipulaSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      let doadores = props.listaDoadores;
      doadores.push(doador);
      props.setDoadores(doadores);
      props.exibirTabela(true);
      setValidado(false);
    }
    else {
      setValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }
  return (
    <>
      <Form noValidate validated={validado} onSubmit={manipulaSubmissao}>

        <Row className="mb-3">
          <Form.Group as={Col} md="5">
            <Form.Label><strong>Nome completo</strong></Form.Label>
            <Form.Control type="text" placeholder="Informe o nome" value={doador.nome} id="nome" onChange={manipularMudanca} required />
            <Form.Control.Feedback type='invalid'>
              Preencha o nome corretamente
            </Form.Control.Feedback>
          </Form.Group>
          <Col>
            <Form.Group md="12">
              <Form.Label><strong>CPF</strong></Form.Label>
              <Form.Control type="text" placeholder="000.000.000-00" value={doador.cpf} id="cpf" onChange={manipularMudanca} required />
              <Form.Control.Feedback type='invalid'>
                Preencha o CPF
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label><strong>Data de nascimento</strong></Form.Label>
              <Form.Control type="date" value={doador.dataNasc} id="dataNasc" onChange={manipularMudanca} required />
              <Form.Control.Feedback type='invalid'>
                Informa a data de nascimento
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label><strong>Genero:</strong></Form.Label>
              <Form.Select value={doador.genero} id="genero" onChange={manipularMudanca}>
                <option>Genero</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="5">
            <Form.Label><strong>Endereço</strong></Form.Label>
            <Form.Control type="text" placeholder="Informe o endereço" value={doador.endereco} id="endereco" onChange={manipularMudanca} required />
            <Form.Control.Feedback type='invalid'>
              Preencha o endereço corretamente
            </Form.Control.Feedback>
          </Form.Group>
          <Col>
            <Form.Group md="8">
              <Form.Label><strong>Bairro</strong></Form.Label>
              <Form.Control type="text" placeholder="Informe o bairro" value={doador.bairro} id="bairro" onChange={manipularMudanca} required />
              <Form.Control.Feedback type='invalid'>
                Informe o bairro
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group md="8">
              <Form.Label><strong>CEP</strong></Form.Label>
              <Form.Control type="text" placeholder="00.000-00" value={doador.cep} id="cep" onChange={manipularMudanca} required />
              <Form.Control.Feedback type="invalid">
                Informe o CEP
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group as={Col} md="6">
            <Form.Label><strong>Cidade</strong></Form.Label>
            <Form.Control type="text" placeholder="Cidade" value={doador.cidade} id="cidade" onChange={manipularMudanca} required />
            <Form.Control.Feedback type="invalid">
              Digite sua cidade
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label><strong>Estado</strong></Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Selecione o estado</option>
              <Form.Control value={doador.estado} id="estado" onChange={manipularMudanca} />
              <option value="">Selecione</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <div className="btn-group" />
        <Row>
          <col-2>
            <center><div className="btn-group">
              <center><Button type="submit"><strong>Cadastrar</strong></Button></center>
                
             
            </div></center>
          </col-2>
        </Row>

      </Form>
    </>
  );
}