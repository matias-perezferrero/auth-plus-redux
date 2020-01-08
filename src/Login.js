import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser, signup, logout, login } from './ducks/reducer'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            emailInput: '',
            passwordInput: ''
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    signup() {
        this.props.signup(this.state.emailInput, this.state.passwordInput)
    }

    login() {
        this.props.login(this.state.emailInput, this.state.passwordInput)
    }

    logout() {
        this.props.logout()
    }

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <header className="header">
                    <h1 className="header__title">
                        Authorize <span className="header__title--emphasize">Me</span>
                    </h1>
                </header>
                <div className="modal">
                    <p className="modal__field">
                        Email:
                <input
                            onChange={e => this.setState({ emailInput: e.target.value })}
                            type="text"
                        />
                    </p>
                    <p className="modal__field">
                        Password:
                <input
                            onChange={e => this.setState({ passwordInput: e.target.value })}
                            type="password"
                        />
                    </p>
                    <div className="modal__button-container">
                        <button
                            className="button--theme-green"
                            onClick={() => this.signup()}
                        >
                            Signup
                </button>
                        <button
                            className="button--theme-green"
                            onClick={() => this.login()}
                        >
                            Login
                </button>
                        <button
                            className="button--theme-green"
                            onClick={() => this.logout()}
                        >
                            Logout
                </button>
                    </div>
                </div>
                <hr />
                <p className="user-info">USER: {JSON.stringify(this.state.user)}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reduxState: state
    }
}

export default connect(mapStateToProps, { getUser, login, signup, logout })(Login)


