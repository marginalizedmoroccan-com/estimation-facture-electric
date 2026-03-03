# WebcoreUI - AI Reference Guide

WebcoreUI is referred to as "Webcore" for brevity from now on.

Webcore is an open-source, customizable UI component library for Astro styled with Sass, that comes with Svelte and React support with compatible API. Webcore components are available through the `webcoreui` NPM package. Webcore blocks (made of Webcore components), and templates (made of Webcore blocks) are available through a CLI command.

Things to remember when using Webcore:

- GitHub repository link: https://github.com/Frontendland/webcoreui
- Webcore is designed for Astro projects using Sass.
- Webcore can be used with Svelte and React integrations for Astro projects.
- Webcore's Svelte and React implementation may also be used from within Svelte and React apps, functionality, however may not match the Astro implementation, as Webcore is ultimately an Astro UI library.
- Webcore is published as an npm package that can be installed.
- Webcore also comes with blocks (made of Webcore components) that can be installed via CLI.
- Webcore also has templates that can be installed via CLI.
- Blocks and templates are not available through the NPM package.

## Installation

### Prerequisites

Webcore works with the following minimum version numbers:

- Astro v5.13
- Sass v1.9
- TypeScript v5.8
- Node.js

### Setup with CLI (Recommended)

- For new projects, run: `npm create webcore@latest`
- For existing projects, run: `npm create webcore@latest config`

To set up Webcore with a template, use the following command:

```cmd
npm create webcore@latest template [TemplateName] [destination]

# Use the "Portfolio" template on the current directory
npm create webcore@latest template Portfolio

# Create the "Portfolio" template in the "portfolio" directory
npm create webcore@latest template Portfolio ./portfolio
```

### Manual Install

1. Run `npm i sass typescript webcoreui` to install dependencies
2. Add an empty `webcore.config.scss` file at the root of your project
3. Add the following to your global CSS to setup styles:

```scss
@use 'webcoreui/styles' as *;
@include setup((
    // Define paths for your fonts
    fontRegular: '/fonts/Inter-Regular.woff2',
    fontBold: '/fonts/Inter-Bold.woff2'
));
```

4. Update `astro.config.mjs` with the integration:

```js
import { webcore } from 'webcoreui/integration'

export default defineConfig({
    integrations: [webcore()]
})
```

## Command Line Interface

- **Documentation**: https://webcoreui.dev/docs/cli
- **Bootstrap a new project**: `npm create webcore@latest`
- **Bootstrap project with a template**: `npm create webcore@latest template [TemplateName] [destination]`
- **Update config for existing project**: `npm create webcore@latest config`
- **Add block**: `npm create webcore@latest add [Block]`
- **Add all blocks**: `npm create webcore@latest add all`

## CSS Configuration

- **Documentation**: https://webcoreui.dev/docs/css-configuration

Styles can be configured via the `webcore.config.scss` file. You can also use the `setup` mixin to configure the following:

```scss
@use 'webcoreui/styles' as *;
@include setup((
    // Define paths for your fonts
    fontRegular: '/fonts/Inter-Regular.woff2',
    fontBold: '/fonts/Inter-Bold.woff2'

    // Optionally, define which styles you'd like to include
    includeResets: true,
    includeUtilities: true,
    includeTooltip: true,
    includeScrollbarStyles: true
));
```

The following section defines the default CSS values, which can be overwritten in the `webcore.config.scss` file:

```scss
// Override breakpoints
$breakpoints: (
    'xs': 600px,
    'sm': 800px,
    'md': 1024px,
    'lg': 1200px
);

// Override paddings, margins, and gaps
$spacing: (
    'none':    0,
    'xxs':     2px,
    'xs':      5px,
    'sm':      10px,
    'md':      15px,
    'default': 20px,
    'lg':      25px,
    'xl':      30px,
    '2xl':     35px,
    '3xl':     40px,
    '4xl':     45px,
    '5xl':     50px
);

// Override font sizes
$fontSizes: (
    'xs':       12px,
    'sm':       14px,
    'md':       16px,
    'default':  18px,
    'lg':       21px,
    'xl':       24px,
    '2xl':      28px,
    '3xl':      32px
);

// Override line heights
$lineHeights: (
    'normal': normal,
    'hmd': 1.5,
    'hlg': 1.7
);

// Override z-index values
$layers: (
    'bg': -1,
    'default': 0,
    'fg': 1,
    'overlay': 2,
    'popup': 3,
    'top':  98,
    'header': 99,
    'modal': 100
);

// Disable animations
$disableAnimations: false;
```

Border-radius values can be changed using the following CSS variables:

```scss
body {
    --w-sm-radius: 2px;
    --w-md-radius: 5px;
    --w-lg-radius: 10px;
    --w-xl-radius: 15px;
}
```

You can override component styles with the following CSS variables:

```scss
html body {
    // Avatar component
    --w-avatar-border: var(--w-color-primary-70);

    // Banner component
    --w-banner-top: 0;

    // Checkbox component
    --w-checkbox-color: var(--w-color-primary);

    // Collapsible component
    --w-collapsible-initial-height: 0;
    --w-collapsible-max-height: 100%;

    // Masonry component
    --w-masonry-gap: 5px;

    // Progress component
    --w-progress-color: var(--w-color-primary);
    --w-progress-background: var(--w-color-primary-50);
    --w-progress-stripe-light: var(--w-color-primary);
    --w-progress-stripe-dark: var(--w-color-primary-10);

    // Radio component
    --w-radio-color: var(--w-color-primary);

    // Rating component
    --w-rating-color: var(--w-color-primary);
    --w-rating-empty-color: var(--w-color-primary);
    --w-rating-empty-background: var(--w-color-primary-70);
    --w-rating-size: 18px;

    // Ribbon component
    --w-ribbon-offset: 20px;
    --w-ribbon-folded-offset: 10px;

    // Scrollbars
    --w-scrollbar-bg: var(--w-color-primary-60);
    --w-scrollbar-fg: var(--w-color-primary-50);

    // Skeleton component
    --w-skeleton-color: var(--w-color-primary-60);
    --w-skeleton-wave-color: var(--w-color-primary-50);

    // Slider component
    --w-slider-background: var(--w-color-primary-50);
    --w-slider-color: var(--w-color-primary);
    --w-slider-thumb: var(--w-color-primary-50);

    // Spinner component
    --w-spinner-color: var(--w-color-primary);
    --w-spinner-width: 2px;
    --w-spinner-speed: 2s;
    --w-spinner-size: 30px;
    --w-spinner-dash: 8;

    // Spoiler component
    --w-spoiler-color: var(--w-color-primary);

    // Stepper component
    --w-stepper-color-border: var(--w-color-primary-50);
    --w-stepper-color-active: var(--w-color-info);
    --w-stepper-color-complete: var(--w-color-success);

    // Switch component
    --w-switch-off-color: var(--w-color-primary-50);
    --w-switch-on-color: var(--w-color-primary);

    // ThemeSwitcher component
    --w-theme-switcher-size: 20px;

    // Timeline component
    --w-timeline-color: var(--w-color-primary-50);
    --w-timeline-text-color: var(--w-color-primary);
    --w-timeline-counter: decimal;

    // Tooltips
    --w-tooltip-background: var(--w-color-primary);
    --w-tooltip-color: var(--w-color-primary-70);
}
```

### Themes

- **Documentation**: https://webcoreui.dev/docs/themes

To change the default theme, simply set the `theme` option in the `setup` mixin:

```scss
@use 'webcoreui/styles' as *;
@include setup((
    ...
    theme: 'light'
));
```

possible values:

- dark
- light
- midnight (dark blue tone)
- vintage (light brown tone)
- amber (dark yellow tone)
- synthwave (dark purple tone)
- velvet (dark red tone)

You can set multiple themes using the `themes` property:

```scss
@use 'webcoreui/styles' as *;
@include setup((
    ...
    themes: (
        dark: '.theme-dark',
        light: '.theme-light',
        midnight: '.theme-blue',
        vintage: '.theme-vintage',
        amber: '.theme-yellow',
        synthwave: '.theme-synthwave',
        velvet: '.theme-velvet'
    )
));
```

The `themes` config must be a map, containing a list of themes you’d like to include, where the key references the theme’s name, and the value is an arbitrary CSS selector that you can attach to your body to active the theme.

To create your own theme, override the following CSS variables:

```scss
:root {
    --w-color-scheme: dark;
    --w-color-primary: #FFF;        // Primary text
    --w-color-primary-10: #DDD;     // Secondary text
    --w-color-primary-20: #BBB;     // Muted text
    --w-color-primary-30: #757575;  // Placeholders & disabled states
    --w-color-primary-40: #333;     // Hover states
    --w-color-primary-50: #252525;  // Borders
    --w-color-primary-60: #111;     // Scrollbars & stripes
    --w-color-primary-70: #000;     // Background

    --w-color-info: #0ABDE3;
    --w-color-info-accent: #48DBFB;
    --w-color-info-fg: #000;
    --w-color-success: #10AC84;
    --w-color-success-accent: #1DD1A1;
    --w-color-success-fg: #000;
    --w-color-warning: #FF9F43;
    --w-color-warning-accent: #f7AA61;
    --w-color-warning-fg: #000;
    --w-color-alert: #de3233;
    --w-color-alert-accent: #EE5253;
    --w-color-alert-fg: #FFF;
    --w-color-overlay: #0000009e;
}
```

## Best Practices

- **Theming**: When you need to theme a component, prefer using the provided CSS variables.


## Import Patterns

All components follow a consistent import pattern:

```astro
import { ComponentName } from 'webcoreui/astro' // For Astro components
import { ComponentName } from 'webcoreui/svelte' // For Svelte components
import { ComponentName } from 'webcoreui/react' // For React components
```

Integration can be imported from `webcoreui/integration`:

```js
import { webcore } from 'webcoreui/integration'

export default defineConfig({
    integrations: [webcore()]
})
```

SVG icons can be imported from `webcoreui/icons`:

```js
import { info } from 'webcoreui/icons'
```

When using utilities, simply import from `webcoreui` without a namespace:

```js
import { modal, toast } from 'webcoreui'
```

For CSS-related imports, you can use the following two lines to set up mixins and Webcore styles:

```scss
@use 'webcoreui/styles' as *; // For setting up Webcore
@use 'webcoreui/config' as *; // For using Webcore mixins and config variables
```

## Available Components

