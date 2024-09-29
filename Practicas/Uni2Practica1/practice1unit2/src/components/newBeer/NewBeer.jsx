//formulario para agregar una nueva cerveza.
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import beers from "../beers/Beers";

const NewBeer = ({onBeerDataSaved}) => {

    const [newBeerName , setNewBeerName] = useState("")
    const [newBeerStyle , setNewBeerStyle] = useState("")
    const [newBeerPrice , setNewBeerPrice] = useState("")

    const newPriceHandler=(event)=>{
        setNewBeerPrice(event.target.value)
    }

    const newStyleHandler=(event)=>{
        setNewBeerStyle(event.target.value)
    }

    const newNameHandler=(event)=>{
        setNewBeerName(event.target.value)
    }
    const submitBeerHandler = (event) => {
        event.preventDefault();
        const beerData = {
            id: (beers.length + 1),
            beerName: newBeerName,
            beerStyle: newBeerPrice,
            price: parseInt(newBeerPrice),
            available: true
        };
        onBeerDataSaved(beerData);
        setNewBeerName("");
        setNewBeerStyle("");
        setNewBeerPrice("");
        
        };
        
        


    return (
        <Card className="m-4 " bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={submitBeerHandler}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Ingresar nombre"
                                    onChange={newNameHandler}
                                    value={newBeerName}

                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Estilo</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Ingresar estilo"
                                    onChange={newStyleHandler}
                                    value={newBeerStyle}

                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    required
                                    placeholder="Ingresar precio(Dol)"
                                    min={0}
                                    onChange={newPriceHandler}
                                    value={newBeerPrice}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex justify-content-end">
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                Agregar cerveza
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default NewBeer;