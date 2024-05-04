import { Component, createElement } from "react";

import NoSleep from "@zakj/no-sleep";

export class KeepAwake extends Component {
    constructor(props) {
        super(props);
        this.noSleep = new NoSleep();
        this.wakeLockEnabled = false;
    }

    componentDidMount() {
        document.addEventListener("click", this.enableNoSleep, false);
    }

    componentWillUnmount() {
        this.noSleep.disable();
    }

    enableNoSleep = () => {
        document.removeEventListener("click", this.enableNoSleep, false);
        this.noSleep.enable();
    };

    render() {
        return null;
    }
}
