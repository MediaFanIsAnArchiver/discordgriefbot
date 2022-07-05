let socket;

function startSocket(host) {
    socket = new WebSocket("ws://" + host);

    socket.addEventListener('error', socketErrorListener);
    socket.addEventListener('open', socketOpenListener);
    socket.addEventListener('message', socketMessageListener);
}

const socketMessageListener = (event) => {
    const packet = event.data.toString().split("|");

    if (packet[0].startsWith("CONFIG")) {
        initValues(packet[1]);
    }

    if (packet[0].startsWith("GUILDS")) {
        initGuilds(packet[1]);
    }

    if (packet[0].startsWith("ID")) {
        discordBotID = packet[1];
    }

};

const socketErrorListener = (event) => {
    console.log("Error");
};

