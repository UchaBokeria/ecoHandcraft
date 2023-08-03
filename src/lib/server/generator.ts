import crypto from 'crypto';

export class generator {
	static token = () => {
		return crypto.randomBytes(64).toString('hex') + Math.floor(+new Date() / 1000);
	};

	static datetime = (hour = 0) => {
		const now = new Date(); // get current date and time
		now.setHours(now.getHours() + hour); // add one hour to the current time
		const isoDateTime = now.toISOString(); // convert to ISO format

		return isoDateTime;
	};
}
