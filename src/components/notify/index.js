import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeNotify } from '../../store/actions/notify.action'

import classnames from 'classnames'

import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import withStyles from '@material-ui/core/styles/withStyles'


const SnackbarStyles = {
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    sucess: {
        backgroundColor: '#2196f3'
    },
    error: {
        backgroundColor: '#f44336'
    }
}


export class index extends Component {
    handleClose = () => {
        this.props.changeNotify({
            open: false
        })
    }

    render() {
        const {classes} = this.props
        const messageClasses = classnames({
            [classes[this.props.notify.class]] : this.props.notify.class
        })
        return (
            <Snackbar
                open={this.props.notify.open}
                anchorOrigin={{
                    vertical: this.props.notify.vertical,
                    horizontal: this.props.notify.horizontal
                }}
                autoHideDuration={this.props.notify.time}
                onClose={this.handleClose}>
                <SnackbarContent
                    className={messageClasses}
                    message={
                        <span className={classes.message}>{this.props.notify.msg}</span>
                    }

                />
            </Snackbar>
        )
    }
}

const mapStateToProps = (state) => ({
    notify: state.notifyReducer
})

const mapDispatchToProps = dispatch => ({
    changeNotify: (value) => dispatch(changeNotify(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SnackbarStyles)(index))
