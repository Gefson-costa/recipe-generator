import chefImage from '../images/chef.png'
import chefImage1 from '../images/chef2.png'

export default function Header() {
    return (
        <header className="header-main">
            <div className="header-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                    src={chefImage}
                    alt="Chef icon"
                />
                <h1>Recipe Generator</h1>
                <img
                    src={chefImage1}
                    alt="Chef icon"
                />
            </div>
        </header>
    )
}