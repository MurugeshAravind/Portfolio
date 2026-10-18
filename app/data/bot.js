/**
 * Copy and starter prompts for the Engineering & Architecture Q&A assistant.
 * Strict separation of concerns per AGENTS.md: all presentational copy lives here.
 */

export const botConfig = {
  title: "Engineering & Architecture Q&A",
  subtitle: "Grounded in Murugesh's delivery case studies, migrations, and verified metrics.",
  triggerLabel: "Technical Q&A",
  triggerShortLabel: "Q&A",
  badge: "Technical Index",
  inputPlaceholder: "Ask about banking architecture, migrations, or stack...",
  disclaimer: "Answers are grounded strictly in portfolio case studies and delivery records.",
  emptyStateTitle: "Architecture & Delivery Record",
  emptyStateIntro: "Ask a direct technical question, or select a topic below to inspect Murugesh's engineering record:",
  starterPrompts: [
    {
      label: "Banking Onboarding (OAO)",
      prompt: "What did Murugesh design and deliver for the retail banking onboarding platform?"
    },
    {
      label: "Red Hat Angular→React",
      prompt: "How did he execute the Angular-to-React migration for 50,000 users without rollbacks?"
    },
    {
      label: "AI & Multi-Agent Work",
      prompt: "What is his hands-on experience with GenAI, Gemini ADK, and agent workflows?"
    },
    {
      label: "Performance & Testing",
      prompt: "What are his verified performance metrics and testing coverage benchmarks?"
    },
    {
      label: "Hiring & Availability",
      prompt: "How can I schedule an interview with Murugesh for a Senior / Lead Frontend role?"
    }
  ],
  labels: {
    sourcesHeader: "Referenced Sources & Evidence",
    closeDrawer: "Close assistant",
    clearConversation: "Clear chat",
    sendButton: "Send inquiry",
    thinking: "Retrieving records..."
  }
};
