import React, { Component } from 'react'
import { connect } from 'react-redux'

import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

import { changeLoading } from '../../store/actions/loading.action';



const styles = {
    progress: {
        marginRight: '10px',
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    paper: {
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        outline: 'none'
    }
}

export class index extends Component {

    handleClose = () => {
        this.props.changeLoading({
            open: false
        })
    }

    render() {

        const { classes } = this.props

        return (
            <Modal
                open={this.props.loading.open}
                onClose={this.handleClose}
                className={classes.modal}
            >
                <div className={classes.paper}>
                    <CircularProgress size={20} className={classes.progress} />
                    <Typography variant="subtitle1">
                        {this.props.loading.msg}
                    </Typography>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.loadingReducer
})

const mapDispatchToProps = dispatch => ({
    changeLoading: (value) => dispatch(changeLoading(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(index))
