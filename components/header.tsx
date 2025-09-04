// ★★★ ここに型定義を記述します ★★★
type HeaderProps = {
  activeContent: string;
  setActiveContent: (content: string) => void;
};

const Header = ({ activeContent, setActiveContent }: HeaderProps) => {
    
  const getLinkClass = (contentName: string) => {
    return activeContent === contentName
      ? "mr-5 text-gray-900 font-semibold border-b-2 border-gray-900"
      : "mr-5 hover:text-gray-900";
  };

  return(
    <header className="sticky top-0 z-50 bg-[#F9F9F9] text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Chota Kameya</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <button onClick={() => setActiveContent('news')} className={getLinkClass('news')}>
            News
          </button>
          <button onClick={() => setActiveContent('educations')} className={getLinkClass('educations')}>
            Educations
          </button>
          <button onClick={() => setActiveContent('publications')} className={getLinkClass('publications')}>
            Publications
          </button>
          <button onClick={() => setActiveContent('awards')} className={getLinkClass('awards')}>
            Awards
          </button>
          <button onClick={() => setActiveContent('works')} className={getLinkClass('works')}>
            Works
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
