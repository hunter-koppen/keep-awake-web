import { Component, createRef, createElement } from "react";

import NoSleep from "nosleep.js";

export class KeepAwake extends Component {
    constructor(props) {
        super(props);
        this.noSleep = new NoSleep();
        this.wakeLockEnabled = false;
        this.buttonRef = createRef();
    }

    componentDidMount() {
        this.buttonRef.current.click();
    }

    componentWillUnmount() {
        this.noSleep.disable();
    }

    handleClick = () => {
        if (!this.wakeLockEnabled) {
            this.noSleep.enable();
            this.wakeLockEnabled = true;
        } else {
            this.noSleep.disable();
            this.wakeLockEnabled = false;
        }
    };

    render() {
        return <btn onClick={this.handleClick} ref={this.buttonRef} className="hidden"></btn>;
    }
}
