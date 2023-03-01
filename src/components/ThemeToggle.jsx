import '../scss/ThemeToggle.scss'


function ThemeToggle(props) {
    return (
        <>
            <label>
                <input className="toggle-checkbox" type="checkbox" value={props.theme} onChange={props.handleThemeToggle} />
                <div className="toggle-slot">
                    <div className="moon-icon-wrapper">
                        <div className="iconify moon-icon" ></div>
                    </div>
                    <div className="toggle-button"></div>
                    <div className="sun-icon-wrapper">
                        <div className="iconify sun-icon"></div>
                    </div>
                </div>
            </label>
        </>
    )
}

export default ThemeToggle