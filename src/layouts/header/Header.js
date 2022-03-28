import './style.css'
import logoImage from '../../assets/images/header/logo.svg'
import televisionImage from '../../assets/images/header/television.svg'
import documentImage from '../../assets/images/header/document.svg'
import userImage from '../../assets/images/header/user.png'
import levelImage from '../../assets/images/header/level.svg'
import settingImage from '../../assets/images/header/setting.svg'
function Header() {
    return (
        <div className="app-header d-flex justify-content-between align-items-center">
            <div className="app-header-left d-flex">
                <div className="app-header__logo d-flex">
                    <img src={logoImage} alt='logo' />
                    <div>NFT Lounge</div>
                </div>
                <div className="app-header__active-game d-flex align-items-center">
                    <img src={televisionImage} alt='television' />
                    <div>Active Game</div>
                </div>
                <div className="app-header__game-history d-flex align-items-center">
                    <img src={documentImage} alt='document' />
                    <div>Game Hisory</div>
                </div>
            </div>
            <div className="app-header-right d-flex align-items-center">
                <div className="app-header__avatar">
                    <img src={userImage} alt="avatar" />
                </div>
                <div className="app-header__username">
                    Whazzup78
                </div>
                <div className="app-header__level d-flex">
                    <img src={levelImage} alt="level" />
                    <div>123 456</div>
                </div>
                <div className="app-header__setting">
                    <img src={settingImage} alt="setting" />
                </div>
            </div>
        </div>
    )
}
export default Header;