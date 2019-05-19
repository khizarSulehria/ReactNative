import React,{Component} from 'react';
import {TextInput,StyleSheet } from 'react-native';
class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
        };
    }
    onChangeText  = (text) => {
        this.setState({
            input: text
        });
    }
    onSubmitEditing = () => {
        this.props.updateTodoList(this.state.input);
        this.setState({
            input: ''
        });
    }

    render(){
        return (
            <TextInput
                style={styles.input}
                placeholder="Enter Todo"
                value={this.state.input}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
                blurOnSubmit={false}
                />
        );
    }


}
const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 15,
    }
});

export default Input