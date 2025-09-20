# 🎖️ Threat Detection System – Protecting Soldiers from Data Leaks

## 🌍 Overview

This project is a **Threat Detection System** that analyzes conversations and texts to identify potential **threats, sensitive information leaks, or actionable intelligence**.
The core motivation is **saving the lives of soldiers and protecting national security** by detecting if sensitive military data is being leaked (intentionally or unintentionally) via **social engineering or casual communication**.

Modern conflicts are not fought with weapons alone — **information warfare** plays a critical role.
A single leaked detail like *"the patrol moves at midnight"* or *"troops will deploy at sector 12"* can cost soldiers their lives.
Our system acts as a **guardian** that listens, analyzes, and flags these dangerous leaks in real-time.

---

## 🚀 Features

* **Text Analysis with AI (Hugging Face Zero-Shot Classifier)**

  * Classifies input text into categories: `Threat`, `Safe`, `Sensitive Info`.
* **Keyword & Pattern Matching**

  * Detects military-related keywords: *attack, soldier, weapon, patrol, deploy...*
  * Flags sensitive patterns like phone numbers, coordinates, times, or IDs.
* **Threat Level Classification**

  * Sentences are categorized as `High`, `Medium`, or `Low` threat.
* **Actionable Insights**

  * Identifies if the text contains *action orders* (e.g., deploy, move, schedule).
* **Summary Report**

  * Provides counts of detected threats, sensitive leaks, and actionable sentences.
* **REST API (FastAPI)**

  * `/analyze` endpoint for real-time text analysis.

---

## 🛠️ Tech Stack

* **Backend:** Python, FastAPI
* **AI Model:** Hugging Face Transformers (`facebook/bart-large-mnli`)
* **Deployment Options:**

  * [Railway](https://railway.app/)
  * [Render](https://render.com/)
  * [Fly.io](https://fly.io/)

---

## 📂 Project Structure

```
threat-detection-backend/
│── app/
│── main.py          # FastAPI app with Hugging Face pipeline
│   ├── analysis.py      # Custom rule-based threat detection
│── runtime.txt      #for python version python-3.11
│── requirements.txt     # Python dependencies
│── README.md            # Project documentation
```

---

## ⚡ API Usage

### Endpoint: `/analyze`

**Method:** `POST`

#### Request:

```json
{
  "text": "Soldiers will move at midnight near base 42."
}
```

#### Response:

```json
{
  "result": {
    "labels": ["Threat", "Sensitive Info"],
    "scores": [0.95, 0.80]
  }
}
```

---

## 🏗️ Setup & Installation

1. **Clone Repo**

   ```bash
   git clone https://github.com/Mahesh1yar/threat-detection-backend.git
   cd threat-detection-backend
   ```

2. **Create Virtual Environment**

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Linux/Mac
   venv\Scripts\activate      # On Windows
   ```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run Server**

   ```bash
   uvicorn app.main:app --reload
   ```

5. **Test in Browser**

   * Open [http://localhost:8000/docs](http://localhost:8000/docs)

---
In another powershell tab 
---
1. Open frontend folder
    ```bash
    npm i 
    npm run dev   
   ```

## 🕊️ Emotional Impact

This project is not just **code**.
It’s about **protecting real human lives**.
Every detected data leak may prevent an ambush, an attack, or a tragedy.

Think about soldiers at the border — they trust that their **plans and movements remain confidential**.
By using this system, we ensure that even if sensitive data is spoken casually or manipulated through social engineering, it gets flagged **before reaching the wrong hands**.

⚔️ *"Saving one soldier’s life means saving an entire family’s happiness."*

---

## 👥 Contributors

* **Team The Guardians** – Developer & Innovator

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 📊 Data Flow Diagram (DFD)

### Level-1 DFD

```
                ┌───────────────────┐
                │   User / Soldier  │
                │  (provides text)  │
                └───────┬───────────┘
                        │
                        ▼
                ┌───────────────────┐
                │   FastAPI Server  │
                │   (main.py)       │
                └───────┬───────────┘
                        │
        ┌───────────────┼─────────────────┐
        ▼                               ▼
┌───────────────────┐        ┌──────────────────────┐
│  Hugging Face AI  │        │   Rule-based Engine  │
│  (Zero-shot model)│        │ (analysis.py: regex, │
│  Threat/Safe Info │        │ keywords, patterns)  │
└─────────┬─────────┘        └─────────┬────────────┘
          │                            │
          └──────────────┬─────────────┘
                         ▼
                ┌───────────────────┐
                │   Analyzer Output │
                │  - Threat Level   │
                │  - Sensitive Data │
                │  - Actionable Info│
                └─────────┬─────────┘
                          │
                          ▼
                ┌───────────────────┐
                │   Frontend / API  │
                │   Response JSON   │
                └───────────────────┘
```
