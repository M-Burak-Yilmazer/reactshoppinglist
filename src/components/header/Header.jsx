import "./header.scss";

const Header = ({ data, handleClick, handleChange ,input}) => {
  return (
    <div>
      <div className="header">
        <h1>Product List</h1>
        <input type="checkbox" className="toggler" name="icons" />
        <label htmlFor="icons" className="icon">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="btns">
          {data.map((item) => (
            <button onClick={() => handleClick(item)} key={item}>
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="text-center">
        <input
          onChange={handleChange}
          placeholder="Search product..."
          style={{
            width: "400px",
            padding: " 5px 10px",
            borderRadius: "5px",
            border: "none",
          }}
          type="search"
          value={input}
        />
      </div>
    </div>
  );
};

export default Header;
