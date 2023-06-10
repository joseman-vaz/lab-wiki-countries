import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();
  const country = countries.find(
    (country) => country.alpha3Code === alpha3Code
  );

  if (!country)
    return (
      <div>
        <h1>Country does not exist</h1>
      </div>
    );
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div class="details card m-3">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt={`${country.name.common} flag`}
          class="card-img-top"
        />
        <h2>{country.name.common}</h2>
        <p>Official Name: {country.name.official}</p>
        <p>Capital: {country.capital}</p>
        <p>Subregion: {country.subregion}</p>
      </div>
    </div>
  );
}

export default CountryDetails;
