let urlParams = new URLSearchParams(window.location.search);

console.log(`urlParams`, urlParams);
let flags = {
    /**
     * Set language for localization
     */
    SET_LOCALIZATION: 'eng',

    //core-broker or direct core ws connection.
    WEBSOCKET_URL: 'ws://localhost:8087',

    //python simple rpc client...
    PYTHON_SERVER_URL: 'ws://core.core:8081',
    //
    CAN_WEBSOCKET_URL: 'ws://core.core:2468',
    TOUCH_EVENT_STARTED: false,
    BasicCommunication: null,
    UI: null,
    VehicleInfo: null,
    VR: null,
    Buttons: null,
    TTS: null,
    Navigation: null,
    CAN: null,
    RC: null,
    steeringWheelLocation: 'LEFT',
    /**
     * 0 - G
     * 1 - R
     * 2 - P
     */
    SimpleFunctionality: 1,
    // ExternalPolicies: false,


    //original
    ExternalPolicies: false,
    ExternalPoliciesPackUrl: 'ws://127.0.0.1:8088',
    ExternalPoliciesUnpackUrl: 'ws://127.0.0.1:8089'
};

for (let key in flags) {
    console.log(`check key ${key}`);
    let val = urlParams.get(key);
    if (val) {
        console.log(`set key ${key} ${val}`);
        flags[key] = val;
    }
}

export {flags};
