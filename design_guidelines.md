# Design Guidelines: Deloitte Login Portal

## Design Approach
**Reference-Based**: Drawing inspiration from premium enterprise login experiences (Linear, Stripe, Notion) combined with Deloitte's corporate identity. The design prioritizes trust, professionalism, and seamless usability while maintaining visual sophistication.

## Core Design Principles
1. **Professional Minimalism**: Clean, uncluttered interface that conveys enterprise credibility
2. **Brand Confidence**: Prominent but tasteful Deloitte branding without overwhelming the interface
3. **Frictionless Access**: Login flow optimized for speed and clarity
4. **Premium Feel**: Subtle details that communicate quality and attention to detail

## Layout System

### Overall Structure
- **Split-screen layout** (desktop): Left side (40%) for login form, right side (60%) for branded visual content
- **Stacked layout** (mobile): Logo header, login form, footer
- **Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm

### Grid Strategy
- Form container: Single column, max-width of 400px, centered with ample padding
- Right panel: Full-height background with content overlay
- No multi-column grids within the login form itself

### Viewport Management
- Desktop: Full viewport height (min-h-screen) with split layout
- Mobile: Natural content height with proper padding (py-8)
- Form should feel grounded and centered, not floating

## Typography Hierarchy

**Font Stack**: 
- Primary: Inter or DM Sans (clean, modern sans-serif)
- Fallback: system-ui

**Hierarchy**:
- Page Title/Welcome: 32-36px, font-semibold
- Form Labels: 14px, font-medium
- Input Text: 16px, font-normal
- Helper Text: 13px, font-normal
- Links: 14px, font-medium
- Footer Text: 12px, font-normal

**Line Heights**: Generous (1.6-1.8) for readability in form context

## Component Library

### Navigation Header
**Desktop**: Minimal top bar with Deloitte logo (left), optional language/region selector (right)
**Mobile**: Simple centered logo with minimal height
**Height**: 64px desktop, 56px mobile

### Login Form Components

**Form Container**:
- Rounded corners (rounded-xl or rounded-2xl)
- Elevated with subtle shadow
- White background with slight transparency if over branded content
- Padding: p-8 to p-12

**Input Fields**:
- Email and password fields with generous height (h-12)
- Clear labels above inputs
- Subtle border in default state, stronger border on focus
- Rounded corners (rounded-lg)
- Proper spacing between fields (space-y-4 to space-y-6)

**Password Field**:
- Include show/hide toggle icon (eye icon)
- "Forgot password?" link aligned right below field

**Primary CTA Button**:
- Full-width within form container
- Height: h-12
- Deloitte green background
- Text: white, font-medium
- Rounded: rounded-lg
- States: default, hover (darker shade), active, disabled

**Secondary Actions**:
- "Remember me" checkbox (left-aligned)
- "Need help?" or "Contact support" link (subtle, bottom of form)

**Social Login** (if applicable):
- "Or continue with" divider
- Iconographic buttons for SSO options
- Outlined style, not filled

### Right Panel (Desktop Only)

**Content Elements**:
- Large Deloitte logo (subtle, semi-transparent)
- Branded gradient overlay
- Testimonial or value proposition text
- Abstract geometric pattern or professional imagery
- Tagline: "Empowering Innovation" or similar

**Visual Treatment**:
- Gradient: Deloitte green to darker shade or complementary tone
- Overlay opacity to ensure text readability
- Content positioned in lower-third or center-left

### Footer
- Minimal height (h-16)
- Copyright text, privacy policy, terms of service links
- Center-aligned on mobile, spread on desktop
- Subtle text treatment

## Images

**Hero Background Image** (Right Panel - Desktop):
Use a professional, abstract image that conveys:
- Technology and innovation (circuit patterns, abstract data visualization, or geometric forms)
- Corporate sophistication (architectural elements, modern office spaces with soft focus)
- Movement and progress (diagonal lines, ascending patterns)

**Placement**: Full-height right panel (60% width) on desktop, with gradient overlay
**Treatment**: Slightly desaturated, with Deloitte green gradient overlay (opacity 60-80%)
**Alternative**: If no suitable image, use a pure gradient with geometric shapes

**Logo Handling**:
- SVG Deloitte logo in header (40-48px height)
- Larger semi-transparent logo in right panel as watermark/brand element
- Fallback: Use text-based Deloitte branding if logo unavailable

## Form Validation & States

**Error States**:
- Red accent border on invalid fields
- Error message below field in small red text
- Icon indicator (exclamation mark) in field

**Success States**:
- Green checkmark icon when field validated
- Subtle green border on valid input

**Loading State**:
- Button shows spinner replacing text during authentication
- Disable all inputs during processing

## Accessibility

- All form inputs with proper labels (not just placeholders)
- Sufficient contrast ratios (4.5:1 minimum for text)
- Focus indicators clearly visible on all interactive elements
- Keyboard navigation fully supported
- ARIA labels for icon-only buttons
- Error messages announced to screen readers

## Responsive Breakpoints

**Mobile (< 768px)**:
- Single column, full-width form
- Logo centered at top
- Footer stacks vertically
- No right panel/hero image

**Tablet (768px - 1024px)**:
- Maintain split layout with adjusted proportions (50/50)
- Slightly reduced form padding

**Desktop (> 1024px)**:
- Full split-screen layout (40/60)
- Maximum form width enforced
- Right panel showcases full brand experience

## Micro-interactions

**Minimal Animation Strategy**:
- Input focus: Smooth border color transition (150ms)
- Button hover: Subtle scale (1.02) and shadow increase
- Form submission: Button loading state animation
- Error shake: Gentle horizontal shake on form error (300ms)

**NO heavy animations**: Avoid page transitions, elaborate reveals, or scroll-triggered effects

## Additional Elements

**Trust Indicators**:
- Security badge or SSL indicator near login button
- "Secure login" micro-copy
- Optional: Two-factor authentication toggle

**Help & Support**:
- Small "Need help logging in?" link below form
- Optional chat bubble in bottom-right for instant support

**Branding Consistency**:
- Use official Deloitte green (#86BC25 or approved brand color)
- Maintain professional, corporate aesthetic throughout
- Avoid playful or overly casual design elements

This design creates a polished, trustworthy login experience that balances Deloitte's corporate brand identity with modern UX best practices, ensuring users feel confident and guided through the authentication process.