import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/KeepAwakeWeb.css";

export class KeepAwakeWeb extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
