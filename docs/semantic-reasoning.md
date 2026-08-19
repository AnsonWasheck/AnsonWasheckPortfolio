# Semantic reasoning layer

The deployed portfolio uses a compact semantic reasoning pipeline rather than a fixed list of exact-match questions. Its job is to map natural, loosely worded prompts to the most relevant parts of a curated portfolio knowledge base and return a concise, grounded answer.

## Pipeline

1. Normalize the prompt (case, punctuation, aliases, and common shorthand).
2. Classify broad intent and important entities such as a project, skill, role, or credential.
3. Retrieve candidate knowledge cards using lightweight semantic similarity with keyword and intent signals as a fallback.
4. Rerank candidates and assemble one or more related cards into a readable response.
5. Stream the response through the chat UI while retaining the conversation context locally.

This hybrid approach is useful for Edge AI because it keeps the hot path small, avoids a round trip for every question, and remains useful when a visitor phrases a question differently from the original training examples. The deployed site is backed by a compact model and a precomputed index; the full knowledge base, evaluation set, and model artifacts are not part of this public shell.

## Edge AI principles

- **Small-footprint inference:** optimize for practical latency and limited memory rather than a large hosted model.
- **Grounded generation:** answers are composed from retrieved source cards instead of invented profile facts.
- **Local-first interaction:** retrieval and UI state can run close to the visitor, reducing network dependence.
- **Graceful fallback:** partial matches and related cards are preferred over repeating an exact-match failure.

This document describes the public architecture only. It does not expose private portfolio data, credentials, or deployable production configuration.
