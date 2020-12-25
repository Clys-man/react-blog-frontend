import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login, changeValue } from '../../store/actions/auth.actions'
import Loading from '../../components/loading'
import Notify from '../../components/notify'
import { baseUrl } from '../../config/globalConfig'

import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { green } from '@material-ui/core/colors'


const StyleButton = withStyles(theme => ({
    root: {
        color: '#fff',
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700]
        }
    }
}))(Button)

export class Login extends Component {
    login = () => {
        const { credentials } = this.props;
        this.props.login(credentials).then(() => {
            if (this.props.sucess) {
                window.location.replace(baseUrl + 'home')
            }
        })
    }

    render() {
        return (
            <div>
                <div className="form-image">
                    <img src="https://plantaoativo.com/wp-content/themes/plantaoativo_2020/assets/images/home-executive-panel.png?ver=1.1.2" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""></img>
                </div>
                <div class="form">
                    <Notify />
                    <Loading />
                    <Container component="main" maxWidth="xs">
                        <div className="mt-3 mt-md-5">
                            <div className="text-center">
                                <div>
                                    <img src="https://plantaoativo.com/wp-content/uploads/2020/03/logo-pa.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""></img>
                                </div>
                                <Typography className="mt-3 font-weight-700 text-primary" component={window.innerWidth < 577 ? "h1" : "h1"} variant={window.innerWidth < 577 ? "h6" : "h4"}>
                                    Plantão Ativo Blog
                                </Typography>
                            </div>

                            <div className="mt-3">
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="userName"
                                    type="email"
                                    value={this.props.credentials.username}
                                    onChange={(text) => this.props.changeValue({ username: text.target.value })}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Senha"
                                    name="password"
                                    type="password"
                                    value={this.props.credentials.password}
                                    onChange={(text) => this.props.changeValue({ password: text.target.value })}
                                />
                                <Button
                                    type="button"
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    size="large"
                                    className="mb-3 mb-md-4 mt-4"
                                    onClick={() => this.login()}
                                >Entrar</Button >
                                <Link href="/register">
                                    <StyleButton
                                        type="button"
                                        fullWidth
                                        size="large"
                                        variant="contained"
                                        className="mt-md-4"
                                    >
                                        Cadastrar
                                </StyleButton>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.authReducer.credentials,
    sucess: state.authReducer.sucess
})

const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(login(credentials)),
    changeValue: (value) => dispatch(changeValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
