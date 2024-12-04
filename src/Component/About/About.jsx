import './about.css';

export function About() {
  return (
    <>
    
    <div className='about-container'>
    <div className="heading">
     
      </div>
      
      <div className="innerabout">
      <div className="images">
            <img className='img1' src="https://i.ibb.co/0D5kdjT/Screenshot-2024-12-03-150224.png" alt="" />
             <img src="https://i.ibb.co/G7X7TXc/Screenshot-2024-12-03-153437.png" alt="" className="img2" />
        </div>
        <div className="feature">
           <span>Let's try</span>
           <h1>Easy to Manage,no work at all</h1>
           <ul>
            <div className='flex'>
            <img src="https://www.deel.com/_next/static/media/check-circle.e3dc67e6.svg" alt="" />
            <li>Easy to manage attendance of your campus</li>
            </div>
            <div className='flex'>
            <img src="https://www.deel.com/_next/static/media/check-circle.e3dc67e6.svg" alt="" />
            <li>real time attendance processing.</li>
            </div>
            <div className='flex'>
            <img src="https://www.deel.com/_next/static/media/check-circle.e3dc67e6.svg" alt="" />
            <li>All Datas are stored in Encrypted form</li>
            </div>
            <div className='flex'>
            <img src="https://www.deel.com/_next/static/media/check-circle.e3dc67e6.svg" alt="" />
            <li>Within the Portal students see their marks</li>
            </div>
            <div className='flex'>
            <img src="https://www.deel.com/_next/static/media/check-circle.e3dc67e6.svg" alt="" />
            <li>Notice,Compalin and many more things</li>
            </div>
           </ul>
        </div>
        
      </div>
    </div>
      
      
    </>
  );
}
