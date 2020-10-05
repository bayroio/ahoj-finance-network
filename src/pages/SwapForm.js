import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';

class SwapForm extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            dropDownValueFrom: "Select an asset",
            dropDownValueTo: "Select an asset"
        };

        this.state = this.initialState;
    }

    changeValueFrom(text) {
        this.setState({dropDownValueFrom: text})
    }

    changeValueTo(text) {
        this.setState({dropDownValueTo: text})
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name] : value});
        console.log(event.target.name);
        console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <Form.Group>
                    <Form.Label>From</Form.Label>
                    <Form.Label>Balance:</Form.Label>
                    <InputGroup className="mb-3">
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={this.state.dropDownValueFrom}
                        id="dropdownBtnFrom"
                        onSelect={(evt) => console.log(evt)}
                        >
                        <Dropdown.Item onClick={(e) => this.changeValueFrom(e.target.textContent)} eventKey="AVAXXX" href="#">AVAX</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.changeValueFrom(e.target.textContent)} eventKey="AHOJJJ" href="#">AHOJ</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.changeValueFrom(e.target.textContent)} eventKey="asaOILLL" href="#">asaOIL</Dropdown.Item>
                        </DropdownButton>
                        <FormControl size="lg" placeholder="0.00" />
                    </InputGroup>
                </Form.Group>
                ↓
                <Form.Group>
                    <Form.Label>To</Form.Label>
                    <InputGroup className="mb-3">
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={this.state.dropDownValueTo}
                        id="dropdownBtnTo"
                        >
                        <Dropdown.Item onClick={(e) => this.changeValueTo(e.target.textContent)}>AHOJ</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.changeValueTo(e.target.textContent)}>asaUSD</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.changeValueTo(e.target.textContent)}>asaOIL</Dropdown.Item>
                        </DropdownButton>
                        <FormControl size="lg" placeholder="0.00" />
                    </InputGroup>
                </Form.Group>
                <p>
                Swap market commission: 0%
                <br/>
                Network commissions: AVAX $0
                </p>
                <Button variant="primary" size="lg" type="submit">
                    Swap
                </Button>
            </Form>
        );
    }
}

export default SwapForm;