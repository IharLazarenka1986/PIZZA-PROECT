import logo from './img/logo.png';
const Header = () => {
  return (
    <>
    <div className='blockHeader'>
<div className="blockLogo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="blockTittle">
        <h1 className="tittle">PizzAmore </h1>
      </div>
    </div>
      
    </>
  );
};

export default Header;
