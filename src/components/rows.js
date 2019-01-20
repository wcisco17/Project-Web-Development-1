import React from 'react';


export default ({ title, rowTitle1, rowTitle2, rowTitle3, rowContent1, rowContent2, rowContent3, rowContent_P1, rowContent_P2, rowContent_P3 }) => (
    <section id="home-features" className="text-center ">
                    
    <p className="lead grey-text w-responsive mx-auto"  style={{ marginBottom: 100 }} >
        {title}
    </p>
    <div className="row mb-5">
        <div className="col-md-4">
              {rowContent1}
            <h5 className="font-weight-bold my-4">{rowTitle1}</h5>
            <p className="grey-text mb-md-0 mb-5">
                {rowContent_P1}
            </p>

        </div>
        

        
        <div className="col-md-4">
                {rowContent2}
            <h5 className="font-weight-bold my-4">{rowTitle2}</h5>
            <p className="grey-text mb-md-0 mb-5">
            {rowContent_P2}
            </p>
        </div>
        

        
        <div className="col-md-4">
                {rowContent3}
            <h5 className="font-weight-bold my-4">{rowTitle3}</h5>
            <p className="grey-text mb-0">
            {rowContent_P3}
            </p>

        </div>
    </div>
    </section>
)