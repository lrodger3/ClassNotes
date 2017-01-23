# CSS Layout

## Box Model
> In HTML, you can think of elements as boxes.  The term "box-model" refers to the "box", or series of "boxes" that wrap an HTML element

Made up of the following : 
- Content
- Padding
- Border
- Margin

Difference between HTML and DOM
  - Document Object Model - what the browser creates when it reads/parses your HTML file
    - Includes the relationships elements have among one another


## Specificity
> How the browser decides what styles take precedence over other styles

Specificity is calculated by the browser based on your CSS selector.

.model{color : red;}
div{color : green;}
#modelDiv{color : blue;}

| Selector |     IDs    |      Classes     |    Tags   |
|----------|------------|------------------|-----------|
|.model    | 0          |    1             | 0         |
|#model    | 1          |    0             | 0         |
|superlong | 0          |    0             | 400       |

> More specific than any # of ids

.model{
  color:red!important; // override any # of ids
}

>Most specific you can get!

```html
<div style="color:red;"></div>
```
  
## Display

> All elements have a default display type.  Display types significantly impact how elements interact with one another and are laid out

### Main Display types

1. `none` - prevents the element from being rendered

2. `block` - Have dimensions, will not share space on a line with other elements (line break before and after)
  - h1-h6
  - div
  - p
  
3. `inline` - No true dimensions, they wrap their content.  They _will_ share space on a line with other elements
  - span
  - b
  - em
  - input
  
4. `inline-block` - Best of both worlds, most flexible display type.  Have dimensions, but will also share space on a line
  - With `inline-block`, the newline character is interpreted as a whitespace character (space).  To remove, one way is to set the `font-size` of a parent element to 0px

5. `flex` - Part of something called `flexbox`.  Fairly new layout paradigm (kind of a frameworkish thing) that focuses on dynamic layouts and vertical centering

## Position

> Impacts how / where an element is rendered on the page

Often in conjunction with the following CSS properties : 
- top
- left
- right
- bottom

4 Main types of positioning

1. `static` - default position (where the browser wants to put the element) - _Not_ positioned

2. `fixed` - element is positioned with respect to the __Window__ (viewable area in the brower)
  - Main use : keep something in the same position as the user scrolls
  - Removed from Document Flow
  - Element is considered to be _positioned_
 
3. `relative` - element is positioned with respect to where it would _normally_ be positioned.
  - Main use : nudging something that isn't quite aligned, used with `absolute` positoning
  - Still part of the Document Flow, but are rendered _visually_ elsewhere
  - Element is considered to be _positioned_

4. `absolute` - Most complicated because its very contextual.  Relies on parent/ancestor elements to determin what it's positioned with repsect to.
  - Positioned with respect to _closest positioned ancestor_ or the `body` element
  - Removes element from Document Flow
  - Element is considered to be _positioned_

## Floats

> Floats were originally designed to wrap text around images (like a newspaper)

- Floats are kinda-sorta removed from Document Flow

- left
- right
- none

## Clear

> Elements after a floating element will flow around it.  Clear will help you avoid this interaction

- left
- right
- both
- none




  
  
  
  
  