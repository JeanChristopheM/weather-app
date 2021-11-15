function Main({weather}) {
    console.log(weather)
    return ( 
        <main className="main">
            {Object.keys(weather).length === 0 ?
                <p>No country selected</p>:
                <div className="container">
                    <img src={weather.photos} alt="" />
                    <p>{weather.weather}</p>
                </div>
            }
        </main>
    );
}

export default Main;