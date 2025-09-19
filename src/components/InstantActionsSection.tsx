const InstantActionsSection = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Video Container */}
        <div className="relative group">
          <div className="relative rounded-3xl p-8 border transition-all duration-300"
               style={{ 
                 backgroundColor: '#0A0A0A',
                 border: '1px solid #1A1A1A',
                 boxShadow: '0 40px 80px -20px rgba(107, 115, 137, 0.24), 0 20px 40px -10px rgba(31, 32, 33, 0.26), 0 10px 20px -5px rgba(0, 0, 0, 0.6)'
               }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = 'rgba(123, 155, 185, 0.66)';
                   e.currentTarget.style.boxShadow = '0 50px 100px -25px rgba(123, 155, 185, 0.3), 0 25px 50px -12px rgba(33, 33, 34, 0.5), 0 15px 30px -8px rgba(67, 67, 69, 0.4)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = '#1A1A1A';
                   e.currentTarget.style.boxShadow = '0 40px 80px -20px rgba(79, 80, 82, 0.28), 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.6)';
                 }}>
            
            {/* Video Header */}
            <div className="text-center mb-8">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 text-3d">
              Connect Nyra with your world
            </h3>
              <p className="text-lg" style={{ color: '#888888' }}>
                Your emails and documents, automated in a single tap.
              </p>
            </div>

            {/* Video Container */}
            <div className="relative">
              <div 
                style={{
                  border: '1px solid rgba(123, 155, 185, 0.3)',
                  boxShadow: '0 0 20px rgba(123, 155, 185, 0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#1A1A1A'
                }}
              >
                <video 
                  width="100%" 
                  height="auto" 
                  controls
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '12px'
                  }}
                >
                  <source src="src/assets/nyra-demo.mp4" type="video/mp4" />
                  <source src="src/assets/test nyra sito.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantActionsSection;