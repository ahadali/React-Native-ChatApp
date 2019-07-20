import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from 'native-base';

export default class Home extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Ahad Chat Room',
        headerStyle: {
            backgroundColor: "#fd0759"
        },
        headerTintColor: "#FFF"
    })

    state = {
        name: ""
    }

    render() {
        return (
            <Container style={styles.container}>
                <Form>
                    <Item floatingLabel>
                        <Label>Username :</Label>
                    </Item>
                    <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={name => this.setState({ name })}
                    />
                    <Button style={{ marginTop: 20 }} full rounded success onPress={() => this.props.navigation.navigate("Chat", {
                        name: this.state.name
                    })}><Text style={{color: 'white'}}>Lets Chat</Text></Button>
                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center'
    }
});
