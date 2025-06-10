# Bootstrap Conversion Guide

This document outlines how to gradually replace SCSS styles with Bootstrap utility classes while maintaining the exact same visual appearance.

## ✅ Flexbox Utilities - Direct Replacements

### Current SCSS Mixins → Bootstrap Classes

| SCSS Mixin                    | Bootstrap Equivalent                                           | Usage Example     |
| ----------------------------- | -------------------------------------------------------------- | ----------------- |
| `@include flex-start-center`  | `d-flex justify-content-start align-items-center`              | Container layouts |
| `@include flex-center`        | `d-flex justify-content-center align-items-center`             | Centered content  |
| `@include flex-between`       | `d-flex justify-content-between align-items-center`            | Header layouts    |
| `@include flex-column`        | `d-flex flex-column`                                           | Vertical stacking |
| `@include flex-column-center` | `d-flex flex-column justify-content-center align-items-center` | Centered vertical |

### Example Conversions

#### 1. Sidebar (scss/\_sidebar.scss)

**Before (SCSS):**

```scss
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.sidebar .logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

**After (Bootstrap + SCSS):**

```scss
// Remove flexbox properties and add Bootstrap classes to HTML
.sidebar {
  // Keep other non-flexbox properties
  height: 100vh;
  min-width: 110px;
  max-width: 110px;
  @include tablet {
    display: none;
  }
}
```

**HTML Changes:**

```html
<!-- Before -->
<div class="sidebar">
  <div class="logo">
    <img src="./assets/logo-left.png" alt="logo" />
  </div>
  <ul>
    <!-- items -->
  </ul>
</div>

<!-- After -->
<div
  class="sidebar d-flex flex-column align-items-center justify-content-start"
>
  <div class="logo d-flex align-items-center justify-content-center">
    <img src="./assets/logo-left.png" alt="logo" />
  </div>
  <ul class="d-flex flex-column justify-content-center align-items-center">
    <!-- items -->
  </ul>
</div>
```

#### 2. Header (scss/\_header.scss)

**Before (SCSS):**

```scss
.header {
  @include flex-between;
}

.header .navbar {
  @include flex-start-center;
}

.header .navbar ul {
  @include flex-start-center;
}

.header .header-right {
  @include flex-start-center;
}
```

**After (Bootstrap + SCSS):**

```scss
.header {
  // Keep other properties
  width: 100%;
  height: 60px;
  padding: 18px 31px 0 25px;
  font-size: $font-md;
  font-weight: $font-weight-light;
  @include tablet {
    display: none;
  }
}
```

**HTML Changes:**

```html
<!-- Before -->
<div class="header">
  <div class="navbar">
    <ul>
      <!-- nav items -->
    </ul>
  </div>
  <div class="header-right">
    <!-- right content -->
  </div>
</div>

<!-- After -->
<div class="header d-flex justify-content-between align-items-center">
  <div class="navbar d-flex justify-content-start align-items-center gap-4">
    <ul class="d-flex justify-content-start align-items-center gap-3">
      <!-- nav items -->
    </ul>
  </div>
  <div
    class="header-right d-flex justify-content-start align-items-center gap-4"
  >
    <!-- right content -->
  </div>
</div>
```

## ✅ Gap Utilities

### Current SCSS → Bootstrap

| SCSS Class | Bootstrap Equivalent | Gap Value |
| ---------- | -------------------- | --------- |
| `gap-15`   | `gap-2`              | ~8px      |
| `gap-20`   | `gap-3`              | ~16px     |
| `gap-35`   | `gap-4`              | ~24px     |

## ✅ Grid Utilities

### Current SCSS → Bootstrap Grid

**Before (SCSS):**

```scss
.grid-4-col {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @include laptop {
    grid-template-columns: repeat(2, 1fr);
  }
  @include mobile {
    grid-template-columns: repeat(1, 1fr);
  }
}
```

**After (Bootstrap):**

```html
<div class="row">
  <div class="col-lg-3 col-md-6 col-12">Item 1</div>
  <div class="col-lg-3 col-md-6 col-12">Item 2</div>
  <div class="col-lg-3 col-md-6 col-12">Item 3</div>
  <div class="col-lg-3 col-md-6 col-12">Item 4</div>
</div>
```

## Implementation Steps

### Phase 1: Simple Flexbox Replacements

1. ✅ Update utility comments in `_mixins.scss` and `_utils.scss`
2. 🔄 Convert header flexbox usage
3. 🔄 Convert sidebar flexbox usage
4. 🔄 Convert button flexbox usage

### Phase 2: Layout Components

1. 🔄 Convert simple container layouts
2. 🔄 Convert card/item layouts
3. 🔄 Convert form layouts

### Phase 3: Complex Grid Systems

1. 🔄 Convert main content grids
2. 🔄 Convert dashboard layouts
3. 🔄 Convert responsive breakpoints

## Testing Checklist

Before finalizing any conversion, ensure:

- [ ] Visual appearance is exactly the same
- [ ] Responsive behavior is maintained
- [ ] No spacing changes
- [ ] No alignment changes
- [ ] All breakpoints work correctly
- [ ] No layout shifts

## Notes

- Always test each conversion thoroughly before moving to the next
- Keep backup of original SCSS until conversion is complete
- Document any Bootstrap customizations needed
- Maintain exact pixel-perfect appearance during transition
