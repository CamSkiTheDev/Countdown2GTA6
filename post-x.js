import { TwitterApi } from "twitter-api-v2";

// Twitter API credentials from GitHub secrets
const client = new TwitterApi({
  appKey: process.env.X_API_KEY,
  appSecret: process.env.X_API_SECRET,
  accessToken: process.env.X_ACCESS_TOKEN,
  accessSecret: process.env.X_ACCESS_SECRET,
});

const gtaReleaseDate = new Date("2026-05-26T00:00:00Z");
const now = new Date();

// Calculate the days remaining
const timeDiff = gtaReleaseDate.getTime() - now.getTime();
const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

const tweet = `${daysRemaining} days until GTA 6. The countdown to Vice City continues. @RockstarGames #GTA6 #ViceCity #CountdownToGTA6 #PCGaming #Gamer #GTA #GTAV #GTAVI #RockstarGames #GTA6Countdown`;

(async () => {
  try {
    const { data: tweetData } = await client.v2.tweet(tweet);
    console.log("Tweet sent successfully:", tweetData);
  } catch (error) {
    console.error("Failed to send tweet:", error);
    process.exit(1);
  }
})();
