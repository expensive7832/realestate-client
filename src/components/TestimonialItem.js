import React from 'react'
import "./flatitem.css"


const TestimonialItem = () => {
  return (
    <div className="team py-3 bg-muted" >
                    <div className="team-img">
                        <img src="/img/team.jpg" alt="team" />
                    </div>
                    <div className="comment pt-3 pb-5">
                    <i class="fa-solid text-primary fa-quote-left"></i> &nbsp; &nbsp;
                      <span className="text-center text-primary">Lorem ipsum dolor sit amet! 
                      </span>  
                         
                    </div>
                    <div className="px-2 d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold">Ajayi</h5>
                    <h6 className="text-primary">GM-Itgen</h6>
                        
                    </div>
                </div>
  )
}

export default TestimonialItem