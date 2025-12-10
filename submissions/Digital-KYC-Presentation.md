# Digital KYC – Reduce Drop-Off & Lift Conversion  
### Presentation Outline – Dipam Barman, B.Tech CSE (7th Sem), Gauhati University

---

## Slide 1 – Title

**Title:** Digital KYC – Reduce Drop-Off & Lift Conversion  
**Subtitle:** Simple Data-Driven Case Study  
**Author:** Dipam Barman, B.Tech Computer Science, 7th Sem, Gauhati University  

**Talking Points:**
- This is a student project based on a given digital KYC case and a 400-row Excel dataset.[file:1][file:2]  
- Objective: Understand where customers drop off in the KYC journey and propose simple improvements.

---

## Slide 2 – Problem Overview

**Content:**
- Digital KYC journey:  
  1. Select Document Type  
  2. Document Scan  
  3. Upload Document  
  4. KYC Check  
  5. KYC Approved / Rejected[file:2]  
- Each step has max 3 attempts; 4th attempt leads to auto-rejection.[file:2]

**Talking Points:**
- Bank is facing high rejection and drop-off, especially for youth/new customers.  
- Known issues: duplicate KYC, slow server responses, poor document scans.[file:2]

---

## Slide 3 – Data Used

**Content:**
- Excel file: 400 rows of KYC attempts.[file:1]  
- Columns: Stage Name, Attempt Count, Failure Percentage, Time Taken, Error.[file:1]  
- Word file: Scenario description, failure percentages by stage, KYC rules.[file:2]

**Talking Points:**
- Data is anonymised case-study style, not real customer PII.  
- Used only simple grouping and observation, no heavy ML.

---

## Slide 4 – Funnel Snapshot

**Content (Table style):**

| Stage              | Approx Users Passing | Main Reason for Drop |
|--------------------|----------------------|----------------------|
| Select Document    | ~390 / 400           | Wrong doc type       |
| Document Scan      | ~350 / 390           | Bad scans            |
| Upload Document    | ~310 / 350           | Wrong/poor uploads   |
| KYC Check          | ~280 / 310           | Duplicate/invalid    |
| KYC Approved       | ~280 / 400 total     | Final conversion     |

**Talking Points:**
- Overall conversion ≈ 70% (280 out of 400).  
- Biggest drop between Scan and Upload, and then at KYC Check.[file:1]

---

## Slide 5 – Error Patterns

**Content:**
- Document Scan: “Please scan the correct document”.[file:1]  
- Upload Document: “Please upload the correct selected document”, “Maximum upload tries exceeded”.[file:1]  
- KYC Check: “KYC data not found…”, “KYC document already exists…”.[file:1]

**Talking Points:**
- Many users repeat the same mistakes 2–3 times.  
- Duplicate documents get caught only at the end, which wastes time.

---

## Slide 6 – Root Causes (Summary)

**Content (bullets):**
- Confusing document selection (PAN + Aadhaar rules not obvious).[file:2]  
- No strong guidance when scanning documents.  
- Validation of quality happens only after upload.  
- Duplicate checks happen late at KYC Check stage.  
- No clear progress or time expectation shown to the user.

**Talking Points:**
- These root causes are directly linked to the error messages and attempts seen in data.[file:1][file:2]

---

## Slide 7 – Goal #1: Fewer Abandonments

**Content – Proposed fixes:**
- Simplify Select Document screen with recommended options and hints.  
- Add overlays and short instructions during Document Scan.  
- On 3rd failure, offer “Save & Resume” or Assisted KYC instead of straight rejection.

**Talking Points:**
- Idea is to reduce frustration and give the user a way out instead of quitting.

---

## Slide 8 – Goal #2: Faster TAT

**Content – Proposed fixes:**
- Do basic checks on the image before upload (brightness, blur, size).  
- Optimise KYC Check API and set clear internal targets (most responses within 15–20s).[file:2]  
- Show the user a simple progress message instead of an empty “please wait”.

**Talking Points:**
- This helps both perceived speed and actual speed.

---

## Slide 9 – Goal #3: Clearer Next-Step Visibility

**Content – Proposed fixes:**
- Show “Step X of 5” and estimated time on each screen.  
- Replace generic errors with more specific and friendly explanations.  
- Show clear reason and next steps when KYC is rejected.

**Talking Points:**
- Users feel more in control when they know where they are in the flow.

---

## Slide 10 – Goal #4: Fewer Re-Submissions

**Content – Proposed fixes:**
- Early duplicate check after reading document number.  
- Show preview with a simple quality checklist before upload.  
- Give instructions for selfie/photo before capturing.

**Talking Points:**
- Idea is to make it “right the first time” wherever possible.

---

## Slide 11 – Simple Metrics to Track

**Content:**
- Conversion rate per stage.  
- Number of attempts per stage and % of users hitting 3 attempts.  
- Error breakdown: scan issues, upload issues, duplicates, invalid documents.[file:1]  
- Median and 90th percentile time taken at each step.[file:1]

**Talking Points:**
- These metrics will show if the changes are working or not.

---

## Slide 12 – Expected Impact

**Content:**
- Higher first-time success in scan and upload.  
- Lower number of “Maximum tries exceeded” cases.  
- Better user experience for youth/new-to-bank customers.  
- Higher overall conversion (target 85%+ instead of 70%).

**Talking Points:**
- These are realistic improvements based on removing obvious friction points.

---

## Slide 13 – Technical Demo (Dashboard)

**Content:**
- Short summary of the Next.js + React dashboard built for the project.  
- Shows funnel chart, stage metrics, error insights, and solution summary.

**Talking Points:**
- This helps visualise the data and explain the solution in a simple way.

---

## Slide 14 – Limitations (Student Project)

**Content:**
- Analysis is based on one dataset (400 rows).  
- No real backend or real-time system integration.  
- Numbers are approximate and used for learning purposes only.

**Talking Points:**
- Clarify that this is an academic exercise, not a production system.

---

## Slide 15 – Learnings

**Content:**
- Understood how small UX details can affect conversion.  
- Practised reading log-style data and turning it into funnel insights.  
- Combined technical skills (Next.js, TS) with product thinking.

---

## Slide 16 – Thank You

**Content:**
- Name: **Dipam Barman**  
- Course: **B.Tech CSE, 7th Semester**  
- College: **Gauhati University**  
- Project: Digital KYC – Reduce Drop-Off & Lift Conversion  

**Talking Points:**
- Open for questions about either the data analysis or the live dashboard.
