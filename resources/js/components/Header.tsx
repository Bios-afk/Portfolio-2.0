const Header = () =>{
    return (
        <header className='sticky top-0 z-50 bg-[#080A09] '>
            <div className= 'flex items-center justify-between p-4'>
                <nav className='nav-links font-mono'>
                    <a href='#about' className='no-underline text-white mx-2'>About</a>
                    <a href='#projects' className='no-underline text-white mx-2'>Projects</a>
                    <a href='#contact' className='no-underline text-white mx-2'>Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;
