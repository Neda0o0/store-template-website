const Footer = () => {
  return (
    <footer>
      <div className="footer_top"></div>
      <div className="footer_bottom">
        <div className="lg:container mx-auto">
          {/* logo wrapper */}
          <div className="logo_wrapper">
            <Link
              to="/"
              className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
            >
              <Armchair size="2rem" color="#029fae" /> Comforty
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
