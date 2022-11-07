import React from 'react'
import './cards.css';

const Cards = () => {
  const variables = 1;
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-sm-6 col-xs-12 bootCols'>
                    <div className='card text-white bg-primary mb-3'>
                        <div className='card-body'>
                            <h1>Hello Grid System </h1>
                            <p>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-xs-12 bootCols'>
                    <div className='card text-white bg-info mb-3'>
                        <div className='card-body'>
                            <h1>Hello Grid System </h1>
                            <p>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
                if(variables == 1){
                    <div className='col-md-4 col-sm-6 col-xs-12 bootCols'>
                    <div className='card text-white bg-secondary mb-3'>
                        <div className='card-body'>
                            <h1>Hello Grid System </h1>
                            <p>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
                }
                else{
                    console.log('nothing')
                }
                
            </div>
        </div>
    </div>
  )
}

export default Cards
