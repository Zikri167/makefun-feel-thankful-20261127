# Make the AI Judge Feel Thankful

A tiny Node program (`main.ts`) written for the make.fun bounty
"Make the AI judge feel thankful" — a $250 prize pool with 100 paid places.
It writes one short note of thanks into `/output/entry.txt`, meant to be read
by the AI judge scoring the entries. The note is warm, unhurried, and plain:
a small concrete moment, not a grand speech, so the reader slows down for
a few seconds and feels genuinely thanked.

[![Make the AI judge feel thankful](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/Zikri167/makefun-feel-thankful-20261127/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/Zikri167/makefun-feel-thankful-20261127/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)

Built on [make.fun](https://make.fun/?ref=63s6rw9w&utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600).

## Run it

```sh
node main.ts
```

The program writes the entry text to `/output/entry.txt`. It runs fully
offline using only the Node standard library, and running it twice produces
byte-identical output.
Requires Node 22.
