import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { withRouter} from "react-router-dom";
import Moment from "moment";

 class Session_Tic extends Component {

    constructor(props) {
        super(props);
        this.state = {
          Ticket: [],
          TId:'',    
          SId:'',
          From:'',
          To:'',
          FromHalt:'',
          ToHalt:'',
          PId:'',
          Seats:'',
          PStatus:'',
          Date:'',
          Price:'',
           
        }
    
      }
      
componentDidMount(){
    const value = new URLSearchParams(this.props.location.search)
    var sid = value.get('sid');
    axios.get(window.$API_SERVER +"Ticket/session/"+sid)
        .then(res=>{
            this.setState({
                Ticket:res.data,
              
            });
        })
}
    render() {
        const { Ticket } = this.state;
        var totalprice = 0;
        var totalTicket = 0;
        const ticlist = Ticket.length ? (
            Ticket.map(ses=>{
                totalprice=totalprice+ses.Price;
                totalTicket=Ticket.length;
                return( 
                    <tr>
                       <td class ="">{ses.TId}</td> 
                       <td class ="">{ses.SId}</td>
                       <td class ="">{ses.FromHalt}</td>
                       <td class ="">{ses.ToHalt}</td>
                       <td class ="">{ses.PId}</td>
                       <td class ="">{ses.NoOfSeats}</td>
                       <td class ="">{Moment(ses.Date).format('YYYY-MM-DD')}</td>
                       <td class ="">{ses.Price}</td>
                       </tr>
       
                       );
            })):(
                <div className="center">No tickets availabe</div>
            )
            
        return (  
            <div class="container p-1">
                <br></br><br></br>
             <div class="mt-5">
                <h1>
                    <u>Ticket Information</u>
                </h1>
                <br></br>

                
          <div class="card-deck">
            <div class="card bg-light text-dark p-3">
              <div class="card-body ">
               
                <div class="row">
                <div class="col-lg-9">
                    <div class="text-center">
                    <table class="table table-hover table-info table-bordered text-center">
                        <thead>
                            <tr class="bg-info">
                                <th scope="col-lg-4">Ticket Id</th>
                                <th scope="col-lg-4">Session Id</th>
                                <th scope="col-lg-4">From</th>
                                <th scope="col-lg-4">To</th>
                                <th scope="col-lg-4">Passenger Id</th>
                                <th scope="col-lg-4">No of Seats</th>
                               
                                <th scope="col-lg-4">Date</th>
                                <th scope="col-lg-4">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ticlist}
                        </tbody>
                    </table>
                    </div>
                    </div>
                   

                    <div class="card bg-light text-dark">
                         <div class="card-body">
                         

                         
                         <div class="form-group row">
                    <div class="col-lg-10">
                      <label>Total Price of tickets  </label>
                    </div>
                    <div class=" ">{totalprice}</div>
                  </div>

                  <div class="form-group row">
                    <div class="col-lg-10">
                      <label>Total number of tickets  </label>
                    </div>
                    <div class=" ">{totalTicket}</div>
                  </div>

                        </div> 
                    </div> 
                    </div>
                    </div> 
                    </div>
                </div>
            </div>
        </div>
        
         );
    }
}
export default withRouter(Session_Tic);