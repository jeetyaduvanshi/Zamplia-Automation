# INEXRA Survey Automation Gateway & Router (1-Pager)

A lightweight, zero-dependency, ultra-modern 1-page survey routing & completion interface designed for **Zamplia** and **INEXRA** survey automation workflows.

---

## ✨ Features
- **Simulated INEXRA Data Fetching**: On page load, it runs a realistic 4-step sequence displaying:
  - *"Connecting to INEXRA Master Nodes..."*
  - *"Fetching respondent data from INEXRA Engine..."*
  - *"Validating Zamplia survey quota matrix..."*
  - *"Finalizing demographic & anti-fraud verification..."*
- **Dynamic Query Parameters**: Supports URL query strings:
  - `?survey_id=ZAM-5042&uid=USER-9941`
- **Real-Time S2S Telemetry Console**: Displays simulated real-time API logs, response statuses, and quota allocations.
- **Interactive Simulation Triggers**:
  - `Proceed to Survey Partner` (Simulated live link routing)
  - `Simulate Callback (Complete)` (Simulates postback trigger)
  - Quick test buttons for `Complete`, `Terminate`, and `Overquota` states.
- **Zero Dependencies**: Standalone HTML5 + Tailwind CSS (via CDN) + Lucide Icons + Google Fonts.

---

## 🚀 How to Preview Locally
You don't even need Node.js!
- Simply double-click **`index.html`** in any web browser.
- OR run a local server:
  ```bash
  npx serve .
  ```

---

## 🌐 Deploy to Vercel (in 30 seconds)

### Option 1: Via Vercel CLI
```bash
cd inexra-survey-router
npx vercel
```
Follow the prompts and select default settings. It will deploy as a fast static site on Vercel Edge.

### Option 2: Via GitHub + Vercel Dashboard
1. Push this `inexra-survey-router` folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository and click **Deploy** (no build command needed!).
