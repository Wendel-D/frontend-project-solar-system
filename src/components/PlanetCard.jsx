import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altText = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ altText } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  PlanetName: propTypes.string.isRequired,
  PlanetImage: propTypes.string.isRequired,
};

export default PlanetCard;
