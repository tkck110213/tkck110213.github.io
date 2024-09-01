

const Header = () => {
    return(
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Chota Kameya</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a href="#biography" className="mr-5 hover:text-gray-900">Educations</a>
            <a href="#publications" className="mr-5 hover:text-gray-900">Publications</a>
            <a href="#awards" className="mr-5 hover:text-gray-900">Awards</a>
            <a href="#works" className="mr-5 hover:text-gray-900">Works</a>
            </nav>
        </div>
        </header>
    )
}

export default Header