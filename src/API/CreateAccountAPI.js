import {Component} from 'react'

class CreateAccountAPI extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            address: null
        };

        this.state = this.initialState;
    }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    fetch("http://localhost:9650/ext/keystore", {
        body: JSON.stringify({jsonrpc:'2.0',id:1,method:'keystore.createUser',params:{username:'', password:''}}),
        headers: {
            "Content-Type": "application/json;"
        },
        method: "POST"
    })
    .then(response => response.json())
    .then((result) => {
        console.log("Result: ", result)
        console.log("Result.Result: ", result.result)
        if (result.result.success === true)
        {
            this.setState({success: "123ABC"})
            console.log("TRUE!")
        }
    })
    .catch((error) => {
        console.log(error);
    });
  }

  render() {
      console.log("this.state: ", this.state)
    const {assetID, password, address} = this.state
    console.log("CreateAccountAPI.address: ", address)
    return {address} //<ul>{assetID}</ul>
  }
}

export default CreateAccountAPI