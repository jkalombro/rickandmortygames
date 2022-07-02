import React from "react";
import { SpinnerRoundOutlined } from "spinners-react";

const Loading = () => {
    return (
        <div className="loading-wrapper" data-testid="loadingComponent">
            <SpinnerRoundOutlined size={90} thickness={122} speed={136} color="rgba(57, 172, 158, 1)" />
        </div>
    );
};

export default Loading;
