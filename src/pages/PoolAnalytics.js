import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import poolAnalytics from '../assets/images/PoolAnalytics.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class PoolAnalytics extends Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Image src={ poolAnalytics } alt="Pool Analytics" fluid />
                    </Col>
                </Row>
            </Container>
            
        );
    }
}

export default PoolAnalytics;