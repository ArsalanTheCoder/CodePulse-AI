# 🚀 CodePulse AI  
### 💙 One problem a day. Smarter every way.

[![Status](https://img.shields.io/badge/status-alpha-orange)](https://github.com/) [![Hackathon](https://img.shields.io/badge/DevLaunch-2026-blue)](https://devlaunch.example/) [![Built With](https://img.shields.io/badge/built%20with-Next.js%20%7C%20FastAPI-lightgrey)](https://vercel.com/)

---

> **CodePulse AI** is an AI-powered web platform that analyzes your GitHub activity and delivers one personalized LeetCode problem to your inbox every day.  
> Designed to build consistent coding habits through intelligent recommendations, progress analytics, quizzes, and community leaderboards.

---

## ✨ Quick Links
- **Video:** `[https://github.com/<your-org>/codepulse-ai](https://drive.google.com/file/d/18J3i4-Qkw8MrgHXSiwncJAc6jkQSr4LY/view?usp=sharing)`
- **Presentation:** `[https://github.com/<your-org>/codepulse-ai](https://gamma.app/docs/CodePulse-AI-4aav36qz5fxwxqg)`
- **Repository:** `https://github.com/<your-org>/codepulse-ai`

---

## 🔥 Problem (TL;DR)
Developers struggle to maintain daily, structured coding practice because:
- Practice is often random and unstructured  
- Choosing the right problems is time-consuming  
- There is no automated accountability or visible progress

---

## 💡 Our Solution
**CodePulse AI** uses an *agentic AI* pipeline to:
- Analyze your GitHub repositories for languages, activity, and problem patterns  
- Infer your skill level and knowledge gaps  
- Send **one personalized LeetCode problem daily** via email  
- Track streaks, performance, and motivate through quizzes & leaderboards

---

## 📦 System Diagram
> The diagram below visualizes the core system flow.  
> The image URL used here is the system diagram you provided — place the image online or in `assets/` if you prefer local hosting.

<p align="center">
  <img src="https://github.com/user-attachments/assets/8e8c2af8-6fbc-4b06-93a5-86a46fed0d0c" alt="System Architecture Diagram - CodePulse AI" width="900"/>
</p>

> Tip: If GitHub doesn't render the external attachment link, download the image and save it as `assets/system-diagram.webp` then change the `src` above to `./assets/system-diagram.webp`.

---

## 🧩 Key Features (At a glance)
- 🤖 **Agentic AI**: Autonomous repo analysis & recommendation engine  
- 📩 **Automated Emails**: Welcome email + daily LeetCode challenge delivery (Brevo)  
- 📊 **Analytics Dashboard**: Streaks, weekly/monthly charts, difficulty distribution  
- 🧪 **Quizzes & Gamification**: Topic quizzes, points, badges  
- 🏆 **Leaderboards**: Weekly & global rankings to boost motivation  
- 🎓 **Career Content**: Embedded iCodeGuru career guidance videos

---

## 🛠️ Tech Stack (what we used)
**Frontend:** Next.js, Tailwind CSS  
**Backend:** FastAPI (Python)  
**AI / Analysis:** Google Gemini API (prompt + agentic workflows)  
**Auth:** Firebase Authentication  
**Database:** Neon MySQL  
**Email:** Brevo (Sendinblue) API  
**Integrations:** GitHub API (Personal Access Token)

---

<p align="center">
  <strong>Built by Team Hustler Crew</strong><br/>
  <em>Mohammad Arsalan • Mohammad Ahmed • Babar Rahim • Hasnain Aslam</em>
</p>


---

## 🚀 How to Run (Quick start)
> _Add these commands in a CONTRIBUTING or INSTALL section if you want to include local setup._

```bash
# frontend (Next.js)
cd frontend
npm install
npm run dev

# backend (FastAPI)
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Note: add .env with keys:
# - FIREBASE config
# - GITHUB_PERSONAL_ACCESS_TOKEN
# - BREVO_API_KEY
# - GEMINI_API_KEY
# - NEON_MYSQL connection string
