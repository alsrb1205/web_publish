import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function ToggleButton({handleToggle}) {
    


    return (
        <button id="menu_toggle" class="header__toggle" aria-label="navigation menu toggle" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}

