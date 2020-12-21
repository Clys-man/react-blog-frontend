import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppBar, Link } from '@material-ui/core'

export class index extends Component {
    render() {
        return (
            <div>
                {(window.innerWidth < 577) ?
                    <AppBar>

                    </AppBar>
                    :
                    <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
                        <Link className="navbar-brand" href="/">
                            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png" width="30" height="30" alt="logo"></img>
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbar-list-4">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle"></img>
                                    </Link>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link class="dropdown-item" href="#">Dashboard</Link>
                                        <Link class="dropdown-item" href="#">Edit Profile</Link>
                                        <Link class="dropdown-item" href="#">Log Out</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
