import { Gpio } from 'onoff';
import { exec } from 'child_process';

const pir = new Gpio(17, 'in');
let lastDetectedMovement = new Date().getTime();
const THRESHOLD: number =
	((process.env.THRESHOLD as unknown) as number) || 60000; // 60s in ms

const readAndToggle = async () => {
	const now: number = new Date().getTime();
	const val = await pir.read();
	console.log(`DEBUG: reading value: ${JSON.stringify(val)}`);
	if (val === 1) {
		lastDetectedMovement = new Date().getTime();
		toggle(1);
	}
	console.log(
		`DEBUG: lastDetectedMovement: ${JSON.stringify(lastDetectedMovement)}`,
	);
	if (now - lastDetectedMovement > THRESHOLD) {
		toggle(0);
	}
};

const toggle = async (val: number) => {
	exec(`vcgencmd display_power ${val}`);
};

const REFRESH_RATE: number =
	((process.env.REFRESH_RATE as unknown) as number) || 1000;
setInterval(async () => {
	await readAndToggle();
}, (REFRESH_RATE as unknown) as number);
