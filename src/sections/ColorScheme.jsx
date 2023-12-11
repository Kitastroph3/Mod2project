import React from 'react'
import Colors from '../components/Colors'
import Article from '../components/Article.jsx'

const ColorScheme = () => {
  return (
    <section id="colorContainer">
      <h5>Color Schemes</h5>
      <Colors />
      <div id="wrapper">
        <Article
        name="Analagous"
        img="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/5fb3393bce9c6e6c2f7c640f_EmTBIDSCoP3i8Bd8g-DHzVGlbTma_-gY_2XKqxDNiRGO5T4IiSe4m7tqZPdJvOvzG3vGn73GEgaU--6iyDeItmjNoE1PRaG_Xi8Oyz54lbDC6Sqz_EYJcplxKG1mKiLzYoOA0xKV.png"
        info="Analogous colors are colors that sit next to each other on the color wheel. This type of palette can look very beautiful because the colors fit together so nicely. However, the effect could be too subtle, preventing any elements from standing out enough."
      />
      <Article
        name="Monochromatic"
        id="alt"
        img="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/5fb3393b72c5df0389c90ffb_jeHzg6FcxR0AP_zDTfUzmwTESOm5-lXsECX9S1HJJM1okUsxmqi0OtcNERcbepyggKtEiiyt9pO25p9J-2d8_9kDQ4ho5zwa5s8rtZdHozZyFfuQuXC1vIVY5tidkv95ULbxlrVl.png"
        info="Monochromatic color palettes are based on a single color paired with various shades and tints. Like analogous palettes, monochromatic palettes can be very pleasing to look at. However, it's a good idea to add a complementary color to a monochromatic palette in web design in order to draw attention to important elements."
      />
      <Article
        name="Triad"
        img="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/5fb3393a7b5f7e1b3b6f7da5_ktt7NtdTCHBDpMf_tq9nevDzcFI62JptcWMJRim3CDfzG-u0dEbT-oUSRAD14eWb4lJ7RguhoOlewuIZGYtqF-4NmBIASzB-hYUeYy148QWI2YqCKynmetZkCr9mwreJ9CyNr7AC.png"
        info="Triad color palettes consist of three colors that are evenly spaced apart on the color wheel, forming a triangle. This type of color palette is a bit risky to use in website design because it can appear noisy. However, depending on context, triad color palettes can be very effective for youthful, playful, and/or artistic brands."
      />
      <Article
        name="Complementary"
        id="alt"
        img="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/5fb3393bd905d37fe8aa3a3a_eseg8y_Bs6T9jH4rmGSeDK37LTrGH26AKRI6LGNG6u51G3s9Hg-nyBlhbnkqJzVa1mV7nhmfnMa-_tz0R8jwqKgontCV48jHL07cRXEtI_PpGtjgrM_uU182zB7Xa9eyTMLkxDwr.png"
        info="Complementary color palettes contain colors on opposite ends of the color wheel. These palettes are very effective for web design because they create visual balance and tension. If the colors are used equally however, the tension can be too high. Instead, choose one of the complementary colors as the primary brand color, and use the other as an accent color."
        />
        </div>
        </section>
  )
}

export default ColorScheme