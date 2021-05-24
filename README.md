# Yogi UIkit 🌱

Yogi UIkit is a set of React components and hooks used to build pages on Yogi's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add yogi-fi/yogi-uikit`

## Setup

### Theme

Before using Yogi UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'yogi-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'yogi-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
