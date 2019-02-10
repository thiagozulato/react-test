import React from 'react';
import { Card as AntCard } from 'antd';
import pack from '../../package.json';
import CardWrapper from './Card.Style';

const CardHeader = ({ title, description }) => (
  <React.Fragment>
    <div className="title-text">{title}</div>
    { description && <div className="title-description">{description}</div>}
  </React.Fragment>
);

const Card = CardWrapper(({
  flex,
  className,
  title,
  description,
  ...rest
}) => (
  <AntCard
    {...rest}
    title={title && <CardHeader title={title} description={description} />}
    className={className}
  />
));

Card.Meta = AntCard.Meta;

Card.displayName = 'NWRCCard';

Card.defaultProps = {
  flex: false
};


const withPackVersion = Component => {
  return (props) => {
    return(
      <Component 
        data-component-version={pack.version}
        data-lib-name={pack.name}
        {...props}
      />
    )
  };
}

export default withPackVersion(Card);