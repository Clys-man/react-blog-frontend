import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const CircularStyles = {
    progress: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flex: 1
    }
}


export class index extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.progress}>
                <CircularProgress size={(this.props.size) ? this.props.size : 40} color={(this.props.color) ? this.props.color : "primary"} />
            </div>
        )
    }
}

export default withStyles(CircularStyles)(index) 
