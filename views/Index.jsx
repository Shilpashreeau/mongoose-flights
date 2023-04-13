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
                {flight.airline}
                {flight.flightNo}
                {flight.departs}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;
