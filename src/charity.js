import React from 'react';

const CharityWebsite = () => {
  return (
    <div>
      <nav style={{ backgroundColor: '#FFDAB9', padding: '10px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src="your-charity-logo.png" alt="DAAN" style={{ marginRight: '10px' }} />
    <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
      <li style={{ marginRight: '10px' }}><a href="#home">Home</a></li>
      <li style={{ marginRight: '10px' }}><a href="#about">About</a></li>
      <li style={{ marginRight: '10px' }}><a href="#causes">Causes</a></li>
      <li style={{ marginRight: '10px' }}><a href="#page">Page</a></li>
      <li style={{ marginRight: '10px' }}><a href="#blog">Blog</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>


      <div>
      <h1>CHARITY  LIFE</h1>
      <img src="charity.jpg" alt="charity" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />


      <div style={{ marginBottom: '20px' }}>
      <div style={{ width: '80%', margin: '0 auto', border: '1px solid black', borderRadius: '10px', overflow: 'hidden', padding: '20px', marginBottom: '20px' }}>
 
      <div style={{ width: '80%', margin: '0 auto', border: '1px solid black', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
  {/* First Table */}
  <table style={{ width: '100%' }}>
    <tbody>
      <tr>
        <td style={{ width: '20%', verticalAlign: 'top' }}>
          {/* Space for Image */}
          <img src="your-image.png" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </td>
        <td colSpan="3" style={{ textAlign: 'center' }}>
          <h2>Charity Life</h2>
          <div>
            <button style={{ padding: '5px 5px', backgroundColor: '#006400', color: 'white', border: '1px solid black', borderRadius: '5px', marginBottom: '10px' }}>Learn More</button>
          </div>
          <div>
            <button style={{ padding: '5px 10px', backgroundColor: '#006400', color: 'white', border: '1px solid black', borderRadius: '5px' }}>Donate Here</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

 {/* First Table */}
 <table style={{ width: '100%' }}>
    <tbody>
      <tr>
        <td style={{ width: '20%', verticalAlign: 'top' }}>
          {/* Space for Image */}
          <img src="your-image.png" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </td>
        <td colSpan="3" style={{ textAlign: 'center' }}>
          <h2>Charity Life</h2>
          <div>
            <button style={{ padding: '5px 5px', backgroundColor: '#006400', color: 'white', border: '1px solid black', borderRadius: '5px', marginBottom: '10px' }}>Learn More</button>
          </div>
          <div>
            <button style={{ padding: '5px 10px', backgroundColor: '#006400', color: 'white', border: '1px solid black', borderRadius: '5px' }}>Donate Here</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

 {/* First Table */}
 <table style={{ width: '100%' }}>
    <tbody>
      <tr>
        <td style={{ width: '20%', verticalAlign: 'top' }}>
          {/* Space for Image */}
          <img src="your-image.png" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </td>
        <td colSpan="3" style={{ textAlign: 'center' }}>
          <h2>Charity  Life</h2>
          <div>
            <button style={{ padding: '5px 5px', backgroundColor: '#006400', color: 'white', border: '1px solid black', borderRadius: '5px', marginBottom: '10px' }}>Learn More</button>
          </div>
          <div>
            <button style={{ padding: '5px 10px', backgroundColor: '#006400', color: 'white', border: '1px solid black', borderRadius: '5px' }}>Donate Here</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>


</div>






 



   {/* Footer */}
<footer style={{ backgroundColor: 'lightgray', padding: '20px', textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
  {/* Logo Column */}
  <div>
    <img src="daan-logo.png" alt="Daan Logo" style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
    <div>DAAN </div>
  </div>
  
  {/* Contact Us Column */}
  <div>
    <h3>Contact Us</h3>
    <p>Address: VJTI cs / it department </p>
    <p>Phone: +900000000</p>
    <p>Email: charity@example.com</p>
  </div>
  
  {/* Quick Links Column */}
  <div>
    <h3>Quick Links</h3>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#causes">Causes</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
  
  {/* Gmail Options Column */}
  <div>
    <h3>Gmail </h3>
    <p>we never share your privacy </p>
    <input type="email" placeholder="Enter your email" style={{ width: '80%', marginBottom: '10px', padding: '5px' }} />
    <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px' }}>Subscribe</button>
  </div>
</footer>


  </div>
  </div>
  </div>
  );
};

export default CharityWebsite;
