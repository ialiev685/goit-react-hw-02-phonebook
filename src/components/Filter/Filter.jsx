import "./Filter.scss";

const Filter = ({ filter, onChange }) => {
  return (
    <label className="filter-input">
      Поиск:
      <input
        className="filter-input__text"
        type="text"
        value={filter}
        name="filter"
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
