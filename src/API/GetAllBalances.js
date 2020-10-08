import React, {Component} from 'react'

class GetAllBalances extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            assetID: null,
            name: null,
            symbol: null,
            denomination: null
        };

        this.state = this.initialState;
    }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    /*var myHeaders = new Headers();
    myHeaders.append('Content-Type',  'application/json');

    const data = {
        method: 'POST',
        //mode: 'cors',
        //cache: 'no-cache',
        body: JSON.stringify({
                //jsonrpc: '2.0',
                //id: 1,
                //method: 'avm.getAllBalances',
                //params: {address:'X-fuji1k2cppyqd2jaf7cff5usg2du0aycrtn9h8vg8gn'}
                address:'X-fuji1k2cppyqd2jaf7cff5usg2du0aycrtn9h8vg8gn'
        }),
        headers: {'Content-Type': 'application/json'}
    };

    console.log(data);*/
    
    //const url = 'http://localhost:9650/ext/X/'
    //const url = 'localhost:9650/ext/X/'
    //var myRequest = new Request(url)
    //(async () => {
    //var result = await 
    fetch("http://localhost:9650/ext/X", {
        body: JSON.stringify({jsonrpc:'2.0',id:1,method:'avm.getAssetDescription',params:{assetID:'JNxWkGdELCwHPpNMBWK9L7PgBTcbPXVHYyDsP5tYw2KhqA45R'}}),
        headers: {
            "Content-Type": "application/json;"
        },
        method: "POST"
    })
    .then(response => response.json())
    .then((result) => {
        console.log("Result: ", result)
        console.log("Result.Result: ", result.result)
        this.setState({assetID: result.result.assetID})
        this.setState({name: result.result.name})
        this.setState({symbol: result.result.symbol})
        this.setState({denomination: result.result.denomination})
    })
    .catch((error) => {
        console.log(error);
    });
  }

  render() {
    const {assetID, name, symbol, denomination} = this.state

    return <ul>{assetID}</ul>
  }
}

export default GetAllBalances