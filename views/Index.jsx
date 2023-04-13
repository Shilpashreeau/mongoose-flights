const React = require("react");
function Index(props) {
  const { flights } = props;
  console.log(flights);

  return (
    <div>
      <nav>
    <a href="/flights/new">Add a flight</a>
</nav>
      <h1>Index Page</h1>
      <ul>
        {flights.map((flight, i) => {
          return (
            <li key={flight._id}>
              Airline Name:  {flight.airline}<br/>
              Flight Number:  {flight.flightNo}<br/>

             Date:  {new Date(Date(flight.departs)).toLocaleDateString()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;
