// src/data/kyc-data.ts
export interface KYCStage {
  name: string;
  users: number;
  failureRate: number;
  medianTime: number;
  topErrors: string[];
}

export const kycFunnelData: KYCStage[] = [
  {
    name: "Select Document Type",
    users: 400,
    failureRate: 0.15,
    medianTime: 28,
    topErrors: ["Please select correct document type", "Maximum tries exceeded"]
  },
  {
    name: "Document Scan",
    users: 390,
    failureRate: 0.35,
    medianTime: 32,
    topErrors: ["Please scan the correct document", "Proceed to Document Upload"]
  },
  {
    name: "Upload Document",
    users: 350,
    failureRate: 0.25,
    medianTime: 28,
    topErrors: ["Please upload the correct selected document", "Maximum upload tries exceeded"]
  },
  {
    name: "KYC Check",
    users: 310,
    failureRate: 0.15,
    medianTime: 33,
    topErrors: ["KYC data not found", "KYC document already exists"]
  },
  {
    name: "KYC Approved",
    users: 280,
    failureRate: 0.10,
    medianTime: 20,
    topErrors: []
  }
];

export const impactMetrics = [
  { metric: "Overall Conversion", current: "70%", target: "85-90%" },
  { metric: "Scan 1st Attempt Success", current: "66%", target: "80%+" },
  { metric: "Upload 1st Attempt Success", current: "60%", target: "75%+" },
  { metric: "Avg Step Time", current: "28-33s", target: "<20s" }
];
