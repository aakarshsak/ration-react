import React, {Component} from 'react';
import {Comment,Header, Form, Button} from 'semantic-ui-react';
import postWithData from '../localmodules/express_post_data';

export default class CommentExampleComment extends Component {

    state = {
        currentComment : '',
    }

    constructor(props){
        super(props);
    }

    postComplaint = (event) =>{
        event.preventDefault();
    }

    render() {
        const d = ['a', 'b', 'c'];
        const { data } = this.state;
        console.log(data, d, 'inrender');
        
        
        return (
            <Comment.Group>
            <Header as='h3' dividing>
                Complaints
            </Header>
            
            {this.props.renderValue}
        
            <Form reply onSubmit={this.postComplaint}>
                <Form.TextArea 
                    value={this.state.currentComment}
                    onChange = {(e) => this.setState({currentComment : e.target.value})}
                />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
            </Comment.Group>
        );
    }
}
