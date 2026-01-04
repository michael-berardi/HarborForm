---
description: How to handle OAuth login flows efficiently
---

# OAuth Login Flow Best Practices

## Login Preference Order
1. **Login with Google** (always preferred)
2. **Login with GitHub** (fallback for dev tools)

## Key Behaviors

### Google OAuth Flow
1. Click "Continue with Google" or similar button
2. **A popup window will open** - immediately list browser pages and switch to the new popup window
3. In the popup, click once in the email field
4. **Check for autofill**: A stored account suggestion may appear below the field
5. If autofill appears, click the suggested account (mike@libertydesign.studio)
6. If no autofill, type: mike@libertydesign.studio then click Next
7. For password, same process: click field, check for autofill, or type: Billy123!
8. Click to confirm/login
9. Popup will close automatically - switch back to original page

### GitHub OAuth Flow (fallback)
1. Click "Continue with GitHub" button
2. **A popup or redirect may occur** - handle the new page
3. Click in username field, check for autofill
4. If autofill appears, click: michael-berardi
5. If no autofill, type: michael-berardi
6. For password: raKKr4UTz8uGDiu
7. Click Sign In

## Efficiency Rules
- **Never hesitate** on login panels - act immediately
- **ALWAYS check autofill first** - click in field, if suggestion appears, CLICK IT instead of typing
- **Never type if autofill is available** - clicking autofill is faster and more reliable
- **Popup handling**: List pages immediately after clicking OAuth button
- **Switch windows promptly**: After popup closes, return to original page
- **No confirmation requests**: Execute actions directly without asking user
