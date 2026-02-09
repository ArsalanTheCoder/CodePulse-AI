# 🚀 CodePulse AI  
### 💙 One problem a day. Smarter every way.

[![Status](https://img.shields.io/badge/status-alpha-orange)](https://github.com/) [![Hackathon](https://img.shields.io/badge/DevLaunch-2026-blue)](https://devlaunch.example/) [![Built With](https://img.shields.io/badge/built%20with-Next.js%20%7C%20FastAPI-lightgrey)](https://vercel.com/)

---

> **CodePulse AI** is an AI-powered web platform that analyzes your GitHub activity and delivers one personalized LeetCode problem to your inbox every day.  
> Designed to build consistent coding habits through intelligent recommendations, progress analytics, quizzes, and community leaderboards.

---

## ✨ Quick Links
- **Video:** https://drive.google.com/file/d/18J3i4-Qkw8MrgHXSiwncJAc6jkQSr4LY/view?usp=sharing  
- **Presentation:** https://gamma.app/docs/CodePulse-AI-4aav36qz5fxwxqg  
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
> (If this external attachment does not render on GitHub, download the image and save it to `assets/system-diagram.webp`, then change the `src` to `./assets/system-diagram.webp`.)

<p align="center">
  <img src="https://github.com/user-attachments/assets/8e8c2af8-6fbc-4b06-93a5-86a46fed0d0c" alt="System Architecture Diagram - CodePulse AI" width="900"/>
</p>

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

## 🎬 Animated Preview (optional)
You can add a short animated GIF here (in `assets/preview.gif`) for a livelier README. Example placeholder (replace with your own):

<p align="center">
  <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Animated Preview" width="600"/>
</p>

<p align="center">
  <strong>👥 Team Hustler Crew</strong><br/>
</p>

---

## 👥 Team Members (vertical list)
**Mohammad Arsalan**  
- Email: mohammad.arsalan.dev@gmail.com  
- LinkedIn: https://www.linkedin.com/in/mohammad-arsalan-83631b2aa

**Muhammad Ahmed**  
- Email: ahmednadeemarain.75@gmail.com  
- LinkedIn: https://www.linkedin.com/in/muhammad-ahmed-445180250/

**Babar Rahim**  
- Email: babarrahim528@gmail.com  
- LinkedIn: https://www.linkedin.com/in/babar-rahim-b0882234b

**Husnain Aslam**  
- Email: arainhasnain817@gmail.com  
- LinkedIn: https://linkedin.com/in/husnainaslam1/

---

## 🧪 Demo Flow (What to show)
1. Sign up / Sign in (Firebase)  
2. 3 onboarding screens (explain the flow)  
3. Paste GitHub repo link → backend analyses repo  
4. Welcome email sent on the spot  
5. Daily LeetCode email scheduled (sent every morning)  
6. Dashboard: streaks, solved count, analytics & quizzes

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
