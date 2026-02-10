---
description: How to handle Next.js localhost server issues
---

# Localhost Server Recovery

// turbo-all

> See `/localhost-master` for the comprehensive protocol.

## Quick Fix (Tier 1)
```bash
pkill -9 -f "next" && rm -rf .next && npm run dev
```

## Deep Clean (Tier 3)
```bash
pkill -9 -f node
rm -rf .next* node_modules package-lock.json
npm install
npm run dev
```

## Verify
```bash
curl -I http://localhost:3000 2>/dev/null | head -1
```
