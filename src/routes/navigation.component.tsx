import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './navigation.styles.css';

interface NavigationProps {
    name: string
}


const Navigation = (props: NavigationProps) => {
    const { name } = props

    return (
        <nav className='app__navbar'>
            Some JSX {name}</nav>
    )


}

export default Navigation