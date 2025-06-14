import chefImage from '../images/chef.png'
import chefImage1 from '../images/chef2.png'

export default function Header() {
    return (
        <header className="header-main">
            <div className="header-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                    src={chefImage}
                    alt="Chef icon"
                    style={{ width: '50px', height: '50px' }}
                />
                <h1>Recipe Generator</h1>
                <img
                    src={chefImage1}
                    alt="Chef icon"
                    style={{ width: '50px', height: '50px' }}
                />
            </div>
        </header>
    )
}