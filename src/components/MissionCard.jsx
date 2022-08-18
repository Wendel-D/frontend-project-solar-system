import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missao">
        <table className="tabela">
          <tr>
            <th data-testid="mission-name">
              {name}
            </th>
          </tr>
          <tr>
            <td data-testid="mission-year">{year}</td>
          </tr>
          <tr>
            <td data-testid="mission-country">{country}</td>
          </tr>
          <tr>
            <td data-testid="mission-destination">{destination}</td>
          </tr>
        </table>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
