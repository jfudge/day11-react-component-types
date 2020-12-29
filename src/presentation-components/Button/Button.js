// This is a presentational component
// The only kind of data presentation components handle are props
import PropTypes from 'prop-types';
import './Button.css';

// If you are not using this component for anything complex, consider changing it to a styled component

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} className="coreThemeButton">
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
