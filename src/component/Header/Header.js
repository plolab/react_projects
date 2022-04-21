import "../styles.css"
import "./Header.css";
const Header = () => {
    return (
        <header className="header">
            <div className="Upper_menu_bar">
                <ul className="main_menu">
                    <li><a href="#">grand prix</a>
                        <ul className="sub_menu">
                            <li><a href="#">grand prix</a></li>
                            <li><a href="#">entry</a></li>
                            <li><a href="#">grand prixed</a></li>
                        </ul>
                    </li>
                    <li><a href="#">roadmap</a></li>
                    <li><a href="#">team</a></li>
                    <li><a href="#">partners</a></li>
                    <li><a href="#">faq</a></li>
                    <li><a href="#">ota</a>
                        <ul className="sub_menu">
                            <li><a href="#">staking</a></li>
                            <li><a href="#">mtgr</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="Group_356">
                <a href="#">a<img src="" /></a>
                <a href="#">a<img src="" /></a>
                <a href="#">a<img src="" /></a>
                <a href="#">a<img src="" /></a>
            </div>
        </header>
    )
}

export default Header