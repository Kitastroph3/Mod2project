import React from 'react'
import Colors from '../components/Colors'
import Article from '../components/Article.jsx'

const ColorScheme = () => {
  return (
      <section id="colorContainer">
      <Colors />
      <Article
        name="Analagous"
        info="Analogous colors are colors that sit next to each other on the color wheel. This type of palette can look very beautiful because the colors fit together so nicely. However, the effect could be too subtle, preventing any elements from standing out enough."
      />
      <Article
        name="Monochromatic"
        info="Monochromatic color palettes are based on a single color paired with various shades and tints. Like analogous palettes, monochromatic palettes can be very pleasing to look at. However, it's a good idea to add a complementary color to a monochromatic palette in web design in order to draw attention to important elements."
      />
      <Article
        name="Triad"
        info="Triad color palettes consist of three colors that are evenly spaced apart on the color wheel, forming a triangle. This type of color palette is a bit risky to use in website design because it can appear noisy. However, depending on context, triad color palettes can be very effective for youthful, playful, and/or artistic brands."
      />
      <Article
        name="Complementary"
        info="Complementary color palettes contain colors on opposite ends of the color wheel. These palettes are very effective for web design because they create visual balance and tension. If the colors are used equally however, the tension can be too high. Instead, choose one of the complementary colors as the primary brand color, and use the other as an accent color."
      />
        </section>
  )
}

export default ColorScheme