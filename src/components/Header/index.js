import React from 'react'
import { useStyles } from '../../components/CardComponent'
import { getUser } from '../../store/actions/auth.actions'

import Avatar from '@material-ui/core/Avatar';

export default ({ white }) => {
    const classes = useStyles();
    getUser()

    return (

        <header className="main-header">
            <nav className={white ? 'active navbar navbar-expand-lg fixed-top navbar-light' : 'navbar navbar-expand-lg fixed-top navbar-light'}>
                <div className="container">
                    <a href="https://plantaoativo.com/" className="navbar-brand" rel="home" aria-current="page"><img width="182" height="66" src="https://plantaoativo.com/wp-content/uploads/2020/03/logo-pa.png" className="custom-logo" alt="Plantão Ativo" loading="lazy" /></a>            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Exibir menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavigation">
                        <div className="user-info">
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                j
                            </Avatar>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
