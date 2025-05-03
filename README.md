# 🕹️ Countdown2GTA6

A fan-made project that builds hype for Grand Theft Auto VI by combining a sleek Next.js countdown landing page with a daily automated X (Twitter) post showing the number of days remaining until release (May 26, 2026).

---

## 🌐 Live Countdown Site

Built using [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), the landing page displays a full-screen countdown timer, social links, and Vice City–inspired visuals.

**Demo:** [https://countdown2gta6.com](https://countdown2gta6.com)

---

## 🧠 What It Does

### Web App

- Displays a real-time countdown to GTA VI (May 26, 2026)
- Styled with Tailwind CSS and custom Google Fonts
- Includes metadata for SEO and social sharing
- Responsive, mobile-friendly, and performance-optimized

### Automation

- Posts a daily tweet using GitHub Actions and Node.js
  > `389 days until GTA 6. The countdown to Vice City continues.`
- Uses the [Twitter API v2](https://developer.twitter.com/en/docs/twitter-api)
- Runs every day at 10:00 AM Mountain Time

---

## 🧱 Tech Stack

- **Next.js (App Router)**
- **Tailwind CSS**
- **twitter-api-v2**
- **GitHub Actions**
- **Cloudflare (DNS + Email Routing)**
- **Vercel (Web hosting)**

---

## 📂 File Structure

```
/ (root)
├── app/                        # Next.js App Router structure
│   ├── page.tsx               # Main landing page
│   └── layout.tsx             # Global styles & fonts
├── public/
│   └── fonts/                 # Pricedown or other custom fonts
│   └── favicon.png
│   └── og-image.jpg
├── styles/
│   └── globals.css
├── post-tweet.js              # Twitter automation script
├── package.json               # Project dependencies
├── .github/
│   └── workflows/
│       └── daily-x-post.yml   # GitHub Actions job
```

---

## 🛠️ Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/CamSkiTheDev/countdown2gta6.git
cd countdown2gta6
npm install
```

### 2. Add Twitter API Secrets

In GitHub → Settings → Secrets → Actions, add:

- `X_API_KEY`
- `X_API_SECRET`
- `X_ACCESS_TOKEN`
- `X_ACCESS_SECRET`

### 3. Run Locally

```bash
npm run dev  # Starts the Next.js app on localhost
node post-tweet.js  # Optional: test the daily tweet script manually
```

### 4. Deploy

- **Web App**: Deploy to [Vercel](https://vercel.com) (recommended)
- **Automation**: GitHub Actions will run daily with no extra setup once secrets are configured

---

## 🕐 Cron Schedule

```yaml
cron: "0 16 * * *" # Runs daily at 10:00 AM MT (16:00 UTC)
```

---

## 🙌 Credits

- Powered by [Next.js](https://nextjs.org/), [twitter-api-v2](https://github.com/PLhery/node-twitter-api-v2), and [GitHub Actions](https://github.com/features/actions)
- Developed by [CamSkiTheDev](https://github.com/CamSkiTheDev)
- Countdown is fan-made. Not affiliated with Rockstar Games or Take-Two.

---

## 📸 Example Output

> `389 days until GTA 6. The countdown to Vice City continues.` > `#GTA6 #ViceCity #CountdownToGTA6 @RockstarGames`

---

## 🧪 Local Testing

```bash
node post-tweet.js  # Manual test of the tweet logic
npm run dev         # Local preview of landing page
```

---

## 📮 Contact

Want to contribute or suggest a feature? Submit a PR or reach out on [X](https://twitter.com/yourhandle).
