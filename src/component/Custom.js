import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,Card,Container,Row,Col } from 'react-bootstrap'
import './myCustom.css'

export default class Custom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentState: '',
            Card: []

        }
    }
    currentFunction = (event) => {
        this.setState({
            currentState: event.target.value

        }, () => {
            console.log(this.state.currentState);

        })
    }
    createCard = (event) => {
        event.preventDefault()
        var re = []
        re = this.state.Card
        re.push(this.state.currentState)
        this.setState({
            currentState: '',
            Card: re
        })
    }
    delCard = (n) => {
        const filter = this.state.Card
        filter.splice(n, 1)
        this.setState({
            Card: filter
        })

    }

    render() {
        return (
           <Container>
                <Form onSubmit={this.createCard}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Input Something</Form.Label>
                        <Form.Control type="text" onChange={this.currentFunction} value={this.state.currentState} />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                     </Button>
                     <Row>
                    {
                        this.state.Card.map((re, index) => {
                            return (
                            
                                <Col sm={4}>
                                <Card className="CardDis" key={index}>
                        
                                <Card.Body>
                                  <Card.Text>
                                   {re}
                                  </Card.Text>
                                  <Button onClick={() => this.delCard(index)} variant="primary">Delete</Button>
                                </Card.Body>
                
                              </Card>
                              </Col>
                            )
                        })
                    }  
                    </Row>

                </Form>

          </Container>


        )
    }
}
