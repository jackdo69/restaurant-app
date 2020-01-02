import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Aux/Aux';

class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <Aux>
                <Toolbar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
         );
    }
}
 
export default Layout;