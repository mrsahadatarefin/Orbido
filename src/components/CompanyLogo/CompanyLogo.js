import React from 'react';
import img1 from '../../assets/company-logo/airbnb.png'
import img2 from '../../assets/company-logo/binance.png'
import img3 from '../../assets/company-logo/coinbase.png'
import img4 from '../../assets/company-logo/bropbox.png'

const CompanyLogo = () => {
    const logos = [
        {
        id:1,
        img:img1
    },
        {
        id:2,
        img:img2
    },
        {
        id:3,
        img:img3
    },
        {
        id:4,
        img:img4
    },

]
    return (
        <div className='max-w-[1440px]  m-auto mt-36'>
            <div className=' grid grid-cols-2 lg:grid-cols-4 gap-10 p-4'>
           {
            logos.map(logo =><>
            
            <img src={logo.img} alt=""  />
            
            </>)
           }

            </div>
            
        </div>
    );
};

export default CompanyLogo;