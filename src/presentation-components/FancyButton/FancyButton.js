// Because presentational components are meant to look pretty
// you can use styled components to create them
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FancyButton = styled.button`
  margin-right: 5px;
  appearance: none;
  background: ${props => props.bgColor};
  color: #fff;
  border-radius: 4px;
  padding: 8px 12px;
  border: 1px solid ${props => props.bgColor};
`;

FancyButton.defaultProps = {
  bgColor: '#2fa1d6',
};

FancyButton.propTypes = {
  bgColor: PropTypes.string,
}

export default FancyButton;
