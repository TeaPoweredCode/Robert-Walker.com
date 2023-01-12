import React from 'react'
import { Link } from 'gatsby';

export default function Hexagon(props) {

  const { radius, stroke, link, title } = props;
  const getHex = (radius, stroke) => {
    const height = radius * 2;
    const width = height * Math.sqrt(3) / 2;
    let points = [
      [width / 2, 0],
      [width, height / 4],
      [width, height * 3 / 4],
      [width / 2, height],
      [0, height * 3 / 4],
      [0, height / 4]
    ];

    let tidy = (num) =>{return Number.parseFloat(Number.parseFloat(num).toFixed(2))}; 
    points.map(xy => { xy[0] = tidy(xy[0] + stroke); xy[1] = tidy(xy[1] + stroke); });

    let shapedata = {
        width : Math.ceil(width) + (stroke*2),
        height : Math.ceil(height) + (stroke*2),        
        path : points.map(p => `${p[0]},${p[1]}`).join(' ')
    };

    return shapedata;
  };

  let shapeData = getHex(radius, stroke);
  let HexContent = [
    <title key={`${title}-title`}>{title}</title>,
    <polygon key={`${title}-shape`} fill="#2a2c2b" stroke="white" strokeWidth={stroke} points={shapeData.path}></polygon>,
    props.children
  ];
  
  const SvgWapper = (c) => {
    return(
      <svg id="color-fill" xmlns="http://www.w3.org/2000/svg" version="1.1" width={shapeData.width + "px"} height={shapeData.height + "px"} >  
        {c.children}
      </svg>
    )
  }

  const HexExternalLink = () => {
    return (
      <SvgWapper>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {HexContent}       
        </a>
      </SvgWapper>
    )
  }

  const HexInternalLink = () => {
    return (
      <SvgWapper>
        <Link to={link}>
          {HexContent}       
        </Link>
      </SvgWapper>
    )
  }

  const HexPlain = () => {
    return (
      <SvgWapper>
        {HexContent}       
      </SvgWapper>
    )
  }


  if(link != null) {
    let ExternalLink = link.startsWith("http://") || link.startsWith("https://");
    return (!ExternalLink ? <HexInternalLink /> : <HexExternalLink />);
  }
  else  {
    return <HexPlain />;
  }

}