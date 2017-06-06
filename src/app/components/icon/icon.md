# Capdash2 UI Icon Module

----
## Components
### Icon
Icon component returns element to display icon. By default, it uses font-awesome icons.
However, if you wish to change font set, you may use `fontSet` attribute to set which font group you wish to use

----
## Example

    <cd-icon icon="desktop"></cd-icon>
    // above example will render the element into following
    // <cd-icon class="fa fa-desktop"></cd-icon>
    
    <cd-icon icon="desktop" size="lg"></cd-icon>
    // above example will render the element into following
    // <cd-icon class="fa fa-desktop fa-lg"></cd-icon>
    
    <cd-icon icon="desktop" size="lg" fixed="true"></cd-icon>
    // above example will render the element into following
    // <cd-icon class="fa fa-desktop fa-lg fa-fw"></cd-icon>
        
    <cd-icon color="red" icon="alarm"></cd-icon>
    // above example will render the element into following
    // <cd-icon class="fa fa-alarm bg-red"></cd-icon>

    <cd-icon color="green" font="anySet" icon="anyIcon"></cd-icon>
    // above example will render the element into following
    // <cd-icon class="anySet anySet-anyIcon bg-green"></cd-icon>
