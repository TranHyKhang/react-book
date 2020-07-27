import React, { Component } from 'react';
import {
    Container,
  Row,
  Col,
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import axios from 'axios';

import {CartContext} from '../context/cart'


export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3010/api/books').then(res => {
            this.setState({
                books: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const {books} = this.state;
        return <Container>
            <Row>
            {books.map(book => (
                <Col sm="3">
                    <Card style={{margin: "10px"}}>
                        <CardImg top width="100%" src={book.coverUrl} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>{book.name}</CardTitle>
                        <CardSubtitle>{book.desc}</CardSubtitle>
                        <CartContext.Consumer>
                            {
                                ({addToCart}) => (
                                    <Button onClick={() => addToCart(book)}>Button</Button>
                                )
                            }
                        </CartContext.Consumer>
                        </CardBody>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
    }
}