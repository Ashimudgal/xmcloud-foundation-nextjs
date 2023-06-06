import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-react'; //'@sitecore-jss/sitecore-jss-nextjs';

type TestComponent1Props = {
  fields: {
    heading: Field<string>;
    body: Field<string>;
  };
};

const TestComponent1 = (props: TestComponent1Props): JSX.Element => (
  <div>
    <Text field={props.fields.heading} />
    <RichText field={props.fields.body} />
  </div>
);

export default TestComponent1;
