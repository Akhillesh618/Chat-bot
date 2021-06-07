import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userMessege: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { userMessege, response } = steps;
    this.setState({ userMessege, response });
    
  }

  render() {
    const { userMessege, response } = this.state;
    console.log(userMessege.value);
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>userMessege</td>
              <td>{userMessege.value}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
  hideBotAvatar:PropTypes.bool,
  hideUserAvatar:PropTypes.bool
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Type something you want to Know',
            trigger: 'userMessege',
          },
          {
            id: 'userMessege',
            user: true,
            trigger: '3',
          },
          
          {
            id: '3',
            message: 'Hi {previousValue}! What is your gender?',
            trigger: '1',
          },
          
        ]}
        hideBotAvatar="false"
        hideUserAvatar="false"
      />
    );
  }
}

export default SimpleForm;