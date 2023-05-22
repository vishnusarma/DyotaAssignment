import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
import './Chatbot.css';

const Chatbot = () => {
    const steps=[
        {
            id:'Greet',
            message:'Hello Welcome to Our Website',
            trigger:'Askname'
        },
        {
            id:'Askname',
            message:'Please Enter your Name',
            trigger:'waiting1'
        },
        {
            id:'waiting1',
            user:true,
            trigger:'name'
        },
        {
            id:'name',
            message:'Hi {previousValue}, How Can i help you?',
            trigger:'issue'
        },
        {
            id:'issue',
            user:true,
            trigger:'thanks'
        },
        {
            id:'thanks',
            message:'Thaks you for providing Details',
            end:true
        }
    ]
    return (
        <div className="chat-container">
          <Segment className="chat-segment" floated="right">
            <ChatBot steps={steps} />
          </Segment>
        </div>
      );
}

export default Chatbot