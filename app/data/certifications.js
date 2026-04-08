/**
 * @typedef {Object} Certification
 * @property {string} name
 * @property {string} issuer
 * @property {string} issuedDate
 * @property {string|null} expiryDate
 * @property {string[]} skills
 * @property {"github"|"cognizant"|"aws"} icon
 * @property {string} credentialUrl
 */

/** @type {Certification[]} */
export const certifications = [
  {
    name: "Context Engineering Foundation",
    issuer: "Cognizant",
    issuedDate: "Apr 2026",
    expiryDate: null,
    skills: ["Context Engineering"],
    icon: "cognizant",
    credentialUrl:
      "https://www.credly.com/badges/e3bbe76e-8f82-4bf2-bef2-9ba7b4db3436/public_url",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "Mar 2026",
    expiryDate: "Mar 2029",
    skills: ["AWS Cloud Practitioner"],
    icon: "aws",
    credentialUrl:
      "https://www.credly.com/badges/46bf5829-37f6-494c-8a47-4b48c6ca0e0a",
  },
  {
    name: "Vibe Code Hackathon — Vibe Coded using Cursor",
    issuer: "Cognizant",
    issuedDate: "Nov 2025",
    expiryDate: null,
    skills: [],
    icon: "cognizant",
    credentialUrl:
      "https://www.credly.com/badges/5dbe2a6d-48d7-4c13-bbbf-8c13ea4363b3",
  },
  {
    name: "GitHub Copilot",
    issuer: "GitHub",
    issuedDate: "Jun 2025",
    expiryDate: "Jun 2028",
    skills: ["GitHub Copilot"],
    icon: "github",
    credentialUrl:
      "https://www.credly.com/badges/299dc08e-facc-4a44-b81d-b942e20ea4f5/public_url",
  },
];
