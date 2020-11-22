import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';

const ABICODE = require('../contracts/abi/aggregatorInterface.json')
const RESOURCES = require('../resources/directoryRinkeby.json');
const currencies = RESOURCES.tokens;

const Web3 = require("web3");
const web3 = new Web3(
    new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/fedfa150b08c4b8faacdc53c2e673798"
    )
);

class SwapForm extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            dropDownValueFrom: "Select an asset",
            dropDownValueTo: "Select an asset",
            input1: 0,
            input2: 0,
            token1: 0,
            token2: 0,
            value1: null,
            value2: null,
            precioUnitario: null
        };

        this.state = this.initialState;
    }

    componentDidMount = async () =>{
        this.ETHUSD1();
        this.ETHUSD2();
    };

    changeValueFrom(text, value, property, method) {
        this.setState({dropDownValueFrom: text})
        this.setState({[property]: value}, () => {
            if(method === 1){
                this.ETHUSD1();
            } else {
                this.ETHUSD2();
            }
        });
    }

    changeValueTo(text, value, property, method) {
        this.setState({dropDownValueTo: text})
        this.setState({[property]: value}, () => {
            if(method === 1){
                this.ETHUSD1();
            } else {
                this.ETHUSD2();
            }
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    createSelectItemsFrom () {
        let items = [];
        for (let i = 0; i < currencies.length; i++) {
            items.push(<Dropdown.Item onClick={(e) => this.changeValueFrom(e.target.textContent, i, 'token1', 1)}>{currencies[i].symbol}</Dropdown.Item>);
        }
        return items;
    }

    createSelectItemsTo () {
        let items = [];
        for (let i = 0; i < currencies.length; i++) {
            items.push(<Dropdown.Item onClick={(e) => this.changeValueTo(e.target.textContent, i, 'token2', 2)}>{currencies[i].symbol}</Dropdown.Item>);
        }
        return items;
    }

    handleCoinChange (e, property, method) {
        console.log("--- handleCoinChange ---");
        const { value } = e.target;
        this.setState({[property]: value}, () => {
        if(method === 1){
            this.ETHUSD1();
        } else {
            this.ETHUSD2();
        }
        });
    }

    handleValueChange (e, property, method) {
        console.log("--- handleValueChange ---");
        const { value } = e.target;
        this.setState({[property]: value}, () => {
        if(method === 1){
            this.calcConverValue(1);
        } else {
            this.calcConverValue(2);
        }
        });
    }

    ETHUSD1 = async () => {
        console.log("--- TOKEN/USD ---", this.state);
        const aggregatorInterfaceABI = ABICODE;
        console.log("TOKEN",this.state.token1);
        var addr = currencies[this.state.token1].address;
        const priceFeed = new web3.eth.Contract(aggregatorInterfaceABI, addr);
        priceFeed.methods
          .latestAnswer()
          .call()
          .then((price) => {
            //Do something with price
            price = price / 100000000;
            this.setState({value1: price});
            console.log(price);
            this.calcConverCoin();
          });
      }
    
      ETHUSD2 = async () => {
        console.log("--- TOKEN/USD ---", this.state);
        const aggregatorInterfaceABI = ABICODE;
        console.log("TOKEN",this.state.token2);
        var addr = currencies[this.state.token2].address;
        const priceFeed = new web3.eth.Contract(aggregatorInterfaceABI, addr);
        priceFeed.methods
          .latestAnswer()
          .call()
          .then((price) => {
            //Do something with price
            price = price / 100000000;
            this.setState({value2: price});
            console.log(price);
            this.calcConverCoin();
          });
      }
    
      calcConverValue (opc) {
        console.log("Entrando a calcConverValue",opc);
        if(opc === 1){
          var cr = 0;
          var unit = 0;
          const cs = this.state.input1;
          const priceCS = this.state.value1;
          const priceCR = this.state.value2;
          console.log("CS",cs);
          console.log("priceCS",priceCS);
          console.log("priceCR",priceCR);
          cr = (cs*priceCS)/priceCR;
          unit = cs/cr;
          this.setState({input2: cr, precioUnitario: unit});
        } else {
          var cr = 0;
          var unit = 0;
          const cs = this.state.input2;
          const priceCS = this.state.value2;
          const priceCR = this.state.value1;
          console.log("CS",cs);
          console.log("priceCS",priceCS);
          console.log("priceCR",priceCR);
          cr = (cs*priceCS)/priceCR;
          unit = cs/cr;
          this.setState({input1: cr, precioUnitario: unit});
        }
      }
    
      calcConverCoin () {
        console.log("Entrando a calcConverCoin");
        var cr = 0;
        var unit = 0;
        const cs = this.state.input1;
        const priceCS = this.state.value1;
        const priceCR = this.state.value2;
        console.log("CS",cs);
        console.log("priceCS",priceCS);
        console.log("priceCR",priceCR);
        cr = (cs*priceCS)/priceCR;
        unit = cs/cr;
        this.setState({input2: cr, precioUnitario: unit});
      }

    render() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <Form.Group>
                    <Form.Label>From Balance</Form.Label>
                    <InputGroup className="mb-3">
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={this.state.dropDownValueFrom}
                        id="dropdownBtnFrom"
                        >
                        {this.createSelectItemsFrom()}
                        </DropdownButton>
                        <FormControl size="lg" placeholder="0.00" value={this.state.input1} onChange={e => this.handleValueChange(e, 'input1', 1)}/>
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
                        {this.createSelectItemsTo()}
                        </DropdownButton>
                        <FormControl size="lg" placeholder="0.00" value={this.state.input2} onChange={e => this.handleValueChange(e, 'input2', 2)} />
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