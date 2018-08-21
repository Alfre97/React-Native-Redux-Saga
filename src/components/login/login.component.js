import React from 'react'
import styles from './login-style'
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { loginRequest } from '../../redux/modules/session'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  static navigationOptions = { header: null }

  componentWillReceiveProps(nextProps) {
    const { navigation } = this.props
    if (nextProps.fetching) {
      //Charging screen
    } else if (nextProps.token) {
      navigation.navigate('home')
    } else if (nextProps.error) {
      alert('Invalid credentials')
    }
  }

  submit = () => {
    const { email, password } = this.state
    this.props.loginRequest(email, password)
  }

  render() {
    return (
      <View style={[styles.centeredItems, styles.backgroundBlack]}>
        <StatusBar barStyle='light-content' />
        <View style={[styles.loginForm, styles.centeredItems]}>
          <View style={styles.loginFormRow}>
            <Text style={styles.loginFormLabels}>Email</Text>
            <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              autoFocus={true}
              returnKeyType={"next"}
              keyboardType="default"
              autoCapitalize="none"
              onSubmitEditing={() => { this.textPassword.focus() }}
              style={styles.loginFormInput}
              onChangeText={(email) => { this.setState({ email: email }) }}
            />
          </View>
          <View style={styles.loginFormRow}>
            <Text style={styles.loginFormLabels}>Password</Text>
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              returnKeyType="send"
              keyboardType="default"
              autoCapitalize="none"
              ref={input => { this.textPassword = input }}
              secureTextEntry={true}
              style={styles.loginFormInput}
              onSubmitEditing={this.submit}
              blurOnSubmit={true} />
          </View>
          <TouchableOpacity style={[styles.button, styles.centeredItems]} onPress={this.submit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    loginRequest: (email, password) => { dispatch(loginRequest(email, password)) }
  })
}

const mapStateToProps = (state) => ({
  fetching: state.session.fetching,
  token: state.session.token,
  error: state.session.error,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)