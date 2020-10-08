import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import SwapForm from './SwapForm';
import NewPairForm from './NewPairForm';
import AddLiquidityForm from './AddLiquidityForm'
import PoolAnalytics from './PoolAnalytics'
import CreateAccountForm from './CreateAccountForm'

import EjemploAPI from '../API/Ejemplo'
import GetAllBalances from '../API/GetAllBalances'

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
      selectedKeyMyPools: null,
      showRemoveLiquidity: false,
      showPoolAnalytics: false
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
        this.setState({ showRemoveLiquidity: false  });
        this.setState({ showPoolAnalytics: false  });
        break;
      case "2":
        this.setState({ showNewPairForm: false  });
        this.setState({ showAddLiquidityForm: true  });
        this.setState({ showRemoveLiquidity: false  });
        this.setState({ showPoolAnalytics: false  });
        break;
    }
  }

  handleSelectNewPairOrAddLiquidity = (eventKey) => {
    this.hideShowNewPairAddLiquidityForms(eventKey);
    this.setState({selectedKeyNewPairAddLiquidity: eventKey});
  }

  hideShowMyPools(eventKey) {
    console.log(eventKey);
    switch (eventKey) {
      default: case null:
        break;
      case "1":
        this.setState({ showAddLiquidityForm: true  });
        this.setState({ showRemoveLiquidity: false  });
        this.setState({ showPoolAnalytics: false  });
        this.setState({ showNewPairForm: false  });
        break;
      case "2":
        this.setState({ showAddLiquidityForm: false  });
        this.setState({ showRemoveLiquidity: true  });
        this.setState({ showPoolAnalytics: false  });
        this.setState({ showNewPairForm: false  });
        break;
      case "3":
        this.setState({ showAddLiquidityForm: false  });
        this.setState({ showRemoveLiquidity: false  });
        this.setState({ showPoolAnalytics: true  });
        this.setState({ showNewPairForm: false  });
        break;
    }
  }

  handleSelectMyPools = (eventKey) => {
    this.hideShowMyPools(eventKey);
    this.setState({selectedKeyMyPools: eventKey});
  }

   handleCreateAccount = (event) => {
        /*event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);*/
        console.log("handleCreateAccount ", event)
    }
  
  render() {
    const { showswapForm, showpoolForm, showNewPairForm, showAddLiquidityForm, showRemoveLiquidity, showPoolAnalytics } = this.state; 

    return (
      <Layout>
        <div id="main">
          <div className="inner">
            <Card>
              <Card.Header>
                <h1>Ahoj.Swap</h1>
                <br/>
                Swap between AVAX, AHOJ, asaCHF or asaEUR. 
                If you want to trade between AVAX AHOJ and other Ahoj synthetic assets (ASA), use AHOJ.INVEST
              </Card.Header>
            </Card>
            <br/>
            <Card>
                <CreateAccountForm />
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
                          <Alert variant="success">
                            AVAX/AHOJ
                                <Nav className="justify-content-end" activeKey={ this.state.selectedKeyMyPools } onSelect={this.handleSelectMyPools}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="1">Add</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="2">Remove</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="3">Analytics</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                          </Alert>
                          <br/>
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
                                  <Card>
                                      <Card.Header>
                                          <h6>Create a Pair</h6>
                                      </Card.Header>
                                      <Card.Body>
                                        <NewPairForm />
                                    </Card.Body>
                                  </Card>
                                </Container>
                                </div>
                            )
                          }
                          {
                            showAddLiquidityForm && 
                            (
                              <div id="addLiquidityForm">
                                <Container>
                                  <Card>
                                      <Card.Header>
                                          <h6>Add Liquidity</h6>
                                      </Card.Header>
                                      <Card.Body>
                                        <AddLiquidityForm />
                                    </Card.Body>
                                  </Card>
                                </Container>
                                </div>
                            )
                          }
                          {
                            showRemoveLiquidity && 
                            (
                              <div id="removeLiquidityForm">
                                <Container>
                                  <Card>
                                      <Card.Header>
                                          <h6>Remove Liquidity</h6>
                                      </Card.Header>
                                      <Card.Body>
                                      </Card.Body>
                                  </Card>
                                </Container>
                                </div>
                            )
                          }
                          {
                            showPoolAnalytics && 
                            (
                              <div id="poolAnalyticsForm">
                                <Container>
                                  <Card>
                                      <Card.Header>
                                          <h6>Pool Analytics</h6>
                                      </Card.Header>
                                      <Card.Body>
                                          <PoolAnalytics />
                                      </Card.Body>
                                  </Card>
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