- [Accordion](https://webcoreui.dev/docs/accordion)
- [Alert](https://webcoreui.dev/docs/alert)
- [Aspect Ratio](https://webcoreui.dev/docs/aspect-ratio)
- [Avatar](https://webcoreui.dev/docs/avatar)
- [Badge](https://webcoreui.dev/docs/badge)
- [Banner](https://webcoreui.dev/docs/banner)
- [Bottom Navigation](https://webcoreui.dev/docs/bottom-navigation)
- [Breadcrumb](https://webcoreui.dev/docs/breadcrumb)
- [Button](https://webcoreui.dev/docs/button)
- [Card](https://webcoreui.dev/docs/card)
- [Carousel](https://webcoreui.dev/docs/carousel)
- [Checkbox](https://webcoreui.dev/docs/checkbox)
- [Collapsible](https://webcoreui.dev/docs/collapsible)
- [Conditional Wrapper](https://webcoreui.dev/docs/conditional-wrapper)
- [Context Menu](https://webcoreui.dev/docs/context-menu)
- [Copy](https://webcoreui.dev/docs/copy)
- [Counter](https://webcoreui.dev/docs/counter)
- [Data Table](https://webcoreui.dev/docs/data-table)
- [Flex](https://webcoreui.dev/docs/flex)
- [Footer](https://webcoreui.dev/docs/footer)
- [Grid](https://webcoreui.dev/docs/grid)
- [Group](https://webcoreui.dev/docs/group)
- [Icon](https://webcoreui.dev/docs/icon)
- [Image](https://webcoreui.dev/docs/image)
- [Input](https://webcoreui.dev/docs/input)
- [Kbd](https://webcoreui.dev/docs/kbd)
- [List](https://webcoreui.dev/docs/list)
- [Masonry](https://webcoreui.dev/docs/masonry)
- [Menu](https://webcoreui.dev/docs/menu)
- [Modal](https://webcoreui.dev/docs/modal)
- [OTP Input](https://webcoreui.dev/docs/otp-input)
- [Pagination](https://webcoreui.dev/docs/pagination)
- [Popover](https://webcoreui.dev/docs/popover)
- [Progress](https://webcoreui.dev/docs/progress)
- [Radio](https://webcoreui.dev/docs/radio)
- [Range Slider](https://webcoreui.dev/docs/range-slider)
- [Rating](https://webcoreui.dev/docs/rating)
- [Ribbon](https://webcoreui.dev/docs/ribbon)
- [Select](https://webcoreui.dev/docs/select)
- [Sheet](https://webcoreui.dev/docs/sheet)
- [Sidebar](https://webcoreui.dev/docs/sidebar)
- [Skeleton](https://webcoreui.dev/docs/skeleton)
- [Slider](https://webcoreui.dev/docs/slider)
- [Speed Dial](https://webcoreui.dev/docs/speed-dial)
- [Spinner](https://webcoreui.dev/docs/spinner)
- [Spoiler](https://webcoreui.dev/docs/spoiler)
- [Stepper](https://webcoreui.dev/docs/stepper)
- [Switch](https://webcoreui.dev/docs/switch)
- [Table](https://webcoreui.dev/docs/table)
- [Tabs](https://webcoreui.dev/docs/tabs)
- [Textarea](https://webcoreui.dev/docs/textarea)
- [Theme Switcher](https://webcoreui.dev/docs/theme-switcher)
- [Timeline](https://webcoreui.dev/docs/timeline)
- [Toast](https://webcoreui.dev/docs/toast)
- [Tooltip](https://webcoreui.dev/docs/tooltip)

## Available Blocks

The following blocks can also be added via CLI using the `npm create webcore add [block]` command:

- [Author](https://webcoreui.dev/blocks/author)
- [Avatar with Rating](https://webcoreui.dev/blocks/avatar-with-rating)
- [Blog Card](https://webcoreui.dev/blocks/blog-card)
- [Device Mockup](https://webcoreui.dev/blocks/device-mockup)
- [Empty](https://webcoreui.dev/blocks/empty)
- [Error Page](https://webcoreui.dev/blocks/error-page)
- [Expandable Table](https://webcoreui.dev/blocks/expandable-table)
- [FAQ](https://webcoreui.dev/blocks/faq)
- [Form](https://webcoreui.dev/blocks/form)
- [Grid with Icons](https://webcoreui.dev/blocks/grid-with-icons)
- [Hero](https://webcoreui.dev/blocks/hero)
- [List with Icons](https://webcoreui.dev/blocks/icon-list)
- [Layout](https://webcoreui.dev/blocks/layout)
- [Maintenance](https://webcoreui.dev/blocks/maintenance)
- [SEO](https://webcoreui.dev/blocks/seo)
- [Setting Card](https://webcoreui.dev/blocks/setting-card)
- [Sign Up](https://webcoreui.dev/blocks/sign-up)
- [Social Proof](https://webcoreui.dev/blocks/social-proof)
- [Socials](https://webcoreui.dev/blocks/socials)
- [Team](https://webcoreui.dev/blocks/team)
- [Tiles](https://webcoreui.dev/blocks/tiles)
- [User](https://webcoreui.dev/blocks/user)

## Available Premium Blocks

The following premium blocks are available that can be added via the `npm run add [block]` command after setting up the `addBlock` script:

- [Dropdown Navigation](https://webcoreui.dev/blocks/dropdown-navigation)
- [Mega Menu](https://webcoreui.dev/blocks/mega-menu)
- [Onboard](https://webcoreui.dev/blocks/onboard)
- [Slide-in Navigation](https://webcoreui.dev/blocks/slide-in-navigation)
- [Stats](https://webcoreui.dev/blocks/stats)
- [Tree View](https://webcoreui.dev/blocks/tree-view)
- [User Profile Card](https://webcoreui.dev/blocks/user-profile-card)
- [Cart](https://webcoreui.dev/blocks/cart)
- [Customer Reviews](https://webcoreui.dev/blocks/customer-reviews)
- [Fund Raising Card](https://webcoreui.dev/blocks/fund-raising-card)
- [Order Details](https://webcoreui.dev/blocks/order-details)
- [Product Card](https://webcoreui.dev/blocks/product-card)
- [Product Details](https://webcoreui.dev/blocks/product-details)
- [Property Card](https://webcoreui.dev/blocks/property-card)
- [Seasonal Banner](https://webcoreui.dev/blocks/seasonal-banner)
- [Select Payment](https://webcoreui.dev/blocks/select-payment)
- [3D Card](https://webcoreui.dev/blocks/3d-card)
- [Animated Card](https://webcoreui.dev/blocks/animated-card)
- [Animated Gallery](https://webcoreui.dev/blocks/animated-gallery)
- [Animated Stat](https://webcoreui.dev/blocks/animated-stat)
- [Card with CTA](https://webcoreui.dev/blocks/card-with-cta)
- [Card with List](https://webcoreui.dev/blocks/card-with-list)
- [Chapters](https://webcoreui.dev/blocks/chapters)
- [Comments](https://webcoreui.dev/blocks/comments)
- [Comparison](https://webcoreui.dev/blocks/comparison)
- [Competition](https://webcoreui.dev/blocks/competition-results)
- [Confetti](https://webcoreui.dev/blocks/confetti)
- [Contact Tiles](https://webcoreui.dev/blocks/contact-tiles)
- [Content Section](https://webcoreui.dev/blocks/content-section)
- [Cookie Banner](https://webcoreui.dev/blocks/cookie-banner)
- [Country Select](https://webcoreui.dev/blocks/country-select)
- [CSS Pie Chart](https://webcoreui.dev/blocks/css-pie-chart)
- [CTA With BG](https://webcoreui.dev/blocks/cta-with-background)
- [Exit Intent Popup](https://webcoreui.dev/blocks/exit-intent-popup)
- [Featured Posts](https://webcoreui.dev/blocks/featured-posts)
- [Features Grid](https://webcoreui.dev/blocks/features-grid)
- [Feedback](https://webcoreui.dev/blocks/feedback)
- [Gauge](https://webcoreui.dev/blocks/gauge)
- [Gradient Card](https://webcoreui.dev/blocks/gradient-card)
- [Hero with Carousel](https://webcoreui.dev/blocks/hero-with-carousel)
- [How To](https://webcoreui.dev/blocks/how-to)
- [List with Images](https://webcoreui.dev/blocks/list-with-images)
- [Morphing Text](https://webcoreui.dev/blocks/morphing-text)
- [Newsletter Card](https://webcoreui.dev/blocks/newsletter-card)
- [Newsletter Popup](https://webcoreui.dev/blocks/newsletter-popup)
- [Overview](https://webcoreui.dev/blocks/overview)
- [Post](https://webcoreui.dev/blocks/post)
- [Pricing Table](https://webcoreui.dev/blocks/pricing-table)
- [Promotional Card](https://webcoreui.dev/blocks/promotional-card)
- [Rotating Text](https://webcoreui.dev/blocks/rotating-text)
- [Scroll Banner](https://webcoreui.dev/blocks/scroll-banner)
- [Scroll Progress](https://webcoreui.dev/blocks/scroll-progress)
- [Spotlight](https://webcoreui.dev/blocks/spotlight)
- [Stars](https://webcoreui.dev/blocks/stars)
- [Sticky CTA](https://webcoreui.dev/blocks/sticky-cta)
- [Testimonial](https://webcoreui.dev/blocks/testimonial)
- [Testimonials](https://webcoreui.dev/blocks/testimonials)
- [Top3](https://webcoreui.dev/blocks/top3)
- [Toplist](https://webcoreui.dev/blocks/toplist)

## Available Templates

The following templates can be installed via the `npm create webcore@latest template [TemplateName]` command:

- [Authentication](https://webcoreui.dev/templates/authentication)
- [Product Page](https://webcoreui.dev/templates/product-page)
- [Portfolio](https://webcoreui.dev/templates/portfolio)
- [Blog](https://webcoreui.dev/templates/blog)

## Available Premium Templates

The following premium templates can be installed via the `npm run template [TemplateName]` command after setting up the `addTemplate` script:

- [Landing Page](https://webcoreui.dev/templates/landing-page)
- [Advanced Product Page](https://webcoreui.dev/templates/product-page-pro)
- [Product Details](https://webcoreui.dev/templates/product-details)
- [Roadmap](https://webcoreui.dev/templates/roadmap)

## Component Architecture Patterns

Components follow a prop-based API pattern, where a component can be configured through props:

### Example: Accordion
```astro
<Accordion items={[{
    title: 'What is Webcore?',
    content: 'Webcore is an open-source, customizable UI component library for Astro.'
}]} />
```

## Common Props and Patterns

### Theme Prop

Many components support `theme` props that change their visual appearance:

- `theme="secondary"`
- `theme="outline"`
- `theme="flat"`
- `theme="info"`
- `theme="success"`
- `theme="warning"`
- `theme="alert"`

If no `theme` prop is set for a component that supports it, it'll automatically use a default theme.

### Image Prop

Many components support images, referred to as `img` or `images` for multiple images, or `logo`. These all share the same structure:

- `url="/path/to/img.png"`
- `alt="alternate text"`
- `width={100}`
- `height={100}`
- `lazy={true}` // Defaults to `false` for most
- `html="<svg ... />"` // Only applicable to `logo` that supports HTML injection

### Icon Prop

Many components supports the use of icons, which can be set using an `icon` prop:

- `icon="github"`

It can accept an icon type for Astro, or an SVG markup. Available icon types:

- `alert`
- `check`
- `chevron-down`
- `chevron-left`
- `chevron-right`
- `chevron-up`
- `circle-check`
- `circle-close`
- `close`
- `copy`
- `github`
- `home`
- `info`
- `moon`
- `order`
- `plus`
- `search`
- `sun`
- `warning`

## Components Reference

### Accordion

- **Documentation**: https://webcoreui.dev/docs/accordion

**Example:**

```astro
---
import { Accordion } from 'webcoreui/astro'
---

<Accordion items={[{
    title: 'What is Webcore?',
    content: 'Webcore is an open-source, customizable UI component library for Astro, Svelte, and React.'
}, {
    title: 'How can I start using Webcore?',
    content: 'Run <code>npm i webcoreui</code> in your terminal to install the package.'
}, {
    title: 'Is there anything else I need to know?',
    content: 'Yes! There\'s plenty of information in the documentation.'
}]} />
```

**API:**

```ts
type AccordionProps = {
    items: {
        title: string
        content: string
        reverse?: boolean
        expanded?: boolean
    }[]
    icon?: 'plus' | 'none'
    reverse?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items.title | Sets the title of the accordion. |
| items.content | Sets the content related to the title. Pass HTML along with your string to render HTML. |
| items.reverse | Changes the order of the title and the icon. |
| items.expanded | Sets the accordion to be expanded by default. |
| icon | Sets the icon. Uses a chevron by default, which can be changed to a plus sign or no icon. |
| reverse | Changes the order of the title and the icon for all items. |
| className | Pass additional CSS classes for the component. |


### Alert

- **Documentation**: https://webcoreui.dev/docs/alert

**Example:**

```astro
---
import { Alert } from 'webcoreui/astro'
---

<Alert theme="info" title="Note">
    You can create different alert elements with various themes.
</Alert>
```

**API:**

```ts
type AlertProps = {
    element?: string
    title?: string
    titleTag?: string
    titleProps?: any
    bodyProps?: any
    className?: string
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
}

type ReactAlertProps = {
    Element?: keyof JSX.IntrinsicElements
    TitleTag?: keyof JSX.IntrinsicElements
    icon?: React.ReactNode
} & Omit<AlertProps, 'titleTag' | 'element'>
```


| Prop | Purpose |
| --- | --- |
| element | Set the HTML tag used for the alert. Default to <code>section</code>. Use <code>Element</code> in React. |
| title | Specifies the title for the alert. |
| titleTag | Specifies the HTML tag of the title. Default to <code>strong</code>. Use <code>TitleTag</code> in React. |
| titleProps | Pass additional attributes to the title tag of the alert. |
| bodyProps | Pass additional attributes to the body tag of the alert. |
| className | Pass additional CSS classes for the wrapper element. |
| theme | Set the theme of your alert. Can be one of <code>info</code>, <code>success</code>, <code>warning</code>, <code>alert</code>. |

| React prop | Purpose |
| --- | --- |
| icon | Pass your <code>Icon</code> component to use a custom icon with the alert. |


### Aspect Ratio

- **Documentation**: https://webcoreui.dev/docs/aspect-ratio

**Example:**

```astro
---
import { AspectRatio } from 'webcoreui/astro'
---

<AspectRatio ratio="21/9">
    <Box>21:9</Box>
</AspectRatio>
```

**API:**

```ts
type AspectRatioProps = {
    ratio: string
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| ratio | Specifies the aspect ratio. |
| className | Pass additional CSS classes for the component. |


### Avatar

- **Documentation**: https://webcoreui.dev/docs/avatar

**Example:**

```astro
---
import { Avatar } from 'webcoreui/astro'
---

<Avatar img="/img/avatar.png" />
```

**API:**

```ts
type AvatarProps = {
    img: string | string[]
    alt?: string | string[]
    size?: number | number[]
    lazy?: boolean
    borderColor?: string
    borderless?: boolean
    reverse?: boolean
    className?: string
    groupClassName?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| img | - | Specifies the image path to your avatar. Can be a string or an array of strings. |
| alt | - | Specifies the <code>alt</code> attribute for the image. Can be a string or an array of strings. |
| size | 40 | Sets the size of the image. Can be a number or an array of numbers for avatar groups. |
| lazy | true | Specifies whether to lazy load images. |
| borderColor | - | Sets the image border color. Defaults to the background color. |
| borderless | false | Removes border from images. |
| reverse | false | Reverse avatar group order. |
| className | - | Pass additional CSS classes for your avatars. |
| groupClassName | - | Pass additional CSS classes for the avatar group container. |


### Badge

- **Documentation**: https://webcoreui.dev/docs/badge

**Example:**

```astro
---
import { Badge } from 'webcoreui/astro'
---

<Badge>Primary</Badge>
<Badge theme="secondary">Secondary</Badge>
<Badge theme="flat">Flat</Badge>
<Badge theme="outline">Outline</Badge>

<Badge theme="info">Info</Badge>
<Badge theme="success">Success</Badge>
<Badge theme="warning">Warning</Badge>
<Badge theme="alert">Alert</Badge>
```

**API:**

```ts
type BadgeProps = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
    hover?: boolean
    small?: boolean
    rounded?: boolean
    transparent?: boolean
    className?: string
}

type SvelteBadgeProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
} & BadgeProps

type ReactBadgeProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
} & BadgeProps
```


| Prop | Default | Purpose |
| --- | --- | --- |
| theme | - | Sets the theme of the badge. |
| hover | false | Adds hover effects if the badge needs to be interactive. Use only for Astro components. |
| small | false | Sets the badge to a smaller size. |
| rounded | false | Sets the borders of the badge to rounded. |
| transparent | false | Sets the background of the badge to transparent. Can be used with the `theme` prop. |
| className | - | Pass additional CSS classes for the badge. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onClick | Attach on-click event listeners. If set, <code>hover</code> is treated as <code>true</code>. |


### Banner

- **Documentation**: https://webcoreui.dev/docs/banner

**Example:**

```astro
---
import { Banner } from 'webcoreui/astro'
---

<Banner>New version available! ✨</Banner>
```

**API:**

```ts
type BannerProps = {
    top?: number
    bottom?: boolean
    closeable?: boolean
    padded?: boolean
    sticky?: boolean
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| top | 0 | Sets the top position of the banner. |
| bottom | false | Sets whether the banner should appear at the bottom of the page. |
| closeable | false | Makes the banner closable. |
| padded | false | Sets padding around the banner. By default, the banner has a 100% width. |
| sticky | true | Sets the sticky positioning of the banner. |
| className | - | Pass additional CSS classes for the banner. |


### Bottom Navigation

- **Documentation**: https://webcoreui.dev/docs/bottom-navigation

**Example:**

```astro
---
import { BottomNavigation } from 'webcoreui/astro'

const items = [
    {
        icon: 'home',
        name: 'Home'
    },
    {
        icon: 'components',
        name: 'Components'
    },
    {
        icon: 'github',
        name: 'GitHub'
    }
]
---

<BottomNavigation items={items} />
```

**API:**

```ts
type BottomNavigationProps = {
    items: {
        name?: string
        href?: string
        target?: '_self'
            | '_blank'
            | '_parent'
            | '_top'
            | '_unfencedTop'
        icon?: string
        tooltip?: string
    }[]
    separated?: boolean
    floating?: boolean
    maxWidth?: string
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items | Sets the navigation items. |
| items.name | Sets the name of the navigation item. |
| items.href | Sets the link for the navigation item. |
| items.target | Sets the target of the anchor. |
| items.icon | Sets an icon for the navigation item. |
| items.tooltip | Sets a tooltip for the navigation item. |
| separated | Adds borders between the navigation items. |
| floating | Adds paddings around the navigation. |
| maxWidth | Sets the maximum width of the container of items. |
| className | Pass additional CSS classes for the component. |


### Breadcrumb

- **Documentation**: https://webcoreui.dev/docs/breadcrumb

**Example:**

```astro
---
import { Breadcrumb } from 'webcoreui/astro'

const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Docs', href: '/docs' },
    { label: 'Components', href: '/docs/components' }
]
---

<Breadcrumb items={breadcrumbs} />
```

**API:**

```ts
type BreadcrumbProps = {
    items: {
        icon?: string
        label?: string
        href?: string
        target?: '_self'
            | '_blank'
            | '_parent'
            | '_top'
            | '_unfencedTop'
    }[]
    separator?: string
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items | Sets the breadcrumb items. |
| items.icon | Sets an icon for the anchor. |
| items.label | Sets a text for the anchor. |
| items.href | Sets a link for the anchor. |
| items.target | Sets the target of the anchor. |
| separator | Sets a custom separator for the breadcrumb. |
| className | Pass additional CSS classes for the breadcrumb. |


### Button

- **Documentation**: https://webcoreui.dev/docs/button

**Example:**

```astro
---
import { Button } from 'webcoreui/astro'
---

<Button>Primary</Button>
<Button theme="secondary">Secondary</Button>
<Button theme="flat">Flat</Button>
<Button theme="outline">Outline</Button>

<Button theme="info">Info</Button>
<Button theme="success">Success</Button>
<Button theme="warning">Warning</Button>
<Button theme="alert">Alert</Button>
```

**API:**

```ts
type ButtonProps = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
    href?: string
    className?: string
}

type SvelteButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
} & ButtonProps

type ReactButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
} & ButtonProps
```


| Prop | Purpose |
| --- | --- |
| theme | Sets the theme of the button. Defaults to <code>null</code>. |
| href | Attach a link to the button to make it work like an anchor element. |
| className | Pass additional CSS classes for the button. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onClick | Attach on-click event listeners. |


### Card

- **Documentation**: https://webcoreui.dev/docs/card

**Example:**

```astro
---
import { Card } from 'webcoreui/astro'
---

<Card title="Preview" compact={true}>
    <p>This is a card with a paragraph</p>
</Card>
```

**API:**

```ts
type CardProps = {
    element?: string
    title?: string
    titleTag?: string
    compact?: boolean
    secondary?: boolean
    className?: string
    bodyClassName?: string
}

type ReactCardProps = {
    Element?: keyof JSX.IntrinsicElements
    TitleTag?: keyof JSX.IntrinsicElements
} & Omit<CardProps, 'titleTag' | 'element'>
```


| Prop | Purpose |
| --- | --- |
| element | Set the HTML tag used for the card. Defaults to <code>section</code>. Use <code>Element</code> in React. |
| title | Sets a title for the card. |
| titleTag | Sets the HTML tag of the title. Defaults to <code>span</code>. Use <code>TitleTag</code> in React. |
| compact | Style the card as compact. Defaults to <code>false</code>. |
| secondary | Style the card as secondary with a background color. Defaults to <code>false</code>. |
| className | Pass additional CSS classes for the card. |
| bodyClassName | Pass additional CSS classes for the body of the card. |


### Carousel

- **Documentation**: https://webcoreui.dev/docs/carousel

**Example:**

```astro
---
import { Carousel } from 'webcoreui/astro'
---

<Carousel items={3}>
    <li><Box>1</Box></li>
    <li><Box>2</Box></li>
    <li><Box>3</Box></li>
</Carousel>
```

**API:**

```ts
type Responsive<T> = T | {
    default?: T
    xs?: T
    sm?: T
    md?: T
    lg?: T
}

type CarouselProps = {
    items: number
    itemsPerSlide?: number | Responsive<number>
    subText?: string
    scrollSnap?: boolean
    progress?: boolean
    pagination?: PaginationProps
    effect?: 'opacity' | 'saturate'
    debounce?: number
    className?: string
    wrapperClassName?: string
    paginationClassName?: string
}

type SvelteCarouselProps = {
    onScroll?: (page: number) => void
} & CarouselProps

type ReactCarouselProps = {
    onScroll?: (page: number) => void
} & CarouselProps
```


| Prop | Purpose |
| --- | --- |
| items | Set the number of slides. |
| itemsPerSlide | Sets the number of items per slide. Pass a responsive object to set items per breakpoint. |
| subText | Sets a label under the slides. |
| scrollSnap | Sets scroll snap for swipe motion. Enabled by default. |
| progress | Displays a progress bar under the slides. Defaults to <code>false</code>. |
| pagination | Customize the pagination of the carousel. It can accept the props of the <code>Pagination</code> component. |
| effect | Sets a transition effect for the slides. Can be one of <code>opacity</code>, <code>saturate</code>. |
| debounce | Sets the debounce amount for the <code>scroll</code> event listener. |
| className | Pass additional CSS classes for the carousel. |
| wrapperClassName | Pass additional CSS classes for slides container. |
| paginationClassName | Pass additional CSS classes for the pagination of the carousel. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onScroll | Attach event listeners that are triggered when the carousel is scrolled. The <code>page</code> parameter will return the current page as a number. |


### Checkbox

- **Documentation**: https://webcoreui.dev/docs/checkbox

**Example:**

```astro
---
import { Checkbox } from 'webcoreui/astro'
---

<Checkbox
    label="Accept terms and conditions"
    className="checkbox"
/>

<script>
    let toggled = false

    document.querySelector('.checkbox input').addEventListener('change', e => {
        toggled = e.target.checked
    })
</script>
```

**API:**

```ts
type CheckboxProps = {
    checked?: boolean
    label?: string
    subText?: string
    disabled?: boolean
    color?: string
}

type SvelteCheckboxProps = {
    onChange?: ChangeEventHandler<HTMLInputElement>
    onClick?: MouseEventHandler<HTMLInputElement>
} & CheckboxProps

type ReactCheckboxProps = {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onClick?: React.MouseEventHandler<HTMLInputElement>
} & CheckboxProps
```


| Prop | Purpose |
| --- | --- |
| checked | Sets the checkbox checked by default. Defaults to <code>false</code>. |
| label | Set a label for the checkbox. |
| subText | Specify additional text below the checkbox. The string can include HTML tags. |
| disabled | Sets the checkbox to disabled. Defaults to <code>false</code>. |
| color | Sets the color of the checkbox. |
| className | Pass additional CSS classes for the checkbox. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onChange | Attach on-change event listeners. |
| onClick | Attach on-click event listeners. |


### Collapsible

- **Documentation**: https://webcoreui.dev/docs/collapsible

**Example:**

```astro
---
import { Button, Collapsible } from 'webcoreui/astro'
---

<Collapsible maxHeight="80px">
    <p>...</p>

    <Button slot="on">Show more</Button>
    <Button slot="off">Show less</Button>
</Collapsible>
```

**API:**

```ts
type CollapsibleProps = {
    initialHeight?: string
    maxHeight?: string
    toggled?: boolean
    className?: string
    togglesClassName?: string
}

type SvelteCollapsibleProps = {
    on: Snippet
    off: Snippet
} & CollapsibleProps

type ReactCollapsibleProps = {
    on: React.ReactNode
    off: React.ReactNode
} & CollapsibleProps
```


| Prop | Purpose |
| --- | --- |
| initialHeight | Sets the initial height for the collapsible for the off state. Defaults to 0. |
| maxHeight | Sets the <code>max-height</code> CSS property on the collapsible for the on state, making it animated. |
| toggled | Sets whether the element is toggled by default. Defaults to <code>false</code>. |
| className | Pass additional CSS classes for the collapsible. |
| togglesClassName | Pass additional CSS classes for the container of the toggle buttons. |

| Svelte & React Prop | Purpose |
| --- | --- |
| on | Sets the element for the toggle on button. |
| off | Sets the element for the toggle off button. |


### Conditional Wrapper

- **Documentation**: https://webcoreui.dev/docs/conditional-wrapper

**Example:**

```astro
---
import { ConditionalWrapper } from 'webcoreui/astro'

const condition = false
---

<ConditionalWrapper condition={condition}>
    <figure slot="wrapper">
        children
        <figcaption>Avatar</figcaption>
    </figure>
    <img src="avatar.png" />
</ConditionalWrapper>
```

**API:**

```ts
type ConditionalWrapperProps = {
    condition: boolean
}

type ReactConditionalWrapperProps = {
    wrapper: (_: React.ReactNode) => any
} & ConditionalWrapperProps
```


| Prop | Purpose |
| --- | --- |
| condition | Pass a condition to decide whether to wrap an element or not. |


### Context Menu

- **Documentation**: https://webcoreui.dev/docs/context-menu

**Example:**

```astro
---
import { ContextMenu, List } from 'webcoreui/astro'
---

<ContextMenu className="ctx">
    <span class="muted">Right-click here</span>

    <List
        itemGroups={[ ... ]}
        showSearchBar={true}
        showSearchBarIcon={true}
        searchBarPlaceholder="Search the app..."
        noResultsLabel="Nothing found..."
        slot="context"
    />
</ContextMenu>
```

**API:**

```ts
type ContextMenuProps = {
    element?: string
    className?: string
    [key: string]: any
}

type SvelteContextMenuProps = {
    children: Snippet
    context: Snippet
} & ContextMenuProps

type ReactContextMenuProps = {
    Element?: React.ElementType
    children: React.ReactNode
    context: React.ReactNode
} & Omit<ContextMenuProps, 'element'>
```


| Prop | Purpose |
| --- | --- |
| element | Sets the element of the context area. Defaults to <code>div</code>. |
| className | Pass additional CSS classes to your context area. |

| Svelte & React Prop | Purpose |
| --- | --- |
| context | Sets the element for your context menu. |


### Copy

- **Documentation**: https://webcoreui.dev/docs/copy

**Example:**

```astro
---
import { Copy } from 'webcoreui/astro'
---

<Copy>Primary</Copy>
<Copy theme="secondary">Secondary</Copy>
<Copy theme="flat">Flat</Copy>
<Copy theme="outline">Outline</Copy>

<Copy theme="info">Info</Copy>
<Copy theme="success">Success</Copy>
<Copy theme="warning">Warning</Copy>
<Copy theme="alert">Alert</Copy>
```

**API:**

```ts
type CopyProps = {
    tooltip?: string
    tooltipPosition?: 'left' | 'right' | 'bottom'
    copyIcon?: string
    copiedIcon?: string
    className?: string
} & BadgeProps
```


| Prop | Purpose |
| --- | --- |
| tooltip | Sets a tooltip for the <code>Copy</code> component. |
| tooltipPosition | Sets the position of the tooltip. |
| copyIcon | Sets the copy icon of the component. |
| copiedIcon | Sets the copied icon of the component. |
| className | Pass additional CSS classes for the component. |


### Counter

- **Documentation**: https://webcoreui.dev/docs/counter

**Example:**

```astro
---
import { Counter } from 'webcoreui/astro'
---

<Counter />

<script>
    import { listen } from 'webcoreui'

    listen('counterOnChange', event => console.log(event))
</script>
```

**API:**

```ts
type CounterProps = {
    type?: 'compact' | 'buttons' | 'separated'
    theme?: 'info' | 'success' | 'warning' | 'alert'
    rounded?: boolean
    minIcon?: string
    maxIcon?: string
    width?: string
    className?: string
}

type SvelteCounterProps = {
    onChange?: (value: number) => void
} & CounterProps

type ReactCounterProps = {
    onChange?: (value: number) => void
} & CounterProps
```


| Prop | Purpose |
| --- | --- |
| type | Sets the visual type of the counter. |
| theme | Sets the color theme of the counter. |
| rounded | Set to `true` to round the corners of the counter. |
| minIcon | Pass an icon type (Astro only) or an SVG string to set a custom min icon. |
| maxIcon | Pass an icon type (Astro only) or an SVG string to set a custom max icon. |
| width | Pass a CSS width to set a custom width for the component. |
| className | Pass additional CSS classes for the component. |


### Data Table

- **Documentation**: https://webcoreui.dev/docs/data-table

**Example:**

```astro
---
import { DataTable } from 'webcoreui/astro'

const data = [
    ['#1', '47', 'suspended'],
    ['#2', '195', 'inactive']
]
---

<DataTable
    headings={['ID', 'Score', 'Status']}
    data={data}
    itemsPerPage={5}
/>
```

**API:**

```ts
type DataTableEventType = {
    results: string[][]
    numberOfResults: number
}

type HeadingObject = {
    name: string
    sortable?: boolean
    toggleable?: boolean
    filterable?: boolean
}

type DataTableProps = {
    headings?: (HeadingObject | string)[]
    filterPlaceholder?: string
    showFilterIcon?: boolean
    noResultsLabel?: string
    itemsPerPage?: number
    subText?: string
    columnToggleLabel?: string
    pagination?: PaginationProps
    data: string[][]
    hover?: boolean
    striped?: 'column' | 'row'
    offsetStripe?: boolean
    compact?: boolean
    maxHeight?: string
    className?: string
    id?: string
}

type SvelteDataTableProps = {
    onFilter?: (event: DataTableEventType) => void
} & DataTableProps

type ReactDataTableProps = {
    onFilter?: (event: DataTableEventType) => void
} & DataTableProps
```


| Prop | Purpose |
| --- | --- |
| headings | Sets headings for the columns. If the <code>headings</code> prop is not specified, filtering, sorting, and column toggle functionality will be disabled. |
| filterPlaceholder | Sets the placeholder for the filter input. Defaults to "Filter entries". |
| showFilterIcon | Shows a search icon in the filter input. Defaults to <code>false</code>. |
| noResultsLabel | Sets the label that is shown when no results are found after overfiltering. Defaults to "No results.". |
| itemsPerPage | Sets the number of rows per page. |
| subText | Sets an additional label under the data table. |
| columnToggleLabel | Sets the label for the column toggle button. Defaults to "Columns". |
| pagination | Customize the pagination of the data table. It can accept the props of the <code>Pagination</code> component. |
| data | Sets the table cells. Must be a multidimensional array of strings. |
| hover | Adds a hover effect for rows. Defaults to <code>false</code>. |
| striped | Adds stripes for the rows/columns. Its value can be one of <code>column</code>, or <code>row</code>. |
| offsetStripe | Offsets the starting position of stripes if the <code>striped</code> prop is set. |
| compact | Sets the padding of the cells to a smaller size. |
| maxHeight | Sets a maximum height for the table, making it scrollable with a fixed header. |
| className | Pass additional CSS classes for the data table. |
| id | Pass an ID for the data table. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onFilter | Attach event listeners that are triggered when the data table is filtered. |


### Flex

- **Documentation**: https://webcoreui.dev/docs/flex

**Example:**

```astro
---
import { Flex } from 'webcoreui/astro'
---

<Flex>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
</Flex>
```

**API:**

```ts
type FlexProps = {
    element?: string
    gap?: Responsive<Gap>
    alignment?: Responsive<Alignment>
    direction?: Responsive<Direction>
    wrap?: Responsive<Wrap>
    className?: string
}

type ReactFlexProps = {
    Element?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<FlexProps, 'element'>

type Gap = 'none'
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'default'
    | 'lg'
    | 'xl'
    | 'xl2'
    | 'xl3'
    | 'xl4'
    | 'xl5'

type VerticalAlignment = 'center'
    | 'start'
    | 'end'
    | 'baseline'
    | 'stretch'

type HorizontalAlignment = 'center'
    | 'start'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'

type Direction = 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'

type Wrap = 'wrap'
    | 'nowrap'
    | 'wrap-reverse'

type Responsive<T> = T | {
    default?: T
    xs?: T
    sm?: T
    md?: T
    lg?: T
}

type Alignment = {
    horizontal?: HorizontalAlignment
    vertical?: VerticalAlignment
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| element | div | Sets the HTML tag used for the flex container. |
| gap | 20px | Sets the gap between flex items. |
| alignment | start | Sets the horizontal and vertical alignment of flex items. |
| direction | row | Sets the direction of flex items. |
| wrap | nowrap | Sets the wrapping of flex items. |
| className | - | Pass additional CSS classes for the element. |


### Footer

- **Documentation**: https://webcoreui.dev/docs/footer

**Example:**

```astro
---
import { Footer } from 'webcoreui/astro'

const columns = [{
    items: [
        { name: 'Home', href: '/' },
        { name: 'Docs', href: '/docs' },
        { name: 'Component', href: '/docs/components' }
    ]
}]
---

<Footer columns={columns} />
```

**API:**

```ts
type FooterProps = {
    logo?: {
        url?: string
        alt?: string
        width?: number
        height?: number
        eager?: boolean
        html?: string
    }
    columns?: {
        title?: string
        items: {
            href: string
            name: string
            active?: boolean
            target?: '_self'
            | '_blank'
            | '_parent'
            | '_top'
            | '_unfencedTop'
        }[]
    }[]
    subText?: string
    className?: string
    wrapperClassName?: string
    subTextClassName?: string
}
```


| Prop | Purpose |
| --- | --- |
| logo | Sets a logo inside the footer. |
| logo.url | Sets the URL for the image. |
| logo.alt | Sets an <code>alt</code> tag for the image. |
| logo.width | Sets the width of the image. |
| logo.height | Sets the height of the image. |
| logo.eager | Footer logos are lazy loaded by default. Set <code>eager</code> to <code>true</code> to disable lazy loading. |
| logo.html | Use for directly injecting SVG logos into the markup. |
| columns | Sets a column of links inside the footer. |
| columns.title | Sets a title for the column. |
| columns.items | Sets a group of links inside the column. |
| columns.items.href | Sets a link for the anchor. |
| columns.items.name | Sets the name of the anchor. |
| columns.items.active | Sets the anchor as active. Use for current page. |
| columns.items.target | Sets the target of the anchor. |
| className | Pass additional CSS classes for the footer. |
| wrapperClassName | Pass additional CSS classes for the wrapper inside the footer. |
| subTextClassName | Pass additional CSS classes for sub text container. |


### Grid

- **Documentation**: https://webcoreui.dev/docs/grid

**Example:**

```astro
---
import { Grid } from 'webcoreui/astro'
---

<Grid>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
</Grid>
```

**API:**

```ts
type GridProps = {
    element?: string
    gap?: Responsive<Gap>
    column?: Responsive<Column>
    className?: string
    [key: string]: any
}

type ReactGridProps = {
    Element?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<GridProps, 'element'>

type Gap = 'none'
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'default'
    | 'lg'
    | 'xl'
    | 'xl2'
    | 'xl3'
    | 'xl4'
    | 'xl5'

type Column = (2 | 3) | {
    default?: 2 | 3
    xs?: 2 | 3 | 4
    sm?: 2 | 3 | 4
    md?: 2 | 3 | 4 | 5 | 6
    lg?: 2 | 3 | 4 | 5 | 6 | 7 | 8
}

type Responsive<T> = T | {
    default?: T
    xs?: T
    sm?: T
    md?: T
    lg?: T
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| element | div | Set the HTML tag used for the grid container. |
| gap | 20px | Sets the gap between grid items. |
| column | 1 | Sets the number of grid columns. |
| className | - | Pass additional CSS classes for the element. |


### Group

- **Documentation**: https://webcoreui.dev/docs/group

**Example:**

```astro
---
import { Group, Button } from 'webcoreui/astro'
---

<Group>
    <Button theme="secondary">Profile</Button>
    <Button theme="secondary">Preferences</Button>
    <Button theme="secondary">Settings</Button>
</Group>
```

**API:**

```ts
type GroupProps = {
    withSeparator?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| withSeparator | Displays a border between elements. Defaults to <code>false</code>. |
| className | Pass additional CSS classes for the group. |


### Icon

- **Documentation**: https://webcoreui.dev/docs/icon

**Example:**

```astro
---
import { Icon } from 'webcoreui/astro'
---

<Icon type="github" />
```

**API:**

```ts
type IconProps = {
    type: string
    size?: number
    color?: string
    theme?: 'info' | 'success' | 'warning' | 'alert'
    iconSet?: {
        [key: string]: string
    }
}
```


| Prop | Purpose |
| --- | --- |
| type | Specify the type of the icon. |
| size | Sets the size of the icon. Defaults to 24px. |
| color | Sets the color of the icon. |
| theme | Sets the theme of the icon. |
| iconSet | Pass additional SVG icons to extend the component. |


### Image

- **Documentation**: https://webcoreui.dev/docs/image

**Example:**

```astro
---
import { Image } from 'webcoreui/astro'
---

<Image
    src="/img/astro.png"
    alt="Alternate text"
    width={200}
    height={200}
    lazy={true}
/>
```

**API:**

```ts
type ImageProps = {
    src: string
    alt: string
    width: number | string
    height: number | string
    lazy?: boolean
    ratio?: string
    center?: boolean
    full?: 'width' | 'height' | 'both'
    rounded?:
        | 'top'
        | 'bottom'
        | 'left'
        | 'right'
        | 'diagonal'
        | 'reverse-diagonal'
        | 'none'
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| src | Sets the image source. |
| alt | Sets an alternate text for the image. |
| width | Sets the width of the image. |
| height | Sets the height of the image. |
| lazy | Set to `true` to enable lazy loading for the image. |
| ratio | Sets the aspect ratio of the image. |
| center | Set to `true` to center the image. |
| full | Set to `width`, `height`, or `both` to make the image fill available space. |
| rounded | Sets the border radius of the image. |
| className | Pass additional CSS classes for the image. |


### Input

- **Documentation**: https://webcoreui.dev/docs/input

**Example:**

```astro
---
import { Input } from 'webcoreui/astro'
---

<Input
    type="email"
    placeholder="Please enter your email"
/>
```

**API:**

```ts
type InputProps = {
    label?: string
    subText?: string
    className?: string
    labelClassName?: string
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | 'fill'
}

type SvelteInputProps = {
    onChange?: (event: Event & InputTarget) => void
    onKeyUp?: (event: KeyboardEvent & InputTarget) => void
    onInput?: (event: any) => void
    onClick?: (event: MouseEvent & InputTarget) => void
} & InputProps

type ReactInputProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
} & InputProps
```


| Prop | Purpose |
| --- | --- |
| label | Set a label for the input. |
| subText | Specify additional text below the input. The string can include HTML tags. |
| className | Pass additional CSS classes for the input. |
| labelClassName | Pass additional CSS classes for the label. Only applies if a <code>label</code> is set. |
| theme | Specify the theme of the input. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onChange | Attach on-change event listeners. |
| onKeyUp | Attach on-keyup event listeners. |
| onInput | Attach on-input event listeners. |
| onClick | Attach on-click event listeners. |


### Kbd

- **Documentation**: https://webcoreui.dev/docs/kbd

**Example:**

```astro
---
import { Kbd } from 'webcoreui/astro'
---

<Kbd keys={['cmd', 'shift']}>K</Kbd>
```

**API:**

```ts
type KbdProps = {
    keys?: ('cmd'
        | 'shift'
        | 'ctrl'
        | 'option'
        | 'enter'
        | 'del'
        | 'esc'
        | 'tab'
        | 'capslock'
        | 'up'
        | 'down'
        | 'left'
        | 'right'
        | 'pageup'
        | 'pagedown'
        | 'home'
        | 'end'
        | 'help'
        | 'space')[]
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| keys | Sets keyboard icons. |
| className | Pass additional CSS classes for the element. |


### List

- **Documentation**: https://webcoreui.dev/docs/list

**Example:**

```astro
---
import { List } from 'webcoreui/astro'

const list = [{
    items: [
        { name: 'Create issue', value: 'new' },
        { name: 'Knowledge base', href: '/knowledge-base' },
        { name: 'Switch theme', value: 'theme' }
    ]
}]
---

<List itemGroups={list} />

<script>
    import { listen } from 'webcoreui'

    listen('listOnSelect', event => console.log(event))
</script>
```

**API:**

```ts
type ListEventType = {
    value: string
    name: string
    list: HTMLUListElement
}

type ListProps = {
    showSearchBar?: boolean
    showSearchBarIcon?: boolean
    searchBarPlaceholder?: string
    noResultsLabel?: string
    maxHeight?: string
    id?: string
    className?: string
    wrapperClassName?: string
    secondary?: boolean
    itemGroups: {
        title?: string
        items: {
            name: string
            value?: string
            href?: string
            target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop'
            selected?: boolean
            disabled?: boolean
            icon?: string
            subText?: string
        }[]
    }[]
}

type SvelteListProps = {
    onSelect?: (event: ListEventType) => void
} & ListProps

type ReactListProps = {
    onSelect?: (event: ListEventType) => void
} & ListProps
```


| Prop | Purpose |
| --- | --- |
| showSearchBar | Displays a search bar above the list items. Defaults to <code>false</code>. |
| showSearchBarIcon | Displays a search icon in the search bar. Defaults to <code>false</code>. |
| searchBarPlaceholder | Sets a placeholder for the search bar. |
| noResultsLabel | Sets the label for 0 search results. Defaults to <code>"No results"</code>. |
| maxHeight | Sets a maximum height for the list, making it scrollable. |
| id | Pass an ID for the list. |
| className | Pass additional CSS classes for the list. |
| wrapperClassName | Pass additional CSS classes for the container of the list. (Only applicable to lists with search bars) |
| secondary | Sets a secondary theme for the list. |
| itemGroups.title | Sets a title for the item group. |
| itemGroups.items.name | Sets the name of the list item that is displayed. |
| itemGroups.items.value | Sets a value for the list item. |
| itemGroups.items.href | Sets a URL for the list item to be used as a link. |
| itemGroups.items.target | If the <code>href</code> property is set, use this property to change the behavior of the link. |
| itemGroups.items.selected | Sets the list item as active. |
| itemGroups.items.disabled | Disables the list item. |
| itemGroups.items.icon | Sets an icon for the list item. |
| itemGroups.items.subText | Sets an additional label for the list item. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onSelect | Attach an on-select event listener that is triggered when an item is selected. |


### Masonry

- **Documentation**: https://webcoreui.dev/docs/masonry

**Example:**

```astro
---
import { Masonry } from 'webcoreui/astro'
import { Box } from '@components' // Your custom component

const masonry = [
    { component: Box, props: { height: 100 }, children: 1 },
    { component: Box, props: { height: 50 }, children: 2 },
    { component: Box, props: { height: 70 }, children: 3 },
    { component: Box, props: { height: 90 }, children: 4 },
    { component: Box, props: { height: 140 }, children: 5 },
    { component: Box, props: { height: 120 }, children: 6 }
]
---

<Masonry items={masonry} />
```

**API:**

```ts
type MasonryProps = {
    items: {
        component?: AstroComponent | SvelteComponent | ReactComponent
        props?: {
            [key: string]: any
        }
        children?: {
            component: AstroComponent | SvelteComponent | ReactComponent
            props?: {
                [key: string]: any
            }
            children?: string | number
        } | string | number
        html?: string
    }[]
    element?: string
    gap?: string
    columns?: number
    sequential?: boolean
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| items | [] | Sets the items of the masonry. |
| items.component | - | Sets the item to a component. |
| items.props | - | Sets the props on the component. |
| items.children | - | Sets the children if the item is a component. |
| items.children.component | - | Sets the children to a component. |
| items.children.props | - | Sets props on the child component. |
| items.children.children | - | Sets the children of the child component. |
| items.html | - | Sets the item to a HTML string. |
| element | section | Sets the HTML tag of the masonry. |
| gap | 5px | Sets the gap between masonry items. |
| columns | 3 | Sets the number of columns. |
| sequential | false | Displays the masonry items in sequential order. |
| className | - | Pass additional CSS classes for the masonry. |


### Menu

- **Documentation**: https://webcoreui.dev/docs/menu

**Example:**

```astro
---
import { Menu } from 'webcoreui/astro'

const menu = [
    { name: 'Home', href: '/', active: true },
    { name: 'Docs', href: '/docs/menu', target: '_blank' }
]

const menuLogo = {
    url: '/logo.png',
    width: 100
}
---

<Menu items={menu} logo={menuLogo} />
```

**API:**

```ts
type MenuProps = {
    items?: {
        href: string
        name: string
        target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop'
        active?: boolean
    }[]
    logo?: {
        url?: string
        alt?: string
        width?: number
        height?: number
        html?: string
    }
    centerLogo?: boolean
    className?: string
    wrapperClassName?: string
}
```


| Prop | Purpose |
| --- | --- |
| items | Specifies the menu items. |
| items.target | Specifies where the link should open |
| items.active | Sets the link as active |
| logo | Specifies a logo for the menu. |
| logo.html | Use for directly injecting SVG logos into the markup. |
| centerLogo | Displays the logo in the center of the menu. Defaults to <code>false</code>. |
| className | Pass additional CSS classes for the <code>header</code>. |
| wrapperClassName | Pass additional CSS classes for the wrapper inside the <code>header</code>. |


### Modal

- **Documentation**: https://webcoreui.dev/docs/modal

**Example:**

```astro
---
import { Button, Modal } from 'webcoreui/astro'
---

<Button className="button">Show modal</Button>

<Modal className="modal">
    Modal with text only.
</Modal>

<script>
    import { modal } from 'webcoreui'

    modal({
        trigger: '.button',
        modal: '.modal'
    })
</script>
```

**API:**

```ts
type ModalProps = {
    title?: string
    subTitle?: string
    showCloseIcon?: boolean
    closeOnEsc?: boolean
    closeOnOverlay?: boolean
    transparent?: boolean
    id?: string
    className?: string
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| title | - | Set a title for the modal. |
| subTitle | - | Set a subtitle for the modal. |
| showCloseIcon | true | Shows a close icon in the top-right corner of the modal. |
| closeOnEsc | true | Makes the modal closable by hitting the <code>esc</code> key. |
| closeOnOverlay | true | Makes the modal closable by clicking on the overlay. |
| transparent | false | Sets the modal to transparent, removing background, borders, and padding. |
| id | - | Pass an ID for the modal. |
| className | - | Pass additional CSS classes for the modal. |
| theme | - | Set the theme of your modal. Can be one of <code>info</code>, <code>success</code>, <code>warning</code>, <code>alert</code>. |

| Property | Purpose |
| --- | --- |
| config.trigger | Query selector that targets the trigger element. |
| config.modal | Query selector that targets the <code>Modal</code> component. |
| config.onOpen | Callback function executed after a modal is opened. |
| config.onClose | Callback function executed after a modal is closed. |
| instance.open | Open the modal programmatically. |
| instance.close | Close the modal programmatically. |
| instance.replaceWith | Replace the currently open modal with another modal. |
| instance.remove | Remove the event listeners created for the modal. |


### OTP Input

- **Documentation**: https://webcoreui.dev/docs/otp-input

**Example:**

```astro
---
import { OTPInput } from 'webcoreui/astro'
---

<OTPInput />

<script>
    import { listen } from 'webcoreui'
    
    listen('otpOnChange', event => console.log(event))
</script>
```

**API:**

```ts
type OTPInputProps = {
    name?: string
    disabled?: boolean
    length?: number
    groupLength?: number
    separator?: string
    label?: string
    subText?: string
    className?: string
    [key: string]: any
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| name | otp | Specifies the input's name attribute. |
| disabled | false | Sets the input to disabled. |
| length | 6 | Sets the length of the input field. |
| groupLength | 0 | Sets the length of groups. When set to 0, the input field will be displayed as a single group. |
| separator | • | Sets the separator symbol for the groups. |
| label | - | Sets a label above the input. |
| subText | - | Sets additional text below the input. |
| className | - | Pass additional CSS classes for the component. |


### Pagination

- **Documentation**: https://webcoreui.dev/docs/pagination

**Example:**

```astro
---
import { Pagination } from 'webcoreui/astro'
---

<Pagination />

<script>
    import { listen } from 'webcoreui'

    listen('paginate', event => {
        console.log(event)
    })
</script>
```

**API:**

```ts
type PaginationEventType = {
    page: number
    direction: 'prev' | 'next'
    label?: string | number
}

type PaginationProps = {
    type?: 'arrows' | 'dots'
    showChevrons?: boolean
    showDots?: boolean
    disablePrevious?: boolean
    disableNext?: boolean
    previousLink?: string
    nextLink?: string
    previousPageLabel?: string
    nextPageLabel?: string
    className?: string
    theme?: ButtonProps['theme']
    totalPages?: number
    currentPage?: number
    pages?: {
        label: number | string
        active?: boolean
        link?: string
    }[]
}

type SveltePaginationProps = {
    onChange?: (event: PaginationEventType) => void
} & PaginationProps

type ReactPaginationProps = {
    onChange?: (event: PaginationEventType) => void
} & PaginationProps
```


| Prop | Default | Purpose |
| --- | --- | --- |
| type | null | Sets the type of the <code>Pagination</code> component. Can be one of <code>arrows</code>, <code>dots</code>, or <code>null</code>. |
| showChevrons | false | Show chevron icons for previous and next buttons. |
| showDots | false | Shows dots between previous and next buttons to indicate more pages. |
| disablePrevious | false | Disables the previous button. |
| disableNext | false | Disables the next button. |
| previousLink | - | Sets a link for the previous button. |
| nextLink | - | Sets a link for the next button. |
| previousPageLabel | Previous | Sets the label of the previous button. |
| nextPageLabel | Previous | Sets the label of the next button. |
| theme | outline | Sets the theme of the pagination. Can be one of the button themes. |
| totalPages | - | Sets the total number of pages explicitly. Use for cases where you don't want to use the <code>pages</code> prop, or you need to override default behavior. |
| currentPage | - | Sets the currently active page. Use for cases where you don't want to use the <code>pages</code> prop, or you need to override default behavior. |
| className | - | Pass additional CSS classes for the pagination. |
| pages | - | Sets a arbitrary number of page links between the previous and next buttons. |
| pages.label | - | Sets a label for the page link. |
| pages.active | - | Sets a page link as active. |
| pages.link | - | Sets a link for the page link. Omit if you want to handle navigation in JavaScript. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onChange | Attach on-change event listeners. |


### Popover

- **Documentation**: https://webcoreui.dev/docs/popover

**Example:**

```astro
---
import { Button, Popover } from 'webcoreui/astro'
---

<Button className="popover-trigger">Open Popover</Button>

<Popover className="popover">
    <span>Display additional content...</span>
</Popover>

<script>
    import { popover } from 'webcoreui'

    popover({
        trigger: '.popover-trigger',
        popover: '.popover'
    })
</script>
```

**API:**

```ts
type PopoverPosition = 'top'
    | 'top-start'
    | 'top-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'

type PopoverInstance = {
    close: () => void
    destroy: () => void
    remove: () => void
}

type PopoverCallback = {
    trigger: HTMLElement
    popover: HTMLElement
    position: PopoverPosition | undefined
}

type Popover = {
    trigger: string
    popover: string
    offset?: number
    position?: PopoverPosition
    closeOnBlur?: boolean
    closeOnEsc?: boolean
    onOpen?: (args: PopoverCallback) => unknown
    onClose?: (args: PopoverCallback) => unknown
}

const popover: (config: Popover) => PopoverInstance | undefined
const closePopover = (selector: string) => void
```


| Param | Default | Purpose |
| --- | --- | --- |
| trigger | - | Pass a query selector for the trigger element. |
| popover | - | Pass a query selector for the popover that should be triggered. |
| offset | 10 | Sets the margin of the popover from the trigger element. |
| position | bottom | Sets the position of the popover relative to the trigger element. |
| closeOnBlur | true | Sets whether the popover should close when the user clicks outside of it. |
| closeOnEsc | true | Sets whether the popover should close when the user clicks the <code>Esc</code> key. |
| onOpen | - | Callback function executed after a popover is opened. |
| onClose | - | Callback function executed after a popover is closed. |

| Prop | Purpose |
| --- | --- |
| id | Pass an ID for the popover. |
| className | Pass additional CSS classes for the popover. |
| transparent | Removes styling from the popover, making it possible to use with other components. |


### Progress

- **Documentation**: https://webcoreui.dev/docs/progress

**Example:**

```astro
---
import { Progress } from 'webcoreui/astro'
---

<Progress value={33} />
```

**API:**

```ts
type ProgressProps = {
    value: number
    size?: 'medium' | 'large'
    label?: boolean
    color?: string
    background?: string
    square?: boolean
    striped?: boolean
    stripeLight?: string
    stripeDark?: string
    indeterminate?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| value | Set the value of the pogress from 0 to 100. |
| size | Set the size of the of the progress bar. |
| label | Shows the progress with a label inside the progress bar. Defaults to <code>false</code>. |
| color | Set the color of the progress bar. |
| background | Set the background color of the progress bar. |
| square | Changes the style of the progress bar from rounded to square. Defaults to <code>false</code>. |
| striped | Changes the style of the progress bar to striped. Defaults to <code>false</code>. |
| stripeLight | Set the light color of striped progress bars. |
| stripeDark | Set the dark color of striped progress bars. |
| indeterminate | Sets the progress bar to indeterminate. Use the `value` prop to change the width of the animate value. |
| className | Pass additional CSS classes for the progress bar. |


### Radio

- **Documentation**: https://webcoreui.dev/docs/radio

**Example:**

```astro
---
import { Radio } from 'webcoreui/astro'
---

<Radio
    items={[
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md', selected: true },
        { label: 'Large', value: 'lg' }
    ]}
    name="radio"
/>

<script>
    let value

    Array.from(document.querySelectorAll('[name="radio"]')).forEach(radio => {
        radio.addEventListener('change', event => {
            value = event.target.value
        })
    })
</script>
```

**API:**

```ts
type RadioProps = {
    items: {
        label: string
        value: string
        subText?: string
        selected?: boolean
        disabled?: boolean
    }[]
    name: string
    color?: string
    inline?: boolean
    className?: string
}

type SvelteRadioProps = {
    onChange?: (event: Event & { currentTarget: HTMLInputElement }) => void
} & RadioProps

type ReactRadioProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & RadioProps
```


| Prop | Purpose |
| --- | --- |
| items | Sets items for the radio group. Each item must have a <code>label</code> and <code>value</code> properties. |
| items.subText | Sets additional text under the item's label. |
| items.selected | Sets the item as selected. |
| items.disabled | Sets the item as disabled. |
| name | Sets a name for the radio group that can be referenced. |
| color | Sets the color of the radio buttons. |
| inline | Sets the radio buttons to be displayed next to each other. Defaults to <code>false</code>. |
| className | Pass additional CSS classes for the radio group. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onChange | Attach on-change event listeners. |


### Range Slider

- **Documentation**: https://webcoreui.dev/docs/range-slider

**Example:**

```astro
---
import { RangeSlider } from 'webcoreui/astro'
---

<RangeSlider />

<script>
    import { listen } from 'webcoreui'

    listen('rangeSliderOnChange', event => console.log(event))
</script>
```

**API:**

```ts
type RangeSliderEventType = {
    min: number
    max: number
}

type RangeSliderProps = {
    min?: number
    max?: number
    selectedMin?: number
    selectedMax?: number
    step?: number
    minGap?: number
    disabled?: boolean
    color?: string
    background?: string
    thumb?: string
    label?: string
    subText?: string
    minLabel?: string
    maxLabel?: string
    minIcon?: string
    maxIcon?: string
    interactiveLabels?: boolean
    updateLabels?: boolean
    className?: string
}

type SvelteRangeSliderProps = {
    onChange?: (event: RangeSliderEventType) => void
} & RangeSliderProps

type ReactRangeSliderProps = {
    onChange?: (event: RangeSliderEventType) => void
} & RangeSliderProps
```


| Prop | Purpose |
| --- | --- |
| min | Sets the lowest permitted value for the slider. |
| max | Sets the highest permitted value for the slider. |
| selectedMin | Sets the selected lowest value for the range. |
| selectedMax | Sets the selected highest value for the range. |
| step | Sets the increment between values. Defaults to 1. |
| minGap | Sets the minimum gap between the min and max values. Defaults to 5. |
| disabled | Disables the slider. |
| color | Sets the color of the slider. |
| background | Sets the background color of the slider. |
| thumb | Sets the color of the thumb. |
| label | Sets a label above the range slider. |
| subText | Sets a secondary label below the range slider. |
| minLabel | Sets a minimum label on the left side of the slider. |
| maxLabel | Sets a maximum label on the right side of the slider. |
| minIcon | Pass an icon type or an SVG string to set an icon on the left side of the slider. |
| maxIcon | Pass an icon type or an SVG string to set an icon on the right side of the slider. |
| interactiveLabels | Wrap labels with buttons that can be used to move the selected range around. |
| updateLabels | Updates label values if they are represented as numbers. |
| className | Pass additional CSS classes for the range slider. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onChange | Attach on-change event listeners to the range slider. |


### Rating

- **Documentation**: https://webcoreui.dev/docs/rating

**Example:**

```astro
---
import { Rating } from 'webcoreui/astro'
---

<Rating score={3} />
```

**API:**

```ts
type RatingProps = {
    score: number
    total?: number
    text?: string
    showText?: boolean
    showEmpty?: boolean
    outline?: boolean
    reviewCount?: number
    reviewText?: string
    reviewLink?: string
    reviewTarget?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop'
    color?: string
    emptyColor?: string
    size?: number
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| score | Set the score of the rating. |
| total | Sets the total number of stars. Defaults to 5. |
| text | Sets a text after rating. Defaults to "{0} out of {1}" wherer {0} is the current score, and {1} is the total score. |
| showText | Sets whether to show the <code>text</code> prop or not. Defaults to <code>false</code>. |
| showEmpty | Sets whether to show empty stars. Defaults to <code>true</code>. |
| outline | Sets whether to show empty stars as outlines only. Defaults to <code>true</code>. |
| reviewCount | Sets the number of reviews to be displayed after the stars. |
| reviewText | Sets the review text to be displayed after the stars. Defaults to "{0} reviews", where {0} is the number of reviews set from the <code>reviewCount</code> prop. Only displayed if <code>reviewCount</code> is greater than 0. |
| reviewLink | Sets a link for the review text. |
| reviewTarget | Sets the target of the link set in <code>reviewLink</code>. |
| color | Sets the color of the stars. |
| emptyColor | Sets the color of the empty stars. |
| size | Sets the size of the stars. Defaults to <code>18px</code>. |
| className | Pass additional CSS classes for the rating. |


### Ribbon

- **Documentation**: https://webcoreui.dev/docs/ribbon

**Example:**

```astro
---
import { Card, Ribbon } from 'webcoreui/astro'
---

<!-- The `overflow-hidden` class is not a part of Webcore -->
<Card compact={true} bodyClassName="overflow-hidden">
    <Ribbon>Ribbon</Ribbon>
</Card>
```

**API:**

```ts
type RibbonProps = {
    offset?: number
    type?: 'folded'
    theme?: 'secondary'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| offset | Sets the <code>top</code> and <code>left</code> positioning of the ribbon. |
| type | Sets the type of the ribbon. |
| theme | Sets the theme of the ribbon. |
| className | Pass additional CSS classes for the ribbon. |


### Select

- **Documentation**: https://webcoreui.dev/docs/select

**Example:**

```astro
---
import { Select } from 'webcoreui/astro'
---

<Select
    name="select-id"
    itemGroups={[...]}
    showSearchBar={true}
    showSearchBarIcon={true}
    searchBarPlaceholder="Filter options"
/>

<script>
    import { listen } from 'webcoreui'

    listen('selectOnChange', event => console.log(event))
    listen('selectOnClose', event => console.log(event))
</script>
```

**API:**

```ts
type SelectProps = {
    name: string
    value?: string
    placeholder?: string
    label?: string
    subText?: string
    disabled?: boolean
    updateValue?: boolean
    position?: 'top'
    | 'bottom'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'modal'
} & ListProps

type SvelteSelectProps = {
    onChange?: (event: ListEventType & { select: string }) => void
    onClose?: (event: ModalCallback | PopoverCallback) => void
} & SelectProps

type ReactSelectProps = {
    onChange?: (event: ListEventType & { select: string }) => void
    onClose?: (event: ModalCallback | PopoverCallback) => void
} & SelectProps
```


| Prop | Purpose |
| --- | --- |
| name | Sets a unique name for the select that. |
| value | Sets a default value for the select. |
| placeholder | Sets a placeholder for the select. |
| label | Sets a label for the select that appears above the input. |
| label | Sets a label for the select that appears below the input. |
| disabled | Disables the select. |
| updateValue | Sets whether the value of the select should be updated on interaction. Defaults to <code>true</code>. |
| position | Sets the position of the options, relative to the select. Defaults to <code>bottom</code>. |

| Astro Events | Purpose |
| --- | --- |
| selectOnChange | Triggered when an option is selected. |
| selectOnClose | Triggered when the select is closed without a selection. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onChange | Attach an on-change event listener that is triggered when an option is selected. |
| onClose | Attach a close event listener that is triggered when the select is closed without a selection. |


### Sheet

- **Documentation**: https://webcoreui.dev/docs/sheet

**Example:**

```astro
---
import { Button, Sheet } from 'webcoreui/astro'
---

<Button className="button">Open Sheet</Button>

<Sheet className="sheet">
    Sheet with text only.
</Sheet>

<script>
    import { modal } from 'webcoreui'

    modal({
        trigger: '.button',
        modal: '.sheet'
    })
</script>
```

**API:**

```ts
type SheetProps = {
    title?: string
    subTitle?: string
    showCloseIcon?: boolean
    closeOnEsc?: boolean
    closeOnOverlay?: boolean
    id?: string
    className?: string
    position?: 'left'
        | 'top'
        | 'bottom'
}
```


| Prop | Purpose |
| --- | --- |
| title | Set a title for the sheet. |
| subTitle | Set a subtitle for the sheet. |
| showCloseIcon | Shows a close icon in the top-right corner of the sheet. Defaults to <code>true</code>. |
| closeOnEsc | Makes the sheet closable by hitting the <code>esc</code> key. Defaults to <code>true</code>. |
| closeOnOverlay | Makes the sheet closable by clicking on the overlay. Defaults to <code>true</code>. |
| id | Pass an ID for the sheet. |
| className | Pass additional CSS classes for the sheet. |
| position | Set the position of your sheet. Can be one of <code>top</code>, <code>bottom</code>, <code>left</code>. |

| Property | Purpose |
| --- | --- |
| config.trigger | Query selector that targets the trigger element. |
| config.modal | Query selector that targets the <code>Sheet</code> component. |
| config.onOpen | Callback function executed after a sheet is opened. |
| config.onClose | Callback function executed after a sheet is closed. |
| instance.open | Open the sheet programmatically. |
| instance.close | Close the sheet programmatically. |
| instance.replaceWith | Replace the currently open sheet with another sheet. |
| instance.remove | Remove the event listeners created for the sheet. |


### Sidebar

- **Documentation**: https://webcoreui.dev/docs/sidebar

**Example:**

```astro
---
import { Sidebar } from 'webcoreui/astro'

const groups = [{
    items: [
        { name: 'Home', href: '#' },
        { name: 'Docs', href: '#' },
        { name: 'Component', href: '#' }
    ]
}]
---

<Sidebar groups={groups} />
```

**API:**

```ts
type SidebarProps = {
    groups: {
        title?: string
        items: {
            name: string
            href: string
            target?: '_self'
                | '_blank'
                | '_parent'
                | '_top'
                | '_unfencedTop'
            active?: boolean
            icon?: string
            badge?: string
            badgeTheme?: 'secondary'
                | 'outline'
                | 'flat'
                | 'info'
                | 'success'
                | 'warning'
                | 'alert'
        }[]
    }[]
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| groups | Sets the item groups for the sidebar. |
| groups.title | Sets the title of the item group. |
| groups.items.name | Sets the name of the anchor. |
| groups.items.href | Sets the link of the anchor. |
| groups.items.target | Sets the target of the anchor. |
| groups.items.active | Sets the anchor as active. Use for the current page. |
| groups.items.icon | Sets an icon in front of the anchor's name. |
| groups.items.badge | Sets additional text after the anchor. |
| groups.items.badgeTheme | Sets the theme of the additional text. |
| className | Pass additional CSS classes for the sidebar. |


### Skeleton

- **Documentation**: https://webcoreui.dev/docs/skeleton

**Example:**

```astro
---
import { Skeleton } from 'webcoreui/astro'
---

<Skeleton />
```

**API:**

```ts
type SkeletonProps = {
    animate?: 'wave' | 'pulse' | false
    type?: 'rounded' | 'rectangular' | 'circle'
    width?: number
    height?: number
    color?: string
    waveColor?: string
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| animate | wave | Sets the animation of the skeleton. Set to <code>false</code> to disable animation. |
| type | rounded | Sets the type of the skeleton. |
| width | 100% | Sets the width of the skeleton. |
| height | 100% | Sets the height of the skeleton. |
| color | var(--w-color-primary-60) | Sets the background color of the skeleton. |
| waveColor | var(--w-color-primary-50) | Sets the wave color of the skeleton when animation is set to <code>wave</code>. |
| className | - | Pass additional CSS classes for the component. |


### Slider

- **Documentation**: https://webcoreui.dev/docs/slider

**Example:**

```astro
---
import { Slider } from 'webcoreui/astro'
---

<Slider
    min={0}
    max={100}
    value={50}
    className="slider"
/>

<script>
    document.querySelector('.slider').addEventListener('change', e => {
        console.log(e.target.value)
    })
</script>
```

**API:**

```ts
type SliderProps = {
    min: number
    max: number
    value?: number
    step?: number
    disabled?: boolean
    color?: string
    background?: string
    thumb?: string
    id?: string
    className?: string
}

type SvelteSliderProps = {
    onChange?: (e: any) => any
} & SliderProps

type ReactSliderProps = {
    onChange?: (e: any) => any
} & SliderProps
```


| Prop | Purpose |
| --- | --- |
| min | Sets the lowest permitted value for the slider. |
| max | Sets the highest permitted value for the slider. |
| value | Sets the current value for the slider. If the value is not set, it'll take the value of the <code>min</code> prop. |
| step | Sets the increment between values. |
| disabled | Disables the slider. |
| color | Sets the color of the slider. |
| background | Sets the background color of the slider. |
| thumb | Sets the color of the thumb. |
| id | Pass an ID for the slider. |
| className | Pass additional CSS classes for the slider. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onChange | Attach on-change event listeners to the slider. |


### Speed Dial

- **Documentation**: https://webcoreui.dev/docs/speed-dial

**Example:**

```astro
---
import { SpeedDial } from 'webcoreui/astro'

// Or import your own SVG icons
import { github } from 'webcoreui/icons'

const items = [
    {
        icon: github,
        href: '/github'
    },
    { ... },
    { ... }
]
---

<SpeedDial items={items} />
```

**API:**

```ts
type SpeedDialProps = {
    items: {
        icon: string
        href: string
        tooltip?: string
        target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
    }[]
    position?: 'top-left' | 'top-right' | 'bottom-left'
    horizontal?: boolean
    circular?: boolean
    theme?: ButtonProps['theme']
    icon?: string
    triggerOnClick?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items.icon | Sets an icon for the navigation item. Can be an SVG string or an icon type for Astro components. |
| item.hef | Sets the link for the navigation item. |
| item.tooltip | Sets a tooltip for the navigation item. |
| item.target | Sets the target of the link. |
| position | Sets the position of the speed dial. |
| horizontal | Sets the layout of the items to horizontal. |
| circular | Sets the style of the buttons to circular. |
| theme | Sets the color theme of the buttons. |
| icon | Sets the icon of the toggle button. |
| triggerOnClick | Set to <code>true</code> to only trigger the speed dial on click. |
| className | Pass additional CSS classes for the component. |


### Spinner

- **Documentation**: https://webcoreui.dev/docs/spinner

**Example:**

```astro
---
import { Spinner } from 'webcoreui/astro'
---

<Spinner />
```

**API:**

```ts
type SpinnerProps = {
    color?: string
    width?: number
    speed?: number
    size?: number
    dashArray?: number
}
```


| Prop | Purpose |
| --- | --- |
| color | Sets the color of the spinner. |
| width | Sets the width of the stroke of the spinner. |
| speed | Sets the speed of the spinner. |
| size | Sets the size of the spinner. |
| dashArray | Sets the <code>stroke-dasharray</code> attribute of the SVG element. |


### Spoiler

- **Documentation**: https://webcoreui.dev/docs/spoiler

**Example:**

```astro
---
import { Spoiler } from 'webcoreui/astro'
---

<Spoiler>This text is only visible after click.</Spoiler>
```

**API:**

```ts
type SpoilerProps = {
    color?: string
    animated?: boolean
    block?: boolean
    tooltip?: string
    tooltipPosition?: 'bottom'
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| color | var(--w-color-primary) | Sets the color of the spoiler. |
| animated | true | Sets a fade animation. |
| block | false | Sets the style of the spoiler to a <code>block</code> element. |
| tooltip | - | Sets a tooltip for the spoiler. |
| tooltipPosition | - | Sets the position of the tooltip. |


### Stepper

- **Documentation**: https://webcoreui.dev/docs/stepper

**Example:**

```astro
---
import { Stepper } from 'webcoreui/astro'

const stepper = [
    { title: 'Setup' },
    { title: 'Configure' },
    { title: 'Finish' }
]
---

<Stepper items={stepper} />
```

**API:**

```ts
type StepperProps = {
    items: {
        icon?: string
        title?: string
        subTitle?: string
        completed?: boolean
        active?: boolean
    }[]
    color?: string
    completedColor?: string
    activeColor?: string
    borderless?: boolean
    vertical?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items | Sets the steps for the stepper. |
| items.icon | Sets an icon for the stepper. Can be an icon type for Astro components, or an SVG string for Svelte/React. |
| items.title | Sets a title for the step. |
| items.subTitle | Sets a subtitle for the step. |
| items.completed | Sets the step as completed. |
| items.active | Sets the step as active. |
| color | Sets the color of steps. |
| completedColor | Sets the color of completed steps. |
| activeColor | Sets the color of active steps. |
| borderless | Removes the borders from the steps. |
| vertical | Sets the stepper to a vertical layout. |
| className | Pass additional CSS classes for the stepper. |


### Switch

- **Documentation**: https://webcoreui.dev/docs/switch

**Example:**

```astro
---
import { Switch } from 'webcoreui/astro'
---

<Switch className="toggle" />

<script>
    let toggled = false

    document.querySelector('.toggle input').addEventListener('change', e => {
        toggled = e.target.checked
    })
</script>
```

**API:**

```ts
type SwitchProps = {
    label?: string
    reverse?: boolean
    toggled?: boolean
    disabled?: boolean
    small?: boolean
    square?: boolean
    onColor?: string
    offColor?: string
    className?: string
}

type SvelteSwitchProps = {
    onChange?: ChangeEventHandler<HTMLInputElement>
    onClick?: MouseEventHandler<HTMLInputElement>
} & SwitchProps

type ReactSwitchProps = {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onClick?: React.MouseEventHandler<HTMLInputElement>
} & SwitchProps
```


| Prop | Purpose |
| --- | --- |
| label | Sets a label for the switch. No label is added by default. |
| reverse | Sets the position of the label to be on the other side of the switch. |
| toggled | Sets the default state of the switch to toggled. Defaults to <code>false</code>. |
| disabled | Disables the switch. |
| offColor | Sets the background color of the switch in the off state. |
| onColor | Sets the background color of the switch in the on state. |
| small | Sets the style of the switch to a smaller version. |
| square | Sets the style of the switch with a small border radius. |
| className | Pass additional CSS classes for the switch. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onChange | Attach on-change event listeners. |
| onClick | Attach on-click event listeners. |


### Table

- **Documentation**: https://webcoreui.dev/docs/table

**Example:**

```astro
---
import { Table } from 'webcoreui/astro'

const table = [
    ['1', 'John Doe'],
    ['2', 'Jane Smith'],
    ['3', 'Emily Davis'],
    ['4', 'Frank Williams']
]
---

<Table data={table} />
```

**API:**

```ts
type TableProps = {
    headings?: string[]
    footer?: string[]
    data: string[][]
    hover?: boolean
    striped?: 'column' | 'row'
    offsetStripe?: boolean
    compact?: boolean
    maxHeight?: number
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| headings | Sets heading for the table. Must be an array of strings. |
| footer | Sets footer for the table. Most be an array of strings. |
| data | Sets the table cells. Must be a multidimensional array of strings. |
| hover | Adds a hover effect for rows. Defaults to <code>false</code>. |
| striped | Adds stripes for the rows/columns. Its value can be one of <code>column</code>, or <code>row</code>. |
| offsetStripe | Offsets the starting position of stripes if the <code>striped</code> prop is set. |
| compact | Sets the padding of the cells to a smaller size. |
| maxHeight | Sets a maximum height for the table, making it scrollable with a fixed header. |
| className | Pass additional CSS classes for the table. |
            

### Tabs

- **Documentation**: https://webcoreui.dev/docs/tabs

**Example:**

```astro
---
import { Tabs } from 'webcoreui/astro'

const items = [{
    label: 'Introduction',
    value: 'intro',
    active: true
}, {
    label: 'Setup',
    value: 'setup'
}, {
    label: 'Conclusion',
    value: 'conclusion'
}]
---

<Tabs items={items}>
    <div data-tab="intro" data-active="true">...</div>
    <div data-tab="setup">...</div>
    <div data-tab="conclusion">...</div>
</Tabs>
```

**API:**

```ts
type TabsProps = {
    items: {
        label: string
        value: string
        active?: boolean
        disabled?: boolean
    }[]
    theme?: 'boxed' | 'outline'
    vertical?: boolean
    even?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items.label | Sets the label of the tab. |
| items.value | Sets the value of the tab which references the content. |
| items.active | Sets the tab as the default active tab. Defaults to <code>false</code>. |
| items.disabled | Disables the tab, making it inactive. Defaults to <code>false</code>. |
| theme | Sets the theme of the <code>Tabs</code> component. Can be one of <code>boxed</code>, <code>outline</code> |
| vertical | Displayes the tabs in a vertical layout. Defaults to <code>false</code>. |
| even | Evenly distributes tabs to fill the available space. Defaults to <code>false</code>. |
| className | Pass additional CSS classes for the tabs. |


### Textarea

- **Documentation**: https://webcoreui.dev/docs/textarea

**Example:**

```astro
---
import { Textarea } from 'webcoreui/astro'
---

<Textarea
    placeholder="Leave us a message"
    className="message"
/>
<span class="word-count">0 words</span>

<script>
    const textarea = document.querySelector('.message')
    const wordCountElement = document.querySelector('.word-count')

    let wordCount = 0

    textarea.addEventListener('keyup', e => {
        wordCount = e.target.value
            ? e.target.value.trim().split(/\s+/).length
            : 0

        wordCountElement.innerText = `${wordCount} words`
    })
</script>
```

**API:**

```ts
type TextareaProps = {
    label?: string
    placeholder?: string
    subText?: string
    value?: string
    disabled?: boolean
    className?: string
}

type SvelteTextareaProps = {
    onInput?: (event: Event & TextareaTarget) => void
    onChange?: (event: Event & TextareaTarget) => void
    onKeyUp?: (event: KeyboardEvent & TextareaTarget) => void
} & TextareaProps

type ReactTextareaProps = {
    onInput?: (event: React.InputEvent<HTMLTextAreaElement>) => void
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
} & TextareaProps
```


| Prop | Purpose |
| --- | --- |
| label | Set a label for the textarea. |
| placeholder | Set a placeholder for the textarea. |
| subText | Specify additional text below the textarea. The string can include HTML tags. |
| value | Set a default value for the textarea. |
| disabled | Disable the textarea. |
| className | Pass additional CSS classes for the textarea. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onInput | Attach on-input event listeners. |
| onChange | Attach on-change event listeners. |
| onKeyUp | Attach on-keyup event listeners. |


### Theme Switcher

- **Documentation**: https://webcoreui.dev/docs/theme-switcher

**Example:**

```astro
---
import { ThemeSwitcher } from 'webcoreui/astro'

const themes = {
    '#252525': 'theme-dark',
    '#DDD': 'theme-light',
    '#415A77': 'theme-blue',
    '#FCBA28': 'theme-yellow'
}
---

<ThemeSwitcher themes={themes} />
```

**API:**

```ts
type ThemeSwitcherProps = {
    themes: {
        [key: string]: string
    }
    toggle?: boolean
    size?: number
    className?: string
}

type SvelteThemeSwitcherProps = {
    primaryIcon?: Snippet
    secondaryIcon?: Snippet
} & ThemeSwitcherProps

type ReactThemeSwitcherProps = {
    primaryIcon?: React.ReactNode
    secondaryIcon?: React.ReactNode
} & ThemeSwitcherProps
```


| Prop | Purpose |
| --- | --- |
| themes | Define your themes that have been set up using the <code>Setup</code> mixin. |
| toggle | Turns the switcher into a one button toggle. Use if you only have two themes. |
| size | Sets the size of the switcher. Defaults to <code>20px</code>. |
| className | Pass additional CSS classes for the theme switcher. |


### Timeline

- **Documentation**: https://webcoreui.dev/docs/timeline

**Example:**

```astro
---
import { Timeline, TimelineItem } from 'webcoreui/astro'
---

<Timeline>
    <TimelineItem>Getting started</TimelineItem>
    <TimelineItem>Setup</TimelineItem>
    <TimelineItem>Conclusion</TimelineItem>
</Timeline>
```

**API:**

```ts
type TimelineProps = {
    theme?: 'fill' | 'stroke' | 'stroke fill' | 'icons'
    alternate?: boolean
    centered?: boolean
    color?: string
    textColor?: string
    counter?: string
    className?: string
}

type TimelineItemProps = {
    title?: string
    titleTag?: string
    icon?: string
    className?: string
}
```


| Timeline Prop | Purpose |
| --- | --- |
| theme | Sets the theme of the timeline. Can be one of <code>fill</code>, <code>stroke</code>, <code>stroke fill</code>. |
| alternate | Creates an alternating timeline. Defaults to <code>false</code>. |
| centered | Changes the alignment of timeline items for alternate timelines. Defaults to <code>false</code>. |
| color | Sets the background color of the timeline items. |
| textColor | Sets the text color of the counter inside the timeline items. |
| counter | Sets the counter style of the timeline items. |
| className | Pass additional CSS classes for the timeline. |

| TimelineItem Prop | Purpose |
| --- | --- |
| title | Sets a title for the timeline item. |
| titleTag | Sets the HTML tag used for the title of the timeline item. Defaults to <code>span</code>. |
| className | Pass additional CSS classes for the timeline item. |


### Toast

- **Documentation**: https://webcoreui.dev/docs/toast

**Example:**

```astro
---
import { Button, Toast } from 'webcoreui/astro'
---

<Button className="button">Show toast</Button>

<Toast className="toast">
    Toast with only text.
</Toast>

<script>
    import { toast } from 'webcoreui'

    document.querySelector('.button').addEventListener('click', () => {
        toast('.toast')
    })
</script>
```

**API:**

```ts
type ToastProps = {
    position?: 'bottom-left'
        | 'top-left'
        | 'top-right'
        | 'bottom-full'
        | 'top-full'
    element?: string
    title?: string
    titleTag?: string
    className?: string
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
}

type ReactToastProps = {
    icon?: string
} & ToastProps
```


| Function | Purpose |
| --- | --- |
| setDefaultTimeout | Sets the default timeout. Defaults to 5 seconds. Expects time in milliseconds. |
| toast | Shows <code>Toast</code> component. Expects a query selector, or a toast config. |
| hideToast | Hides active toast. Expects a query selector. |

| Timeline Prop | Purpose |
| --- | --- |
| position | Sets the position of the toast. Defaults to <code>bottom-right</code>. |
| element | Sets the HTML element of the toast. Defaults to <code>section</code>. |
| title | Sets a title for the toast. |
| titleTag | Sets the HTML element for the title of the toast. Defaults to <code>strong</code>. |
| className | Pass additional CSS classes for the toast. |
| theme | Sets the theme of the toast. Can be one of <code>info</code>, <code>success</code>, <code>warning</code>, <code>alert</code>. |

| React prop | Purpose |
| --- | --- |
| icon | Pass your <code>Icon</code> component to use a custom icon with the toast. |


### Tooltip

- **Documentation**: https://webcoreui.dev/docs/tooltip

**Example:**

```astro
<p data-tooltip="Tooltip content">Hover me</p>
```

**API:**

```ts
type TooltipProps = {
    'data-tooltip': string
    'data-position': 'left' | 'right' | 'bottom'
}
```


| Prop | Purpose |
| --- | --- |
| data-tooltip | Sets the tooltip content. |
| data-position | Sets the position of the tooltip. Defaults to <code>top</code>. |




## Examples

### Sign Up Form

```astro
---
import {
    Button,
    Card,
    Input
} from 'webcoreui/astro'

import type { SignUpProps } from './signup'

interface Props extends SignUpProps {
    primaryButtonSelector?: string
    secondaryButtonSelector?: string
}

const {
    label = 'Sign up',
    emailLabel = 'Email',
    emailPlaceholder = 'Enter your email',
    emailSubText = '',
    passwordLabel = 'Password',
    passwordPlaceholder = 'Enter your password',
    passwordSubText = 'Generate a unique password <a href="#">here</a>',
    primaryButtonTheme = 'success',
    primaryButtonLabel = 'Create an account',
    secondaryButtonTheme = 'secondary',
    secondaryButtonLabel = 'Sign in',
    primaryButtonSelector,
    secondaryButtonSelector
} = Astro.props
---

<Card title={label}>
    <form class="flex column sign-up-form">
        <Input
            label={emailLabel}
            placeholder={emailPlaceholder}
            subText={emailSubText}
            autocomplete="on"
        />
        <Input
            type="password"
            label={passwordLabel}
            placeholder={passwordPlaceholder}
            subText={passwordSubText}
            autocomplete="on"
        />
        <div class="flex xs wrap">
            {primaryButtonLabel && (
                <Button theme={primaryButtonTheme} className={primaryButtonSelector}>
                    {primaryButtonLabel}
                </Button>
            )}
            {secondaryButtonLabel && (
                <Button theme={secondaryButtonTheme} className={secondaryButtonSelector}>
                    {secondaryButtonLabel}
                </Button>
            )}
        </div>
    </form>
</Card>

<script>
    import { on } from '@utils/DOMUtils'

    // You can add additional logic here like:
    // - Form validation
    // - API submission
    // - Success/error handling
    const addEventListener = () => {
        on('.sign-up-form', 'submit', (event: Event) => event.preventDefault())
    }

    on(document, 'astro:after-swap', addEventListener)
    addEventListener()
</script>
```

### Timeline

```astro
---
import {
    Card,
    Timeline,
    TimelineItem
} from 'webcoreui/astro'
---

<Card>
    <Timeline theme="fill">
        <TimelineItem title="2020">
            <strong>Founded</strong>
            <br />
            <span class="muted">
                Launched our mission to transform online shopping with a handpicked selection of goods and a commitment to unparalleled customer care.
            </span>
        </TimelineItem>
        <TimelineItem title="2021">
            <strong>Expanded Offerings</strong>
            <br />
            <span class="muted">
                Introduced over 500 unique, locally-sourced products, enriching our collection and supporting small businesses.
            </span>
        </TimelineItem>
        <TimelineItem title="2022">
            <strong>⭐ Achieved Milestone</strong>
            <br />
            <span class="muted">
                Proudly served 100,000 happy customers, marked by launching same-day delivery in major cities and exclusive membership perks.
            </span>
        </TimelineItem>
    </Timeline>
</Card>
```

### Progress Bars

```astro
---
import {
    Card,
    Progress
} from 'webcoreui/astro'

import styles from './seo-performance.module.scss'

const progressClass = [
    'flex justify-between muted',
    styles['progress-label']
]
---

<Card title="SEO Overview">
    <span>Keep track of the SEO performance of your posts.</span>

    <div class:list={['flex column md', styles.my]}>
        <div>
            <div class:list={progressClass}>
                <span>Underperforming</span>
                <span>50%</span>
            </div>
            <Progress value={50} color="var(--w-color-alert)" />
        </div>
        <div>
            <div class:list={progressClass}>
                <span>OK</span>
                <span>30%</span>
            </div>
            <Progress value={30} color="var(--w-color-warning)" />
        </div>
        <div>
            <div class:list={progressClass}>
                <span>SEO-friendly</span>
                <span>20%</span>
            </div>
            <Progress value={20} color="var(--w-color-success)" />
        </div>
    </div>
</Card>
```

### Modal

```astro
---
import {
    Alert,
    Button,
    Icon,
    Modal
} from 'webcoreui/astro'

import styles from './deployments.module.scss'
---

<Alert title="Deployments">
    <Icon type="github" slot="icon" />
    <span>Connect your project to GitHub to start running automatic deployments.</span>
    <br />
    <Button className={styles.connect} id="connect">Connect</Button>
</Alert>

<Modal title="Are you sure?" subTitle="Confirm update" className="modal">
    <p>Automatic deployments will be enabled for your project.</p>
    <Button className="close-modal">Confirm</Button>
    <Button theme="secondary" className="close-modal">Cancel</Button>
</Modal>

<script>
    import { closeModal, modal, on } from 'webcoreui'

    const addModal = () => {
        const closeButton = document.querySelectorAll('.close-modal')

        modal({
            trigger: '#connect',
            modal: '.modal'
        })

        Array.from(closeButton).forEach(button => {
            button?.addEventListener('click', () => closeModal('.modal'))
        })
    }

    on(document, 'astro:after-swap', addModal)
    addModal()
</script>
```

### Seller Information

```astro
---
import {
    Avatar,
    Card,
    Rating,
    Spinner
} from 'webcoreui/astro'

import styles from './seller.module.scss'

const avatarGroup = [
    '/img/avatar0.png',
    '/img/avatar1.png',
    '/img/avatar2.png',
    '/img/avatar3.png',
    '/img/avatar4.png'
]
---

<Card>
    <div class="flex sm items-center">
        <Avatar
            img="/img/avatar0.png"
            size={50}
        />
        <div class="flex column xs">
            <span>Marcus</span>
            <span class="muted" data-tooltip="In Art & Collectibles">
                Top rated seller
            </span>
        </div>
    </div>
    <hr />
    <Rating
        score={4.8}
        showText={true}
        reviewCount={123}
        reviewLink="#"
        reviewTarget="_blank"
    />
    <div class:list={['flex center sm', styles.loading]}>
        <Spinner />
        <span class="muted">
            Loading reviews...
        </span>
    </div>
    <hr />
    <div class={styles.sellers}>
        <strong>Explore other sellers</strong>
        <a href="#">
            <Avatar
                size={[30, 40, 50, 40, 30]}
                img={avatarGroup}
                alt={avatarGroup}
            />
        </a>
    </div>
</Card>
```

### Tabs with User Data

```astro
---
import {
    Avatar,
    Badge,
    Card,
    Table,
    Tabs
} from 'webcoreui/astro'

import styles from './profile.module.scss'

const tabItems = [{
    label: 'Profile',
    value: 'profile',
    active: true
}, {
    label: 'Contact',
    value: 'contact'
}]

const tasks = [
    { theme: null, label: 'IP', ticket: 'W4567 - Home redesign' },
    { theme: 'alert', label: 'P1', ticket: 'W2345 - Payment gateway warnings' },
    { theme: 'warning', label: 'P3', ticket: 'W6789 - Investigate user auth issues' },
    { theme: 'info', label: 'TODO', ticket: 'W1357 - Mobile redesign' }
]
---

<Card>
    <Tabs items={tabItems} theme="boxed" even={true}>
        <div data-tab="profile" data-active="true">
            <div class="flex sm items-center">
                <Avatar
                    img="/img/avatar2.png"
                    size={50}
                />
                <div class="flex column xs">
                    <span>Emily</span>
                    <span class="muted">QA Engineer</span>
                </div>
            </div>

            <strong class={styles.tasks}>Tasks</strong>
            <hr />
            <div class="flex column xs">
                {tasks.map(task => (
                    <div>
                        <Badge theme={task.theme as any}>
                            {task.label}
                        </Badge>
                        <a href="#" class:list={['muted', styles.task]}>
                            {task.ticket}
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <div data-tab="contact">
            <Table
                data={[
                    ['Phone', '+1 234 5678'],
                    ['Email', '<a href="#">emily@example.com</a>'],
                    ['Slack', '@emily09'],
                    ['Address', 'Mars, Pennsylvania']
                ]}
            />
        </div>
    </Tabs>
</Card>
```

## Blocks Reference

### Author

- **Documentation**: https://webcoreui.dev/blocks/author

**Example:**

```astro
<Author
    img={{
        src: '/img/author.png',
        alt: 'Jake',
        size: 50
    }}
    name="Jake Brown"
    role="Astro developer"
    description="Description about the author..."
    socials={{
        links: [
            'https://linkedin.com',
            'https://x.com',
            'https://github.com'
        ]
    }}
/>
```

**API:**

```ts
type AuthorProps = {
    name: string
    role: string
    description: string
    socials?: SocialsProps
    img: {
        src: string
    } & Omit<AvatarProps, 'img'>
} & CardProps
```


| Prop | Purpose |
| --- | --- |
| name | Sets the name of the author. |
| role | Sets the role of the author. |
| description | Sets a description about the author. |
| socials | Sets a list of social links where the author is present. |
| img.src | Sets an avatar URL for the author. |


### Avatar with Rating

- **Documentation**: https://webcoreui.dev/blocks/avatar-with-rating

**Example:**

```astro
---
const avatarGroup = [
    '/img/avatar1.png',
    '/img/avatar2.png',
    '/img/avatar3.png',
    '/img/avatar4.png',
    '/img/avatar5.png'
]
---

<AvatarWithRating
    avatar={{ img: avatarGroup }}
    rating={{ score: 5, color: 'var(--w-color-warning)' }}
    text="<b>123 developers</b> already enrolled"
/>
```

**API:**

```ts
type AvatarWithRatingProps = {
    avatar: AvatarProps
    rating: RatingProps
    text?: string
    reverse?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| avatar | Sets the avatar group. |
| rating | Sets rating next to the avatar group. |
| text | Display additional text under the rating. Supports HTML. Use <code>b</code> tags to highlight text. |
| reverse | Switches the order of the <code>rating</code> and <code>text</code> props. |
| className | Pass additional CSS classes to the component. |


### Blog Card

- **Documentation**: https://webcoreui.dev/blocks/blog-card

**Example:**

```astro
<BlogCard
    href="/link-to-your-article"
    target="_blank"
    img={{
        src: '/img/featured.png',
        alt: 'Blog featured img alt',
        width: 200,
        height: 150
    }}
    title="Blog Card Preview"
    text="..."
    secondary={true}
/>
```

**API:**

```ts
type BlogCardProps = {
    href: string
    target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
    img: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    title?: string
    text?: string
    secondary?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| href | Sets the link for the card. |
| target | Sets the target of the link. |
| img | Sets the featured image. To lazy load the image, set the <code>img.lazy</code> property to <code>true</code>. |
| title | Sets the title of the card. |
| text | Sets the text of the card. |
| secondary | Sets a secondary layout for the card, where the image and text are aligned side by side. |
| className | Pass additional CSS classes for your <code>BlogCard</code> component. |


### Device Mockup

- **Documentation**: https://webcoreui.dev/blocks/device-mockup

**Example:**

```astro
---
import { AspectRatio, Icon } from 'webcoreui/astro'
---

<DeviceMockup className="mobile-mockup">
    <div class="grid sm">
        <AspectRatio ratio="1/1.5">
            <img
                src="/img/mockup.png"
                width="300"
                height="300"
            />
        </AspectRatio>
        <Icon type="home" />
        <span class="muted">Mobile Mockup</span>
    </div>
</DeviceMockup>

<style lang="scss" is:global>
    @use 'webcoreui/config' as *;

    .mobile-mockup {
        @include spacing(auto-none);
        @include typography(center);
        @include background(primary-50);

        svg {
            @include spacing(none-auto);
        }

        max-width: 300px;
    }
</style>
```

**API:**

```ts
type DeviceMockupProps = {
    type?: 'desktop'
    url?: string
    showButtons?: boolean
    closeButtonColor?: string
    maximizeButtonColor?: string
    minimizeButtonColor?: string
    className?: string
}
```


| Prop | Applicable type | Purpose |
| --- | --- | --- |
| type | - | Set to "desktop" to change the style of your mockup. |
| url | desktop | Sets a url or an arbitrary text for the address bar. |
| showButtons | desktop | Shows action buttons on the top-left corner of the mockup. Defaults to <code>true</code>. |
| closeButtonColor | desktop | Sets the color of the close button |
| maximizeButtonColor | desktop | Sets the color of the maximize button |
| minimizeButtonColor | desktop | Sets the color of the minimize button |
| className | - | Pass additional CSS classes for your <code>DeviceMockup</code> component. |


### Empty

- **Documentation**: https://webcoreui.dev/blocks/empty

**Example:**

```astro
---
// Your import path may differ
import fileIcon from '@icons/file.svg?raw'
---

<Empty
    icon={fileIcon}
    title="No documents found"
    text="You haven't created any documents yet."
    buttons={[{ text: 'Create New'  }]}
/>
```

**API:**

```ts
type EmptyProps = {
    icon?: string
    iconWithBackground?: boolean
    title: string
    text: string
    buttons?: ({
        text: string
        icon?: string
    } & ButtonProps)[]
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| icon | Sets the icon for the block. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> in Astro. |
| iconWithBackground | Adds a solid background to the icon. |
| title | Sets the title of the block. |
| text | Sets a text for the block under the title. Supports HTML markup. |
| buttons | Sets an array of CTA buttons. |
| className | Pass additional CSS classes for your <code>Empty</code> component. |


### Error Page

- **Documentation**: https://webcoreui.dev/blocks/error-page

**Example:**

```astro
<ErrorPage
    type={404}
    title="Page Not Found"
    subTitle="Sorry, we cannot found the page you were looking for."
    buttons={[
        { text: 'Back to Home', icon: 'home', href: '#' }
    ]}
/>
```

**API:**

```ts
type ErrorPageProps = {
    type: number
    typeColor?: string
    title: string
    subTitle?: string
    buttons?: ({
        text: string
        icon?: string
    } & ButtonProps)[]
}
```


| Prop | Purpose |
| --- | --- |
| type | Sets the HTTP status code for the error page. |
| typeColor | Sets a text color for the HTTP status code. |
| title | Sets a title for the error page. |
| subTitle | Sets a subtitle for the error page. |
| buttons | Sets buttons under the titles. Pass an array of buttons using the props of the <a href="/docs/button"><code>Button</code></a> component. |


### Expandable Table

- **Documentation**: https://webcoreui.dev/blocks/expandable-table

**Example:**

```astro
---
const data = [
    ['#1', 'John Doe'],
    ['#2', 'Jane Smith'],
    ['#3', 'Bob Johnson'],
    ['#4', 'Emily Davis'],
    ['#5', 'William Brown'],
    ['#6', 'Frank Miller']
]
---

<ExpandableTable
    data={data}
/>
```

**API:**

```ts
type ExpandableTableProps = {
    numberOfVisibleRows?: number
    expandButtonLabel?: string
    collapseButtonLabel?: string
    expandButton?: ButtonProps
} & Omit<TableProps, 'footer'>
```


| Prop | Default | Purpose |
| --- | --- | --- |
| numberOfVisibleRows | 5 | Sets the number of visible rows for the collapsed state. |
| expandButtonLabel | Expand | Sets the label for the expand button. |
| collapseButtonLabel | Collapse | Sets the label for the collapse button. |
| expandButton | null | Sets the properties of the expand and collapse buttons. |


### FAQ

- **Documentation**: https://webcoreui.dev/blocks/faq

**Example:**

```astro
---
const accordionItems = [{
    title: 'Do you offer support?',
    content: 'We provide 30 days of support.'
}, {
    title: 'Can I request changes?',
    content: 'Yes!'
}, {
    title: 'Are there any refunds?',
    content: 'Hopefully.'
}]
---

<FAQ items={accordionItems}>
    <span class="muted">Looking for a specific page? Find them below:</span>

    <Tiles items={[
        { icon: 'github', label: 'GitHub', href: '' },
        { icon: 'file', label: 'Documentation', href: '' }
    ]} columns={1} />
</FAQ>
```

**API:**

```ts
type FAQProps = {
    element?: string
    title?: string
    titleTag?: string
    items: {
        title: string
        content: string
        reverse?: boolean
    }[]
    icon?: 'plus' | 'none'
    reverse?: boolean
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| element | section | Sets the HTML tag of the FAQ section. |
| title | Frequently Asked Questions | Sets the title of the FAQ section. |
| titleTag | h2 | Sets the HTML tag of the FAQ section's header. |
| items | - | Sets the FAQ items. |
| items.title | - | Sets the heading for the FAQ item. |
| items.content | - | Sets the content for the FAQ item. |
| items.reverse | - | Changes the order of the FAQ heading and icon. |
| icon | - | Changes the style of the icon on the FAQ items. |
| reverse | false | Changes the order of all FAQ headings and icons. |
| className | - | Pass additional CSS classes for your <code>FAQ</code> component. |


### Form

- **Documentation**: https://webcoreui.dev/blocks/form

**Example:**

```astro
---
const fields = [
    { type: 'text', label: 'Name', name: 'name' },
    { type: 'email', label: 'Email', name: 'email' },
    { type: 'checkbox', label: 'I accept the <a>terms and conditions</a>', name: 'terms' },
    { type: 'button', label: 'Subscribe' }
]
---

<Form fields={fields} id="form" />

<script>
    import { toast } from 'webcoreui'
    import { useForm } from '@blocks/Form/useForm'

    const form = useForm('#form')

    if (form) {
        form.preventDefault()
            .update('name', 'John Doe')
            .update('email', 'john@doe.com')
            .onChange(formValues => {
                console.log('form values changed to:', formValues)
            })
            .onSubmit(form => {
                toast({
                    element: '#toast',
                    content: `Submitting form with values: ${JSON.stringify(form)}`,
                    timeout: 3000
                })

                console.log('Submitting form with values:', form)
            })
            .onError(form => {
                toast({
                    element: '#toast',
                    content: `Error submitting form. Invalid fields: ${JSON.stringify(form)}`,
                    timeout: 3000
                })

                console.log('Error submitting form. Invalid fields:', form)
            })
    }
</script>
```

**API:**

```ts
type FormField =
    | ({ type: 'group', fields: FormField[] })
    | ({ type: 'button', label: string } & ButtonProps)
    | ({ type: 'checkbox' } & CheckboxProps)
    | ({ type: 'radio' } & RadioProps)
    | ({ type: 'select' } & SelectProps)
    | ({ type: 'slider' } & SliderProps)
    | ({ type: 'switch' } & SwitchProps)
    | ({ type: 'textarea' } & TextareaProps)
    | ({ type: NonNullable<InputProps['type']> } & Omit<InputProps, 'type'>)

type FormProps = {
    fields: FormField[]
    gap?: Gap
    className?: string
    id?: string
    name?: string
    action?: string
    method?: 'post' | 'get' | 'dialog'
    noValidate?: boolean
    target?:
        | '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
    enctype?:
        | 'application/x-www-form-urlencoded'
        | 'multipart/form-data'
        | 'text/plain'
}
```


| Prop | Purpose |
| --- | --- |
| fields | Sets the input fields for the form. |
| gap | Sets the gap between the input fields. |
| className | Sets a class for the form. |
| id | Sets an id for the form. |
| name | Sets the <code>name</code> attribute on the form. |
| action | Sets the <code>action</code> attribute on the form. |
| method | Sets the <code>method</code> attribute on the form. |
| noValidate | Sets the form to <code>noValidate</code>. |
| target | Sets the <code>target</code> attribute on the form. |
| enctype | Sets the <code>enctype</code> attribute on the form. |

| Property/Method | Purpose |
| --- | --- |
| validationRules | Returns the validation object set by <code>setValidations</code>. |
| isPreventDefault | Returns a boolean whether the <code>preventDefault</code> is set for the form. |
| onErrorCallback | Returns the callback function specified by <code>onError</code>. |
| preventDefault() | Calling the method sets <code>preventDefault</code> to <code>true</code>. |
| getInput() | Pass the name of the input to return the DOM element for the input field. |
| getInputValue() | Pass the name of the input to return its value. |
| getInputValues() | Returns the values of all input fields from the form. |
| update() | Sets a value for the specified input field. |
| setValidations() | Sets a list of input validations that prevents the form from submission with invalid fields. |
| isValidForm() | Returns a boolean indicating whether the form is valid based on the set validation rules. |
| useSmartFill() | Enable smart form fill when pasting blocks of text, such as from spreadsheets or documents. |
| onChange() | Attach event listener to the form that triggers when any of its inputs change. |
| onSubmit() | Attach event listener to the form that triggers when the form is submitted. |
| onError() | Attach event listener to the form when an error occurs due to validation. |


### Grid with Icons

- **Documentation**: https://webcoreui.dev/blocks/grid-with-icons

**Example:**

```astro
---
const items = [{
    icon: 'components',
    title: 'Grid with Icons',
    text: 'Use the <code>GridWithIcons</code> block...'
}, { ... }, { ... }]
---

<GridWithIcons items={items} />
```

**API:**

```ts
type GridWithIconsProps = {
    items: {
        icon?: string
        title?: string
        text: string
    }[]
    columns?: 1 | 2 | 3 | 4
    alignment?: 'center' | 'right'
    iconWithBackground?: boolean
    secondary?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items | Sets the items for the grid. |
| items.icon | Sets an optional icon for the grid item. |
| items.title | Sets an optional title for the grid item. |
| items.text | Sets the text for the grid item. Supports HTML tags. |
| columns | Sets the number of columns for the grid. |
| alignment | Sets the alignment of the grid items. |
| iconWithBackground | Adds a solid background to the icons. |
| secondary | Displays icons next to titles. |
| className | Pass additional CSS classes for your component. |


### Hero

- **Documentation**: https://webcoreui.dev/blocks/hero

**Example:**

```astro
<Hero
    heading="Hero section title"
    subHeading="Subtitle for hero section"
    buttons={[
        { text: 'Get Started ->', theme: 'success' },
        { text: 'Contact', theme: 'secondary', icon: 'info' }
    ]}
    badge={{
        rounded: true,
        theme: 'outline',
        text: 'New releases'
    }}
    avatarWithRating={{
        avatar: { img: avatarGroup },
        rating: { score: 5, color: 'var(--w-color-success)' },
        text: '<b>123 students</b> already enrolled'
    }}
    image={{
        src: '/img/banner.png',
        alt: 'Banner',
        width: 500,
        height: 250
    }}
/>
```

**API:**

```ts
type HeroProps = {
    badge?: {
        text: string
    } & BadgeProps | null
    heading: string
    subHeading?: string
    buttons?: ({
        text: string
        icon?: string
    } & ButtonProps)[]
    avatarWithRating?: AvatarWithRatingProps
    image?: {
        src: string
        alt: string
        width: number
        height: number
    }
    reverse?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| badge | Sets a badge above the heading. Pass an object using the props of the <a href="/docs/badge"><code>Badge</code></a> component. |
| heading | Sets the <code>h1</code> title for the hero section. |
| subHeading | Sets the <code>h2</code> title for the hero section. |
| buttons | Sets CTAs under the titles. Pass an array of buttons using the props of the <a href="/docs/button"><code>Button</code></a> component. |
| avatarWithRating | Sets avatars with a rating under the CTA buttons. |
| image | Sets a featured image next to your titles and CTA. |
| reverse | Switches the layout of the hero component. |
| className | Pass additional CSS classes for the <code>Hero</code> component. |


### List with Icons

- **Documentation**: https://webcoreui.dev/blocks/icon-list

**Example:**

```astro
<IconList items={[
    { icon: 'circle-check', text: 'Advantages: ...', color: 'var(--w-color-success)' },
    { icon: 'circle-close', text: 'Disadvantages: ...', color: 'var(--w-color-alert)' }
]} />
```

**API:**

```ts
type IconListProps = {
    columns?: number
    color?: string
    items: {
        icon: string
        text: string
        color?: string
    }[]
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| columns | Sets the number of columns for the list. |
| color | Sets the color of the icons. |
| items.icon | Sets an icon for the list item. |
| items.text | Sets the text for the list item. Supports HTML content. |
| items.color | Sets the color of the icon for the list item. Overwrites the <code>color</code> prop. |
| className | Pass additional CSS classes for your element. |


### Layout

- **Documentation**: https://webcoreui.dev/blocks/layout

**Example:**

```astro
---
import Layout from '@blocks/Layout.astro'

const seo = { ... }
const menu = { ... }
const footer = { ... }
---

<Layout seo={seo} menu={menu} footer={footer}>
    Your main content
</Layout>
```

**API:**

```ts
type LayoutProps = {
    seo: SEOProps
    lang?: string
    menu?: MenuProps
    footer?: FooterProps
    className?: string
    containerClassName?: string
    [key: string]: any
}

type SvelteLayoutProps = {
    insideMenu?: Snippet
    atf?: Snippet
    leftSidebar?: Snippet
    rightSidebar?: Snippet
    aboveFooter?: Snippet
    insideFooter?: Snippet
    scripts?: Snippet
    children?: Snippet
} & LayoutProps

type ReactLayoutProps = {
    insideMenu?: React.ReactNode
    atf?: React.ReactNode
    leftSidebar?: React.ReactNode
    rightSidebar?: React.ReactNode
    aboveFooter?: React.ReactNode
    insideFooter?: React.ReactNode
    scripts?: React.ReactNode
    children?: React.ReactNode
    bodyClassName?: string
} & LayoutProps
```


| Prop | Purpose |
| --- | --- |
| seo | Sets SEO-related tags in the <code>head</code> for the page. |
| lang | Sets the <code>lang</code> attribute on the document. Defaults to <code>en</code>. |
| menu | Sets the main navigation menu for the page. |
| footer | Sets a footer for the page. |
| className | Pass additional CSS classes for the wrapper of your main content. |
| containerClassName | Pass additional CSS classes for the <code>main</code> tag. |

| Svelte & React Prop | Purpose |
| --- | --- |
| insideMenu | Sets additional HTML content inside the main navigation. |
| atf | Sets additional HTML content below the main navigation and above the main content. |
| leftSidebar | Adds a sidebar on the left-side next to the main content. |
| rightSidebar | Adds a sidebar on the right-side next to the main content. |
| aboveFooter | Sets additional content above the footer and below the main content. |
| scripts | Sets scripts just before the closing of the <code>body</code> tag. |
| children | Sets the main content. |
| bodyClassName | For React, you can pass class names to your body using this prop. For Astro and Svelte, simply use the <code>class</code> attribute. |


### Maintenance

- **Documentation**: https://webcoreui.dev/blocks/maintenance

**Example:**

```astro
---
import Maintenance from '@blocks/Maintenance.astro'
---

<Maintenance />
```

**API:**

```ts
type MaintenanceProps = {
    img?: {
        src: string
        alt: string
        width: number
        height: number
    }
    animated?: boolean
    title?: string
    subTitle?: string
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| img | Specifies an image for the element. |
| img.src | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| animated | If no image is provided, an animated gear icon will be rendered. Set this to <code>false</code> to disable animation. |
| title | Sets the main title. |
| subTitle | Sets a secondary title. |
| className | Pass additional CSS classes for your element. |


### SEO

- **Documentation**: https://webcoreui.dev/blocks/seo

**Example:**

```astro
<html>
    <head>
        <SEO
            title="Page title"
            url="http://webcoreui.dev/blocks/seo"
            description="Short description about your page"
            faviconUrl="http://webcoreui.dev/favicon.ico"
            prefetchGTAG={true}
            prefetchGA={true}
            noIndex={false}
            meta={[{
                name: 'category',
                content: 'Component'
            }]}
            structuredContents={[{
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                'url': 'https://webcoreui.dev',
                'name': 'Webcore'
            }]}
        />
    </head>
    <body>...</body>
</html>
```

**API:**

```ts
type SEOProps = {
    title: string
    url: string
    faviconUrl: string
    description: string
    canonical?: string
    prefetchGTAG?: boolean
    prefetchGA?: boolean
    noIndex?: boolean
    meta?: {
        name: string
        content: string
    }[]
    links?: {
        crossOrigin?: 'anonymous' | 'use-credentials'
        fetchPriority?: 'high' | 'low' | 'auto'
        href?: string
        hrefLang?: string
        integrity?: string
        media?: string
        imageSrcSet?: string
        imageSizes?: string
        sizes?: string
        type?: string
        charSet?: string
        as?: 'fetch'
            | 'audio'
            | 'audioworklet'
            | 'document'
            | 'embed'
            | 'font'
            | 'frame'
            | 'iframe'
            | 'image'
            | 'json'
            | 'manifest'
            | 'object'
            | 'paintworklet'
            | 'report'
            | 'script'
            | 'serviceworker'
            | 'sharedworker'
            | 'style'
            | 'track'
            | 'video'
            | 'webidentity'
            | 'worker'
            | 'xslt'
        referrerPolicy?: 'no-referrer'
            | 'no-referrer-when-downgrade'
            | 'origin'
            | 'origin-when-cross-origin'
            | 'same-origin'
            | 'strict-origin'
            | 'strict-origin-when-cross-origin'
            | 'unsafe-url'
    }[]
    structuredContents?: {
        [key: string]: any
    }[]
}
```


| Prop | Purpose |
| --- | --- |
| title | Sets the <code>title</code>, <code>og:title</code>, and <code>twitter:title</code> tags. |
| url | Sets the <code>og:url</code> and canonical URL. |
| faviconUrl | Sets the link for the favicon. |
| description | Sets meta description as well as <code>og</code> and <code>twitter</code> description tags. |
| canonical | Sets the canonical URL. Overrides the <code>url</code> prop. |
| prefetchGTAG | Prefetches the Google Tag Manager script. |
| prefetchGA | Prefetches the Google Analytics script. |
| noIndex | Sets the <code>robots</code> meta tag to <code>noindex, nofollow</code> when set to <code>true</code>. |
| meta | Sets additional <code>meta</code> tags for the page. |
| links | Sets <code>link</code> tags for additional behavior, such as font preloading or <code>hrefLangs</code>. |
| structuredContents | Sets structured content for the page. |


### Setting Card

- **Documentation**: https://webcoreui.dev/blocks/setting-card

**Example:**

```astro
<div class="flex column sm">
    <SettingCard
        title="Security emails"
        subTitle="Get security alerts for logins."
    >
        <Switch toggled={true} />
    </SettingCard>
    <SettingCard
        title="Marketing emails"
        subTitle="Get email about updates."
    >
        <Switch />
    </SettingCard>
</div>
```

**API:**

```ts
type SettingCardProps = {
   title: string
   subTitle?: string
}
```


| Prop | Purpose |
| --- | --- |
| title | Sets the title for the setting card. |
| subTitle | Sets an optional secondary title for the setting card. |


### Sign Up

- **Documentation**: https://webcoreui.dev/blocks/sign-up

**Example:**

```astro
<SignUp />

<!-- Using SignUp with default props -->
<SignUp
    label="Sign up"
    emailLabel="Email"
    emailPlaceholder="Enter your email"
    emailSubText=""
    passwordLabel="Password"
    passwordPlaceholder="Enter your password"
    passwordSubText="Generate a unique password <a href='#'>here</a>"
    primaryButtonTheme="success"
    primaryButtonLabel="Create an account"
    secondaryButtonTheme="secondary"
    secondaryButtonLabel="Sign in"
    primaryButtonSelector=""
    secondaryButtonSelector=""
/>
```

**API:**

```ts
type SignUpProps = {
    label?: string
    emailLabel?: string
    emailPlaceholder?: string
    emailSubText?: string
    passwordLabel?: string
    passwordPlaceholder?: string
    passwordSubText?: string
    primaryButtonTheme?: ButtonProps['theme']
    primaryButtonLabel?: string
    secondaryButtonTheme?: ButtonProps['theme']
    secondaryButtonLabel?: string
}

type SvelteSignUpProps = {
    primaryOnClick?: MouseEventHandler<HTMLButtonElement>
    secondaryOnClick?: MouseEventHandler<HTMLButtonElement>
} & SignUpProps

type ReactSignUpProps = {
    primaryOnClick?: React.MouseEventHandler<HTMLButtonElement>
    secondaryOnClick?: React.MouseEventHandler<HTMLButtonElement>
} & SignUpProps
```


| Prop | Purpose |
| --- | --- |
| label | Sets a label for the sign-up form. |
| emailLabel | Sets a label for the email input. |
| emailPlaceholder | Sets a placeholder for the email input. |
| emailSubText | Sets additional text under the email input. |
| passwordLabel | Sets a label for the password input. |
| passwordPlaceholder | Sets a placeholder for the password input. |
| passwordSubText | Sets additional text under the password input. |
| primaryButtonTheme | Sets the theme for the primary button. |
| primaryButtonLabel | Sets the label for the primary button. |
| secondaryButtonTheme | Sets the theme for the secondary button. |
| secondaryButtonLabel | Sets the label for the secondary button. |

| Svelte & React Prop | Purpose |
| --- | --- |
| primaryOnClick | Attach on-click event listeners for the primary button. |
| secondaryOnClick | Attach on-click event listeners for the secondary button. |


### Social Proof

- **Documentation**: https://webcoreui.dev/blocks/social-proof

**Example:**

```astro
<SocialProof items={[
    { text: '1M+', subText: 'monthly readers' },
    { text: '500+', subText: 'tutorials' },
    { text: '1000+', subText: 'happy customers' }
]} />
```

**API:**

```ts
type SocialProofProps = {
    items: {
        text: string
        subText?: string
    }[]
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items.text | Sets the main text for your social proof item. |
| items.subText | Sets additional text under your main text. Supports HTML tags. |
| className | Pass CSS classes for your <code>SocialProof</code> component. |


### Socials

- **Documentation**: https://webcoreui.dev/blocks/socials

**Example:**

```astro
<Socials links={[
    'https://twitter.com',
    'https://facebook.com',
    'https://youtube.com'
]} />
```

**API:**

```ts
type SocialsProps = {
    links: string[]
    className?: string
} & Omit<IconProps, 'type' | 'iconSet'>
```


| Prop | Purpose |
| --- | --- |
| links | Sets the links for social platforms. |
| className | Pass additional CSS classes for your <code>Socials</code> component. |


### Team

- **Documentation**: https://webcoreui.dev/blocks/team

**Example:**

```astro
---
import { Card } from 'webcoreui/astro'

import Team from '@blocks/Team.astro'

const members = [
    {
        img: 'img/alice.png',
        name: 'Alice Johnson',
        role: 'Frontend Developer',
        description: 'Alice is our creative frontend developer.',
        socials: [
            'https://linkedin.com/',
            'https://github.com/'
        ]
    },
    { ... }
]
---

<Card title="Preview" secondary={true}>
    <Team members={members} />
</Card>
```

**API:**

```ts
type TeamProps = {
    members: {
        img?: string
        name: string
        role?: string
        description?: string
        socials?: string[]
    }[]
    avatar?: Pick<AvatarProps, 'size' | 'lazy' | 'borderColor'>
    columns?: 1 | 2 | 3 | 4,
    className?: string
} & Pick<CardProps, 'compact' | 'secondary'>
```


| Prop | Purpose |
| --- | --- |
| members.img | Sets an avatar for the team member. |
| members.name | Sets the name of the team member. |
| members.role | Sets the role of the team member. |
| members.description | Sets a short description about the team member. Supports HTML tags. |
| members.socials | Sets a list of social links for the team member. |
| avatar | Sets the size, loading, or border of images. |
| columns | Sets the number of columns. Defaults to 3. |
| className | Pass additional CSS classes for your section. |


### Tiles

- **Documentation**: https://webcoreui.dev/blocks/tiles

**Example:**

```astro
<Tiles
    items={[
        { icon: astro, label: 'Astro', href: '#' },
        { icon: svelte, label: 'Svelte', href: '#' },
        { icon: react, label: 'React', href: '#' },
        { icon: terminal, label: 'CLI', href: '#' }
    ]}
/>
```

**API:**

```ts
type TilesProps = {
    columns?: 0 | 1 | 2 | 3 | 4
    items: {
        label: string
        subText?: string
        href?: string
        target?: '_self'
            | '_blank'
            | '_parent'
            | '_top'
            | '_unfencedTop'
        icon?: string
        badge?: {
            text: string
            icon?: string
        } & BadgeProps
    }[]
}
```


| Prop | Purpose |
| --- | --- |
| columns | Sets the number of columns for the tiles. |
| items | Sets the tile items. |
| items.label | Sets the label for the tile. |
| items.subText | Sets the subtext for the tile under the label. |
| items.href | Sets the link for the tile. |
| items.target | Sets the target of the link. |
| items.icon | Sets an icon for the tile. |
| items.badge.text | Adds a badge on top of the tile. |
| items.badge.icon | Sets an optional icon for the badge. |


### User

- **Documentation**: https://webcoreui.dev/blocks/user

**Example:**

```astro
<User
    avatar="avatar.png"
    name="Marcus"
    role="Top rated seller"
    roleTooltip="In Art & Collectibles"
    rating={4.8}
    showText={true}
/>
```

**API:**

```ts
type UserProps = {
    avatar: string
    avatarSize?: number
    name: string
    role?: string
    roleTooltip?: string
    rating?: number
} & Omit<RatingProps, 'score'>
```


| Prop | Purpose |
| --- | --- |
| avatar | Sets the avatar for the user. |
| avatarSize | Sets the size of the avatar. |
| name | Sets the name of the user. |
| role | Sets a role for the user, displayed under their name. |
| roleTooltip | Sets a tooltip for the role. |
| rating | Sets the rating of the user. |




## Application Blocks Reference

### Dropdown Navigation

- **Documentation**: https://webcoreui.dev/blocks/dropdown-navigation

**Example:**

```astro
---
const dropdownNavigationMenuItems = [
    { name: 'Home', url: '/' },
    {
        name: 'Posts',
        children: [
            { name: 'Getting Started', url: '#' },
            { name: 'Installation', url: '#' },
            { name: 'Configuration', url: '#' }
        ]
    },
    { ... }
]
---

<DropdownNavigation
    logo={{ html: '<svg ... />' }}
    items={dropdownNavigationMenuItems}
/>
```

**API:**

```ts
type DropdownNavigationProps = {
    items: {
        name: string
        url?: string
        children?: {
            name: string
            url: string
        }[]
    }[]
    logo?: {
        url?: string
        alt?: string
        width?: number
        height?: number
        html?: string
    }
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items | Sets the navigation links. |
| items.name | Sets the name of the navigation link. |
| items.url | Sets a url for the navigation link. |
| items.children | Sets the submenu items of the navigation element, turning it into a dropdown menu. |
| items.children.name | Sets the name of the submenu item. |
| items.children.url | Sets the url of the submenu item. |
| logo | Specifies a logo for the menu. |
| logo.url | Sets the path for the logo. |
| logo.alt | Sets an alternate text for the logo. |
| logo.width | Sets the width of the logo. |
| logo.height | Sets the height of the logo. |
| logo.html | Use for directly injecting SVG logos into the markup. |
| className | Pass additional CSS classes for the dropdown menu. |


### Mega Menu

- **Documentation**: https://webcoreui.dev/blocks/mega-menu

**Example:**

```astro
---
// Your import path to your icons might differ
// Icons are provided with the component
import rocketIcon from '@icons/rocket.svg?raw'
import terminalIcon from '@icons/terminal.svg?raw'
import fileIcon from '@icons/file.svg?raw'

const megaMenuItems = [
    { name: 'Home', href: '/' },
    {
        name: 'Resources',
        children: [
            {
                title: 'Astro',
                items: [
                    {
                        name: 'Getting Started',
                        href: '#',
                        icon: rocketIcon,
                        subText: 'Launch your first Astro project'
                    },
                    {
                        name: 'Installation',
                        href: '#',
                        icon: terminalIcon,
                        subText: 'Step-by-step instructions'
                    },
                    {
                        name: 'Configuration',
                        href: '#',
                        icon: fileIcon,
                        subText: 'Learn how to configure Astro'
                    }
                ]
            },
            { ... }
        ]
    },
    {
        name: 'Learning Paths',
        children: [ ... ]
    },
    {
        name: 'Extras',
        children: [ ... ]
    }
]
---

<MegaMenu items={menuItems} />
```

**API:**

```ts
export type NavigationChildren = {
    title?: string
    items: {
        name: string
        href: string
        icon?: string
        subText?: string
    }[]
}

export type MegaMenuProps = {
    items: {
        name: string
        href?: string
        children?: NavigationChildren[]
    }[]
    logo?: {
        url?: string
        alt?: string
        width?: number
        height?: number
        html?: string
    }
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items.name | Sets the name of the navigation link. |
| items.url | Sets a url for the navigation link. |
| items.children | Sets the submenu items of the navigation element, turning it into a mega menu. |
| logo | Specifies a logo for the menu. |
| logo.url | Sets the path for the logo. |
| logo.alt | Sets an alternate text for the logo. |
| logo.width | Sets the width of the logo. |
| logo.height | Sets the height of the logo. |
| logo.html | Use for directly injecting SVG logos into the markup. |
| className | Pass additional CSS classes for the menu. |

| NavigationChildren Prop | Purpose |
| --- | --- |
| title | Sets an optional title for the column. |
| items.name | Sets the name of mega menu item. |
| items.href | Sets the link for the mega menu item. |
| items.icon | Sets an optional SVG icon for the mega menu item. |
| items.subText | Sets an optional secondary text under the item's name. |


### Onboard

- **Documentation**: https://webcoreui.dev/blocks/onboard

**Example:**

```astro
{"1. Create the UI elements to control the onboarding steps.":5-15} {"2. Create the steps.":21-26} {"3. Instantiate the onboard function with optional callbacks.":31-45} {"4. A modal is created with prev/next buttons.":47-54} {"5. Call onboarding.start when the .start button is clicked.":56-57} {"6. Call onboarding.prev when the .prev button is clicked.":59-70} {"7. Call onboarding.next when the .next button is clicked.":72-88}
---
import { Button, Sheet } from 'webcoreui/astro'
---


<Button className="start">Start onboarding</Button>
<Sheet
    className="onboard-modal flex justify-center sm"
    position="bottom"
    closeOnEsc={false}
    closeOnOverlay={false}
>
    <Button disabled={true} className="prev">Previous</Button>
    <Button className="next">Next</Button>
</Sheet>

<script>
    import { closeModal, get, modal, on } from 'webcoreui'
    import { onboard } from '@utils'


    const steps = [{
        element: 'h1',
        tooltip: 'You can attach tooltips with query selectors.',
        tooltipPosition: 'bottom-right'
    }, { ... }, { ... }]

    const prev = get('.prev') as HTMLButtonElement
    const next = get('.next') as HTMLButtonElement


    const onboarding = onboard(steps, {
        onEnd() {
            closeModal('.onboard-modal')

            prev.disabled = true
            next.innerText = 'Next'
        },
        onPrev(step) {
            console.log('prev to', step)
        },
        onNext(step) {
            console.log('next to', step)
        }
    })


    modal({
        trigger: '.start',
        modal: '.onboard-modal',
        onClose() {
            onboarding.end()
        }
    })


    on('.start', 'click', () => onboarding.start())


    on(prev, 'click', () => {
        onboarding.prev()

        if (!onboarding.getStep()) {
            prev.disabled = true
        }

        next.innerText = onboarding.getStep() === steps.length - 1
            ? 'Finish'
            : 'Next'
    })


    on(next, 'click', () => {
        if (onboarding.getStep() === steps.length - 1) {
            closeModal('.onboard-modal')

            prev.disabled = true
            next.innerText = 'Next'
        }

        next.innerText = onboarding.getStep() === steps.length - 2
            ? 'Finish'
            : 'Next'

        onboarding.next()

        prev.disabled = onboarding.getStep() === 0
    })
</script>
```

**API:**

```ts
type Steps = {
    element: string
    tooltip: string
    tooltipPosition?: 'top-left'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-right'
}[]

type OnboardConfig = {
    boxPadding?: number
    textPadding?: number
    endOnOverlayClick?: boolean
    endOnEsc?: boolean
    onStart?: () => void
    onEnd?: (step: Steps[0]) => void
    onPrev?: (step: Steps[0]) => void
    onNext?: (step: Steps[0]) => void
}

const onboard: (data: Steps, config?: OnboardConfig) => {
    start: () => void
    end: () => void
    next: () => void
    prev: () => void
    getStep: () => number
}
```


| Steps | Default | Purpose |
| --- | --- | --- |
| data | [] | Sets the steps for the onboarding process. |
| data.element | - | Sets the element for the step. |
| data.tooltip | - | Sets the tooltip for the step. |
| data.tooltipPosition | - | Sets the tooltip position for the step. |

| OnboardConfig | Default | Purpose |
| --- | --- | --- |
| boxPadding | 0 | Sets the padding of the highlight for the step. |
| textPadding | 5 | Sets the padding of the tooltip from the box. |
| endOnOverlayClick | true | Sets whether the onboarding should be terminated when the overlay is clicked. |
| endOnEsc | true | Sets whether the onboarding should be terminated when the esc key is pressed. |
| onStart | - | Adds a callback function that is executed when the onboarding starts. |
| onEnd | - | Adds a callback function that is executed when the onboarding ends. |
| onPrev | - | Adds a callback function that is executed when the <code>prev</code> function is called. |
| onNext | - | Adds a callback function that is executed when the <code>next</code> function is called. |

| onboard function | Purpose |
| --- | --- |
| start | Stars the onboarding. |
| end | Stops the onboarding. |
| next | Proceeds to the next onboarding step. |
| prev | Regress to the previous onboarding step. |
| getStep | Returns the index of the current step. |


### Slide-in Navigation

- **Documentation**: https://webcoreui.dev/blocks/slide-in-navigation

**Example:**

```astro
---
const items = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
]
---

<SlideInNavigation items={items} delay={0.07} />
```

**API:**

```ts
type SlideInNavigationProps = {
    items: {
        name: string
        href?: string
        target?: '_self'
            | '_blank'
            | '_parent'
            | '_top'
            | '_unfencedTop'
    }[]
    reverse?: boolean
    delay?: number
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items | Sets the navigation items of the menu. |
| items.name | Sets the name of the navigation item. |
| items.href | Sets the link of the navigation item. |
| items.target | Sets the target of the navigation link. |
| reverse | Changes the direction of the menu from left to right. |
| delay | Adds animation delay to each subsequent navigation items. |
| className | Pass additional CSS classes for the <code>SlideInNavigation</code> component. |


### Stats

- **Documentation**: https://webcoreui.dev/blocks/stats

**Example:**

```astro
---
// Your import path to your icons might differ
import shoppingBag from '@icons/shopping-bag.svg?raw'
---

<Stats
    label="Sales"
    amount={1234}
    percentage={12}
    symbol="$"
    button={{ text: 'Details', href: '/details' }}
    icon={shoppingBag}
/>
```

**API:**

```ts
type StatsProps = {
    label: string
    amount: number
    percentage?: number
    symbol?: string
    color?: string
    icon?: string
    button?: ({
        text?: string
        icon?: string
    } & ButtonProps)
    card?: CardProps
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| label | Sets a label for the card. |
| amount | Sets an amount displayed under the label. |
| percentage | Sets a percentage badge displayed next to the amount. |
| symbol | Sets a symbol, displayed in front of the amount. |
| color | Sets the text color of the <code>amount</code> prop. |
| icon | Sets an icon in the top-left corner of the card. |
| button.text | Sets a button in the top-right corner of the card. |
| button.icon | Sets an icon for the button. |
| card | Pass a <code>CardProps</code> object to customize the card. |
| className | Pass additional CSS classes for the <code>Stats</code> component. |


### Tree View

- **Documentation**: https://webcoreui.dev/blocks/tree-view

**Example:**

```astro
---
const data = [
    {
        label: 'Docs',
        children: [
            { label: 'Getting Started' },
            {
                label: 'Components',
                children: [ ... ]
            }
        ]
    },
    {
        label: 'Themes',
        children: [
            { label: 'Light', icon: 'sun', color: 'var(--w-color-warning)' },
            { label: 'Dark', icon: 'moon', color: 'var(--w-color-info)' }
        ]
    }
]
---

<TreeView data={data} />
```

**API:**

```ts
type TreeNode = {
    label: string
    icon?: string
    color?: string
    collapsed?: boolean
    value?: string
    href?: string
    target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
    children?: TreeNode[]
}

type TreeViewProps = {
    data: TreeNode[]
    type?: 'ol' | 'ul'
    collapsible?: boolean
    showIcons?: boolean
    showCollapseIcons?: boolean
    animated?: boolean
    className?: string
}

type SvelteTreeViewProps = {
    onSelect?: (value: string) => void
} & TreeViewProps

type ReactTreeViewProps = {
    onSelect?: (value: string) => void
} & TreeViewProps
```


| Prop | Default | Purpose |
| --- | --- | --- |
| data | [] | Pass an array of <code>TreeNode</code> objects to create the tree. |
| type | ul | Sets the type of element to be used for the component. |
| collapsible | true | Set to <code>false</code> to make the component non-collapsible. |
| showIcons | true | Set to <code>false</code> to hide folder and file icons. |
| showCollapseIcons | true | Set to <code>false</code> to hide chevron icons. |
| animated | true | Set to <code>false</code> to disable animation. |
| className | - | Pass additional CSS classes for the component. |

| Node Prop | Purpose |
| --- | --- |
| label | Sets a label for the node. |
| icon | Sets an SVG icon for the node. |
| color | Sets the color of the node. |
| collapsed | Set to <code>true</code> to make the node collapsed by default. |
| value | Sets a value for the node that is retrieved on click with event listeners. |
| href | Sets a link for the node. |
| target | Sets a target for the link. |
| children | Pass additional <code>TreeNode</code> items for nesting. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onSelect | Add select event listeners to nodes with a <code>value</code>. |


### User Profile Card

- **Documentation**: https://webcoreui.dev/blocks/user-profile-card

**Example:**

```astro
<UserProfileCard
    avatar={{
        img: '/img/avatar0.png',
        size: 50
    }}
    name="Frank Miller"
    handle="@frank.miller"
    tags={['Astro', 'Svelte', 'React']}
    description="Contributor for <b>@Webcore</b>."
    editProfile={{
        show: true,
        href: '#',
        label: 'Edit Profile ->'
    }}
    follow={{
        followingCount: 7,
        followersCount: 1290
    }}
/>
```

**API:**

```ts
type UserProfileCardProps = {
    avatar?: AvatarProps
    editProfile?: {
        show?: boolean
        label?: string
        href: string
        target?:
            | '_self'
            | '_blank'
            | '_parent'
            | '_top'
            | '_unfencedTop'
    }
    banner?: {
        src?: string
        alt?: string
        width?: number
        height?: number
        lazy?: boolean
        fromColor?: string
        toColor?: string
    }
    name: string
    handle?: string
    tags?: string[]
    description?: string
    follow?: {
        showFollowing?: boolean
        showFollowers?: boolean
        followingCount?: number
        followersCount?: number
        followingText?: string
        followersText?: string
    }
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| avatar | user.svg | Sets an avatar for the card. |
| editProfile | - | Specifies a CTA at the top-right corner. |
| editProfile.show | false | Set to <code>true</code> to make the "Edit Profile" button visible. |
| editProfile.label | "Edit Profile" | Sets a label for the button. |
| editProfile.href | - | Sets a link for the "Edit Profile" button. |
| editProfile.target | - | Sets the target of the link on the "Edit Profile" button. |
| banner | - | Sets a banner image above the avatar. |
| banner.src | - | Sets the path for the banner. |
| banner.alt | - | Sets an alternate text for the banner. |
| banner.width | - | Sets the width of the banner. |
| banner.height | - | Sets the height of the banner. |
| banner.lazy | - | Set to <code>true</code> to enable lazy loading for the banner. |
| banner.fromColor | #1CAED7 | Sets the starting color for the banner gradient when no image is provided. |
| banner.toColor | #4E00C2 | Sets the ending color for the banner gradient. |
| name | - | Sets the name of the user. |
| handle | - | Sets a handle under the name of the user. |
| tags | [] | Pass an array of strings to set badges as tags under the handle. |
| description | - | Sets a description under the tags. |
| follow.showFollowing | true | Shows following count. |
| follow.showFollowers | true | Shows followers count. |
| follow.followingCount | 0 | Sets the number of following. |
| follow.followersCount | 0 | Sets the number of followers. |
| follow.followingText | Following | Sets the following text. |
| follow.followersText | Followers | Sets the followers text. |
| className | - | Pass additional CSS classes for the component. |




## E-commerce Blocks Reference

### Cart

- **Documentation**: https://webcoreui.dev/blocks/cart

**Example:**

```astro
---
const products = [
    {
        img: {
            src: '/images/product1.jpg',
            alt: 'Product 1',
            width: 50,
            height: 50,
            lazy: true
        },
        href: '/products/product1',
        target: '_blank',
        id: 1,
        name: 'Product 1',
        price: 29.99,
        quantity: 2
    },
    { ... }
]
---

<Cart
    title="Cart"
    products={products}
    discount={20}
    vat={15}
/>
```

**API:**

```ts
type Product = {
    img?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    href?: string
    target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
    id: number
    name: string
    price: number
    quantity: number
}

type CartProps = {
    products: Product[]
    priceSymbol?: string
    symbolPosition?: 'prefix' | 'postfix'
    vat?: number
    discount?: number
    counter?: CounterProps
    coupon?: {
        show?: boolean
        input?: InputProps
        button?: {
            text: string
            icon?: string
        } & ButtonProps
    }
    summary?: {
        show?: boolean
        showSubtotal?: boolean
        showDiscount?: boolean
        showVat?: boolean
        subtotalLabel?: string
        discountLabel?: string
        vatLabel?: string
        title?: string
    }
    total?: {
        show?: boolean
        label?: string
    }
    buttons?: ({
        text: string
        icon?: string
    } & ButtonProps)[]
} & CardProps
```


| Prop | Default | Purpose |
| --- | --- | --- |
| products | [] | Sets the products in the cart. |
| priceSymbol | $ | Sets the currency symbol for the prices. |
| symbolPosition | prefix | Sets the position of the currency symbol. Can be either `prefix` or `postfix`. |
| vat | 0 | Sets the VAT percentage to be applied to the discounted price. |
| discount | 0 | Sets the discount percentage to be applied to the total price. |
| counter | - | Sets the `Counter` component used for product quantity selection. |
| coupon.show | true | Sets whether to show the coupon code section. |
| coupon.input | - | Sets the `Input` component used for entering the coupon code. |
| coupon.button.text | Apply | Sets the text to be displayed on the coupon apply button. |
| coupon.button.icon | - | Sets the icon to be displayed on the coupon apply button. |
| summary.show | true | Sets whether to show the summary section. |
| summary.showSubtotal | true | Sets whether to show the subtotal in the summary. |
| summary.showDiscount | true | Sets whether to show the discount in the summary. |
| summary.showVat | true | Sets whether to show the VAT in the summary. |
| summary.subtotalLabel | Subtotal | Sets the label for the subtotal line item. |
| summary.discountLabel | Discount | Sets the label for the discount line item. |
| summary.vatLabel | VAT | Sets the label for the VAT line item. |
| summary.title | Summary | Sets the title for the summary section. |
| total.show | true | Sets whether to show the total price section. |
| total.label | Total | Sets the label for the total price. |
| buttons.text | - | Sets the text to be displayed on a CTA button. |
| buttons.icon | - | Sets the icon to be displayed on a CTA button. |
| className | - | Pass additional CSS classes for the component. |

| Product Props | Purpose |
| --- | --- |
| img | Sets an image for the product. |
| img.src | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.lazy | Set to `true` to enable lazy loading for the image. |
| href | Sets a link for the product name. |
| target | Sets the target of the link. |
| id | Sets a unique identifier for the product. |
| name | Sets the name of the product. |
| price | Sets the price of the product. |
| quantity | Sets the quantity of the product. |


### Customer Reviews

- **Documentation**: https://webcoreui.dev/blocks/customer-reviews

**Example:**

```astro
---
        import { reviews, reviewSummary, reviewButtons } from '@data'
        ---

        <Reviews
            reviewCountTitle="Showing {0} reviews"
            verifiedText="Verified review"
            reviews={reviews}
            summary={reviewSummary}
            reviewButtons={reviewButtons}
            mostHelpful={reviews[0]}
        />
```

**API:**

```ts
type Review = {
    date: string
    name: string
    description: string
    rating: RatingProps
    avatar?: AvatarProps
    ratedFor?: string
    positives?: string[]
    negatives?: string[]
}

type ReviewsProps = {
    reviews: Review[]
    reviewButtons?: ({
        text: string
        icon?: string
    } & ButtonProps)[]
    reviewCountTitle?: string
    verifiedText?: string
    positiveTitle?: string
    negativeTitle?: string
    summary?: {
        show?: boolean
        subText?: string
        description?: string
        colors?: string[]
        rating?: Omit<RatingProps, 'score'>
        cta?: ({
            text: string
            icon?: string
        } & ButtonProps)
    }
    mostHelpful?: Review
    mostHelpfulTitle?: string
    className?: string
}
```


| Single review props | Purpose |
| --- | --- |
| date | Sets the date of the review. |
| name | Sets the name of the reviewer. |
| description | Sets the review text. |
| rating | Sets the rating. Accepts the props of a <code>Rating</code> component. |
| avatar | Sets an avatar for the reviewer. Accepts the props of an <code>Avatar</code> component. |
| ratedFor | Sets additional text after the rating. For example: "Rated for &lt;category&gt;". |
| positives | Pass an array of strings to set a list of positive mentions. |
| negatives | Pass an array of strings to set a list of negative mentions. |

| Component props | Purpose |
| --- | --- |
| reviews | Sets a list of user reviews. |
| reviewButtons | Sets a list of buttons under the review text. Here you can define common actions such as "Report". |
| reviewButtons.text | Sets the label for the review button. |
| reviewButtons.icon | Sets an icon for the review button. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| reviewCountTitle | Sets a title above the list of reviews. Use the {0} placeholder to inject the amount of reviews. |
| verifiedText | Sets a text under the review, and above the review buttons with a check mark icon. |
| positiveTitle | Sets the title of the positive mentions. Defaults to "Loved the most". |
| negativeTitle | Sets the title of the negative mentions. Defaults to "Disliked the most". |
| summary.show | Shows a summary of reviews. Defaults to <code>true</code>. |
| summary.subText | Sets additional text under the review summary. Use the {0} placeholder to inject the amount of reviews. |
| summary.description | Sets text under the summary list. Supports HTML. |
| summary.colors | Pass an array of strings to customize the color of each star rating in the summary table. |
| summary.rating | Sets the style of the summary stars. Accepts the props of a <code>Rating</code> component. |
| summary.cta | Displays a CTA at the end of your summary. |
| mostHelpful | Pass a <code>Review</code> object to highlight a review under the summary. |
| mostHelpfulTitle | Sets the title of the most helpful review. Defaults to "Most helpful review". |
| className | Pass additional CSS classes for your <code>Reviews</code> component. |


### Fund Raising Card

- **Documentation**: https://webcoreui.dev/blocks/fund-raising-card

**Example:**

```astro
<FundRaisingCard
    progress={125}
    goal={300}
    title="Fund Raising Card"
    additionalLabel="patrons"
    progressBar={{ label: true }}
    buttons={[{ text: 'Donate' }]}
    img={{
        src: '/img/featured.png',
        alt: 'Featured image alt',
        height: 175,
        width: 300
    }}
>
    <span class="muted">
        Use the <code>FundRaisingCard</code> component to collect donations from users for a campaign.
    </span>
</FundRaisingCard>
```

**API:**

```ts
type FundRaisingCardProps = {
    img?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    progress: number
    goal: number
    progressLabel?: string
    additionalLabel?: string
    progressBar?: Omit<ProgressProps, 'value'>
    title: string
    buttons?: ({
        text: string
        icon?: string
    } & ButtonProps)[]
    className?: string
} & CardProps
```


| Prop | Purpose |
| --- | --- |
| img | Specifies a image for the card. |
| img.url | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.lazy | Set to <code>true</code> to lazy load the image. |
| progress | Sets the progress of the fund raising. |
| goal | Sets the goal of the fund raising. |
| progressLabel | Sets a custom text for the progress label. You can use the {0} and {1} placeholders. |
| additionalLabel | Sets additional labels above the progress bar. |
| title | Sets the title of the fund raising card. |
| buttons | Sets CTA buttons at the bottom of the card. |
| buttons.text | Sets the label for the CTA. |
| buttons.icon | Sets an icon for the CTA. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| className | Pass additional CSS classes for the card. |


### Order Details

- **Documentation**: https://webcoreui.dev/blocks/order-details

**Example:**

```astro
---
const orderDetailsProps = {
    img: {
        src: '/product-image.png',
        alt: 'Product image alt text',
        height: 215,
        width: 350
    },
    price: '$6.00',
    paidOn: 'November 07, 2024',
    productDetailsLink: {
        text: 'See product details',
        href: '#'
    },
    orderId: '1pxjyv0v',
    product: 'Webcore',
    invoiceNumber: '6876-10027',
    paymentMethod: 'visa ending in 5556 (Expires: 2025/1)',
    cta: {
        text: 'Download'
    }
}
---

<OrderDetails {...orderDetailsProps}>
    <span class="muted">Your transaction has been completed...</span>
</OrderDetails>
```

**API:**

```ts
type OrderDetailsProps = {
    title?: string
    img?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    price: string
    paidOn?: string
    productDetailsLink?: {
        text: string
        href: string
        target?: '_self'
            | '_blank'
            | '_parent'
            | '_top'
            | '_unfencedTop'
    }
    orderId?: string
    product?: string
    invoiceNumber?: string
    paymentMethod?: string
    cta?: ({
        text: string
        icon?: string
    } & ButtonProps)
    translations?: {
        amountPaid?: string
        paidOn?: string
        transactionDetails?: string
        orderId?: string
        product?: string
        invoiceNumber?: string
        paymentMethod?: string
    }
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| title | Sets a title for the page where the component is used. |
| img | Specifies an image for the order. |
| img.url | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.lazy | Set to <code>true</code> to lazy load the image. |
| price | Sets the price of the order. |
| paidOn | Sets the date when the order was fulfilled |
| productDetailsLink | Provides a link back to the page of the ordered product. |
| orderId | Sets the ID of the order that is displayed for reference to the user. |
| product | Sets the name of the product shown next to the order ID. |
| invoiceNumber | Sets the invoice number, shown under the order ID. |
| paymentMethod | Sets the payment method, shown next to the invoice. |
| cta | Sets a CTA button at the bottom of the order details. |
| cta.text | Sets the label for the CTA. |
| cta.icon | Sets an icon for the CTA. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| translations | Sets the text of the hardcoded labels. Please see the translations section above for more details. |
| className | Pass additional CSS classes for the component. |


### Product Card

- **Documentation**: https://webcoreui.dev/blocks/product-card

**Example:**

```astro
---
// Your import path might differ
import checkWavesIcon from '@icons/check-waves.svg?raw'
---

<ProductCard
    href="/products/astro"
    img={{
        src: '/img/products/astro.png',
        alt: 'Astro',
        width: 250,
        height: 150
    }}
    name="Product Card for Astro"
    price="$25"
    showFavoriteButton={true}
    badge={{
        text: 'Fully responsive',
        icon: checkWavesIcon
    }}
    button={{
        text: 'Preview',
        href: '/previews/astro'
    }}
    ribbon={{
        text: 'New',
        theme: 'alert'
    }}
    rating={{
        score: 5,
        color: 'var(--w-color-warning)'
    }}
/>
```

**API:**

```ts
type ProductCardProps = {
    href: string
    name: string
    img: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    price?: string
    target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
    ribbon?: {
        text: string
    } & RibbonProps
    showFavoriteButton?: boolean
    addedToFavorite?: boolean
    rating?: RatingProps
    button?: {
        text: string
        icon?: string
    } & ButtonProps
    badge?: {
        text: string
        icon?: string
    } & BadgeProps
    className?: string
}

type SvelteProductCardProps = {
    onAddToFavorite?: (args: unknown) => void
    onRemoveFromFavorite?: (args: unknown) => void
} & ProductCardProps

type ReactProductCardProps = {
    onAddToFavorite?: (args: unknown) => void
    onRemoveFromFavorite?: (args: unknown) => void
} & ProductCardProps
```


| Prop | Purpose |
| --- | --- |
| href | Sets the link of the product card. |
| target | Sets the target of the link. |
| name | Sets the product's name on the card. |
| img.src | Sets the path for the image on the card. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.lazy | Set to <code>true</code> to enable lazy loading for the image. |
| price | Sets the product's price on the card. |
| ribbon | Sets a ribbon for the card. |
| showFavoriteButton | Set to <code>true</code> to display a favorite button on hover. |
| addedToFavorite | Sets the initial state of the favorite button. Set to <code>true</code> if the product is already added to favorites. |
| rating | Sets a rating for the product. |
| button.text | Sets a CTA button over the image that is revealed on hover. |
| button.icon | Sets an optional icon for the CTA button. |
| badge.text | Sets a badge under the name of the product. |
| badge.icon | Sets an optional icon for the badge. |
| className | Pass additional CSS classes for the card. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onAddToFavorite | Add event listeners when the product is added to favorite. |
| onRemoveFromFavorite | Add event listeners when the product is removed from favorite. |


### Product Details

- **Documentation**: https://webcoreui.dev/blocks/product-details

**Example:**

```astro
<ProductDetails
    images={[{
        src: '/img/product.png',
        alt: 'main image',
        width: 250,
        height: 450
    }, { ... }]}
    title="Product Details"
    badge={{
        text: 'In stock',
        theme: 'success',
        icon: 'home'
    }}
    rating={{
        score: 4
    }}
    price="$99"
    disclaimer="Add an optional disclaimer text under your CTA for further information."
    options={[{
        name: 'Size',
        values: ['XS', 'S', 'M', 'L']
    }, {
        name: 'Color',
        values: ['Red', 'Green', 'Blue']
    }]}
    seller={{
        href: '/sellers/john'
    }}
/>
```

**API:**

```ts
type ProductDetailsProps = {
    images: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }[]
    title: string
    badge?: {
        text: string
        icon?: string
    } & BadgeProps
    rating?: RatingProps,
    price: string
    quantity?: {
        show?: string
        label?: string
        min?: number
        max?: number
    }
    buyNowButton?: ({
        text?: string
        icon?: string
    } & ButtonProps)
    addToCartButton?: ({
        show?: boolean
        text?: string
        icon?: string
    } & ButtonProps)
    showFavoriteButton?: boolean
    disclaimer?: string
    options?: {
        name: string
        values: string[]
    }[]
    seller?: {
        text?: string
        href: string
        showIcon?: boolean
    }
    className?: string
    sidebarClassName?: string
}

type AddToCartCallback = {
    title: string
    price: string
    quantity: number
    options?: {
        name: string
        value: string
    }[]
}

type SvelteProductDetailsProps = {
    onAddToCart?: (args: AddToCartCallback) => void
    onAddToFavorite?: (args: string) => void
} & ProductDetailsProps

type ReactProductDetailsProps = {
    onAddToCart?: (args: AddToCartCallback) => void
    onAddToFavorite?: (args: string) => void
} & ProductDetailsProps
```


| Prop | Default | Purpose |
| --- | --- | --- |
| images | - | Sets the images for the gallery. |
| images.src | - | Sets the path for the image. |
| images.alt | - | Sets an alternate text for the image. |
| images.width | - | Sets the width of the image. |
| images.height | - | Sets the height of the image. |
| images.lazy | - | Set to <code>true</code> to enable lazy loading for the image. |
| title | - | Sets a title for the product. |
| badge.text | - | Sets a badge under the title. |
| badge.icon | - | Sets an icon for the badge. You can pass an SVG string here or an <a href="/docs/icon#available-icons">icon type</a>. |
| rating | - | Sets star rating next to the badge. |
| price | - | Sets the price of the product. |
| quantity.show | true | Set to <code>false</code> to hide the quantity input. |
| quantity.label | Quantity | Sets the label for the quantity input. |
| quantity.min | 1 | Sets the minimum valid value for the input. |
| quantity.max | 999 | Sets the maximum valid value for the input. |
| buyNowButton.text | Buy Now | Sets the text for the main CTA. |
| buyNowButton.icon | - | Sets an icon for the main CTA. |
| addToCartButton.show | true | Set to <code>false</code> to hide the secondary CTA. |
| addToCartButton.text | Add to cart | Sets the text of the secondary CTA. |
| addToCartButton.icon | - | Sets an icon for the secondary CTA. |
| showFavoriteButton | true | Show a favorite button next to the secondary CTA. |
| disclaimer | - | Display additional text under the CTA buttons. |
| options.name | - | Sets a name for an option group. |
| options.values | [] | Pass an array of strings to set options for the group. |
| seller.text | - | Sets the text for seller information. |
| seller.showIcon | true | Set to <code>false</code> to hide icon for seller information. |
| seller.href | - | Sets a link for the seller. |
| className | - | Pass additional CSS classes for the component. |
| sidebarClassName | - | Pass additional CSS classes for the sidebar, next to the gallery and main content. |

| Svelte & React Prop | Purpose |
| --- | --- |
| onAddToCart | Callback function that runs when the "Add to Cart" button is clicked. |
| onAddToFavorite | Callback function that runs when the favorite button is clicked. |


### Property Card

- **Documentation**: https://webcoreui.dev/blocks/property-card

**Example:**

```astro
---
const propertyCardProps = {
    img: {
        src: '/img/property/property1.png',
        alt: '',
        height: 150,
        width: 500
    },
    ribbon: {
        text: 'Featured',
        theme: 'alert',
        offset: 25
    },
    rating: {
        score: 4
    },
    location: 'New Orleans',
    meta: 'Top rated',
    title: 'Elisabeth Apartman',
    buttons: [{
        text: 'Check Availability'
    }],
    amenities: [
        'Pool',
        'Jacuzzi',
        'Sauna',
        'Free WiFi'
    ]
}
---

<PropertyCard {...propertyCardProps}>
    <span class="muted">Relax and unwind in this charming home...</span>   
</PropertyCard>
```

**API:**

```ts
type PropertyCardProps = {
    img: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    ribbon?: ({
        text: string
    } & RibbonProps)
    rating?: RatingProps
    location?: string
    meta?: string
    title: string
    buttons?: ({
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps)[]
    amenities?: string[]
    className?: string
} & CardProps
```


| Prop | Purpose |
| --- | --- |
| img | Sets the property image for the card. |
| img.src | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.lazy | Set to <code>true</code> to enable lazy loading for the image. |
| ribbon | Sets a ribbon shown above the image. |
| ribbon.text | Sets the text for the ribbon. |
| rating | Sets the rating of the property. |
| location | Sets a location for the property, shown under the title and image. |
| meta | Sets additional text under the property's name. |
| title | Sets a title for the property card. |
| buttons | Sets CTA buttons under the rating. |
| buttons.text | Sets the text for the CTA. |
| buttons.icon | Sets an icon for the CTA. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| amenities | Sets a list of amenities under the main content. |
| className | Pass additional CSS classes for the <code>PropertyCard</code> component. |


### Seasonal Banner

- **Documentation**: https://webcoreui.dev/blocks/seasonal-banner

**Example:**

```astro
<SeasonalBanner
    text="Get 20% off for the holidays!"
    href="/landing-page"
/>
```

**API:**

```ts
type SeasonalBannerProps = {
    text: string
    href: string
    target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
    type?: keyof typeof confettiPresets
    confetti?: ConfettiProps
    textColor?: string
    rgbBgColorFrom?: string
    rgbBgColorTo?: string
} & BannerProps
```


| Prop | Purpose |
| --- | --- |
| text | Sets the text on the banner. |
| href | Sets the link on the banner. |
| target | Sets the target of the link. |
| type | Sets the type of the banner. If no type is provided, a gradient background will be used. |
| confetti | Pass `ConfettiProps` to customize the behavior of particles. This will override the `type` prop. |
| textColor | Sets the color of the text. Automatically set for each `type`. |
| rgbBgColorFrom | Pass an RGB triplet to set the starting color of the background. |
| rgbBgColorTo | Pass an RGB triplet to set the ending color of the background. |
| className | Pass additional CSS classes for the banner. |


### Select Payment

- **Documentation**: https://webcoreui.dev/blocks/select-payment

**Example:**

```astro
---
const payments = [
    {
        method: 'visa',
        name: 'Visa ending in 1234',
        subText: 'Expires on 01/2025'
    },
    {
        method: 'mastercard',
        name: 'Mastercard ending in 5678',
        subText: 'Expired on 01/2024',
        disabled: true
    },
    {
        method: 'paypal',
        name: 'PayPal',
        subText: 'Pay with PayPal',
        selected: true
    }
]
---

<SelectPayment
    title="Preview"
    payments={payments}
    buttons={[
        { text: 'Cancel', theme: 'secondary' },
        { text: 'Continue' }
    ]}
/>
```

**API:**

```ts
type SelectPaymentProps = {
    payments: {
        method: 'alipay'
        | 'amazon'
        | 'amex'
        | 'apple'
        | 'bancontact'
        | 'bitcoin'
        | 'discover'
        | 'google'
        | 'ideal'
        | 'klarna'
        | 'maestro'
        | 'mastercard'
        | 'paypal'
        | 'payoneer'
        | 'samsung'
        | 'skrill'
        | 'sofort'
        | 'stripe'
        | 'venmo'
        | 'visa'
        | 'wechat'
        | 'wise'
        name: string
        subText?: string
        selected?: boolean
        disabled?: boolean
    }[]
    buttons?: ({
        text: string
        icon?: string
    } & ButtonProps)[]
    [key: string]: any
} & CardProps
```


| Prop | Purpose |
| --- | --- |
| payments | Sets the list of available payment methods. |
| payments.method | Sets the payment method for the item. |
| payments.name | Sets a name for the payment method. |
| payments.subText | Sets additional text under the payment's name. |
| payments.selected | Sets the payment option as selected. |
| payments.disabled | Sets the payment option as disabled. |
| buttons | Sets CTA buttons at the bottom of the payment options. |
| buttons.text | Sets the label for the CTA. |
| buttons.icon | Sets an icon for the CTA. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |




## Marketing Blocks Reference

### 3D Card

- **Documentation**: https://webcoreui.dev/blocks/3d-card

**Example:**

```astro
<Card3D secondary={true}>
    <p>Hover on me for 3D animation.</p>
</Card3D>
```

**API:**

```ts
type Card3DProps = {
    rotateDegree?: number
    glow?: boolean
    glowSize?: string
    startColor?: string
    stopColor?: string
} & CardProps
```


| Prop | Default | Purpose |
| --- | --- | --- |
| rotateDegree | 15 | Sets the rotation amount on hover. |
| glow | true | Shows a glow effect on hover. |
| glowSize | - | Sets the radious of the glow. |
| startColor | rgba(255, 255, 255, .10) | Sets the starting (inner) color of the glow. |
| stopColor | rgba(0, 0, 0, 0) | Sets the ending (outer) color of the glow. |


### Animated Card

- **Documentation**: https://webcoreui.dev/blocks/animated-card

**Example:**

```astro
<AnimatedCard
    title="Animated Card in Astro"
    subTitle="With optional subtitle"
    href="/page"
    background={{
        src: '/img/card-bg.png',
        alt: 'background',
        width: 320,
        height: 200
    }}
/>
```

**API:**

```ts
type AnimatedCardProps = {
    background: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    title: string
    subTitle?: string
    href?: string
    target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| background.src | Sets the path for the background image. |
| background.alt | Sets an alternate text for the background image. |
| background.width | Sets the width of the background image. |
| background.height | Sets the height of the background image. |
| background.lazy | Set to <code>true</code> to enable lazy loading for the background image. |
| title | Sets the title for the card. |
| subTitle | Sets an optional subtitle under the <code>title</code> prop. |
| href | Sets a link for the card. |
| target | Sets the target of the link. |
| className | Pass additional CSS classes for the card. |


### Animated Gallery

- **Documentation**: https://webcoreui.dev/blocks/animated-gallery

**Example:**

```astro
<AnimatedGallery images={[{
    src: '/img.png',
    alt: 'Alternate text',
    width: 125,
    height: 200
}, { ... }]} />
```

**API:**

```ts
type AnimatedGalleryProps = {
    images: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }[]
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| images | Sets the images for the gallery. |
| images.src | Sets the path for the image. |
| images.alt | Sets an alternate text for the image. |
| images.width | Sets the width of the image. |
| images.height | Sets the height of the image. |
| images.lazy | Set to <code>true</code> to enable lazy loading for the image. |
| className | Pass additional CSS classes for the <code>AnimatedGallery</code> component. |


### Animated Stat

- **Documentation**: https://webcoreui.dev/blocks/animated-stat

**Example:**

```astro
<AnimatedStat
    to={100}
    subText="Users"
/>
```

**API:**

```ts
type AnimatedStatProps = {
    from?: number
    to: number
    duration?: number
    delay?: number
    prefix?: string
    postfix?: string
    subText?: string
    color?: string
} & CardProps
```


| Prop | Default | Purpose |
| --- | --- | --- |
| from | 0 | Sets the from value for the stat. |
| to | 0 | Sets the to value for the stat. |
| duration | 4s | Sets the duration of the animation in seconds. |
| delay | 0s | Sets the delay of the animation in seconds. |
| prefix | - | Sets a prefix in front of the stat. |
| postfix | - | Sets a postfix after the stat. |
| subText | - | Sets a secondary text under the stat. |
| color | var(--w-color-primary) | Sets the color for the stat. |


### Card with CTA

- **Documentation**: https://webcoreui.dev/blocks/card-with-cta

**Example:**

```astro
---
const ctaButton = {
    text: 'CTA',
    theme: 'secondary'
}
---

<CardwithCta title="Card with CTA" button={ctaButton}>
    ...
</CardwithCta>
```

**API:**

```ts
type CardWithCtaProps = {
    title: string
    subTitle?: string
    className?: string
    bodyClassName?: string
    img?: {
        src: string
        alt: string
        width: number
        height: number
        fullHeight?: boolean
        lazy?: boolean
    }
    button: {
        text: string
        icon?: string
    } & ButtonProps
} & CardProps
```


| Prop | Purpose |
| --- | --- |
| title | Sets the title of the card. |
| subTitle | Sets the subtitle of the card. |
| className | Pass additional CSS classes for the card. |
| bodyClassName | Pass additional CSS classes for the body of the card. |
| img | Sets an image for the card. |
| img.src | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.fullHeight | Make the image span the full height of its container. |
| img.lazy | Set to <code>true</code> to enable lazy loading for the image. |
| button | Sets the CTA for the card. |
| button.text | Sets the text of the CTA. |
| button.icon | Sets an icon for the CTA. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |


### Card with List

- **Documentation**: https://webcoreui.dev/blocks/card-with-list

**Example:**

```astro
<CardWithList
    img={{
        src: '/img/placeholder7.png',
        alt: 'Astro islands architecture illustration',
        width: 50,
        height: 50
    }}
    title="Build Sites with Astro"
    subText="Learn the fundamentals of Astro"
    list={[
        'Island architecture explained',
        'Zero-JS by default',
        'File-based routing',
        'Component framework agnostic'
    ]}
    badge={{ text: 'Beginner' }}
/>
```

**API:**

```ts
type CardWithListProps = {
    img?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    title: string
    subText?: string
    list: string[]
    type?: 'ol' | 'ul'
    theme?: BadgeProps['theme']
    badge?: {
        text?: string
        icon?: string
    } & BadgeProps
} & CardProps
```


| Prop | Purpose |
| --- | --- |
| img.src | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.lazy | Set to `true` to enable lazy loading for the image. |
| title | Sets the title of the card. |
| subText | Sets an optional subtitle for the card. |
| list | Sets the list of items. |
| type | Sets the list type. Defaults to `ul`. |
| theme | Sets the color of the bullet points. |
| badge.text | Sets the text for the badge. |
| badge.icon | Sets an icon for the badge. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| className | Pass additional CSS classes for the component. |


### Chapters

- **Documentation**: https://webcoreui.dev/blocks/chapters

**Example:**

```astro
---
import rocket from './icons/rocket.svg?raw'

const chapters = [
    {
        title: 'Getting Started',
        icon: rocket,
        subText: '{0} lessons',
        description: 'Kickstart your journey with Astro...',
        color: 'var(--w-color-info)',
        img: {
            src: '/img/getting-started.png',
            alt: 'Getting Started',
            height: 300,
            width: 300
        },
        items: [
            {
                text: 'Getting Started',
                subText: '1min read',
                buttons: [{
                    text: 'See examples',
                    href: '/examples'
                }]
            },
            { text: 'Setting up Astro', subText: '3min read' },
            { ... },
            { ... },
            { ... }
        ]
    }, { ... }, { ... }]
---

<Chapters chapters={chapters} />
```

**API:**

```ts
type ChaptersProps = {
    className?: string
    navTopOffset?: number
    chapters: ({
        id?: string
        title: string
        icon?: string
        subText?: string
        description?: string
        items: OverviewProps['items']
        img?: {
            src: string
            alt: string
            width: number
            height: number
            lazy?: boolean
        }
    } & OverviewProps)[]
}
```


| Prop | Purpose |
| --- | --- |
| navTopOffset | Sets the top offset of the navigation bar. |
| chapters.id | Sets an id for the chapter used as a scroll anchor. If not set, defaults to the chapter's title. |
| chapters.title | Sets the title of the chapter. |
| chapters.icon | Sets an icon for the chapter under its title. |
| chapters.subText | Sets additional text next to the icon. |
| chapters.description | Sets a description under the sub-text. Supports HTML formatting. |
| chapters.items | Sets the chapter items using an <a href="/blocks/overview"><code>Overview</code></a> component. |
| chapters.img.src | Sets an image for the chapter. |
| chapters.img.alt | Sets an alternate text for the image. |
| chapters.img.width | Sets the width of the image. |
| chapters.img.height | Sets the height of the image. |
| chapters.img.lazy | Set to <code>true</code> to enable lazy loading for the image. |
| className | Pass additional CSS classes for the <code>Chapters</code> component. |


### Comments

- **Documentation**: https://webcoreui.dev/blocks/comments

**Example:**

```astro
---
import { comments, commentButtons } from './comments.ts'
---

<Comments
    title="Join the Discussion"
    comments={comments}
    showForm={true}
    commentButtons={commentButtons}
/>
```

**API:**

```ts
type CommentProps = {
    text: string
    name: string
    avatar?: AvatarProps
    publishDate?: string
    replies?: CommentProps[]
    commentButtons?: CommentsProps['commentButtons']
    maxDepth?: number
    className?: string
} & CardProps

type CommentsProps = {
    title?: string
    showForm?: boolean
    form?: FormField[]
    maxDepth?: number
    comments: CommentProps[]
    commentButtons?: ({
        text: string
        icon?: string
    } & ButtonProps)[]
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| title | Sets a title for the block. |
| showForm | Set to `true` to show a submit form. |
| form | Pass an array of `FormField` objects to display a custom form. |
| maxDepth | Sets the maximum depth of nesting responses. Defaults to 3. |
| comments | Pass an array of `CommentProps` object to display comments. |
| commentButtons | Pass an array of `ButtonProps` to display various action buttons. |
| className | Pass additional CSS classes for the component. |

| Comment Prop | Purpose |
| --- | --- |
| text | Sets the text for the comment. |
| name | Sets the name of the commenter. |
| avatar | Sets the avatar of the commenter. |
| publishDate | Displays a publish date under the name of the commenter. |
| replies | Pass an array of `CommentProps` to display replies. |
| maxDepth | Sets the maximum depth of nesting responses. Defaults to 3. |
| commentButtons | Pass an array of `ButtonProps` to display various action buttons. |
| className | Pass additional CSS classes for an individual component. |


### Comparison

- **Documentation**: https://webcoreui.dev/blocks/comparison

**Example:**

```astro
<Comparison
    headings={['Feature', 'Free', 'Pro']}
    striped="row"
    trueColor="var(--w-color-success)"
    falseColor="var(--w-color-alert)"
    data={[
        ['Image Carousel', true, true],
        ['Customizable CTA', true, true],
        ['Sticky CTA', false, true],
        ['Add Pricing', false, true]
    ]}
/>
```

**API:**

```ts
type ComparisonProps = {
    data: (string | boolean)[][]
    trueIcon?: string
    falseIcon?: string
    trueColor?: string
    falseColor?: string
    alignment?: 'center' | 'right'
} & Omit<TableProps, 'data'>
```


| Prop | Default | Purpose |
| --- | --- | --- |
| data | [] | Sets the table cells. Must be a multidimensional array of strings or booleans. |
| trueIcon | circle-check | Sets the icon used for <code>true</code> values in the <code>data</code> prop. |
| falseIcon | circle-close | Sets the icon used for <code>false</code> values in the <code>data</code> prop. |
| trueColor | var(--w-color-primary) | Sets the color of icons when using <code>true</code>. |
| falseColor | var(--w-color-primary) | Sets the color of icons when using <code>false</code>. |
| alignment | left | Set the alignment of icons and table headings. |


### Competition

- **Documentation**: https://webcoreui.dev/blocks/competition-results

**Example:**

```astro
---
const competitorA = {
    name: 'Jane',
    score: 226,
    subText: 'Lost with {1} (total votes: {0})',
    img: {
        src: '/img/jane.png',
        alt: 'Jane',
        size: 50
    }
}

const competitorB = {
    name: 'Jack',
    score: 312,
    subText: 'Won with {1} (total votes: {0})',
    img: {
        src: '/img/jack.png',
        alt: 'Jack',
        size: 50
    }
}
---

<CompetitionResults competitors={[competitorA, competitorB]} />
```

**API:**

```ts
type CompetitionResultsProps = {
    competitors: {
        name: string
        score: number
        color?: string
        subText?: string
        img: {
            src: string
        } & Omit<AvatarProps, 'img'>
    }[]
    showScore?: boolean
    showPercentage?: boolean
    showWinnerCheckMark?: boolean
    showWinnerBorder?: boolean
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| competitors | [] | Sets the data for the competitors. |
| competitors.name | - | Sets the name of the competitor. |
| competitors.score | - | Sets the score of the competitor. |
| competitors.color | - | Sets the color associated with the competitor. |
| competitors.subText | - | Sets additional text under the competitor. Use {0}/{1} for score/percentage. |
| competitors.img | - | Sets an avatar for the competitor. |
| showScore | true | Shows <code>competitors.score</code>. |
| showPercentage | false | Shows percentages calculated from scores. |
| showWinnerCheckMark | true | Sets a check mark next to the winner's avatar. |
| showWinnerBorder | true | Highlights the winner's avatar with a border. |
| className | - | Pass additional CSS classes for your component. |


### Confetti

- **Documentation**: https://webcoreui.dev/blocks/confetti

**Example:**

```astro
<Confetti />
```

**API:**

```ts
type ConfettiProps = {
    amount?: number
    colors?: string[]
    shapes?: ('circle' | 'square' | 'triangle' | 'star')[]
    emojis?: string[]
    gravity?: number
    airResistance?: number
    terminalVelocity?: number
    wind?: number
    turbulence?: number
    speed?: number
    size?: number
    opacity?: number
    wanderFrequency?: number
    wanderAmplitude?: number
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| amount | 200 | Sets the number of confetti particles to create. |
| colors | [] | Sets an array of colors particles can randomly use. Defaults to an internal palette. |
| shapes | [] | Sets the shapes particles can randomly be assigned. Defaults to all shapes. |
| emojis | [] | Sets an optional list of emojis to use instead of shapes. |
| gravity | 0.05 | Sets the vertical downward acceleration applied to particles. |
| airResistance | 0.99 | Multiplier reducing velocity each tick to simulate air drag. |
| terminalVelocity | 8 | Sets the maximum downward speed allowed for particles. |
| wind | 0 | Sets a constant horizontal wind force applied to all particles. |
| turbulence | 0.3 | Sets a random jitter added to movement to simulate chaotic air currents. |
| speed | 1 | Sets the global speed multiplier affecting all movement. |
| size | 1 | Sets a base particle size. The final size is slightly randomized. |
| opacity | - | Sets a fixed particle opacity. If omitted, opacity is auto-computed based on size. |
| wanderFrequency | 5000 | Controls how often horizontal wandering oscillation occurs. |
| wanderAmplitude | 0.3 | Sets the strength of horizontal wandering movement. |
| className | - | Pass additional CSS classes for the component that will be added to the `canvas`. |


### Contact Tiles

- **Documentation**: https://webcoreui.dev/blocks/contact-tiles

**Example:**

```astro
<ContactTiles
    email={{ text: 'ui@webcore.dev' }}
    phone={{ text: '+1 23 456 7890' }}
    support={{ text: '<a href="#">Contact support</a>' }}
/>
```

**API:**

```ts
type ContactItem = {
    icon?: string
    title?: string
    text: string
}

type ContactTilesProps = {
    email?: ContactItem
    phone?: ContactItem
    support?: ContactItem 
} & Omit<GridWithIconsProps, 'items'>
```


| Prop | Purpose |
| --- | --- |
| email | Sets a contact tile for email. |
| phone | Sets a contact tile for phone. |
| support | Sets a contact tile for support. |


### Content Section

- **Documentation**: https://webcoreui.dev/blocks/content-section

**Example:**

```astro
---
import { circleCheck } from 'webcoreui/icons'

const sections = [
    {
        type: 'img',
        src: '/img/astro.png',
        alt: 'Astro islands architecture illustration',
        width: 500,
        height: 200
    },
    {
        type: 'columns',
        items: [
            [
                {
                    type: 'text',
                    title: 'Why Astro?',
                    text: 'Astro is a modern web framework...'
                },
                {
                    type: 'list',
                    color: 'var(--w-color-success)',
                    items: [
                        {
                            icon: circleCheck,
                            text: 'Only ship JavaScript when required.'
                        },
                        {
                            icon: circleCheck,
                            text: 'Use React,, Svelte, or plain HTML together.'
                        }
                    ]
                }
            ],
            [
                {
                    type: 'text',
                    title: 'Great DX',
                    text: 'Astro feels familiar if you know HTML, CSS, and JavaScript.'
                },
                {
                    type: 'list',
                    color: 'var(--w-color-success)',
                    items: [
                        {
                            icon: circleCheck,
                            text: 'Clean separation of frontmatter and template.'
                        },
                        {
                            icon: circleCheck,
                            text: 'Isolate interactivity for maximum performance.'
                        }
                    ]
                }
            ]
        ]
    }
]
---

<ContentSection items={sections} />
```

**API:**

```ts
type ContentImageSection = {
    src: string
    alt: string
    width: number
    height: number
    lazy?: boolean
}

type ContentTextSection = {
    title?: string
    text: string
}

type ContentListSection = IconListProps

type ContentColumnSection = {
    items: Exclude<ContentSection, { type: 'columns' }>[][]
}

type ContentSection =
    | ({ type: 'img' } & ContentImageSection)
    | ({ type: 'text' } & ContentTextSection)
    | ({ type: 'list' } & ContentListSection)
    | ({ type: 'columns' } & ContentColumnSection)

type ContentSectionProps = {
    items: ContentSection[]
    titleTag?: string
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| items | [] | Pass an array of content sections to display. |
| titleTag | strong | Sets the HTML tag to use for section titles. |
| className | - | Pass additional CSS classes for the component. |

| Image type | Purpose |
| --- | --- |
| src | Sets the image source URL. |
| alt | Sets the alt text for the image. |
| width | Sets the width of the image. |
| height | Sets the height of the image. |
| lazy | Set to `true` to enable lazy loading for the image. |

| Text type | Purpose |
| --- | --- |
| title | Sets the title for the text section. |
| text | Sets the main text content for the section. Supports HTML content. |

| Columns type | Purpose |
| --- | --- |
| items | Pass an array of arrays, where each inner array represents a column containing content sections. |


### Cookie Banner

- **Documentation**: https://webcoreui.dev/blocks/cookie-banner

**Example:**

```astro
<CookieBanner
    heading="Our site uses cookies"
    showIcon={true}
    acceptButton={{
        text: 'Accept',
        theme: 'flat'
    }}
    declineButton={{
        text: 'Decline',
        theme: 'flat'
    }}
>
    <span class="muted">
        We use cookies...
    </span>
</CookieBanner>
```

**API:**

```ts
type CookieBannerProps = {
    heading?: string
    showIcon?: boolean
    position?: 'left' | 'bottom'
    className?: string
    acceptButton: ({
        text: string
        icon?: string
    } & ButtonProps)
    declineButton: ({
        text: string
        icon?: string
    } & ButtonProps)
} & CardProps
```


| Prop | Purpose |
| --- | --- |
| heading | Sets the title of the cookie banner. |
| showIcon | Shows a cookie icon next to the heading. |
| position | Sets the position of the cookie banner. |
| className | Pass additional CSS classes for the cookie banner. |
| acceptButton | Sets the accept button for the cookie banner. |
| declineButton | Sets the decline button for the cookie banner. |


### Country Select

- **Documentation**: https://webcoreui.dev/blocks/country-select

**Example:**

```astro
<CountrySelect
    name="country-select"
    showSearchBar={true}
    showSearchBarIcon={true}
    searchBarPlaceholder="Search for your country"
    whitelist={['us', 'gb', 'au']}
/>
```

**API:**

```ts
type CountrySelectProps = {
    type?: '4x3'
    whitelist?: Array<keyof typeof countryMap>
    blacklist?: Array<keyof typeof countryMap>
} & Omit<SelectProps, 'itemGroups'>
```


| Prop | Purpose |
| --- | --- |
| type | Set to 4x3 to change the aspect ratio of the country flags. |
| whitelist | Specify two letter country codes to only show countries in the list. |
| blacklist | Specify two letter country codes to omit countries from the list. |


### CSS Pie Chart

- **Documentation**: https://webcoreui.dev/blocks/css-pie-chart

**Example:**

```astro
---
const pieChartData = [
    {
        name: 'Astro',
        amount: 43,
        color: '#4e00c2'
    },
    { ... },
    { ... }
]
---

<CSSPieChart data={pieChartData} />
```

**API:**

```ts
type CSSPieChartProps = {
    data: {
        name: string
        amount: number
        color: string
    }[]
    pieRotation?: number
    donut?: boolean
    donutSize?: number
    donutCenterColor?: string
    showLegend?: boolean
    showLegendAmount?: boolean
    showLegendPercentage?: boolean
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| data | [] | Sets the slices for the pie chart. |
| data.name | - | Sets the name of the slice, shown in the legend. |
| data.amount | - | Sets the size of the slice. |
| data.color | - | Sets the color of the slice. |
| pieRotation | 0 | Sets the rotation of the pie. |
| donut | false | Turns the pie chart into a donut chart. |
| donutSize | 50 | Sets the size of the hole inside the donut. |
| donutCenterColor | var(--w-color-primary-70) | Sets the center color of the donut. |
| showLegend | true | Sets whether to show the legend. |
| showLegendAmount | false | Sets whether to show the <code>amount</code> property inside the legend. |
| showLegendPercentage | true | Sets whether to show slice percentages inside the legend. |
| className | - | Pass additional CSS classes for the chart. |


### CTA With BG

- **Documentation**: https://webcoreui.dev/blocks/cta-with-background

**Example:**

```astro
<CtaWithBackground
    title="Astro CTA with Background"
    subTitle="Rocket launch your frontend projects faster"
    features={{
        items: [
            { icon: 'circle-check', text: 'Premium components' },
            { icon: 'circle-check', text: 'Additional templates' },
            { icon: 'circle-check', text: 'Lifetime access' }
        ]
    }}
    cta={{
        text: 'Explore ->',
        href: '/explore'
    }}
    background={{
        src: '/img/cta-with-bg.png',
        alt: 'cta-with-bg',
        width: 1200,
        height: 350
    }}
/>
```

**API:**

```ts
type CtaWithBackgroundProps = {
    title: string
    subTitle?: string
    features?: Omit<IconListProps, 'columns' | 'className'>
    cta: ({
        text?: string
        icon?: string
    } & ButtonProps)
    background: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| title | Sets the title of the section. |
| subTitle | Sets a subtitle under the <code>title</code> prop. |
| features | Pass the props of an <code>IconList</code> component to set a list of features. |
| cta.text | Sets a label for the CTA button. |
| cta.icon | Sets an SVG icon for the CTA button. |
| background.src | Sets the path for the background image. |
| background.alt | Sets an alternate text for the background image. |
| background.width | Sets the width of the background image. |
| background.height | Sets the height of the background image. |
| background.lazy | Set to <code>true</code> to enable lazy loading for the background image. |
| className | Pass additional CSS classes for the component. |


### Exit Intent Popup

- **Documentation**: https://webcoreui.dev/blocks/exit-intent-popup

**Example:**

```astro
---
import { Button, Input } from 'webcoreui/astro'

const modal = {
    title: '🚀 Launch faster'
}
---

<ExitIntentPopup modal={modal}>
    <p>Get access to premium UI components, templates, and much more!</p>

    <div class="flex column md">
        <Input type="email" placeholder="Your email address" />
        <Button>Get Access</Button>
    </div>
</ExitIntentPopup>
```

**API:**

```ts
type ExitIntentPopupProps = {
    timeOut?: number
    cookie?: string
    cookieDays?: number
    modal?: ModalProps
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| timeOut | 10_000 | Sets the minimum time in seconds a user has to spend on the page to trigger the popup. |
| cookie | - | Sets the name of the cookie that is set when the popup becomes visible. |
| cookieDays | 30 | Sets the expiration date for the cookie. |
| modal | - | Pass <code>ModalProps</code> to customize the modal. |
| className | - | Pass additional CSS classes for the component. |


### Featured Posts

- **Documentation**: https://webcoreui.dev/blocks/featured-posts

**Example:**

```astro
---
const items = [{
    img: {
        src: '/img/astro-islands.png',
        alt: 'Diagram explaining Astro Islands architecture',
        width: 1200,
        height: 200
    },
    badge: {
        text: 'Core Concept',
        icon: rocket // Pass an SVG string to your icon
    },
    title: 'Understanding Astro Islands Architecture',
    author: {
        avatar: {
            img: '/img/avatars/josh-wayne.png'
        },
        name: 'Josh Wayne'
    },
    publishDate: '2024/03/12',
    description: 'Astro Islands let you ship zero JavaScript...',
    href: '/astro-islands',
    cta: 'Read more ->'
}, { ... }, { ... }]
---

<FeaturedPosts items={items} />
```

**API:**

```ts
type FeaturedPostsProps = {
    items: Post[]
    reverse?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items | Sets the posts to display. |
| reverse | Set to `true` to reverse the layout. |
| className | Pass additional CSS classes for the card. |


### Features Grid

- **Documentation**: https://webcoreui.dev/blocks/features-grid

**Example:**

```astro
---
import vscodeIcon from './icons/vscode.svg?raw'

const gridItems = [{
    badge: {
        text: 'Free Components',
        icon: vscodeIcon,
        small: true
    },
    title: 'Get started quickly',
    description: 'Everything you need for your app...',
    secondary: true,
    img: {
        src: '/img/get-started.png',
        alt: 'How to get started',
        width: 500,
        height: 250
    }
}, { ... }, { ... }, { ... }]
---

<FeaturesGrid items={gridItems} />
```

**API:**

```ts
type FeaturesGridProps = {
    items: ({
        badge?: {
            text: string
            icon?: string
        } & BadgeProps
        link?: {
            text: string
            href: string
            icon?: string
            target?: '_self'
                | '_blank'
                | '_parent'
                | '_top'
                | '_unfencedTop'
        }
        img: {
            src: string
            alt: string
            width: number
            height: number
            lazy?: boolean
        }
        title: string
        description: string
    } & Pick<CardProps, 'compact' | 'secondary'>)[]
    secondary?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items | Sets the items for the features grid. |
| items.badge.text | Adds a badge on top of the grid item. |
| items.badge.icon | Sets an icon for the badge. |
| items.link.text | Sets a link next to the title. |
| items.link.href | Sets an anchor for the link. |
| items.icon | Sets an icon for the link. |
| items.link.target | Sets the target of the link. |
| items.img.src | Sets an image under the description. |
| items.img.alt | Sets an alternate text for the image. |
| items.img.width | Sets the width of the image. |
| items.img.height | Sets the height of the image. |
| items.img.lazy | Set to <code>true</code> to enable lazy loading for the image. |
| items.title | Sets the title of the grid item. |
| items.description | Sets the description of the grid item. |
| secondary | Sets the secondary layout for the grid. |
| className | Pass additional CSS classes for the <code>FeaturesGrid</code> component. |


### Feedback

- **Documentation**: https://webcoreui.dev/blocks/feedback

**Example:**

```astro
<Feedback />
```

**API:**

```ts
type FeedbackProps = {
    textarea?: TextareaProps
    button?: {
        text: string
        icon?: string
    } & ButtonProps
} & CardProps
```


| Prop | Purpose |
| --- | --- |
| textarea | Customizes the textarea of the feedback card. |
| button | Sets the CTA button for the card. |
| button.text | Sets the label of the CTA button. |
| button.icon | Sets an optional icon for the button. Use an <a href="/docs/icon#available-icons">icon type</a> in Astro, or pass an SVG string. |


### Gauge

- **Documentation**: https://webcoreui.dev/blocks/gauge

**Example:**

```astro
<Gauge
    percentage={72}
    value="0%"
    label="Progress"
/>
```

**API:**

```ts
type GaugeProps = {
    percentage: number
    value?: string
    label?: string
    background?: string
    colorFrom?: string
    colorTo?: string
    width?: number
    rotation?: number
    rounded?: boolean
    animationSpeed?: number
    animated?: boolean
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| percentage | 0 | Sets the percentage value of the gauge between 0 and 100%. |
| value | - | Sets a bolded value on the gauge. Use the percentage value if the gauge is not animated. |
| label | - | Sets a label under the value. |
| background | #ffffff33 | Sets the background color. |
| colorFrom | primary | Sets the starting fill color. |
| colorTo | primary | Sets the ending fill color. |
| width | 10 | Sets the width of the stroke. |
| rotation | 0 | Sets a rotation for the gauge. |
| rounded | true | Sets the edges to rounded. |
| animationSpeed | 2000 | Sets the speed of the animation when <code>animated</code> is set to <code>true</code>. |
| animated | true | Animates the gauge from 0% to the value of the <code>percentage</code> prop. |
| className | - | Pass additional CSS classes for the <code>Gauge</code> component. |


### Gradient Card

- **Documentation**: https://webcoreui.dev/blocks/gradient-card

**Example:**

```astro
<GradientCard title="Gradient Card" secondary={true}>
    Gradient Card with animated border
</GradientCard>
```

**API:**

```ts
type GradientCardProps = {
    border?: number
    animationTime?: number
    startColor?: string
    endColor?: string
    blurAmount?: number
    scaleAmount?: number
    className?: string
} & CardProps
```


| Prop | Default | Purpose |
| --- | --- | --- |
| border | 2px | Sets the width of the animated border. |
| animationTime | 5s | Sets the animation time. |
| startColor | #1CAED7 | Sets the start color of the animation. |
| endColor | #4E00C2 | Sets the end color of the animation. |
| blurAmount | 75px | Sets the blur amount of the border. |
| scaleAmount | .8 | Sets the spread of the border. |
| className | - | Pass additional CSS classes for the card. |


### Hero with Carousel

- **Documentation**: https://webcoreui.dev/blocks/hero-with-carousel

**Example:**

```astro
{3-8, 12-21}
---
const heroProps = { ... } // See the Hero documentation for more info
const carousel = {
    items: 3,
    pagination: {
        type: 'dots'
    }
}
---

<Hero {...heroProps} carousel={carousel}>
    <li>
        <img
            src="/img/hero-slide1.png"
            alt="Hero slide"
            width="500"
            height="250"
        />
    </li>
    <li>...</li>
    <li>...</li>
</Hero>
```

**API:**

```ts
type Props = {
    carousel?: CarouselProps
    list?: IconListProps
} & HeroProps
```


| Prop | Purpose |
| --- | --- |
| carousel | Sets a carousel. Pass an object using the props of a `Carousel` component. |
| list | Sets an icon list. Pass an object using the props of an `IconList` component. |


### How To

- **Documentation**: https://webcoreui.dev/blocks/how-to

**Example:**

```astro
---
const steps = [
    {
        img: {
            src: '/img/intro.webp',
            alt: 'Selecting a block from the CLI',
            width: 250,
            height: 250
        },
        title: 'Choose a Block',
        description: 'Use the CLI to copy available UI blocks...'
    }
]
---

<HowTo steps={steps} />
```

**API:**

```ts
type HowToProps = {
    showStepNumber?: boolean
    scrollable?: boolean
    fillContainer?: boolean
    steps: {
        img: {
            src: string
            alt: string
            width: number
            height: number
            lazy?: boolean
        }
        title: string
        description: string
    }[]
    className?: string
} & Pick<CardProps, 'compact' | 'secondary'>
```


| Prop | Default | Purpose |
| --- | --- | --- |
| showStepNumber | true | Shows step numbers for each card. |
| scrollable | true | Displays the steps next to each other with a scroll. |
| fillContainer | true | Makes one step take up the full width of its container. |
| steps.img.src | - | Sets the path for the image. |
| steps.img.alt | - | Sets an alternate text for the image. |
| steps.img.width | - | Sets the width of the image. |
| steps.img.height | - | Sets the height of the image. |
| steps.img.lazy | false | Set to <code>true</code> to enable lazy loading for the image. |
| steps.title | - | Sets the title of the step. |
| steps.description | - | Sets the description of the step. Supports HTML. |
| className | - | Pass additional CSS classes for the component. |


### List with Images

- **Documentation**: https://webcoreui.dev/blocks/list-with-images

**Example:**

```astro
---
// Your import path to your icons might differ
// Icons are provided with the component
import terminalIcon from '@icons/terminal.svg?raw'

const listWithImageItems = [
    {
        badge: {
            text: 'Step 1',
            icon: terminalIcon,
            theme: 'warning'
        },
        img: {
            src: '/img/step-1.png',
            alt: 'Installing Astro UI library',
            width: 250,
            height: 250
        },
        title: 'Setup',
        description: 'Install the Astro UI component library...',
        cta: {
            text: 'Get Started ->',
            href: '/get-started'
        }
    },
    { ... },
    { ... }
]
---

<ListWithImages items={listWithImageItems} />
```

**API:**

```ts
type ListWithImagesProps = {
    items: {
        badge?: {
            text: string
            icon?: string
        } & BadgeProps
        img: {
            src: string
            alt: string
            width: number
            height: number
            lazy?: boolean
        }
        title: string
        description: string
        cta?: {
            text?: string
            icon?: string
        } & ButtonProps
    }[]
    secondary?: boolean
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items.badge | Sets a badge above the title. |
| items.badge.text | Sets the text for the badge. |
| items.badge.icon | Sets an icon for the badge. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| items.img.src | Sets the path for the list item image. |
| items.img.alt | Sets an alternate text for the image. |
| items.img.width | Sets the width of the image. |
| items.img.height | Sets the height of the image. |
| items.img.lazy | Set to <code>true</code> to enable lazy loading for the image. |
| items.title | Sets a title for the item. |
| items.description | Sets a description for item. |
| items.cta | Sets a CTA button under the description. |
| items.cta.text | Sets the label for the CTA. |
| items.cta.icon | Sets an icon for the CTA. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| secondary | Changes the order of the alternating layout. |
| className | Pass additional CSS classes for the <code>ListWithImages</code> component. |


### Morphing Text

- **Documentation**: https://webcoreui.dev/blocks/morphing-text

**Example:**

```astro
<MorphingText texts={['Astro', 'Svelte', 'React']} />
```

**API:**

```ts
type MorphingTextProps = {
    texts: string[]
    size?: string
    animationTime?: number
    wordDelay?: number
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| texts | [] | Sets the list of texts. |
| size | 72pt | Sets the font size of the texts. |
| animationTime | 1 | Sets the animation time in seconds. |
| wordDelay | 1 | Sets the delay between words in seconds. |
| className | - | Pass additional CSS classes for the component. |


### Newsletter Card

- **Documentation**: https://webcoreui.dev/blocks/newsletter-card

**Example:**

```astro
<NewsletterCard
    title="Preview - card title"
    heading="Join our Newsletter"
    text="Don't miss out on <b>important updates</b>!"
    img={{
        src: '/img/newsletter.png',
        alt: 'Newsletter',
        width: 250,
        height: 300
    }}
/>
```

**API:**

```ts
type NewsletterCardProps = {
    heading?: string
    text?: string
    form?: FormField[]
    alternate?: boolean
    img: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
} & CardProps
```


| Prop | Purpose |
| --- | --- |
| heading | Sets a heading for the card. |
| text | Sets a text under the heading. Supports the use of HTML. |
| form | Sets a custom form for the card. Defaults to an email input and a submit button. |
| alternate | Set to <code>true</code> to switch the layout. |
| img.src | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.lazy | Set to <code>true</code> to enable lazy loading for the image. |


### Newsletter Popup

- **Documentation**: https://webcoreui.dev/blocks/newsletter-popup

**Example:**

```astro
---
import { Button } from 'webcoreui/astro'
---

<Button className="button">Show Popup</Button>

<NewsletterPopup
    className="popup"
    title="Preview - card title"
    heading="Join our Newsletter"
    text="Don't miss out on <b>important updates</b>!"
    img={{
        src: '/img/newsletter.png',
        alt: 'Newsletter',
        width: 250,
        height: 300
    }}
/>

<script>
    import { modal } from 'webcoreui'

    modal({
        trigger: '.button',
        modal: '.popup'
    })
</script>
```

**API:**

```ts
type NewsletterCardProps = {
    heading?: string
    text?: string
    form?: FormField[]
    img: {
        src: string
        alt: string
        width: number
        height: number
    }
} & ModalProps
```


| Prop | Purpose |
| --- | --- |
| heading | Sets a heading for the popup. |
| text | Sets a text under the heading. Supports the use of HTML. |
| form | Sets a custom form for the popup. Defaults to an email input and a submit button. |
| img.src | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |


### Overview

- **Documentation**: https://webcoreui.dev/blocks/overview

**Example:**

```astro
---
import Overview from '@blocks/Overview/Overview.astro'
import { moon, sun } from 'webcoreui/icons'

const overviewItems = [
    { text: 'Overview Component', isTitle: true },
    {
        text: '-> Getting Started',
        subText: '5min read',
        buttons: [{
            text: 'Preview'
        }]
    },
    { text: '-> Setting up Astro', subText: '3min read' },
    { text: '-> Integrating Webcore', subText: '2min read' },
    { text: 'Setting Up The Project', isTitle: true },
    { text: '-> Imports', subText: '1min read' },
    { text: '-> CSS Configuration', subText: '2min read' },
    { text: '-> Using Themes', subText: `${moon}/${sun}` }
]
---

<Overview items={overviewItems} />
```

**API:**

```ts
type OverviewProps = {
    items: {
        isTitle?: boolean
        text: string
        buttons?: ({
            text: string
            icon?: IconProps['type'] | string
        } & ButtonProps)[]
        subText?: string
    }[]
    numbered?: boolean
    dotted?: boolean
    color?: string
    className?: string
    [key: string]: any
}
```


| Prop | Purpose |
| --- | --- |
| items | Sets the steps for the overview. |
| items.isTitle | Sets the item as a title, making it possible to visually group items. |
| items.text | Sets the text for the step. |
| items.buttons | Adds buttons next to the step. |
| items.buttons.text | Sets the text for the button. |
| items.buttons.icon | Sets an icon for the button. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| items.subText | Adds additional text next to buttons. |
| numbered | Displays formatted indexes in front of items. |
| dotted | Sets the border style between items to dotted. |
| color | Sets the color of index numbers when <code>numbered</code> is set to <code>true</code>. |
| className | Pass additional CSS classes for your <code>Overview</code> component. |


### Post

- **Documentation**: https://webcoreui.dev/blocks/post

**Example:**

```astro
<Post
    img={{
        src: '/img/featured-img.png',
        alt: 'post',
        width: 600,
        height: 200
    }}
    badge={{
        text: 'Core Concept',
        icon: rocket // Import your icon as an SVG string
    }}
    title="Understanding Astro Islands Architecture"
    author={{
        avatar: {
            img: '/img/avatars/john-wayne.png'
        },
        name: 'John Wayne'
    }}
    publishDate="2024/03/12"
    description="Astro Islands let you ship zero JavaScript..."
    href="/astro-islands"
    cta="Read more ->"
/>
```

**API:**

```ts
type PostProps = {
    img?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    badge?: {
        text: string
        icon?: string
    } & BadgeProps
    title: string
    author?: {
        avatar?: AvatarProps
        name: string
    }
    publishDate?: string
    description: string
    href: string
    target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
    cta?: string
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| img | Sets a featured image for the post. |
| img.src | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.lazy | Set to `true` to enable lazy loading for the image. |
| badge | Sets a badge for the post below the image. |
| badge.text | Sets the text for the badge. |
| badge.icon | Sets an icon for the badge. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| title | Sets the title of the post. |
| author | Sets the author of the post. |
| author.avatar | Sets an optional avatar for the author. |
| author.name | Sets the name of the author. |
| publishDate | Sets the publish date of the post under the author's name. |
| description | Sets a short description of the post. |
| href | Sets the href for the image, title and cta. |
| target | Sets the target of the link. |
| cta | Sets a CTA for the post under the description. |
| className | Pass additional CSS classes for the card. |


### Pricing Table

- **Documentation**: https://webcoreui.dev/blocks/pricing-table

**Example:**

```astro
<PricingTable options={[{
    title: 'Simple Pricing Table',
    price: 'Free',
    features: [
        'Pricing Table with only required fields'
    ]
}]} />
```

**API:**

```ts
type PricingTableProps = {
    options: {
        ribbon?: {
            colorText?: string
            colorStart?: string
            colorEnd?: string
            label: string
        },
        recommended?: boolean
        secondary?: boolean
        glow?: boolean
        glowOptions?: GradientCardProps
        title: string
        price: string
        period?: string
        priceSubText?: string
        discountedPrice?: number
        features: string[]
        buttons?: ({
            text: string
            icon?: string
        } & ButtonProps)[]
    }[]
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| options | Sets the options for the pricing table. |
| options.ribbon.label | Sets a ribbon for the option. |
| options.ribbon.colorText | Sets the text color of the ribbon. |
| options.ribbon.colorStart | Sets the start color of the ribbon's background. |
| options.ribbon.colorEnd | Sets the end color of the ribbon's background. |
| recommended | Sets the option as recommended, adding a scale effect. |
| secondary | Set to <code>false</code> to change the background of the option to primary. |
| glow | Adds a glow effect to the option. |
| glowOptions | Customizes the appearance of the glow. See the <a href="/blocks/gradient-card#api">API documentation</a> of the <code>GradientCard</code>. |
| title | Sets a title for the option. |
| price | Sets a price for the option. |
| period | Sets a period after the price. |
| priceSubText | Sets a muted text under the price. |
| discountedPrice | Sets a discounted price, showing original price with a strikethrough. |
| features | Adds a list of features. Use an array of strings. |
| buttons | Sets CTA buttons at the bottom of the option. |
| buttons.text | Sets the label for the CTA. |
| buttons.icon | Sets an icon for the CTA. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| className | Pass additional CSS classes for pricing table. |


### Promotional Card

- **Documentation**: https://webcoreui.dev/blocks/promotional-card

**Example:**

```astro
---
const promotionalCardProps = {
    img: {
        src: '/img/featured.png',
        alt: 'Featured image',
        height: 150,
        width: 500
    },
    badge: {
        text: 'New components',
        theme: 'success',
        rounded: true,
        small: true
    },
    buttons: [{ text: 'See changes ->', theme: 'secondary' }],
    meta: 'v1.2.0 • 2024 March 12',
    title: 'New Release'
}
---

<PromotionalCard {...promotionalCardProps}>
    <span class="muted">Introducing new components for our library!</span>
</PromotionalCard>
```

**API:**

```ts
type PromotionalCardProps = {
    img?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    badge?: ({
        text: string
        icon?: string
    } & BadgeProps)
    meta?: string
    title: string
    buttons?: ({
        text: string
        icon?: string
    } & ButtonProps)[]
    className?: string
} & CardProps
```


| Prop | Purpose |
| --- | --- |
| img | Sets a thumbnail image for the card. |
| img.src | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.lazy | Set to <code>true</code> to enable lazy loading for the image. |
| badge | Sets a badge above the title. |
| badge.text | Sets the text for the badge. |
| badge.icon | Sets an icon for the badge. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| meta | Sets additional text next to the badge. |
| title | Sets the title of the card. |
| buttons | Sets CTA buttons at the bottom of the card. |
| buttons.text | Sets the label for the CTAs. |
| buttons.icon | Sets an icon for the CTAs. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| className | Pass additional CSS classes for the <code>PromotionalCard</code> component. |


### Rotating Text

- **Documentation**: https://webcoreui.dev/blocks/rotating-text

**Example:**

```astro
<RotatingText
    words={['Astro', 'Svelte', 'React']}
    colors={['#B545ED', '#FF3E00', '#61DAFB']}
/>
```

**API:**

```ts
type RotatingTextProps = {
    words: string[]
    colors?: string[]
    letterDelayAmount?: number
    wordDelayAmount?: number
    animationInterval?: number
    transformOrigin?: string
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| words | [] | Sets the words that are animated. |
| colors | [] | Sets the color of each word. Matches the index of the <code>words</code> prop. |
| letterDelayAmount | 30 ms | Sets the animation delay between each letter. |
| wordDelayAmount | 300 ms | Sets the animation delay between each word. |
| animationInterval | 4000 ms | Sets the speed of the animation. |
| transformOrigin | center | Sets the transform origin for the letters. |
| className | - | Pass additional CSS classes for the text. |


### Scroll Banner

- **Documentation**: https://webcoreui.dev/blocks/scroll-banner

**Example:**

```astro
---
const images = [
    {
        src: '/img/logo.svg',
        alt: 'Logo',
        width: 125,
        height: 200
    },
    { ... }
]
---

<ScrollBanner images={images} />
```

**API:**

```ts
type ScrollBannerProps = {
    images: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }[]
    imageSize?: number,
    animate?: boolean
    animationSpeed?: number
    reverse?: boolean
    shadows?: boolean
    shadowWidth?: number
    stopOnHover?: boolean
    desaturated?: boolean
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| images | - | Sets the images. |
| images.src | - | Sets the path for the image. |
| images.alt | - | Sets an alternate text for the image. |
| images.width | - | Sets the width of the image. |
| images.height | - | Sets the height of the image. |
| images.lazy | - | Set to <code>true</code> to enable lazy loading for the image. |
| imageSize | 40px | Sets the height of the images. |
| animate | true | Enables infinite scroll. |
| animationSpeed | 30s | Sets the animation speed. |
| reverse | false | Reverses the direction of the scroll. |
| shadows | true | Adds shadows to the side of the scroll banner. |
| shadowWidth | 50px | Sets the width of the shadows. |
| stopOnHover | true | Stops the scroll animation on hover. |
| desaturated | false | Desaturates images. |
| className | - | Pass additional CSS classes for the <code>ScrollBanner</code> component. |


### Scroll Progress

- **Documentation**: https://webcoreui.dev/blocks/scroll-progress

**Example:**

```astro
<ScrollProgress
    colorFrom="var(--w-color-info)"
    colorTo="var(--w-color-success)"
/>
```

**API:**

```ts
type ScrollProgressProps = {
    top?: number
    size?: number
    colorFrom?: string
    colorTo?: string
    rounded?: boolean
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| top | 0 | Sets the top position of the scroll progress. |
| size | 2px | Sets the height of the progress bar. |
| colorFrom | primary | Sets the starting color. |
| colorTo | primary | Sets the ending color. |
| rounded | false | Set to <code>true</code> to enable rounding. |
| className | - | Pass additional CSS classes for the component. |


### Spotlight

- **Documentation**: https://webcoreui.dev/blocks/spotlight

**Example:**

```astro
<Spotlight className="spotlight">
    <PromotionalCard
        ...
        className="promotional-card"
    />
</Spotlight>

<style lang="scss">
    @use 'webcoreui/config' as *;

    .spotlight {
        min-height: 600px;
        height: 600px;
    }

    .promotional-card {
        @include position(absolute, h-center, t20px);
    }
</style>
```

**API:**

```ts
type SpotlightProps = {
    blurAmount?: number
    animationTiming?: string
    radialMinWidth?: string
    radialMaxWidth?: string
    coneMinWidth?: string
    coneMaxWidth?: string
    background?: string
    rgbColor?: string
    particleAmount?: number
    particleSize?: number
    particleDuration?: number
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| blurAmount | 15px | Sets the amount of blur effect on the spotlight. |
| animationTiming | ease-in-out | Sets the animation easing of the spotlight. |
| radialMinWidth | 40% | Sets the minimum width of the animated radial gradient. |
| radialMaxWidth | 50% | Sets the maximum width of the animated radial gradient. |
| coneMinWidth | 60% | Sets the minimum width of the animated cone. |
| coneMaxWidth | 70% | Sets the maximum width of the animated cone. |
| background | radial-gradient(#000, #111) | Sets the background color of the component. |
| rgbColor | 255, 255, 255 | Sets the RGB color of the spotlight and particles. |
| particleAmount | 2 | Sets the amount of particles spawned at a set interval. |
| particleSize | 3 | Sets the base radius of each particle. Particles can randomly have a smaller or larger size based off this value. |
| particleDuration | 20 | Sets the time it takes for the particles to finish animation. |
| className | - | Pass additional CSS classes for the component. |


### Stars

- **Documentation**: https://webcoreui.dev/blocks/stars

**Example:**

```astro
<Stars className="star" />
```

**API:**

```ts
type AnimateStarsProps = {
    directionDegree?: number
    size?: number
    speed?: number
    density?: number
    padding?: number
    randomized?: boolean
    debug?: boolean
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| directionDegree | 45 | Sets the direction of the stars to a 45° angle by default. |
| size | 1 | Sets the size of the stars. |
| speed | 1 | Sets the animation speed of stars. |
| density | 5 | Sets grid density, where 5=5x5 grid pattern. |
| padding | 1 | Sets the area of the canvas to be used, where 1 equals to 100%. |
| randomized | true | Set to <code>false</code> for synchronized stars, <code>true</code> for randomized timing. |
| debug | false | Set to <code>true</code> to draw debug points for emit locations. |
| className | - | Pass additional CSS classes to the <code>canvas</code>. |


### Sticky CTA

- **Documentation**: https://webcoreui.dev/blocks/sticky-cta

**Example:**

```astro
---
const cta = {
    text: 'Get Started ->',
    theme: 'secondary',
    href: '#'
}
---

<StickyCta cta={cta}>
    Unlock exclusive content
</StickyCta>
```

**API:**

```ts
type StickyCtaProps = {
    img?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    cta: ({
        text: string
        icon?: string
    } & ButtonProps)
    theme?: 'secondary'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
    showBefore?: string
    showAfterEnter?: string
    showAfter?: string
    rootMargin?: string
    className?: string
    id?: string
}
```


| Prop | Purpose |
| --- | --- |
| img | Sets a small thumbnail image for the CTA element. |
| img.src | Sets the path for the image. |
| img.alt | Sets an alternate text for the image. |
| img.width | Sets the width of the image. |
| img.height | Sets the height of the image. |
| img.lazy | Set to <code>true</code> to enable lazy loading for the image. |
| cta | Sets the CTA button. |
| cta.text | Sets the label for the CTA. |
| cta.icon | Sets an icon for the CTA. You can pass SVG strings, or an <a href="/docs/icon#available-icons">icon type</a> for Astro components. |
| theme | Sets the theme of the sticky CTA. |
| showBefore | Shows the sticky CTA before it reaches the target selector. |
| showAfterEnter | Shows the sticky CTA after the target selector enters the viewport. |
| showAfter | Shows the sticky CTA after the target selector exits the viewport. |
| rootMargin | Sets a custom root margin for the trigger element. |
| className | Pass additional CSS classes for the <code>StickyCta</code> component. |
| id | Specify a unique ID for the <code>StickyCta</code> component. |


### Testimonial

- **Documentation**: https://webcoreui.dev/blocks/testimonial

**Example:**

```astro
<Testimonial
    text='"Add user testimonies to improve trustworthiness"'
    name="Nicole Williams"
    role="Developer"
    avatar={{
        img: '/img/avatar2.png',
        alt: 'Nicole'
    }}
/>
```

**API:**

```ts
type TestimonialProps = {
    text: string
    name: string
    avatar?: AvatarProps
    showIcon?: boolean
    role?: string
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| text | Sets the text for the testimonial. |
| name | Sets the name of the reviewer. |
| avatar | Sets an avatar for the reviewer. |
| showIcon | Shows a quote icon above the testimony. |
| role | Sets the role of the reviewer. |
| className | Pass additional CSS classes for the component. |


### Testimonials

- **Documentation**: https://webcoreui.dev/blocks/testimonials

**Example:**

```astro
---
const testimonials = [{
    text: '"Add user testimonies to improve trustworthiness"',
    name: 'Nicole Williams',
    role: 'Developer',
    avatar: {
        img: '/img/nicole.png',
        alt: 'Nicole'
    }
}, { ... }, { ... }, { ... }]
---

<Testimonials testimonials={testimonials} />
```

**API:**

```ts
type TestimonialsProps = {
    testimonials: TestimonialProps[]
    title?: string
    subTitle?: string
    showIcon?: boolean
    className?: string
} & Omit<CarouselProps, 'items'>
```


| Prop | Purpose |
| --- | --- |
| testimonials | Sets a list of testimonials for the carousel. |
| title | Sets a title for the testimonials. |
| subTitle | Sets a subtitle under the title. |
| showIcon | Shows a quote icon above the testimonials. |
| className | Pass additional CSS classes for the component. |


### Top3

- **Documentation**: https://webcoreui.dev/blocks/top3

**Example:**

```astro
---
const items = [
    {
        ribbon: {
            label: 'Best Value'
        },
        img: {
            src: '/img/properties/property1.png',
            alt: 'Modern apartment in downtown area',
            width: 600,
            height: 250
        },
        title: 'Modern Downtown Apartment',
        rating: {
            score: 4.8,
            color: 'var(--w-color-warning)',
            showText: true,
            text: '{0}/{1}'
        },
        description: 'A stylish 2-bedroom apartment...',
        cta: {
            text: 'View Details ->'
        }
    },
    { ... },
    { ... }
]
---

<Top3 items={items} />
```

**API:**

```ts
type Top3Props = {
    items: {
        ribbon?: {
            colorText?: string
            colorStart?: string
            colorEnd?: string
            label: string
        },
        img: {
            src: string
            alt: string
            width: number
            height: number
            lazy?: boolean
        }
        title: string
        rating?: RatingProps
        description?: string
        secondary?: boolean
        cta?: ({
            text: string
            icon?: string
        } & ButtonProps)
    }[]
    className?: string
}
```


| Prop | Purpose |
| --- | --- |
| items | Sets an array of items to display. |
| items.ribbon | Optional ribbon configuration for each item, including text and colors. |
| items.ribbon.colorText | Sets the text color of the ribbon. |
| items.ribbon.colorStart | Sets the starting background color of the ribbon gradient. |
| items.ribbon.colorEnd | Sets the ending background color of the ribbon gradient. |
| items.ribbon.label | Sets the text label on the ribbon. |
| items.img.src | Sets the source URL of the image. |
| items.img.alt | Sets the alt text for the image. |
| items.img.width | Sets the width of the image. |
| items.img.height | Sets the height of the image. |
| items.img.lazy | Set to `true` to enable image lazy loading. |
| items.title | Sets the title of the item. |
| items.rating | Optional rating configuration for the item using `RatingProps`. |
| items.description | Sets an optional description for the item. |
| items.secondary | Set to `true` to apply secondary styling to the item's card. |
| items.cta | Optional CTA button configuration using `ButtonProps`. |
| items.cta.text | Sets the text displayed on the CTA. |
| items.cta.icon | Sets an optional icon to display on the CTA. |
| className | Pass additional CSS classes for the component. |


### Toplist

- **Documentation**: https://webcoreui.dev/blocks/toplist

**Example:**

```astro
---
const items = [
    {
        img: {
            src: '/img/property.png',
            alt: 'Property',
            width: 100,
            height: 125
        },
        title: 'Toplist Component',
        subTitle: 'Set subtitles',
        meta: 'Last booked 2 minutes ago',
        text: 'Add description with <b>HTML</b> support.'
    },
    { ... }
    { ... }
]
---

<Toplist items={items} />
```

**API:**

```ts
type ToplistProps = {
    items: ({
        href?: string
        target?: '_self'
            | '_blank'
            | '_parent'
            | '_top'
            | '_unfencedTop'
        img: {
            src: string
            alt: string
            width: number
            height: number
            lazy?: boolean
        }
        title: string
        subTitle?: string
        meta?: string
        text: string
        ribbon?: ({
            text: string
        } & RibbonProps)
    } & CardProps)[]
    showPosition?: boolean
    connected?: boolean
    className?: string
}
```


| Prop | Default | Purpose |
| --- | --- | --- |
| items | - | Pass an array of objects to set the toplist items. |
| items.href | - | Sets a link for the toplist item. |
| items.target | - | Sets the target for the link. |
| items.img | - | Sets an image for the toplist item. |
| items.img.src | - | Sets the path for the image. |
| items.img.alt | - | Sets an alternate text for the image. |
| items.img.width | - | Sets the width of the image. |
| items.img.height | - | Sets the height of the image. |
| items.img.lazy | - | Set to <code>true</code> to enable lazy loading for the image. |
| items.title | - | Sets the title for the item. |
| items.subTitle | - | Sets a sub-title for the item. |
| items.meta | - | Sets additional information under the sub-title. |
| items.text | - | Sets a description for the item. |
| ribbon.text | - | Sets a ribbon for the item. |
| showPosition | true | Shows position numbers in the top-right corner of each item. |
| connected | true | Connects the toplist items with a line. |
| className | - | Pass additional CSS classes for your toplist. |




## Templates Reference

### Authentication

- **Documentation**: https://webcoreui.dev/templates/authentication

**Example:**

```astro
---
import Authentication from '@templates/Authentication.astro'

const layout = {
    seo: { ... } // Your SEO configuration
    menu: { ... } // Menu configuration
    footer: { ... } // Footer configuration
}
---

<Authentication
    layout={layout}
    banner={{ ... }} {/* Your banner image */}
    type={'login'} {/* Type of form to show ('signup' | 'login'). Defaults to signup */}
    loginForm={{ ... }} {/* Customize your login form */}
    signUpForm={{ ... }} {/* Customize your sign up form */}
    tabs={{ ... }} {/* Customize your tabs when both forms are displayed */}
    reverse={true} {/* Reverse your layout. Defaults to false */}
    className="auth" {/* Pass additional CSS classes to your layout */}
/>
```

**API:**

```ts
type AuthenticationProps = {
    layout: LayoutProps
    banner?: {
        src: string
        alt: string
        width: number
        height: number
    }
    type?: 'signup' | 'login'
    loginForm?: FormProps
    signUpForm?: FormProps
    tabs?: TabsProps
    reverse?: boolean
    className?: string
    [key: string]: any
}
```


### Blog

- **Documentation**: https://webcoreui.dev/templates/blog

**Example:**

```astro
---
import Blog from '@templates/Blog.astro'

const layout = {
    seo: { ... } // Your SEO configuration
    menu: { ... } // Menu configuration
    footer: { ... } // Footer configuration
}
---

<Blog
    layout={layout}
    hero={{ ... }} {/* Your Hero section */}
    tilesTitle="Explore" {/* Set the title to your tiles section */}
    tiles={[ ... ]} {/* Set your category tiles with icons */}
    postsTitle="Latest Articles" {/* Set the title to your latest articles section */}
    posts={[ ... ]} {/* Set your latest articles */}
    recommendedTitle="Recommended" {/* Set the title of your recommended articles section */}
    recommended={[ ... ]} {/* Set your recommended articles */}
    authorTitle="About the Author" {/* Set the title of your author block */}
    author={{ ... }} {/* Set your author */}
>
    <p>Here you can specify additional content on the page.</p>
</Blog>
```

**API:**

```ts
type BlogProps = {
    layout: LayoutProps
    hero?: HeroProps
    tilesTitle?: string
    tiles?: TilesProps
    postsTitle?: string
    posts?: BlogCardProps[]
    recommendedTitle?: string
    recommended?: BlogCardProps[]
    authorTitle?: string
    author?: AuthorProps
    [key: string]: any
}
```


### Landing

- **Documentation**: https://webcoreui.dev/templates/landing-page

**Example:**

```astro
---
import LandingPage from '@templates/LandingPage.astro'

const layout = {
    seo: { ... } // Your SEO configuration
    menu: { ... } // Menu configuration
    footer: { ... } // Footer configuration
}
---

<LandingPage
    layout={layout}
    hero={{ ... }} {/* Your hero section */}
    scrollBanner={{ ... }} {/* Your hero section */}
    testimonials={{ ... }} {/* Testimonials carousel displayed under the scroll banner */}
    features={{ ... }} {/* Feature tiles with an optional heading */}
    comparison={{ ... }} {/* Comparison table comparing product with other similar products */}
    pricingTable={{ ... }} {/* Pricing options */}
    testimonialAfterPricing={{ ... }} {/* Additional testimonial under the pricing table */}
    faq={{ ... }} {/* Your FAQ section */}
    ctaWithBackground={{ ... }} {/* Last call to action with a background image */}
>
    <span slot="faq" class="muted">
        Have another question? Contact us through our <a href="/contact">contact page</a>.
    </span>
</LandingPage>
```

**API:**

```ts
type LandingPageProps = {
    layout: LayoutProps
    hero: HeroProps
    scrollBanner?: ScrollBannerProps
    testimonials?: TestimonialsProps
    features?: { title?: string } & FeaturesGridProps
    comparison?: { title?: string } & ComparisonProps
    pricingTable: { title?: string } & PricingTableProps
    testimonialAfterPricing?: TestimonialProps
    faq?: FAQProps
    ctaWithBackground?: CtaWithBackgroundProps
    [key: string]: any
}
```


### Portfolio

- **Documentation**: https://webcoreui.dev/templates/portfolio

**Example:**

```astro
---
import Portfolio from '@templates/Portfolio.astro'

const layout = {
    seo: { ... } // Your SEO configuration
    menu: { ... } // Menu configuration
    footer: { ... } // Footer configuration
}
---

<Portfolio
    layout={layout}
    hero={{ ... }} {/* Your Hero section */}
    aboutMe={{ ... }} {/* About Me configuration */}
    ratings={[ ... ]} {/* Display a list of ratings */}
    ratingsOnCta={{ ... }} {/* Toggle on CTA button displayed under ratings */}
    ratingsOffCta={{ ... }} {/* Toggle off CTA button displayed under ratings */}
    hideRatingsAfter={3} {/* Number of ratings to show before the CTA */}
    myWork={[ ... ]} {/* Showcase your most recent work */}
    services={[ ... ]} {/* Provide information about your services */}
    servicesCta={{ ... }} {/* Display a CTA at the end of the portfolio */}
/>
```

**API:**

```ts
type PortfolioRatingsCta = {
    text?: string
    icon?: IconProps['type'] | string
} & ButtonProps

type PortfolioProps = {
    layout: LayoutProps
    hero?: HeroProps
    aboutMe: {
        title?: string
        text: string
        services?: IconListProps['items']
        img?: {
            src: string
            alt: string
            width: number
            height: number
        }
    }
    ratings?: ({
        feedback: string
    } & RatingProps)[]
    ratingsOnCta?: PortfolioRatingsCta
    ratingsOffCta?: PortfolioRatingsCta
    hideRatingsAfter?: number
    myWork?: {
        title?: string
        items: BlogCardProps[]
    }
    servicesTitle?: string
    services?: GridWithIconsProps
    servicesCta?: {
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps
    [key: string]: any
}
```


### Product Page

- **Documentation**: https://webcoreui.dev/templates/product-page

**Example:**

```astro
---
import ProductPage from '@templates/ProductPage.astro'

const layout = {
    seo: { ... } // Your SEO configuration
    menu: { ... } // Menu configuration
    footer: { ... } // Footer configuration
}
---

<ProductPage
    layout={layout}
    images={[ ... ]} {/* Your Carousel images */}
    carousel={{ ... }} {/* Optional Carousel configuration */}
    buttons={[ ... ]} {/* CTA buttons */}
    features={[ ... ]} {/* List of features under CTA */}
    recommended={{ ... }} {/* Recommended items */}
>
    <span>Your main content</span>
</ProductPage>
```

**API:**

```ts
type ProductPageProps = {
    layout: LayoutProps
    images?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }[]
    carousel?: Omit<CarouselProps, 'items'>
    buttons?: ({
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps)[]
    features?: IconListProps['items']
    recommended?: {
        title?: string
        items: BlogCardProps[]
    }
    [key: string]: any
}
```


### Product Details

- **Documentation**: https://webcoreui.dev/templates/product-details

**Example:**

```astro
---
import ProductDetailsPage from '@templates/ProductDetailsPage.astro'

const layout = {
    seo: { ... } // Your SEO configuration
    menu: { ... } // Menu configuration
    footer: { ... } // Footer configuration
}
---

<ProductDetailsPage
    layout={layout}
    reviewSection={{ ... }} {/* Customer reviews */}
    breadcrumbs={{ ... }} {/* Breadcrumb configuration */}
    recommended={{ ... }} {/* Recommended items */}
    details={{ ... }} {/* ProductDetails props */}
    stickyCta={{ ... }} {/* Sticky CTA configuration */}
    showStickyCta={true}
>
    <span>Your main content</span>
</ProductDetailsPage>
```

**API:**

```ts
type ProductDetailsPageProps = {
    layout: LayoutProps
    breadcrumbs?: BreadcrumbProps
    details: ProductDetailsProps
    reviewSection?: {
        title?: string
    } & ReviewsProps
    recommended?: {
        title?: string
        items: ProductCardProps[]
    }
    showStickyCta?: boolean
    stickyCta?: {
        text: string
        cta?: ({
            text: string
            icon?: IconProps['type'] | string
        } & ButtonProps)
    } & Omit<StickyCtaProps, 'showBefore'
        | 'showAfter'
        | 'showAfterEnter'
        | 'cta'
    >
    [key: string]: any
}
```


### Advanced Product Page

- **Documentation**: https://webcoreui.dev/templates/product-page-pro

**Example:**

```astro
{20-30}
---
import ProductPage from '@templates/ProductPage.astro'

const layout = {
    seo: { ... } // Your SEO configuration
    menu: { ... } // Menu configuration
    footer: { ... } // Footer configuration
}
---

<ProductPage
    layout={layout}
    images={[ ... ]} {/* Your Carousel images */}
    carousel={{ ... }} {/* Optional Carousel configuration */}
    buttons={[ ... ]} {/* CTA buttons */}
    features={[ ... ]} {/* List of features under CTA */}
    recommended={{ ... }} {/* Recommended items */}

    {/* Additions to the free product page template: */}
    breadcrumbs={{ ... }} {/* Breadcrumb configuration */}
    faq={{ ... }} {/* FAQs */}
    reviewSection={{ ... }} {/* Customer reviews */}
    showStickyCta={true}
    stickyCta={{ ... }} {/* Sticky CTA configuration */}
    price="$7.99"
    pricePeriod="/month"
    pricingInfo={
      text: 'This product supports purchasing power parity...',
      theme: 'info'
    }
>
    <span>Your main content</span>
</ProductPage>
```

**API:**

```ts
type ProductPageProps = {
    layout: LayoutProps
    images?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }[]
    carousel?: Omit<CarouselProps, 'items'>
    buttons?: ({
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps)[]
    features?: IconListProps['items']
    recommended?: {
        title?: string
        items: ProductCardProps[]
    }
    breadcrumbs?: BreadcrumbProps
    price?: string
    pricePeriod?: string
    pricingInfo?: {
        text: string
    } & AlertProps
    faq?: FAQProps
    reviewSection?: {
        title?: string
    } & ReviewsProps
    showStickyCta?: boolean
    stickyCta?: {
        text: string
        cta?: ({
            text: string
            icon?: IconProps['type'] | string
        } & ButtonProps)
    } & Omit<StickyCtaProps, 'showBefore'
        | 'showAfter'
        | 'showAfterEnter'
        | 'cta'
    >
    [key: string]: any
}
```


### Roadmap

- **Documentation**: https://webcoreui.dev/templates/roadmap

**Example:**

```astro
---
import Roadmap from '@templates/Roadmap.astro'

const layout = {
    seo: { ... } // Your SEO configuration
    menu: { ... } // Menu configuration
    footer: { ... } // Footer configuration
}
---

<Roadmap
    layout={layout}
    title="Learning Astro" {/* h1 title of your page */}
    subTitle="A step-by-step journey..." {/* An optional subtitle */}
    badge={{ ... }} {/* Badge for further context displayed under the titles */}
    topics={{ ... }} {/* A list of topics rendered with icons */}
    roadmap={{ ... }} {/* The data for the main roadmap */}
    relatedRoadmaps={{ ... }} {/* Related roadmaps under the main roadmap */}
    cardWithCta={{ ... }} {/* Card with call to action */}
    recommended={{ ... }} {/* A list of recommended content */}
>
    <Fragment slot="right-sidebar">
        <h2>About This Roadmap</h2>
        ...
    </Fragment>
</Roadmap>
```

**API:**

```ts
type RoadmapProps = {
    layout: LayoutProps
    title: string
    subTitle?: string
    badge?: {
        text: string
        icon?: IconProps['type'] | string
    } & BadgeProps
    topics?: {
        title?: string
        items: (Omit<IconListProps['items'][number], 'icon'> & {
            icon?: IconListProps['items'][number]['icon']
        })[]
    } & Pick<IconListProps, 'color' | 'columns'>
    roadmap: ToplistProps
    relatedRoadmaps?: { title?: string } & ToplistProps
    cardWithCta?: {
        children: string
    } & CardWithCtaProps
    recommended?: {
        title?: string
        items: BlogCardProps[]
    }
    [key: string]: any
}
```


### Spotlight Page

- **Documentation**: https://webcoreui.dev/templates/spotlight

**Example:**

```astro
---
import Spotlight from '@templates/Spotlight.astro'

const layout = {
    seo: { ... } // Your SEO configuration
    menu: { ... } // Menu configuration
    footer: { ... } // Footer configuration
}
---

<Spotlight layout={layout} carousel={{ items: 3 }}>
    <li data-slide="1">1st slide content</li>
    <li data-slide="2">2nd slide content</li>
    <li data-slide="3">3rd slide content</li>
</Spotlight>
```

**API:**

```ts
type SpotlightProps = {
    layout: LayoutProps
    carousel: CarouselProps
    spotlight?: SpotlightComponentProps
}
```




## Utilities

- **Documentation**: https://webcoreui.dev/docs/utilities

### ClassNames

Use the `classNames` function to dynamically and conditionally generate valid CSS class names.

**Example**:

```js
import { classNames } from 'webcoreui'

classNames(['avatar', true && 'borderless']) -> 'avatar borderless'
classNames(['avatar', false && 'borderless', null]) -> 'avatar'
```

**API**:

```ts
const classNames: (classes: any[]) => string
```

### Cookies

To work with cookies, use the `getCookie`, `setCookie`, and `removeCookie` functions.

**Example**:

```js
// Getting cookies:
import { getCookie } from 'webcoreui'

getCookie('w-theme')

// Setting cookies:
import { setCookie } from 'webcoreui'

setCookie('w-theme', 'theme-dark', 30)

// Removing cookies:
import { removeCookie } from 'webcoreui'

removeCookie('w-theme')
```

**API**:

```ts
const setCookie: (name: string, value: string, days: number) => void
const getCookie: (name: string) => string | null
const removeCookie: (name: string) => void
```

### Debounce

Use the `debounce` function to limit the rate at which a function is executed.

**Example**:

```js
import { debounce } from 'webcoreui'

const callbackWithDebounce = debounce(() => {
    console.log('called with debounce')
})

new ResizeObserver(() => {
    callbackWithDebounce()
}).observe(document.body)

// Call `.cancel` to cancel a debounce earlier
callbackWithDebounce.cancel()
```

**API**:

```ts
const debounce: <T extends (...args: any[]) => any>(
    fn: T,
    waitFor?: number
) => {
    (...args: Parameters<T>): void
    cancel: () => void
}
```

### DOM Utilities

Use the following utility functions to work with the DOM.

**Example**:

```js
// Getting elements:
import { get } from 'webcoreui'

const element = get('.selector')        // Get a single DOM element
const element = get('.selectors', true) // Get all DOM elements with the selector

// Adding event listeners:
import { on } from 'webcoreui'

on('.my-buttons', 'click', () => console.log('Button clicked.'), true)
```

**API**:

```ts
const get: (selector: string, all?: boolean) => Element | NodeListOf<Element> | null
const on: (
    selector: string | HTMLElement | Document,
    event: string,
    callback: any,
    all?: boolean
) => void
```

### Events

To work with custom events, use the `dispatch` and `listen` functions.

**Example**:

```js
import { listen, dispatch } from 'webcoreui'

listen('theme-switched', theme => {
    console.log(theme) // 'theme-dark'
})

dispatch('theme-switched', 'theme-dark')
```

To remove the listener, assign the `listen` function to a variable, and call the `remove` method:

```js
import { listen, dispatch } from 'webcoreui'

const event = listen('theme-switched', theme => {
    console.log(theme) // 'theme-dark'
})

dispatch('theme-switched', 'theme-dark')

// You can later remove the listener by calling .remove() on the event
event.remove()
```

**API**:

```ts
const dispatch: (event: string, detail: unknown) => void
const listen: (event: string, callback: (e: any) => unknown) => {
    remove: () => void
}
```

### Interactivity

Use the `bodyFreeze` function to prevent the window from scrolling.

**Example**:

```js
import { bodyFreeze } from 'webcoreui'

bodyFreeze() // Freezes the window from scrolling
bodyFreeze(false) // Unfreezes the window
```

**API**:

```ts
const bodyFreeze: (freeze: boolean) => void
```

### Interpolate

Use the following math functions if you need to transform numbers.

**Clamp example**:

```js
import { clamp } from 'webcoreui'

// Clamp 50 between 0 and 100
clamp(50, 0, 100) -> 50

// Clamp 100 between 0 and 50
clamp(100, 0, 50) -> 50

// Clamp 50 between 100 and 200
clamp(50, 100, 200) -> 100
```

**Lerp example**:

```js
import { lerp } from 'webcoreui'

// 50% between 0 and 10
lerp(0, 10, .5) -> 5

// 50% between 0 and 100
lerp(0, 100, .5) -> 50

// 200% between 0 and 100
lerp(0, 100, 2) -> 200

// 20% between 100 and 200
lerp(100, 200, .2) -> 120
```

**Inverse lerp example**:

```js
import { invlerp } from 'webcoreui'

// Map 5 from [0, 10] to [0, 1]
invlerp(0, 10, 5) -> .5

// Map 50 from [0, 100] to [0, 1]
invlerp(0, 100, 50) -> .5

// Map 20 from [0, 100] to [0, 1]
invlerp(0, 100, 20) -> .2

// Map 120 from [100, 200] to [0, 1]
invlerp(100, 200, 120) -> .2
```

**Interpolate example**:

```js
import { interpolate } from 'webcoreui'

// Map 50 from [0, 100] to [0, 50]
interpolate(50, [0, 100], [0, 50]) -> 25

// Map 50 from [0, 100] to [100, 300]
interpolate(50, [0, 100], [100, 300]) -> 200

// Map 100 from [0, 200] to [0, 100]
interpolate(100, [0, 200], [0, 100])  -> 50
```

**API**:

```ts
const clamp = (num: number, min: number, max: number) => number
const lerp = (start: number, end: number, value: number) => number
const invlerp = (start: number, end: number, value: number) => number
const interpolate = (
    value: number,
    input: [start: number, end: number],
    output: [start: number, end: number],
) => number
```

### Modals and Sheets

Use the following function with the `Modal`/`Sheet` component to handle them with JavaScript.

**Open example**:

```js
import { modal } from 'webcoreui'

modal({
    trigger: '.my-button',
    modal: '.my-modal'
})
```

**Open on user interaction example**:

```js
import { modal } from 'webcoreui'

const modalInstance = modal('.my-modal')

// On button click
modalInstance.open()
```

**Close example**:

```js
import { closeModal } from 'webcoreui'

closeModal('.my-modal')
```

**API**:

```ts
type ModalCallback = {
    trigger: Element | null
    modal: HTMLElement
}

type Modal = {
    trigger: string
    modal: string
    onOpen?: (args: ModalCallback) => unknown
    onClose?: (args: ModalCallback) => unknown
}

const modal: (config: Modal | string) => {
    open: () => void
    remove: () => void
} | void
const closeModal: (modal: string) => void
```

### Popovers

Use the following functions to handle `Popover` components.

**Open example**:

```js
import { popover } from 'webcoreui'

popover({
    trigger: '.trigger-popover', // Query selector for the button
    popover: '.my-popover'       // Query selector for the popover
})
```

**Close example**:

```js
import { closePopover } from 'webcoreui'

closePopover('.my-popover')
```

**Remove popover instance example**:

```js
import { popover } from 'webcoreui'

const popoverInstance = popover({
    trigger: '.trigger-popover',
    popover: '.my-popover'
})

// Calling `.remove` will disable the popover
popoverInstance.remove()
```

**API**:

```ts
type PopoverPosition = 'top'
    | 'top-start'
    | 'top-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'

type PopoverCallback = {
    trigger: HTMLElement
    popover: HTMLElement
    position: PopoverPosition | undefined
}

type Popover = {
    trigger: string
    popover: string
    position?: PopoverPosition
    offset?: number
    closeOnBlur?: boolean
    closeOnEsc?: boolean
    onOpen?: (args: PopoverCallback) => unknown
    onClose?: (args: PopoverCallback) => unknown
}

const closePopover: (selector: string) => void
const popover: (config: Popover) => {
    remove: () => void
} | void
```

### Toasts

Use the following functions to work with toasts.

**Show toast example**:

```js
import { toast } from 'webcoreui'

toast('.my-toast')

// Or pass a configuration object:
toast({
    element: '.my-toast',
    timeout: 10_000,
    title: 'Title set through JS',
    content: 'Content updated with JavaScript',
    position: 'bottom-left'
})
```

**Hide toast example**:

```js
import { hideToast } from 'webcoreui'

hideToast('.my-toast')
```

**Set toast timeout example**:

```js
import { setDefaultTimeout } from 'webcoreui'

setDefaultTimeout(3000)
```

**API**:

```ts
type Toast = {
    element: string
    timeout?: number
    title?: string
    content?: string
    position?: 'bottom-left'
        | 'top-left'
        | 'top-right'
        | 'bottom-full'
        | 'top-full'
}

const setDefaultTimeout: (time: number) => number
const toast: (config: Toast | string) => void
const hideToast: (element: string) => void
```

## Resources

- Official Website: [webcoreui.dev](https://webcoreui.dev/)
- Documentation: [webcoreui.dev/docs/introduction](https://webcoreui.dev/docs/introduction)
- Blocks: [webcoreui.dev/blocks/introduction](https://webcoreui.dev/blocks/introduction)
- Templates: [webcoreui.dev/templates](https://webcoreui.dev/templates)
- Changelog: [webcoreui.dev/changelog](https://webcoreui.dev/docs/changelog)

## Premium Components and Templates

- Beautifully coded, production-ready UI components for launching frontend projects faster: [webcoreui.dev/pro](https://webcoreui.dev/pro)
