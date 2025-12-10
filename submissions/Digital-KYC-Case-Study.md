# HDFC Bank Digital KYC: Reduce Drop-Off and Lift Conversion  
### Case Study by Dipam Barman, B.Tech CSE (7th Sem), Gauhati University

---

## 1. Problem Understanding

HDFC Bank has launched a digital KYC process to onboard new and youth customers through its mobile app. The journey includes selecting the KYC document, scanning it, uploading it, and then system verification leading to KYC approval or rejection. Each customer gets 3 attempts at every step; if they reach the 4th attempt, they are automatically rejected.

Since go-live, HDFC Bank has seen a high rejection and drop-off rate in the digital KYC journey...
 Major known issues include duplicate KYC, higher server response time than the ideal 15–20 seconds per step, and improper document scanning.[file:2] Failure percentages by stage are: Select Document Type – 15%, Scan Document – 35%, Upload Document – 25%, KYC Check – 15%, KYC Approval – 10%.[file:2]

---

## 2. Data and Funnel Overview

The Excel file contains 400 rows of customer KYC attempts with columns: `Customer ID`, `Stage Name`, `Attempt Count`, `Failure Percentage`, `Time Taken in seconds`, and `Error`.[file:1] Stages include Select Document Type, Document Scan, Upload Document, KYC Check, and KYC Approved, each repeated for many customers with different attempts and times.[file:1]

From this dataset, a simple funnel picture can be drawn:

- Start: 400 customers enter the journey  
- After Select Document Type: around 390 customers continue (small loss due to wrong selection)[file:1]  
- After Document Scan: around 350 customers continue (larger loss due to scan errors)[file:1]  
- After Upload Document: around 310 customers continue (loss due to wrong/invalid uploads)[file:1]  
- After KYC Check: around 280 customers get approved (final conversion about 70%).[file:1]

Document Scan and Upload Document together account for a big part of failures. Many records show error messages like “Please scan the correct document”, “Please upload the correct selected document”, “Maximum upload tries exceeded”, and “Maximum tries exceeded”.[file:1] At KYC Check, common errors are “KYC data not found please upload correct KYC” and “KYC document already exists please upload correct KYC”.[file:1]

---

## 3. Key Observations from Data

### 3.1 Error Patterns

From the error column:

- **Document Scan**  
  - Very frequent error: “Please scan the correct document”  
  - Shows customers are scanning blurred, cut, or poorly lit documents.[file:1]

- **Upload Document**  
  - Very frequent error: “Please upload the correct selected document”  
  - Some records end with “Maximum upload tries exceeded”.[file:1]  
  - Indicates users are uploading wrong or low-quality images multiple times.

- **KYC Check**  
  - Errors: “KYC data not found please upload correct KYC”, “KYC document already exists…”  
  - Indicates invalid or duplicate documents are only found at the end of the flow.[file:1]

### 3.2 Attempts and Time

The Attempt Count for many records is 2 or 3, and some reach 4, which means the user hits the limit and is rejected.[file:1] Time Taken in seconds is often above 20 seconds, mainly for Document Scan and KYC Check stages.[file:1] This violates the ideal 15–20 second guideline per step mentioned in the case.[file:2]

Overall, this shows:

- High friction at scan and upload stages  
- Multiple retries lead to frustration  
- Final rejection often happens late at KYC Check after the user has already invested time.

---

## 4. Root Causes

From the scenario and data, the main root causes are:

1. **Confusing document selection**  
   Users may not clearly understand which document is valid for which purpose, and that PAN and Aadhaar are mandatory for digital accounts.[file:2] This leads to wrong choices at Select Document Type, and later failures at KYC Check.

2. **Poor scanning experience**  
   The app probably does not guide users enough on how to position the document, avoid blur, and ensure edges are visible. Errors like “Please scan the correct document” across multiple attempts support this.[file:1]

3. **No pre-upload validation**  
   Users upload images which are then rejected. The first real feedback is after the upload, not before. This is visible from “Please upload the correct selected document” plus “Maximum upload tries exceeded” errors.[file:1]

