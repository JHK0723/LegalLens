# 🔍 LegalLens – AI-Powered Contract Analysis & Legal Assistant

> **Tagline**: AI-Powered Contract Analysis and Legal Assistant

**LegalLens** is a web application that enables users to upload legal contracts (PDF/DOCX), analyze them using AI, generate clause summaries, evaluate clause risk and fairness, visualize analysis results, interact with an AI legal assistant, and manage previously analyzed contracts.

---

## 🚀 Features

- 📄 **Contract Document Upload**: Upload `.pdf` or `.docx` contracts with automated text extraction.
- 🧠 **AI-Powered Contract Analysis**:
  - **Summaries**: Concise one-line clause explanations.
  - **Pros & Cons**: Advantage and disadvantage analysis per clause.
  - **Fairness & Risk Scoring**: Scores each clause on fairness ($x$-axis: user vs. issuer) and risk level ($y$-axis: low vs. high).
- 📊 **Visual Clause Mapping**: Interactive 2D scatterplot mapping clauses by Risk vs. Fairness with hover details.
- 💬 **Streaming AI Legal Assistant**: Real-time streaming chat assistant (SSE) with context-aware contract intelligence.
- 🔐 **Document & Session Management**: Google OAuth 2.0 authentication, session persistence, and contract history dashboard.

---

## 🛠 Tech Stack & Architecture

### 🔹 Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router), React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Visualization**: `@nivo/scatterplot`
- **Auth & State**: Arctic OAuth 2.0, HTTP-only cookie session management

### 🔸 Backend
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **Database ORM**: [SQLAlchemy](https://www.sqlalchemy.org/) & PostgreSQL (NeonDB)
- **Document Extractors**: `pdfplumber` (PDF) and `python-docx` (DOCX)
- **AI Integration**: [OpenAI GPT-4 API](https://platform.openai.com/)

---

## 📐 Architecture Overview

See [LegalLens Architecture Diagram](LegalLens_Architecture.drawio) for complete system component data flows.

---

## 📦 Project Setup

### Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

---

## 📜 License

MIT License
