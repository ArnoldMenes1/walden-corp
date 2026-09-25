---
title: "Typography – Material Design 3"
description: "Learn about Material Design typography. This guide covers everything from font styles and hierarchy to line height to create user-friendly text."
url: "https://m3.material.io/styles/typography/type-scale-tokens"
publisher: "Material Design"
lang: "en"
word_count: 392
reading_time: "2 min read"
---

## Table of Contents

- [Type scale](#type-scale)
  - [M3 type scale](#m3-type-scale)
- [Type scale tokens](#type-scale-tokens)
  - [Baseline type style tokens](#baseline-type-style-tokens)
- [Emphasized type styles](#emphasized-type-styles)
  - [Emphasized type style tokens](#emphasized-type-style-tokens)
- [Where emphasized styles can be used](#where-emphasized-styles-can-be-used)
  - [Components](#components)
  - [Weight](#weight)
  - [Context](#context)
- [Customize the typeface](#customize-the-typeface)
  - [Brand and plain typeface tokens](#brand-and-plain-typeface-tokens)
- [Language height support](#language-height-support)
  - [Language script categories](#language-script-categories)
  - [Language height tokens](#language-height-tokens)
- [Customizing type styles](#customizing-type-styles)
- [Customizing your type scale](#customizing-your-type-scale)
  - [Font size units](#font-size-units)
    - [Example conversions](#example-conversions)
  - [Letter spacing units](#letter-spacing-units)
    - [Letter spacing examples](#letter-spacing-examples)
  - [Social](#social)
  - [Libraries](#libraries)
  - [More Google sites](#more-google-sites)
  - [Archived versions](#archived-versions)

---

link

Copy linkLink copied

## Type scale

link

Copy linkLink copied

A **type scale** is a selection of type styles used across a product to ensure consistency.

link

Copy linkLink copied

### M3 type scale

link

Copy linkLink copied

Material 3 has one **type scale** containing two sets of **type styles: 15 baseline** and **15 emphasized**. Both of these style sets follow the same scale from Display Large to Label Small.

The **emphasized** styles were added in the expressive update The expressive update is a major update to Material 3, adding visually stunning features, components, and variants, plus updates to the shape, motion, and typography systems. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive) . They have a higher weight and other minor adjustments compared to the baseline styles, and are best applied to bold, selection, and other areas of emphasis. Baseline and emphasized styles are meant to be used together.

link

Copy linkLink copied

![Diagram of the M3 type scale.](https://lh3.googleusercontent.com/amY56CFDJ81aqWy-r-zpQAOH7D0J7NcLDAwmuuikQnZjnYA4NWUs_V2C8LbxFeekKK7u4itaTFKgnRcXm-QFA56Uoe0N4Jvw38RM5tb5Pas=w40)

The scale is a range of contrasting styles that support the needs of various product contexts and content. No single product will use all the styles. Instead, select styles from the scale that are most appropriate.

link

Copy linkLink copied

## Type scale tokens

link

Copy linkLink copied

Each of the 30 styles has a single token Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code. [More on tokens](https://m3.material.io/m3/pages/design-tokens/overview) that captures all the default properties. Tokens are separated into the **baseline** and **emphasized** sets. Each axis and property, such as font, line height, size, tracking, and weight, also has an individual token for greater customization. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

link

Copy linkLink copied

### Baseline type style tokens

link

Copy linkLink copied

Display styles

Headline styles

Title styles

Body styles

Label styles

link

Copy linkLink copied

## Emphasized type styles

link

Copy linkLink copied

The M3 type scale has 15 emphasized type styles. Use both baseline and emphasized type styles together to achieve expressive experiences. Material recommends using emphasized styles for selection, actions, headlines, and other [editorial treatments](https://m3.material.io/m3/pages/typography/editorial-treatments#19e5796e-9db8-4687-b20c-c6cee77e7df8).

link

Copy linkLink copied

### Emphasized type style tokens

link

Copy linkLink copied

Emphasized Display styles

Emphasized Headline styles

Emphasized Title styles

Emphasized Body styles

Emphasized Label styles

link

Copy linkLink copied

## Where emphasized styles can be used

link

Copy linkLink copied

### Components

When used in components, emphasized type styles can communicate hierarchy or importance, such as an active or selected component, or an unread message. The emphasized styles work well with:

- Badges
- Buttons (for primary actions)
- Extended FAB
- Selected list items
- Selected menu items

Material components don’t use emphasized type styles by default. To use an emphasized type style, swap the baseline token for the emphasized token of the same style. For example:

- Baseline: md.sys.typescale.display-large
- Emphasized: md.sys.typescale.**emphasized**.display-large

link

Copy linkLink copied

### Weight

Use the emphasized styles on text that already uses weight (such as medium, bold) to communicate hierarchy.

### Context

Use emphasized styles to draw attention to specifics aspects of components, such as selected states, unread messages, or key interactions.

Emphasized context and weight can be used at the same time.

![Diagram showing emphasized styles being applied in and UI of an active call with live translation turned on.](https://lh3.googleusercontent.com/BgMRvZc8eDdo9v86kNxhCNOiSw1Wv7fkVbYTLq_bY9QZXLfKuC-AaQn9_JmKDhbOBqdxmYoznv1ZlBhyigk8PYfuwAsrtaBtp7YqDQadYcs=w40)

Weight: Apply emphasized styles to text already bolded for an expressive style Context: Apply emphasized styles to text in selective places to better communicate hierarchy or state

link

Copy linkLink copied

## Customize the typeface

link

Copy linkLink copied

The M3 type scale has the option to set different typefaces at different sizes.

- The **brand** typeface is used for larger type styles, like Headline and Display, to focus on expression.
- The **plain** typeface is used for smaller type styles, like Body and Label, to focus on readability.
- Roboto is the default for both typefaces.

Consider replacing Roboto with different typefaces to boost brand expression in your product. On emphasized styles, this can help important text stand out even more.

![Diagram showing emphasized styles being applied in a UI of an active call with live translation turned on.](https://lh3.googleusercontent.com/g9DqjzaO9IE8RDby0QNqBhA2ORXpJ6LzeQitQ8ql9vjVgAq-HdXrE2H6miAmVUmPg8StgGRTuivI4jbi07oOlgwaGbRqHWXxJ_WFpgEKroE=w40)

Roboto can be replaced with another font, like Roboto Flex

link

Copy linkLink copied

### Brand and plain typeface tokens

link

Copy linkLink copied

link

Copy linkLink copied

## Language height support

link

Copy linkLink copied

The type scale can adapt line height automatically based on language height category: small, medium, large, and extra large.

Development considerations:

- It’s recommended to default to **medium language height**, as most languages fall in that category, and switch to other sizes based on detected language.

- Material components that use **vertical padding** should adapt to language height automatically. Components with fixed heights are built for **small** values and may not adapt by default.

- Ignoring language height can lead to overlapping text and broken UI elements, leading to major internationalization issues and failing readability standards.

![Different font stylings produced by Google Sans Flex.](https://lh3.googleusercontent.com/u7Z-_b4B26KtA8LDUvPsn5c7v1Nro5RKxDhlSi5lo9fZdbcTgka8YsFe37XfoBs2eUKKb4_4wlnVuXj9FHqBlSPxpRSUBCOYSjBP6nsl9io8=w40)

Line heights for styles like display large can automatically adapt to language height category

link

Copy linkLink copied

### Language script categories

- **Small (base)**: Cyrillic, Greek, Hebrew, Latin-based languages (except Vietnamese)

- **Medium (~7% taller)**: Amharic, Arabic, Armenian, Bangla, Chinese, Gujarati, Hindi, Japanese, Kannada, Khmer, Korean, Lao, Malayalam, Odia, Punjabi, Sinhala, Tamil, Thai, Vietnamese, most other languages.

- **Large (~30% taller)**: Burmese, Telugu

- **Extra large (~100% taller)**: Nastaliq

link

Copy linkLink copied

### Language height tokens

To view the language height tokens:

- Open the line height folder (Note: Other tokens like fonts and weights are in the same token set)

- Change the language height context at the top of the token module

link

Copy linkLink copied

link

Copy linkLink copied

## Customizing type styles

link

Copy linkLink copied

To customize existing type styles, follow these steps:

1.  If using a different typeface, change the **brand** and **plain** typeface tokens.
2.  Adjust properties like line height and letter spacing to refine the appearance. Avoid changing the type size; this can affect how components render and reflow.
3.  Repeat for both baseline and emphasized type styles. Try to keep emphasized styles visually consistent, like all wider than baseline.

Heavier fonts may require wider letter spacing, while fonts with long ascenders and descenders will require different line heights. Axes can be further adjusted as necessary.

**Note:** Customizing the M3 type scale or individual styles may prevent you from receiving typography token updates from Material.

![Example type scales with custom typefaces and weights.](https://lh3.googleusercontent.com/_m1zTD4Gi4KPsQMGUpK7qL86M3rIVacDUvNQ7i5HaJo8NdSeOhwaENqa5-3h64LQvXvMvYBavxmc3Av1xXsjzrXprS94NLoWXW8f9U9Hgmc=w40)

Adjust variable axes, like weight and width, to customize fonts like Roboto Flex

link

Copy linkLink copied

Different typefaces can be used for baseline and emphasized type styles.

![Example type scales with custom typefaces and weights.](https://lh3.googleusercontent.com/sGMcrXhB7QJhOFzV-xacTe303tOTltCuwv8Q2SukZmhV3NQHnq_iG8PFNUFO4vZcsvw8yXBfbZKrBSDUVfLNHD8MLGkADAkEZlMmt-x0X3Xv=w40)

Custom typefaces can be used together, like Baskervville and Jacquard

link

Copy linkLink copied

## Customizing your type scale

link

Copy linkLink copied

When different sizes from the defaults are needed, such as for different devices, you can customize the **type scale** by adding or removing styles, and even swapping out Roboto for a font of your choice.

link

Copy linkLink copied

Material Design uses the [Major Second](https://cieden.com/book/sub-atomic/typography/different-type-scale-types#:~:text=with%2520dense%2520content.-,Major%2520Second%2520(1.125),-The%2520Major%2520Second) type scale with 14 as its key base size. This anchors to the most essential style used most often for typesetting body text.

![Material Design’s default type scale; showing display, headline, and title sizes shown next to the Major Second type scale.](https://lh3.googleusercontent.com/sFRSmvfHXtfmkTWjKolzUx_FVsx1Wk7TdhlEbZghSzOlE5PUUIZyuZzTrrDnjNz4KdHsfIYmNkl0AOzDU_0b-gyFAoQGEmrc59K-DCffHOuQqg=w40)

The Material Design type scale uses the Major Second scale (1.125)

link

Copy linkLink copied

Sizes on the rendered type scale should aim to provide impactful contrast between sizes by avoiding small differences.

![Material Design’s default type scale; showing display, headline, and title sizes shown next to the Major Second type scale ](https://lh3.googleusercontent.com/Nx97D2MglZAzPxplWfi3WPeAEFe25ZcDawcLFYNtEUgipcPuIYlBhu9UJz1Om37aaNNJsedqc2_GtAyGQbJ18cnN_d7NBbgCyzVNefFK11OP=w40)

Material’s default typescale of 15 styles allows distinction between each

link

Copy linkLink copied

![ Display, headline, and title sizes shown next to the Major Second type scale.](https://lh3.googleusercontent.com/QE19ztycbnNNUFjh8L-ZuduDXTf9wRLL1-C6LF7AObKQfHIp-EarhDb5oFJasPUifApzn7hvKoJv4O9HXril3zO7T6MUvXp45RRsGqGHtHnt=w40)

Your product likely will not need all 15 default styles from the Material Design type scale. In this example, five sizes are chosen for a reduced set while the rest are removed.

![A size modification of Material Design’s default type scale where display medium is a larger size than the original scale.](https://lh3.googleusercontent.com/TBQySbWTWvPfIelbkG1IzExEagGmvKGd4J0oXsqaHgR6RhY5hYjMTgEox8AAMKpPAMlSSemH_usJBkUdqgjrdP6DcNqPyFLaM7tf_CyrC-tB=w40)

If the default sizes from the Material Design type scale do not meet your needs, values can be changed instead. Here the default size of display medium is adjusted to another size from the Major Second type scale.

link

Copy linkLink copied

### Font size units

The following units are used to express font size on Android and the web.

link

Copy linkLink copied

| Platform         | Android | Web    |
| ---------------- | ------- | ------ |
| Font size unit   | sp      | rem    |
| Conversion ratio | 1.0     | 0.0625 |

Web browsers calculate the REM (the root em size) based on the root element size. The default for modern web browsers is 16px, so the conversion is SP_SIZE/16 = rem.

link

Copy linkLink copied

#### Example conversions

| Android | Web      |
| ------- | -------- |
| 10sp    | 0.625rem |
| 12sp    | 0.75rem  |
| 24sp    | 1.5rem   |
| 60sp    | 3.75rem  |

link

Copy linkLink copied

### Letter spacing units

The following units are for spacing letters in a UI.

link

Copy linkLink copied

| Platform            | Android                                                   | Web                                                       |
| ------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| Letter spacing unit | em                                                        | rem                                                       |
| Conversion ratio    | (Tracking value in px / font size in sp) = letter spacing | (Tracking value in px / font size in sp) = letter spacing |

link

Copy linkLink copied

#### Letter spacing examples

| Android                                    | Web                                         |
| ------------------------------------------ | ------------------------------------------- |
| (.2 tracking / 16sp font size) = 0.0125 em | (.2 tracking / 16px font size) = 0.0125 rem |

<a href="https://m3.material.io/" data-_ngcontent-txb-c29="" data-mioanalyticstracking="" data-analyticslabel="/">material_design</a>

Material Design is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material Design streamlines collaboration between designers and developers, and helps teams quickly build beautiful products.

- ### Social

- [GitHub](https://www.github.com/material-components)

- [X](https://x.com/googledesign)

- [YouTube](https://www.youtube.com/@googledesign)

- [Blog RSS](https://material.io/feed.xml)

- ### Libraries

- [Android](https://m3.material.io/develop/android/mdc-android)

- [Compose](https://m3.material.io/develop/android/jetpack-compose)

- [Flutter](https://m3.material.io/develop/flutter)

- [Web](https://m3.material.io/develop/web)

- ### More Google sites

- [Google Design](https://design.google/?home=)

- ### Archived versions

- [Material Design 1](https://m1.material.io/)

- [Material Design 2](https://m2.material.io/)

[Google](https://www.google.com/)

- [Privacy Policy](https://policies.google.com/privacy)
- [Terms of Service](https://policies.google.com/terms)
- [Join research studies](https://google.qualtrics.com/jfe/form/SV_3NMIMtX0F2zkakR?utm_source=Website&amp;Q_Language=en&amp;utm_campaign=Q2&amp;campaignDate=June2022&amp;referral_code=UXRgbtM2422655&amp;productTag=b2d)
- [Feedback](javascript:void(0))