const React=require("react");

function New(){
return(
    <div>
        <h1>New Flight Page</h1>
        <form action="/flights" method='POST'>

           Airline Name:<input type="text" name="airline"/>
            <br/>
            Flight No:<input type="text" name="flightNo"/>
            <br/>
           Departs at:<input type="datetime-local" name="departs"/>
            <input type="submit" value="Create new flight"/>
            
        </form>
    </div>
)

}
module.exports=New;