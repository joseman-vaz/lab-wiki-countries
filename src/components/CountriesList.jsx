import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        console.log(response);
        setCountries(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h2>Countries List</h2>
      <div class="row">
        {countries.map((country) => (
          <div class="col-md-3">
            <div class="card m-3">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common} flag`}
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">{country.name.common}</h5>
                <Link to={`/${country.alpha3Code}`} class="btn btn-info">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
