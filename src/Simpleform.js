import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import axios from "axios";
import configData from "./config.json";
import qs from "qs";
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userMessege: '',
      apiResponse: '',
      gender: '',
      age: '',
     
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { userMessege,apiResponse } = steps;
    var self=this;
    this.setState({ userMessege,apiResponse });
    if(userMessege.value!==""){
      console.log(userMessege.value);
      axios({
        method: "post",
        url: configData.SERVER_URL + "faq",
        data: qs.stringify({
          user_quest: userMessege.value,
        }),
      })
        .then(function(response) {
          // console.log(response.data.message);
          // debugger
          userMessege.value=response.data.message;
          //  apiResponse=response.data.message;
          self.setState({apiResponse:response.data.message});
           
          
        })
        .catch(function(error) {
          console.log(error);
        });
        console.log(self.state.apiResponse);
    }
    
  }

  render() {
    // const { userMessege } = this.state;
    // var apiresponse =this.state.apiResponse
   
    return (
      <div style={{ width: '100%' }}>
        <table>
          <tbody>
            <tr>
              {/* <td>{userMessege.value}</td> */}
              <td>{this.state.apiResponse}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
  headerTitle: PropTypes.string,
  hideBotAvatar:PropTypes.bool,
  hideUserAvatar:PropTypes.bool,
  enableSmoothScroll:PropTypes.bool,
  floating:PropTypes.bool,
  userDelay:PropTypes.number,
  botDelay:PropTypes.number
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
            id: '2',
            message: 'want to Know more?',
            trigger: 'userMessege',
          },
          {
            id: 'userMessege',
            user: true,
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: '2',
          },
          
        ]}
        hideBotAvatar="false"
        hideUserAvatar="false"
        enableSmoothScroll="true"
        floating="true"
        headerTitle="Dachers ChatBot"
        userDelay="1000"
        botDelay="1000"
      />
    );
  }
}

export default SimpleForm;