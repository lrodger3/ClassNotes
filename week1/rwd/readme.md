# Responsive Web Design

> Important in today's world because so much of internet traffic comes from devices OTHER than laptops/desktops

## How are these devices different?
- Screen Resolution / Size / Pixel Density / orientation
- Hardware capabilities - crappier processors - bluetooth, location, etc
- Mobile software - no flash, mobile browsers
- Target market
- Interface - touch vs mouse
- Network - phone networks are generally slowers than home internet

## Outdated

> Outdated practice is to serve an entirely separate site for mobile users

http://mybank.com => http://m.mybank.com

- Could have a radically different layout / missing features
- 2 code bases
  - 2x html
  - 2x css

## Modern

> A more modern practice is to architect your CSS so that your website is responsive and looks good on any device

- 1 code base

### Mobile First Development

> Design/build your site with mobile in mind from the beginning

- Build the mobile styles __FIRST__ 
- As you increase screen size, you may be changing layout to accomodate

- Less likely to give users a watered-down mobile experience
- Progressive Enhancement
  - Robust Mobile experience => even more robust desktop experience

- Opposite : Graceful Degradation
  - Desktop-first development
  - Robus Desktop experience => watered-down mobile


## CSS
  
### Units

`px`   - Most common / least flexible unit
`%`    - Often a % of the parent element - fluid
`em`   - Printing Unit - refers to the width of the `m` character in a font.  ems in css refer to the parent container's font-size
`rem`  - Root Em - refers to the width of the `m` character.  rems in css refer to the font-size of the `html` element
`vw`   - View Width - 1vw is 1% of the width of the view
`vh`   - View Height - 1vh is 1% of the height of the view

- Less common, but great for print styles
`cm`
`mm`
`in`

### Media Queries
> Applying CSS based on certain conditions (often based on screen size)

.button{
  color : red;
  width:50%;
}

.somethingElse {
  background-color:green;
}

@media (min-width:768px){
  .button{
    color:blue;
  }
  .otherStuff{
  
  }
  
}

@media (min-width:1200px){
  .button{
    color:green;
    width:25%;
  }
}

> As a general rule, it's a good practice to make your base styles (things NOT in a media query) your mobile/default styles.  Use min-width media queries for each larger screen size

main.css
  _mobile_        small
  _tablet_        
  _desktop_       large
  ...
  


























