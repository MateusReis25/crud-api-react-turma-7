import React, { useState } from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
import { Container, ListGroup, Row, 
        Col, Button, Modal, 
        Alert, Form } from 'react-bootstrap'

function CustomerList(props) {

    const tasks = props.tasks || []
    const [task, setTask] = useState({});
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    const renderTask = () => {
        return tasks.map((item) => {
            return (
                <ListGroup.Item key={item.id}>
                    <Row className="itemTask">
                        <Col xs={6} md={8}>
                            <strong>Nome: </strong> {item.name}
                        </Col>
                        <Col xs={6} md={8}>
                            <strong>Idade: </strong> {item.age}
                        </Col>
                        <Col xs={6} md={8}>
                            <strong>CPF: </strong> {item.document}
                        </Col>
                        <Col xs={6} md={8}>
                            <strong>Telefone: </strong> {item.tel}
                        </Col>
                        <Col xs={6} md={8}>
                            <strong>Estado: </strong> {item.state}
                        </Col>

                        <Col>
                            <Button className="mx-3" variant="secondary"
                                onClick={() => {
                                    setTask(item)
                                    handleShowEdit()
                                }}>
                                Editar
                            </Button>
                            <Button className="mx-3" variant="danger"
                                onClick={() => {
                                    setTask(item)
                                    handleShow()
                                }}>
                                Deletar
                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            )
        })
    }

    return (
        <Container>
            {
                successDelete
                    ?
                    <Alert key='success' variant='success'>
                        <AiFillCheckCircle size="30" /> Usuario deletado com sucesso!
                    </Alert>
                    :
                    ''
            }

            <Row>
                <Col>
                    <ListGroup variant="flush">
                        {renderTask()}
                    </ListGroup>
                </Col>
            </Row>

            {/* //modal edit */}
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" placeholder="Digite o novo nome do usuario"
                            value={task.name}
                            onChange={event => setTask({...task, name: event.target.value})} 
                        />
                        <Form.Label>Idade:</Form.Label>
                        <Form.Control type="text" placeholder="Digite a novo data de nascimento do usuario"
                            value={task.age}
                            onChange={event => setTask({...task, age: event.target.value})} 
                        />
                         <Form.Control type="text" placeholder="Digite a novo data de nascimento do usuario"
                            value={task.age}
                            onChange={event => setTask({...task, age: event.target.value})} 
                        />
                         <Form.Control type="text" placeholder="Digite a novo data de nascimento do usuario"
                            value={task.age}
                            onChange={event => setTask({...task, age: event.target.value})} 
                        />
                         <Form.Control type="text" placeholder="Digite a novo data de nascimento do usuario"
                            value={task.age}
                            onChange={event => setTask({...task, age: event.target.value})} 
                        />


                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="success" onClick={() => {
                        props.editDescription(task)
                        handleCloseEdit()
                        }
                    }>
                        Editar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* //modal delete */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Apagar Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deseja apagar a tarefa: <strong>{task.description}</strong></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        props.delete(task.id)
                        handleClose()
                        setSuccessDelete(true)
                        setTimeout(
                            () => {
                                setSuccessDelete(false)
                            }, 3000)
                    }}>
                        Apagar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default CustomerList