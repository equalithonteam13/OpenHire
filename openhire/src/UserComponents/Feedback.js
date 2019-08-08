import React, { Component } from 'react';
import { toast, Flip } from 'react-toastify';
import { withRouter } from 'react-router-dom';

import { Button, Form, Icon, Menu, Label } from 'semantic-ui-react';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAddress: '',
      pageAddress: props.pageAddress,
      ownPage: false,
      displaySkillForm: false,
      loading: false,
      feedback: '',
      feedbackArray: [],
    };
  }

  async componentDidMount() {
    const userAddress = (await this.props.drizzle.web3.eth.getAccounts())[0];

    let ownPage = false;

    if (userAddress === this.props.pageAddress) {
      ownPage = true;
    }

    this.setState({ userAddress, ownPage }, () => this.getTotalCount());
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addFeedback = async event => {
    const { feedback, userAddress, pageAddress, feedbackArray } = this.state;
    const { drizzle } = this.props;
    event.preventDefault();
    this.setState({ loading: true });

    toast.info('Processing sign up...', {
      position: 'top-right',
      autoClose: 10000,
      transition: Flip,
    });
    try {
      await drizzle.contracts.OpenHire.methods
        .addSkill(pageAddress, feedback, true)
        .send({ from: userAddress });

      await drizzle.contracts.OpenHire.methods
        .endorseSkill(pageAddress, feedbackArray.length)
        .send({ from: userAddress });

      this.setState({ errorMessage: '' });
    } catch (error) {
      toast.dismiss();
      this.setState({ errorMessage: error.message });
    }
    this.setState({ loading: false, feedback: '', displayFeedbackForm: false });
  };

  getTotalCount = async () => {
    const feedbackCount = await this.props.drizzle.contracts.OpenHire.methods
      .getSkillListLength(this.state.pageAddress)
      .call();
    this.props.drizzle.contracts.OpenHire.methods.getSkillListLength.cacheCall(
      this.state.pageAddress
    );
    this.fetchFeedbackData(feedbackCount);
  };

  fetchFeedbackData = async feedbackCount => {
    const feedbackArray = [];
    for (let i = 0; i < feedbackCount; i++) {
      let feedbackData = await this.props.drizzle.contracts.OpenHire.methods
        .getUserSkillData(this.state.pageAddress, i)
        .call();
      feedbackArray.index = i;
      feedbackArray.push(feedbackData);
    }
    this.setState({ feedbackArray });
  };

  render() {
    const { displayFeedbackForm, feedbackArray, ownPage } = this.state;
    return (
      <div>
        <h2>
          Feedback{' '}
          {!ownPage ? (
            <Icon
              link
              name="plus"
              onClick={() =>
                this.setState({ displayFeedbackForm: !displayFeedbackForm })
              }
            />
          ) : (
            ''
          )}
        </h2>

        {displayFeedbackForm ? (
          <Form onSubmit={this.addFeedback}>
            <Form.TextArea
              required
              label="Feedback"
              key="feedback"
              name="feedback"
              value={this.state.skill}
              placeholder="Leave your review here..."
              onChange={this.handleInputChange}
            />
            <Button
              type="submit"
              disabled={this.state.loading}
              loading={this.state.loading}
            >
              Submit
            </Button>
          </Form>
        ) : (
          ''
        )}

        <Menu
          compact
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: '#2d2d2a',
          }}
        >
          {feedbackArray.length ? (
            feedbackArray
              .filter(skill => skill[2] === true)
              .map((skill, index) => {
                return (
                  <div
                    key={index}
                    style={{ border: '2px solid white', margin: '1em' }}
                  >
                    <Label
                      as="a"
                      color="teal"
                      ribbon="right"
                      onClick={() =>
                        this.props.history.push(`/user/${skill[1][0]}`)
                      }
                      style={{
                        left: 'calc(100% + 1.2em)',
                        paddingRight: '1em',
                        bottom: '1em',
                      }}
                    >
                      Endorser: {skill[1][0]}
                    </Label>
                    <Menu.Item
                      style={{
                        color: 'white',
                      }}
                    >
                      {skill[0]}
                    </Menu.Item>
                  </div>
                );
              })
          ) : (
            <div>No feedback yet</div>
          )}
        </Menu>
      </div>
    );
  }
}

export default withRouter(Feedback);
