import classNames from 'classnames';
import React, { Component } from 'react';
import './Timeline.css';

export default class TimeLine extends Component {
    render() {
        return (
            <div className={ classNames("cronograma-timeline") }>
                { this.props.children }
            </div>
        );
    }
}
