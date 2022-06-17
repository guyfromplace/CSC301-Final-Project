import React from "react";

const SliderHandleComponent = ({
    handle: { id, value, percent },
    getHandleProps
}) => (
    <div
        style={{
            left: `${percent}%`,
            position: "absolute",
            marginLeft: -15,
            marginTop: 25,
            zIndex: 2,
            width: 30,
            height: 30,
            border: 0,
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "50%",
            backgroundColor: "#2C4870",
            color: "#333",
        }}
        {...getHandleProps(id)}
    >
        <div style={{ fontFamily: "Roboto", fontSize: 13, marginTop: -20 }}>
            {value}
        </div>
    </div>
);

export default SliderHandleComponent;
