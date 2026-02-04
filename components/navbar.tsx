import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-xl font-bold">Portfolio</div>
      <button 
        className="md:hidden"
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Navbar;
