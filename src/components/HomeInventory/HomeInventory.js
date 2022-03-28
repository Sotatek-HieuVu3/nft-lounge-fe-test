import CategoryIcon from '../../assets/images/home/category.svg'
import DepositIcon from '../../assets/images/home/deposit.svg'
import EtherCoinGreenIcon from '../../assets/images/coins/ethereum_green.svg'
import './style.css'
export default function HomeInventory() {
    return (
        <div className='app-home_inventory'>
            <div className='app-home__inventory-header'>
                <img src={CategoryIcon} alt="category" />
                <span>My Inventory</span>
            </div>
            <div className='app-home__inventory-stat d-flex justify-content-between'>
                <div className='d-flex'>
                    <div className='app-home__inventory-stat-numberNFT'>
                        <div className='app-home__inventory-stat-value'>0</div>
                        <div className='app-home__inventory-stat-label'>Selected NFTs</div>
                    </div>
                    <div className='app-home__inventory-stat-total'>
                        <div className='app-home__inventory-stat-value'>
                            <span>0</span>
                            <img src={EtherCoinGreenIcon} alt='ethereum' />
                        </div>
                        <div className='app-home__inventory-stat-label'>Total Selected Value</div>
                    </div>
                </div>
                <div className='app-home__inventory-deposit'>
                    <img src={DepositIcon} alt='deposit'/>
                    <span>DEPOSIT</span>
                </div>
            </div>
        </div>
    )
}