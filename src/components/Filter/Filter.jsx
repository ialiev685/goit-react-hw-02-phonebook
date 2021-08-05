const Filter = ({ filter, onChange }) => {
  return <input type="text" value={filter} name="filter" onChange={onChange} />;
};

export default Filter;
