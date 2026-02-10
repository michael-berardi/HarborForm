---
description: Master protocol for bulletproof localhost management across all Next.js projects
---

# Localhost Master Protocol

// turbo-all

> **This is the authoritative SOP for all Next.js localhost management.**
> Replaces project-specific troubleshooting for consistent, reliable local dev.

---

## 🚀 Quick Start (Daily Development)

### Before Starting ANY Project
```bash
# Kill ALL zombie node/next processes first
pkill -9 -f "next" 2>/dev/null; pkill -9 -f "node_modules/.bin" 2>/dev/null

# Check port 3000 is free
lsof -i :3000 | grep LISTEN && echo "⚠️ Port 3000 occupied - killing..." && kill -9 $(lsof -t -i :3000)
```

### Standard Dev Server Start
```bash
# From project root - ALWAYS use this sequence
rm -rf .next && npm run dev
```

---

## 🔧 Tiered Recovery Protocol

### Tier 1: Quick Recovery (90% of issues)
**Symptoms**: Page not loading, 500 errors, stale content, "connection refused"
```bash
pkill -9 -f "next" && rm -rf .next && npm run dev
```
**Wait time**: 15-30 seconds for full initialization

---

### Tier 2: Cache Purge (Module/compilation errors)
**Symptoms**: `MODULE_NOT_FOUND`, `Cannot find module typescript`, shader/CSS not updating
```bash
pkill -9 -f node
rm -rf .next node_modules/.cache
npm run dev
```

---

### Tier 3: Deep Clean (Persistent failures)
**Symptoms**: `next: command not found`, corrupt dependencies, Turbopack hangs
```bash
# Complete environment reset
pkill -9 -f node
rm -rf .next* node_modules package-lock.json
npm install
npm run dev
```
**Wait time**: 5-10 minutes for full npm install

---

### Tier 4: Nuclear Option (Total corruption)
**Symptoms**: Bus errors, git corruption, everything else failed
```bash
# 1. Kill everything
pkill -9 -f node

# 2. Rename instead of delete (bypasses file locks)
mv node_modules node_modules_old_$(date +%s) 2>/dev/null
mv .next .next_old_$(date +%s) 2>/dev/null

# 3. Clear npm cache
npm cache clean --force

# 4. Fresh install
rm -f package-lock.json
npm install

# 5. Start with npx (bypasses PATH issues)  
npx next dev --port 3000
```

---

## 🛡️ Prevention Protocols

### Rule 1: One Project, One Server
Never run multiple Next.js projects simultaneously on the same port.
```bash
# Before switching projects, ALWAYS:
pkill -9 -f "next"
```

### Rule 2: Clean Before Switching
When changing projects:
```bash
# In OLD project directory
pkill -9 -f "next"

# In NEW project directory
rm -rf .next
npm run dev
```

### Rule 3: After Major Code Changes
Restart after:
- Large JSON/data file edits
- Shader/WebGL changes
- `node_modules` modifications
- `package.json` changes

```bash
# Quick restart
pkill -9 -f "next" && rm -rf .next && npm run dev
```

### Rule 4: Verify Server Is Actually Running
Don't just trust the terminal output:
```bash
# Wait 15 seconds, then verify
curl -I http://localhost:3000 2>/dev/null | head -1
```
**Expected**: `HTTP/1.1 200 OK` (or similar 2xx/3xx)

---

## 🔍 Diagnostic Commands

### Check What's Running
```bash
# Show all node/next processes
ps aux | grep -E "(next|node)" | grep -v grep

# Show what's on port 3000
lsof -i :3000
```

### Check .next Directory Health
```bash
# Should NOT see multiple .next* directories
ls -la | grep ".next"

# If you see ".next 2-..." or similar, clean them:
rm -rf .next*
```

### Check Node Environment
```bash
node --version  # Should be v18+ (ideally v20+)
npm --version   # Should be 9+
which node      # Should be /opt/homebrew/bin/node or similar
```

---

## ⚡ Project-Specific Notes

### Next.js 16 + Turbopack + Tailwind 4
This stack has known compilation hangs. If `npm run dev` hangs:
1. **Wait 5 minutes** - it may complete
2. If still hung, use `npx next dev` instead
3. If Turbopack keeps crashing, add to `next.config.ts`:
   ```typescript
   experimental: {
     turbo: false
   }
   ```

### WebGL/Shader Projects
Shader hot-reload can create ghost cache. Always:
```bash
rm -rf .next && npm run dev
```

---

## 🚨 Emergency Checklist

When localhost is completely broken:

- [ ] `pkill -9 -f node` - Kill ALL node processes
- [ ] `lsof -i :3000` - Check port is free
- [ ] `rm -rf .next*` - Clear ALL cache (including ghost dirs)
- [ ] `ls node_modules/.bin/next` - Verify next binary exists
- [ ] `npm run dev` or `npx next dev --port 3000`
- [ ] Wait **30 full seconds** before testing
- [ ] `curl http://localhost:3000` - Verify response
- [ ] If still broken → Tier 4 Nuclear Option

---

## 📋 Mental Model

```
┌─────────────────────────────────────────────────────────────┐
│                     LOCALHOST ISSUES                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  90% → Zombie process / stale cache → Tier 1               │
│   8% → Corrupt modules / deep cache  → Tier 2 or 3         │
│   2% → Environment corruption        → Tier 4               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ Success Criteria

Localhost is working when:
1. `curl http://localhost:3000` returns HTML (not connection refused)
2. Browser shows current code (not stale)
3. Hot reload works (changes appear in <2 seconds)
4. No errors in terminal

---

## 🔗 Related
- Use `/qa-workflow` for production verification on Vercel
- Localhost is for rapid iteration; Vercel test deployments are ground truth
