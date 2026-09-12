/**
 * @typedef {Object} Certification
 * @property {string} name
 * @property {string} issuer
 * @property {string} issuedDate
 * @property {string|null} expiryDate
 * @property {string[]} skills
 * @property {"github"|"cognizant"|"aws"|"anthropic"|"google-cloud"} icon
 * @property {string} credentialUrl
 */

/** @type {Certification[]} */
export const certifications = [
  {
    name: "Certified Partner Specialist Gemini Enterprise Agent Development",
    issuer: "Google Cloud",
    issuedDate: "Aug 2026",
    expiryDate: "Feb 2027",
    skills: ["Gemini Enterprise", "AI Agents", "Agent Development Kit (ADK)", "MCP", "A2A"],
    icon: "google-cloud",
    credentialUrl:
      "https://www.credly.com/badges/1bf80fef-c2f0-41fb-be45-ba6795235f6b/public_url",
  },
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "Aug 2026",
    expiryDate: "Aug 2029",
    skills: ["AWS Cloud", "Cloud Deployment", "Cloud Development"],
    icon: "aws",
    credentialUrl:
      "https://www.credly.com/badges/ba0df7c4-23b0-4ca3-81d0-6a9234b2a92b/public_url",
  },
  {
    name: "Add Agents to Gemini Enterprise",
    issuer: "Google Cloud",
    issuedDate: "Jun 2026",
    expiryDate: null,
    skills: ["Google Cloud", "Gemini", "AI Agents"],
    icon: "google-cloud",
    credentialUrl:
      "https://www.credly.com/org/google-cloud/badge/add-agents-to-gemini-enterprise",
  },
  {
    name: "Claude Certified Architect - Foundations",
    issuer: "Anthropic",
    issuedDate: "Jun 2026",
    expiryDate: "Jun 2027",
    skills: ["Claude Code", "Claude Agent SDK", "Claude API", "MCP", "AI Architecture"],
    icon: "anthropic",
    credentialUrl:
      "https://www.credly.com/badges/de77999b-3bf9-419a-9056-1cad604c3494/public_url",
  },
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
      "https://www.credly.com/badges/46bf5829-37f6-494c-8a47-4b48c6ca0e0a/public_url",
  },
  {
    name: "Vibe Code Hackathon — Vibe Coded using Cursor",
    issuer: "Cognizant",
    issuedDate: "Nov 2025",
    expiryDate: null,
    skills: [],
    icon: "cognizant",
    credentialUrl:
      "https://www.credly.com/badges/5dbe2a6d-48d7-4c13-bbbf-8c13ea4363b3/public_url",
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
