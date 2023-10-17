
function Header({ title, subtitle, background, titleColor }) {
    // console.log("Header props:", props);
    // console.log("background:", background);
    return (
        <header className={`py-5 bg-${background || "dark"} text-white text-center`}>
            <div className="container">
                <h1 class={`text-${titleColor || "info"}`}>{title || "Default title"}</h1>
                <p className="lead">{subtitle}</p>
            </div>
        </header>
    )
}

export default Header;
