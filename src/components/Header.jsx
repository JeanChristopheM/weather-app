import {useRef} from 'react';

function Header({data, countryPicked}) {
    const inputRef = useRef();
    const handleChange = () => {
        const selectElement = inputRef.current;
        countryPicked(selectElement.value);
    }
    return ( 
        <header className="header">
            <h1>Weather</h1>
            <form action="submit">
                <select name="country selection" onChange={handleChange} ref={inputRef} >
                    <option value="Please select a country">Please select a country</option>
                    {data.map(x => 
                        <option value={x.country}>{x.country}</option>
                        )}
                </select>
            </form>
        </header>
    );
}

export default Header;