const Nrf = require('nrf').connect(spiDev, cePin, irqPin);

const spiDev = ;
const cePin = ;
const irqPin = ;
const channel = 0x7d;

const radio = Nrf.connect(spiDev, cePin, irqPin);

radio.channel(channel);

radio.begin(() => {
  const rx = radio.openPipe('rx', 'zgueg');
  rx.pipe(process.stdout);
});

