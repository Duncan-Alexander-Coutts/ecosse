import React from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { Fade } from "@material-ui/core";
import { FADE_TRANSITION_DURATION } from "../../constants";

export const withFadeIn = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      isVisible: false,
    };

    onVisibilityChange = (value) =>
      value && !this.state.isVisible && this.setState({ isVisible: true });

    render() {
      return (
        <ReactVisibilitySensor
          onChange={this.onVisibilityChange}
          partialVisibility
          minTopValue={100}
        >
          <Fade in={this.state.isVisible} timeout={FADE_TRANSITION_DURATION}>
            <div>
              <WrappedComponent {...this.props} />
            </div>
          </Fade>
        </ReactVisibilitySensor>
      );
    }
  };
};
