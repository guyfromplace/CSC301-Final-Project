import React, { Component } from "react";
import PropTypes from "prop-types";

import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import SliderHandleComponent from "./SliderHandleComponent";
import SliderTrackComponent from "./SliderTrackComponent";

const sliderStyle = {
    position: "relative",
    width: "50%",
    height: 80
};

const railStyle = {
    position: "absolute",
    width: "100%",
    height: 10,
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: "#8B9CB6",
};

export default class SliderComponent extends Component {
    render() {
        return(
            <Slider
                rootStyle={sliderStyle}
                domain={this.props.domain}
                step={1}
                mode={2}
                values={this.props.domain}
                onChange={event => this.props.handleSliderChange(event)}
            >
                <Rail>
                    {({ getRailProps }) => (
                        <div style={railStyle} {...getRailProps()} />
                    )}
                </Rail>
                <Handles>
                    {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                            {handles.map(handle => (
                                <SliderHandleComponent
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                />
                            ))}
                        </div>
                    )}
                </Handles>
                <Tracks right={false}>
                    {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                            {tracks.map(({ id, source, target }) => (
                                <SliderTrackComponent
                                    key={id}
                                    source={source}
                                    target={target}
                                    getTrackProps={getTrackProps}
                                />
                            ))}
                        </div>
                    )}
                </Tracks>
            </Slider>
        );
    }
}

SliderComponent.propTypes = {
    domain: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    handleSliderChange: PropTypes.func.isRequired
};
