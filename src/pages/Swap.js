import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import SwapForm from './SwapForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class SwapPage extends Component {
  constructor(props) {
    super(props);
    
    this.initialState = {
      selectedKeySwapPool: "1",
      showswapForm: true,
      showpoolForm: false,
      selectedKeyNewPairAddLiquidity: "1",
      showNewPairForm: false,
      showAddLiquidityForm: false,
    };

    this.state = this.initialState;
    //this.hideComponent = this.hideComponent.bind(this);
    //this.hideShowSwapPoolForms = this.hideComponent.bind(this);
  }

  hideShowSwapPoolForms(eventKey) {
    console.log(eventKey);
    switch (eventKey) {
      default: case null:
        break;
      case "1":
        this.setState({ showswapForm: true  });
        this.setState({ showpoolForm: false  });
        break;
      case "2":
        this.setState({ showswapForm: false  });
        this.setState({ showpoolForm: true  });
        break;
    }
  }

  handleSelectSwapOrPool = (eventKey) => {
    this.hideShowSwapPoolForms(eventKey);
    this.setState({selectedKeySwapPool: eventKey});
  }

  hideShowNewPairAddLiquidityForms(eventKey) {
    console.log(eventKey);
    switch (eventKey) {
      default: case null:
        break;
      case "1":
        this.setState({ showNewPairForm: true  });
        this.setState({ showAddLiquidityForm: false  });
        break;
      case "2":
        this.setState({ showNewPairForm: false  });
        this.setState({ showAddLiquidityForm: true  });
        break;
    }
  }

  handleSelectNewPairOrAddLiquidity = (eventKey) => {
    this.hideShowNewPairAddLiquidityForms(eventKey);
    this.setState({selectedKeyNewPairAddLiquidity: eventKey});
  }
  
  render() {
    const { showswapForm, showpoolForm, showNewPairForm, showAddLiquidityForm } = this.state; 

    return (
      <Layout>
        <div id="main">
          <div className="inner">
            <Card>
              <Card.Header>
                <h1>Ahoj.Swap</h1>
                <br/>
                Swap your AVAX for AHOJ, AHOJ for asaUSD/asaEUR/asaCHF or any Ahoj Synthetic Asset (ASA) for asaUSD/asaEUR/asaCHF. 
                If you want to trade between diverse Ahoj synthetic assets (ASA), use AHOJ.INVEST
              </Card.Header>
            </Card>
            <br/>
            <Nav fill variant="tabs" activeKey={ this.state.selectedKeySwapPool } onSelect={this.handleSelectSwapOrPool}>
              <Nav.Item>
                <Nav.Link eventKey="1">Swap</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Pool</Nav.Link>
              </Nav.Item>
            </Nav>
            <br/>
            {
              showswapForm && (
              <div id="swapform">
                <Container>
                    <Card>
                        <Card.Body>
                          <SwapForm />
                        </Card.Body>
                    </Card>
                </Container>
              </div>
              )
            }
            {
              showpoolForm && (
              <div id="poolform">
                  <Container>
                      <Card>
                        <Card.Header>
                          <h6>Liquidity provider rewards</h6>
                          <p>
                            Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
                          </p>
                        </Card.Header>
                        <Card.Body>
                          <div>
                            <Nav className="justify-content-end" variant="pills" activeKey={ this.state.selectedKeyNewPairAddLiquidity } onSelect={this.handleSelectNewPairOrAddLiquidity}>
                              <Nav.Item>
                                <Nav.Link eventKey="1">New pair</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="2">Add Liquidity</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                          <br/>
                          {
                            showNewPairForm && 
                            (
                              <div id="newPairForm">
                                <Container>
                                  <h6>New Pair</h6>
                                  <br/>
                                  <Card></Card>
                                </Container>
                                </div>
                            )
                          }
                          {
                            showAddLiquidityForm && 
                            (
                              <div id="addLiquidityForm">
                                <Container>
                                  <h6>Add Liquidity</h6>
                                  <br/>
                                  <Card></Card>
                                </Container>
                                </div>
                            )
                          }
                        </Card.Body>
                      </Card>
                  </Container>
              </div>
              )
            }
            <br/>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SwapPage;
