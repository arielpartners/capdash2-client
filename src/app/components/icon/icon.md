# Capdash2 UI Icon Module

----
## Components
### Icon
Icon component returns element to display icon. By default, it uses font-awesome icons.
However, if you wish to change font set, you may use `fontSet` attribute to set which font group you wish to use

----
## Example

By default, `<cd-icon>` will use font-awesome as its icon font.

### Set icon
You can simply add `icon` attribute on `<cd-icon>` to display any font-awesome-icon

    <cd-icon icon="desktop"></cd-icon>

### Set icon size
Add `size` attribute on `<cd-icon>` to enlarge current icon.
For more detail, checkout source file of font-awesome [larger.less](https://github.com/FortAwesome/Font-Awesome/blob/v4.7.0/less/larger.less)

    <cd-icon icon="desktop" size="lg"></cd-icon>

### Set icon background color
    <cd-icon color="red" icon="alarm"></cd-icon>

### Set icon fixed width
    <cd-icon icon="desktop" size="lg" fixed="true"></cd-icon>

### Set font-set
You can add other font-set as well, however it's not well supported

    <cd-icon font="other-font" icon="desktop"></cd-icon>
