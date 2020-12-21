import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeValue, registerUser } from '../../store/actions/register.action'
import { baseUrl } from '../../config/globalConfig'
import Loading from '../../components/loading'
import Notify from '../../components/notify'

import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export class index extends Component {
    register = () => {
        this.props.registerUser(this.props.data)
            .then(() => {
                if (this.props.sucess) {
                    window.location.replace(baseUrl + '/painel')
                }
            })
    }
    render() {
        return (
            <div>
                <div className="form-image">
                    <img src="https://plantaoativo.com/wp-content/themes/plantaoativo_2020/assets/images/home-executive-panel.png?ver=1.1.2" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""></img>
                </div>
                <div className="form">
                    <Notify />
                    <Loading />
                    <Container component="main" maxWidth="xs">
                        <div className="mt-2 mt-md-5">
                            <div className="text-center">
                                <div>
                                    <img src="https://plantaoativo.com/wp-content/uploads/2020/03/logo-pa.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""></img>
                                </div>
                                <Typography className="mt-3 font-weight-700 text-primary" component={window.innerWidth < 577 ? "h1" : "h1"} variant={window.innerWidth < 577 ? "h6" : "h4"}>
                                    Registre sua conta gratis
                            </Typography>
                            </div>

                            <div className="mt-3">
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Nome"
                                    name="name"
                                    type="text"
                                    value={this.props.data.name}
                                    onChange={(text) => this.props.changeValue({ name: text.target.value })}
                                />
                                {(this.props.error.name) &&
                                    <strong className="text-danger">{this.props.error.name[0]}</strong>
                                }
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="E-Mail"
                                    name="email"
                                    type="email"
                                    value={this.props.data.email}
                                    onChange={(text) => this.props.changeValue({ email: text.target.value })}
                                />
                                {(this.props.error.email) &&
                                    <strong className="text-danger">{this.props.error.email[0]}</strong>
                                }
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Senha"
                                    name="password"
                                    type="password"
                                    value={this.props.data.password}
                                    onChange={(text) => this.props.changeValue({ password: text.target.value })}
                                />
                                {(this.props.error.password) &&
                                    <strong className="text-danger">{this.props.error.password[0]}</strong>
                                }
                                <Link href="/login" className="mt-4 text-center" color="secondary" variant="body2">
                                    <div className="text-center">Fazer login</div>
                                </Link>

                                <Button
                                    type="button"
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    size="large"
                                    className="mb-3 mb-md-4 mt-2"
                                    onClick={() => this.register()}
                                >Cadastrar</Button >
                                
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.registerReducer.data,
    sucess: state.registerReducer.sucess,
    error: state.registerReducer.error,
})

const mapDispatchToProps = dispatch => ({
    changeValue: (value) => dispatch(changeValue(value)),
    registerUser: data => dispatch(registerUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
