# Odin Sign-up Form
## About
- This page allows you to fill in a sign-up form. 
- All fields have the `required` attribute and some sensible character limits have been imposed on all of them.
- The form uses the in-built validation for the email and telephone.
- The form will not be submitted if the two passwords are different.
- The page is somewhat responsive.
## What I learned
Using the `&` CSS nesting selector.
```css
button {
  /* ... */
  &:hover {
    background-color: rgb(var(--accent), 80%);
  }
  &:active {
    background-color: rgb(var(--accent), 60%);
  }
}
```
This snippet also demonstrates how custom properties can be declared so that they can be used as part of the `rgb()` function.
## Credits
Photo by [Roman Smirnov](https://unsplash.com/@yojistic) on [Unsplash](https://unsplash.com/photos/a-bunch-of-hot-air-balloons-flying-in-the-sky-0p4Ra7f3nDI).