import chefImage from '../images/chef.png'
// import chefImage1 from '../images/chef2.png'

export default function Header() {
    return (
        <header className="header-main">
            <div className="header-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h1>Recipe <span><img src={chefImage} alt="" /></span> Generator</h1>
            </div>
        </header>
    )
}