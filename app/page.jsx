export default function Home() {
  return (
    <main className="page-container">
      
      
      <header className="site-header">
        <h1>AI Adventure Header</h1>
      </header>

     
      <div className="card">
        <img 
          src="https://picsum.photos/600/300" 
          alt="Card Banner" 
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Adventure Card</h2>
          <p className="card-text">
            This card contains an image header and styled text section built with CSS.
          </p>
        </div>
      </div>

     
      <div className="avatar-container">
        <img 
          src="https://i.pravatar.cc/150?img=12" 
          alt="User Avatar" 
          className="avatar"
        />
      </div>

    </main>
  );
}