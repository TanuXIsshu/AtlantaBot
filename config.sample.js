module.exports = {
	/* The token of your Discord Bot */
	token: "OTQ4MTQ4OTc0Njg5MzQ5NjUy.Yh3miw.LLo8puiGhR4qtWQwHSAcDXoExE8",
	/* For the support server */
	support: {
		id: "942374014737862706", // The ID of the support server
		logs: "945244613118165003", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "7ZD0V9bq7oACrFELrSharNniHehRgbAx", // Your discord client secret
		baseURL: "http://freakbot.website2.me/", // The base URl of the dashboard
		logs: "945244613118165003", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "http://freakbot.website2.me/" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://hjop:hjop@cluster0.v9coj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: ".", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Freak Development" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "926889023954387038", // The ID of the bot's owner
		name: "ᴅᴇsᴛɪᴎʏ♡тαиu#2900" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "948150322772209724" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "XXXXXXXXXXX"
	},
	/* The others utils links */
	others: {
		github: "", // Founder's github account
		donate: "" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "@Testing help on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "my website : http://freakbot.website2.me/",
			type: "PLAYING"
		}
	]
};
