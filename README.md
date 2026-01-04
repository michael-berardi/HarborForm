# Harbor Form

A premium, white-label multi-step form component for modern web applications. Built with Next.js, React, and Tailwind CSS.

![Harbor Form Demo](demo-screenshot.png)

## Features

- 🎨 **Fully Themeable** - Customize colors via CSS variables or props
- 📱 **Responsive** - Mobile-first design with smooth animations
- ⚡ **Lightweight** - Minimal dependencies, optimized bundle
- 🔌 **Pluggable** - Use with webhooks, APIs, or custom handlers
- 🌙 **Dark/Light Mode** - Built-in theme support
- 🏷️ **White-label Ready** - Optional "Powered by" branding

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo.

## Integration

### Basic Usage

```tsx
import HarborForm from '@/components/HarborForm';

export default function MyPage() {
  return (
    <HarborForm
      onSubmit={async (data) => {
        // Handle form submission
        await fetch('/your-api', {
          method: 'POST',
          body: JSON.stringify(data),
        });
      }}
    />
  );
}
```

### With Webhook URL

```tsx
<HarborForm
  webhookUrl="https://your-webhook.com/endpoint"
  showPoweredBy={true}
/>
```

### Custom Theming

```tsx
<HarborForm
  accentColor="#8b5cf6"      // Purple accent
  showPoweredBy={true}
  poweredByText="Your Brand"
  poweredByUrl="https://yourbrand.com"
/>
```

### Custom Options

```tsx
<HarborForm
  industries={['Tech', 'Finance', 'Healthcare', 'Other']}
  budgets={['< $10k', '$10k - $50k', '$50k+']}
  timelines={['Immediately', '1-3 months', '3+ months']}
  timeSlots={['9 AM', '12 PM', '3 PM', '5 PM']}
  submitButtonText="Book Consultation"
/>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSubmit` | `(data: FormData) => Promise<void>` | - | Custom submission handler |
| `webhookUrl` | `string` | - | URL to POST form data |
| `accentColor` | `string` | `#3b82f6` | Primary accent color |
| `showPoweredBy` | `boolean` | `true` | Show "Powered by" footer |
| `poweredByText` | `string` | `Liberty Design` | Branding text |
| `poweredByUrl` | `string` | - | Link for branding |
| `industries` | `string[]` | See defaults | Industry options |
| `budgets` | `string[]` | See defaults | Budget range options |
| `timelines` | `string[]` | See defaults | Timeline options |
| `timeSlots` | `string[]` | See defaults | Available time slots |
| `onStepChange` | `(step: number) => void` | - | Step change callback |
| `onComplete` | `(data: FormData) => void` | - | Completion callback |
| `successTitle` | `string` | `Request Received!` | Success screen title |
| `successMessage` | `string` | See defaults | Success screen message |
| `submitButtonText` | `string` | `Submit Request` | Final button text |

## Environment Variables

For the included API route (`/api/submit`):

```env
# Optional: Forward submissions to external webhook
HARBOR_WEBHOOK_URL=https://your-webhook.com/endpoint

# Optional: Send email notifications via Resend
RESEND_API_KEY=re_xxxxx
HARBOR_NOTIFICATION_EMAIL=notifications@yoursite.com
HARBOR_FROM_EMAIL=Harbor Form <noreply@yoursite.com>
```

## CSS Customization

Override CSS variables in your global styles:

```css
:root {
  --hf-accent: #8b5cf6;          /* Your brand color */
  --hf-accent-light: #a78bfa;    /* Lighter variant */
  --hf-bg-primary: #0f0f0f;      /* Background */
  --hf-bg-secondary: #1a1a1a;    /* Card background */
  --hf-text-primary: #ffffff;    /* Primary text */
  --hf-text-secondary: #a1a1aa;  /* Secondary text */
}
```

## Form Data Structure

```typescript
interface FormData {
  // Contact (Step 1)
  name: string;
  email: string;
  phone: string;
  
  // Business (Step 2)
  company: string;
  website: string;
  industry: string;
  
  // Situation (Step 3)
  whatsWorking: string;
  whatsNot: string;
  
  // Goals (Step 4)
  goals: string;
  
  // Timeline (Step 5)
  timeline: string;
  budget: string;
  
  // Schedule (Step 6)
  preferredDate: Date | undefined;
  preferredTime: string;
}
```

## License

MIT © [Liberty Design Studio](https://libertydesign.studio)