import React from 'react'
import { Link } from 'react-router-dom'

const CardGroup = () => {
  return (
    <>
    <div class="card-group my-3">
  <div class="card">
    <img src="https://www.epo.org/about-us/annual-reports-statistics/statistics/2020/digital-technologies/TopVisual.jpg?lenya.module=svg&height=283&width=76" class="card-img-top"
       alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <p class="card-text"><small class="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://phirenamenca.eu/wp-content/uploads/2019/09/Digital-Technologies.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <p class="card-text"><small class="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://www.epo.org/about-us/annual-reports-statistics/statistics/2020/digital-technologies/TopVisual.jpg?lenya.module=svg&height=283&width=761" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <p class="card-text"><small class="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://phirenamenca.eu/wp-content/uploads/2019/09/Digital-Technologies.jpg" 
    class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <p class="card-text"><small class="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
</div>
    </>
  )
}

export default CardGroup