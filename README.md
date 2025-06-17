# icon-svg-lib

A lightweight Web Component library to easily use customizable SVG icons in any web framework (React, Vue, Angular, etc.).

# Installation

```
npm install icon-svg-lib

or

yarn add icon-svg-lib
```

# To know available icon details please click below link

https://edisondevadoss.github.io/lib-svg-icons-dashbaord/

# Usage

### Basic Usage

```
<script type="module">
  import 'icon-svg-lib';
</script>

<svg-icon name="user"></svg-icon>
```

# React Integration

```
import React from 'react';
import { createComponent } from '@lit/react';
import { SvgIcon } from 'icon-svg-lib';

const Svg = createComponent({
  react: React,
  tagName: 'svg-icon',
  elementClass: SvgIcon
});

function App() {
  return (
    <div>
      <h1>My SVG Viewer</h1>

      <Svg name="user" size={10} color="primary" />
    </div>
  );
}

export default App;
```

# SVG Icon Properties

The SVG icon component supports various properties to customize its appearance and behavior:

## Core Properties

### `name` (required)
The name of the icon to display. Available icons can be found at the [icon dashboard](https://edisondevadoss.github.io/lib-svg-icons-dashbaord/).

```html
<svg-icon name="user"></svg-icon>
```

### `size`
Controls the size of the icon. Can be a predefined size or a custom value.

**Predefined sizes:**
- `sm` - 16px (w-4 h-4)
- `md` - 24px (w-6 h-6) - default
- `lg` - 32px (w-8 h-8)
- `xl` - 40px (w-10 h-10)
- `xxl` - 48px (w-12 h-12)
- `xxxl` - 56px (w-14 h-14)
- `xxxxl` - 64px (w-16 h-16)

**Custom size:**
```html
<svg-icon name="user" size="w-20 h-20"></svg-icon>
```

### `color`
Sets the color of the icon. Can be a predefined color or any CSS color value.

**Predefined colors:**
- `primary` - Primary brand color
- `secondary` - Secondary brand color
- `success` - Success/green color
- `danger` - Danger/red color
- `warning` - Warning/yellow color

**Custom colors:**
```html
<svg-icon name="user" color="#ff6b6b"></svg-icon>
<svg-icon name="user" color="text-blue-500"></svg-icon>
```

## Styling Properties

### `rotation`
Rotates the icon by the specified number of degrees (0-360).

```html
<svg-icon name="user" rotation="45"></svg-icon>
<svg-icon name="user" rotation="180"></svg-icon>
```

### `background`
Sets the background color of the icon container.

```html
<svg-icon name="user" background="bg-blue-100"></svg-icon>
<svg-icon name="user" background="bg-transparent"></svg-icon>
```

### `rounded`
Applies border radius to the icon container.

**Options:**
- `rounded-none` - No border radius
- `rounded-sm` - Small border radius
- `rounded-md` - Medium border radius
- `rounded-lg` - Large border radius
- `rounded-xl` - Extra large border radius
- `rounded-2xl` - 2x large border radius
- `rounded-3xl` - 3x large border radius
- `rounded-full` - Full circle/oval

```html
<svg-icon name="user" rounded="rounded-full"></svg-icon>
```

### `borderColor`
Sets the border color of the icon container.

```html
<svg-icon name="user" borderColor="border-blue-500"></svg-icon>
<svg-icon name="user" borderColor="border-transparent"></svg-icon>
```

### `borderWidth`
Sets the border width of the icon container.

**Options:**
- `border-2` - 2px border (default)
- `border-4` - 4px border
- `border-5` - 5px border
- `border-6` - 6px border
- `border-7` - 7px border
- `border-8` - 8px border
- `border-9` - 9px border
- `border-10` - 10px border

```html
<svg-icon name="user" borderWidth="border-4"></svg-icon>
```

## Interactive Properties

### `disabled`
Disables the icon interaction.

```html
<svg-icon name="user" disabled></svg-icon>
```

### `title`
Sets a tooltip that appears on hover.

```html
<svg-icon name="user" title="User Profile"></svg-icon>
```

## Complete Example

Here's an example using multiple properties together:

```html
<svg-icon 
  name="user" 
  size="xl"
  color="primary" 
  rotation="0"
  background="bg-blue-50"
  rounded="rounded-full"
  borderColor="border-blue-500"
  borderWidth="border-4"
  title="User Profile"
></svg-icon>
```

## React Example with Properties

```jsx
import React from 'react';
import { createComponent } from '@lit/react';
import { SvgIcon } from 'icon-svg-lib';

const Svg = createComponent({
  react: React,
  tagName: 'svg-icon',
  elementClass: SvgIcon
});

function App() {
  return (
    <div>
      <h1>Customized SVG Icons</h1>
      
      {/* Basic icon */}
      <Svg name="user" />
      
      {/* Large primary icon with rounded background */}
      <Svg 
        name="user" 
        size="xl" 
        color="primary" 
        background="bg-blue-50"
        rounded="rounded-full"
        title="User Profile"
      />
      
      {/* Rotated danger icon with border */}
      <Svg 
        name="user" 
        size="lg" 
        color="danger" 
        rotation="45"
        borderColor="border-red-500"
        borderWidth="border-2"
      />
    </div>
  );
}

export default App;
```