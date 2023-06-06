import React from 'react';
import { Text, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Image, Field } from '@sitecore-jss/sitecore-jss-react';

type HeroProps = {
  fields: {
    heroimg: ImageField;
    herotext: Field<string>;
  };
};
const Hero = (props: HeroProps): JSX.Element => (
  <div className="hero">
    <div className="heroImg">
      <Image field={props.fields.heroimg} />
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
