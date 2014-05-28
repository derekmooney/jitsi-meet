var config = {
    hosts: {
        domain: 'bcholewka-vm.bbcollab.net',
        muc: 'conference.bcholewka-vm.bbcollab.net', // FIXME: use XEP-0030
        bridge: 'jitsi-videobridge.bcholewka-vm.bbcollab.net' // FIXME: use XEP-0030
    },
//  getroomnode: function (path) { return 'someprefixpossiblybasedonpath'; },
//  useStunTurn: true, // use XEP-0215 to fetch STUN and TURN server
//  useIPv6: true, // ipv6 support. use at your own risk
    useNicks: false,
    bosh: '//bcholewka-vm.bbcollab.net/http-bind', // FIXME: use xep-0156 for that
    desktopSharing: 'false', // Desktop sharing method. Can be set to 'ext', 'webrtc' or false to disable.
    //chromeExtensionId: 'diibjkoicjeejcmhdnailmkgecihlobk', // Id of desktop streamer Chrome extension
    //minChromeExtVersion: '0.1' // Required version of Chrome extension
};
