import { Expo, ExpoPushMessage } from 'expo-server-sdk';
import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const expo = new Expo();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});

	if (req.method === 'GET') {
		return res.json({ text: 'Hello World' });
	} else if (req.method === 'POST') {
		const notificationMessage = req.body as ExpoPushMessage;

		if (!Expo.isExpoPushToken(notificationMessage.to)) {
			return res.status(500).json({ error: 'Invalid Expo push token.' });
		}

		await expo.sendPushNotificationsAsync([notificationMessage]);
		return res.status(200).json({ text: 'Notification sent' });
	}
}
