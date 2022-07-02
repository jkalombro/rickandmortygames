import React, { CSSProperties } from "react";
import { SpinnerRoundOutlined } from "spinners-react";

const loadingWrapper: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
    width: "100vw",
};

const Loading = () => {
    return (
        <div style={loadingWrapper} data-testid="loadingComponent">
            <SpinnerRoundOutlined size={90} thickness={122} speed={136} color="rgba(57, 172, 158, 1)" />
        </div>
    );
};

export default Loading;
