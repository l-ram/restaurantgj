import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../constants/images';

import './navigation.styles.css';
import { useState } from 'react';

interface NavigationProps {
    name: string
}

const Navigation = (props: NavigationProps) => {
    const { name } = props;

    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <img src={images.gericht} alt="app logo" />
            </div>
            <ul className='navbar__links'>
                <li className='p__opensans'><a href='#home'>Home</a></li>
                <li className='p__opensans'><a href='#about'>About</a></li>
                <li className='p__opensans'><a href='#menu'>Menu</a></li>
                <li className='p__opensans'><a href='#awards'>Awards</a></li>
                <li className='p__opensans'><a href='#contact'>Contact</a></li>
            </ul>
            <div className='navbar__booking'>
                <div />
                <a href="#booking" className='p__opensans'>Book a table</a>
            </div>

            <div className='navbar__smallscreen'>
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => { setToggleMenu(true) }} />

                {toggleMenu && (
                    <div className='navbar__smallscreen_overlay flex__center slide-bottom'>
                        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => { setToggleMenu(false) }} />
                        <ul className='navbar__smallscreen_links'>
                            <li className='p__opensans'><a href='#home'>Home</a></li>
                            <li className='p__opensans'><a href='#about'>About</a></li>
                            <li className='p__opensans'><a href='#menu'>Menu</a></li>
                            <li className='p__opensans'><a href='#awards'>Awards</a></li>
                            <li className='p__opensans'><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>


        </nav>
    )


}

export default Navigation