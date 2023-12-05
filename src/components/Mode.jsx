import React from 'react'

export default function Mode(props) {
  const mode = [
    { name: "monochrome" },
    { name: "monochrome-dark" },
    { name: "monochrome-light" },
    { name: "analogic" },
    { name: "complement" },
    { name: "analogic-complement" },
    { name: "triad" },
    { name: "quad" }
  ];

  return (
    <div className="mode">
      {mode.map((style) => {
        const { name } = style;
      
        return (
          // <Link to={"end of address link here" }>
            <h4>{name}</h4>
          // </Link>
        )
      })}
    </div>
  )
}

