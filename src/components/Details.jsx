import React, {useEffect, useState } from "react";




const Details = () => {
    const [articles, setArticles] = useState([]);

const fetchData = async()=>{
    let url = 'https://jsonplaceholder.typicode.com/users';
     let data = await fetch(url);
     let parseData = await data.json();
    //  console.log(parseData);
    //  parseData.map((e)=>{
    //     console.log(e.name , e.id, e.company.name)
    //  });
    setArticles(parseData);
    };
    useEffect(() => {
        fetchData();
        
  }, []);

  return (
    <>
      <div className="container my-3">
       
      <div   className="accordion accordion-flush my-3" id="accordionFlushExample">
      
          {articles.map((element) => (
        <div  key={element.id} className="accordion-item">
          <h2  className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div className="container " >
              <table className="table table-borderless">
                <thead>
                  <tr className="container" >
                    <th ></th>
                    <th  className='my-2' style={{maxWidth: "100px" , display:"inline-block" }} >Contact</th>
                    <th >City</th>
                    <th >Zip Code</th>
                  </tr>
                </thead>
              
                <tbody  >
                  <tr className="container ">
                    <th style={{maxWidth: "100px" , display:"inline-block" }} >{element.name}</th>
                    <td>{element.username}</td>
                    <td>{element.address.city}</td>
                    <td>{element.address.zipcode}</td>
                  </tr>
                </tbody>
              </table>
                 </div>
              More Details
            </button>
          </h2>

          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            
            <div className="accordion-body">
              <strong>Description</strong>
              <br />
              Providing service of domestic flight booking @ lowest price
              guaranteed and also for railway e ticket booking. aslo offering
              international flight tickets. giving services to our customers
              since 1995. Now going to start hajj and umrah very soon for our
              valuable customers it will be also @ very affordable prices.
              <div className="container my-3">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th ></th>
                      <th>Contact Person</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th ></th>
                      <td>{element.name}</td>
                      <td>
                      {element.address.street }, {element.address.city}, {element.address.zipcode}
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr>
                      <th ></th>
                      <th >Geographical Location</th>
                      <th >City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th ></th>
                      <td>Latitude : {element.address.geo.lat} <br /> Longitude : {element.address.geo.lng} </td>
                      <td>{element.address.city}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th ></th>
                      <th >Email</th>
                      <th >Company Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th ></th>
                      <td>{element.email}</td>
                      <td>{element.company.name}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th ></th>
                      <th >Phone</th>
                      <th >Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th ></th>
                      <td>{element.phone}</td>
                      <td>
                      {element.website}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
             ))}
           
      </div>
      </div>
    

     
    </>
  );
};

export default Details;
