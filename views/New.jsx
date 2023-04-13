const React=require("react");

function New(){
return(
    <div>
        <h1>New Flight Page</h1>
        <form action="/fruits" method='POST'>

           Airline Name:<input type="text" name="airline"/>
            <br/>
            Flight No:<input type="text" name="flightNo"/>
            <br/>
           Departs at:<input type="text" name="departs"/>
            <input type="submit" value="Create new fruit"/>
            
        </form>
    </div>
)

}
module.exports=New;