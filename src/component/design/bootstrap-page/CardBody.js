import React from 'react'

const CardBody = () => {
  return (
    <div>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <h5>
                    Loream Ipsum
                    <small className="text-muted" style={{ marginLeft:'10px' }}>Image</small>
                </h5>
               <img src='https://picsum.photos/200/300' alt='one'/>
            </div>
            <div class="col">
                <h5>
                    Loream Ipsum
                    <small className="text-muted" style={{ marginLeft:'10px' }}>Image</small>
                </h5>
              <img src='https://picsum.photos/200/300' alt='two'/>
            </div>
            <div class="col">
                <h5>
                    Loream Ipsum
                    <small className="text-muted" style={{ marginLeft:'10px' }}>Image</small>
                </h5>
              <img src='https://picsum.photos/200/300' alt='three'/>
            </div>
        </div>
    </div>
</div>
  )
}

export default CardBody
