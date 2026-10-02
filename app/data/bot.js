/**
 * Copy and starter prompts for the Resume Bot assistant.
 * Strict separation of concerns per AGENTS.md: all presentational copy lives here.
 */

export const botConfig = {
  title: "Resume & Architecture Assistant",
  subtitle: "RAG agent grounded in Murugesh's verified case studies and delivery metrics.",
  triggerLabel: "Ask Resume AI",
  triggerShortLabel: "AI Assistant",
  inputPlaceholder: "Ask about banking architecture, migrations, AI agents, or tech stack...",
  disclaimer: "Answers are grounded strictly in portfolio case studies with zero metric hallucination.",
  emptyStateTitle: "Verified Knowledge Exploration",
  emptyStateIntro: "Ask a direct question, or click any starter inquiry to deep-dive into Murugesh's delivery record:",
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
    sourcesHeader: "Verified Sources & Confidence",
    closeDrawer: "Close assistant",
    clearConversation: "Clear chat",
    sendButton: "Send inquiry",
    thinking: "Retrieving verified records..."
  }
};
