import PropTypes from 'prop-types';

const Switch = ({ label, checked, onChange, icon }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer select-none">
      {/* Icono fijo al lado del label */}
      {icon && <span className="text-3xl">{icon}</span>}
      <span className="text-light-text dark:text-dark-text font-semibold">{label}</span>

      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div className={`block w-14 h-8 rounded-full ${checked ? 'bg-green-500' : 'bg-gray-300'}`}></div>
        <div
          className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${checked ? 'translate-x-6 bg-white' : 'bg-gray-500'}`}
        ></div>
      </div>
    </label>
  );
};

Switch.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.node, // icono opcional
};

export default Switch;
