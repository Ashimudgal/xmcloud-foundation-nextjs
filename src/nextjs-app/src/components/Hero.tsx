import React from 'react';
import { Text, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
//import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

type HeroProps = {
    fields: {
      heroimg: any,
      herotext: any  
    };
  }
  
const Hero = (props: HeroProps): JSX.Element => (
  <div className="hero">
    <div className="heroImg">
      <NextImage field={props.fields.heroimg} unoptimized={true}/>
    </div>
    <React.Fragment>
      <Text
        field={props.fields.herotext}
        tag="section"
        className="herotext"
        editable={false}
        data-sample="other-attributes-pass-through"
      />
    </React.Fragment>
    <div className="heroCTA">
      <button>FIND YOUR WATCH Test</button>
      <button>FIND A BOUTIQUE</button>
      <button>FIND YOUR STRAP</button>
    </div>
  </div>
);

export default Hero;
