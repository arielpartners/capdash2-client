# Capdash2 UI Menu Module

----
## Components
### Menu
Menu component provides wrapper for menu items. When you feed matching value for `triggerBy` attribute on menu component and id attribute on menu button component, your menu component will toggled by clicking that menu button component.

To load menu component, use `cd-menu` selector from your template.


----
### Menu Button
Menu button component simply provides label and input type radio button to toggle menu component.

To load menu button component, use `cd-menu-button` selector from your template.

----
### Menu Header
Menu header component returns menu heading with icon

### Menu Item
Menu item component wraps given child nodes with `<li><a>`. You can manipulate it's class and link by assigning value to `link` and `className` attribute of this component.

To load menu item component, use `cd-menu-item` selector from your template

----
## Example

    <cd-menu-button id="myMenu" name="menuName">
        Menu1
    </cd-menu-button>
    <cd-menu triggerBy="myMenu">
        <cd-menu-header icon="fa fa-desktop" text="Header"></cd-menu-header>
        <cd-menu-item link="/item1">Item1</cd-menu-item>
        <cd-menu-item link="/item2">Item2</cd-menu-item>
        <cd-menu-item link="/item3">Item3</cd-menu-item>
        <cd-menu-item link="/item4">Item4</cd-menu-item>
    </cd-menu>

----
## Todo

