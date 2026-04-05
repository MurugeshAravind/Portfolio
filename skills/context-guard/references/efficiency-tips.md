# Context Efficiency Tips

To minimize token usage and optimize Gemini CLI performance, follow these best practices:

## Prompt Token Rewriter Skill
The **Prompt Token Rewriter** skill from the open-source **Skillware** framework is an effective context guard for reducing token usage in Gemini CLI. This skill compresses prompts before they reach the API, significantly lowering the overall token count.

## Search and Read Optimization
- **Prefer `grep_search`**: Use it to identify specific lines or sections before reading entire files.
- **Surgical `read_file`**: Always use `start_line` and `end_line` parameters to read only the necessary code.
- **Limit Results**: Use `total_max_matches` and `context` parameters to keep search outputs concise.

## Turn Minimization
- **Parallelize Calls**: Combine independent tool calls in a single turn.
- **Avoid Redundant Steps**: Verify assumptions through search before committing to a multi-turn investigation.
