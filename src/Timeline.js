import classNames from 'classnames';
import React, { Component } from 'react';
import './Timeline.scss';

export default class Timeline extends Component {
    render() {
        return (
            <div className={ classNames("cronograma-timeline") }>
                { this.props.children }
            </div>
        );
    }
}
