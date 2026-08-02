# Vision Document

## Project Name & Overview

**Project Name:** LegalLens

LegalLens is a web application that enables users to upload legal contracts (PDF or DOCX), receive AI-generated clause summaries, evaluate clause risk and fairness scores, visualize results on an interactive 2D scatterplot, and interact with a streaming AI legal assistant — all without requiring advanced legal knowledge.

---

## Problem It Solves

Legal documents are dense, jargon-heavy, and difficult for non-lawyers to interpret. Most individuals and small business owners sign contracts without fully understanding their terms, exposing themselves to unfair clauses, hidden risks, or one-sided obligations.

LegalLens bridges this gap by:

- Translating complex legal language into plain-English clause summaries
- Flagging high-risk or unfair clauses before signing
- Providing an interactive AI assistant for follow-up questions — without expensive legal consultation

---

## Target Users (Personas)

### Primary Users

| Persona | Use Case |
|---|---|
| **Individuals** | Reviewing rental agreements, employment contracts, service agreements, and NDAs |
| **Small Business Owners** | Evaluating vendor and client contracts before signing |
| **Startup Founders** | Reviewing partnership and investment agreements |

### Secondary Users

| Persona | Use Case |
|---|---|
| **Law Students** | Studying and learning from real contract structures |
| **Legal Interns** | Performing preliminary document reviews efficiently |
| **Freelancers** | Understanding client contracts and spotting unfavorable terms |

---

## Vision Statement

> *To democratize access to legal understanding by giving every individual and small business owner the power to confidently review, interpret, and question any legal contract — without requiring a law degree or legal counsel.*

LegalLens envisions a world where signing a contract is no longer an act of blind trust, but an informed decision backed by clear, AI-powered analysis and instant answers.

---

## Key Features / Goals

| # | Feature | Description |
|---|---|---|
| 1 | **Contract Upload** | Upload `.pdf` or `.docx` contracts with automated text extraction |
| 2 | **AI Clause Summarization** | Concise, plain-English summary for every clause in the document |
| 3 | **Pros & Cons Analysis** | Per-clause breakdown of advantages and disadvantages |
| 4 | **Risk & Fairness Scoring** | Each clause scored on Fairness (user vs. issuer) × Risk (low vs. high) |
| 5 | **Visual Clause Mapping** | Interactive 2D scatterplot mapping all clauses by Risk and Fairness |
| 6 | **Streaming AI Chat Assistant** | Real-time, context-aware AI assistant (SSE) for questions about the contract |
| 7 | **Document History Dashboard** | Authenticated users can retrieve and revisit all previously analyzed contracts |
| 8 | **Secure Authentication** | Google OAuth 2.0 login with HTTP-only cookie session management |

---

## Success Metrics

- Users can successfully upload legal documents in PDF or DOCX format
- AI generates a clause summary for every uploaded document
- A Risk and Fairness score is produced for each individual clause
- Users can interact with the AI assistant to clarify contract terms
- Previously analyzed contracts are accessible from the dashboard
- Average document analysis time remains **under 60 seconds** for standard contracts

---

## Assumptions & Constraints

### Assumptions

- Users upload contracts in supported formats: **PDF or DOCX**
- Users have an active **internet connection** while using the application
- **OpenAI GPT-4 API** services are available during analysis
- Contracts are primarily written in **English**
- Users possess **basic computer literacy** (file upload, web navigation)

### Constraints

| Constraint | Detail |
|---|---|
| **File Formats** | Only `.pdf` and `.docx` are currently supported |
| **AI Dependency** | Contract analysis depends on external OpenAI API availability |
| **Connectivity** | Internet access is mandatory — no offline mode |
| **Processing Time** | Large contracts may require additional processing time |
| **Language** | English-language contracts only in v1 |
| **Legal Disclaimer** | AI-generated analysis is intended to assist users and **does not replace professional legal advice** |