4. **Late detection of duplicates and invalid documents**  
   Duplicate and invalid KYC documents are discovered only at KYC Check stage, which is near the end of the flow.[file:1][file:2] This wastes user effort and increases final rejection rate.

5. **Inconsistent and unclear turnaround time**  
   Many steps take more than 20 seconds. The user also sees generic messages like “KYC check in progress please wait” without knowing how long it will take.[file:1][file:2] This creates uncertainty and possible abandonment.

---

## 5. Proposed Solution Design

The problem statement asks for fewer abandonments, faster TAT, clearer next-step visibility, and fewer re-submissions.[file:2] The solution is grouped under these four goals.

### 5.1 Fewer Abandonments

- **Guided document selection screen**  
  - Pre-select the recommended combination for digital accounts (for example, PAN + Aadhaar) and clearly show why.[file:2]  
  - Show which documents are identity proof and which are address proof using simple icons and small hints.

- **Better scanning guidance**  
  - Add a transparent frame overlay on the camera screen showing where to keep the document.  
  - Show short text hints like “Keep the document flat”, “Avoid glare”, and “Hold steady”.  
  - Allow user to see a preview and confirm image before proceeding.

- **Soft handling of repeated failures**  
  - Instead of direct rejection on the 4th attempt, show options like:  
    - “Try assisted KYC with support”  
    - “Save and continue later”  
    - “Visit branch for KYC”  

### 5.2 Faster Turnaround Time (TAT)

- **Client-side image checks**  
  - Before upload, check if the image is too dark, too small, or very blurred, using simple rules.  
  - If image is poor, ask the user to retake immediately, without calling the server.

- **Backend performance focus**  
  - Optimise KYC Check API calls so that most complete within 15–20 seconds.  
  - Set a maximum wait time and show clear progress messages like “Step 4/5: Verifying your document (~20 seconds)”.[file:2]

### 5.3 Clearer Next-Step Visibility

- **Show progress for the whole journey**  
  - For example: “Step 1 of 5: Select document type”, “Step 2 of 5: Scan document”, etc.  
  - At each step, show what happens next and approximate time required.

- **More specific error messages**  
  - For duplicates: “This document is already used for another account. Please use a different document or contact support.”  
  - For invalid scan: “The image is not clear or edges are cut. Please retake the photo in better light.”

### 5.4 Fewer Re-Submissions

- **Early duplicate check**  
  - After scanning and reading the document number (PAN/Aadhaar), run a quick duplicate check before going through all later steps.[file:1][file:2]  
  - If duplicate is found, inform user early and offer alternatives.

- **Preview and quality confirmation**  
  - After scan, show the captured image with a small checklist like:  
    - “All corners visible”  
    - “Text readable”  
    - “No major glare”  
  - Only allow user to upload if this basic quality is met.

- **Better guidance for photo and selfie**  
  - Show an instruction screen before capturing the selfie: “Good lighting”, “Face fully visible”, “No cap or sunglasses”.[file:2]  
  - This reduces mismatch between document photo and live photo.

---

## 6. Expected Impact and Metrics

If these changes are implemented, the expected impact is:

- Lower drop-off especially at Document Scan and Upload stages.  
- Higher first-time success rate in scanning and uploading.  
- Fewer users hitting “Maximum tries exceeded”.  
- Shorter and more predictable time per step and for the full KYC journey.

To measure success, the following metrics should be tracked:

- Conversion rate at each stage (Select → Scan → Upload → KYC Check → Approved).  
- Number of attempts per stage and percentage of users reaching 3 attempts.  
- Percentage of errors by type (scan quality, upload issues, duplicate document, invalid document).  
- Median and 90th percentile time taken per step before and after changes.[file:1]

---

## 7. Student Note

This project and dashboard are prepared as a student case study to show how data from a KYC funnel and a brief scenario can be converted into simple insights and practical product and UX suggestions. The goal is not to build a production banking system, but to demonstrate basic analytical thinking, problem breakdown, and front-end presentation of the solution.
