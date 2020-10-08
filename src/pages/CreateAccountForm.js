import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl'
import CreateAccountAPI from '../API/CreateAccountAPI'
import 'bootstrap/dist/css/bootstrap.min.css';

async function Keystore_CreateUser(nombreusuario, clave) {
    console.log("NombreUsuario: ", nombreusuario)
    console.log("Clave: ", clave)
    fetch("http://localhost:9650/ext/keystore", {
        body: JSON.stringify({jsonrpc:'2.0',id:1,method:'keystore.createUser',params:{username:nombreusuario, password:clave}}),
        headers: {
            "Content-Type": "application/json;"
        },
        method: "POST"
    })
    .then(response => response.json())
    .then((result) => {
        console.log("Result: ", result)
    })
    .catch((error) => {
        console.log(error);
    });
}

async function AVM_CreateAddress(nombreusuario, clave) {
    console.log("NombreUsuario: ", nombreusuario)
    console.log("Clave: ", clave)
    fetch("http://localhost:9650/ext/X", {
        body: JSON.stringify({jsonrpc:'2.0',id:1,method:'avm.createAddress',params:{username:nombreusuario, password:clave}}),
        headers: {
            "Content-Type": "application/json;"
        },
        method: "POST"
    })
    .then(response => response.json())
    .then((result) => {
        console.log("Address: ", result)
    })
    .catch((error) => {
        console.log(error);
    });
}

class CreateAccountForm extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            password: '',
            address: '',
            keystoreCreateUserData: [],
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name] : value});
        console.log(event.target.name);
        console.log(event.target.value);
    }

    onFormSubmit = async (event) => {
        console.log("onFormSubmit")

        event.preventDefault();

        console.log("this.state.name: ", this.state.name)
        console.log("this.state.password: ", this.state.password)
        await Keystore_CreateUser(this.state.name, this.state.password)
        await AVM_CreateAddress(this.state.name, this.state.password)

        //const form = event.currentTarget;
        //console.log("Form: ", form)
    }

    render() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" id="name" placeholder="User name" value={this.state.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Account Address" value={this.state.address} />
                    </Form.Group>
                <Button variant="primary" size="lg" type="submit">
                    Create Account
                </Button>
            </Form>
        );
    }
}

export default CreateAccountForm;