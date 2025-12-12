const About = () => {
    return (
      <div className='bg-white'>
        <div className='container mx-auto px-4 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='order-2 md:order-1'>
              <h1 className='text-4xl font-bold text-blue-900 mb-6'>ስለ MG TV Channel</h1>
              <div className='space-y-4 text-lg text-gray-700'>
                <p>
                  MG TV Channel መንፈሳዊ ብርሃንን እና እውቀትን በዓለም ዙሪያ ላሉ አማኞች ለማድረስ የተቋቋመ የሚዲያ ተቋም ነው። ዋና ዓላማችን በኢየሱስ ክርስቶስ ወንጌል ላይ የተመሰረቱ ትምህርቶችን፣ አምልኮዎችን እና ሕይወትን የሚለውጡ ፕሮግራሞችን ማቅረብ ነው።
                </p>
                <h2 className='text-2xl font-semibold text-blue-800 pt-4'>የእኛ ራዕይ</h2>
                <p>
                  ራዕያችን ሰዎች በእምነታቸው እንዲያድጉ፣ በመንፈሳዊ ሕይወታቸው እንዲጠነክሩ እና ለሌሎችም ብርሃን እንዲሆኑ የሚያስችል መድረክ መፍጠር ነው።
                </p>
                <h2 className='text-2xl font-semibold text-blue-800 pt-4'>የእኛ ተልዕኮ</h2>
                <p>
                  ተልዕኳችን ከፍተኛ ጥራት ያላቸውን፣ እምነትን የሚያንጹ እና ተመልካቾችን የሚያበረታቱ ይዘቶችን ማዘጋጀት እና ማሰራጨት ነው። በዲጂታል ሚዲያ አማካኝነት የእግዚአብሔርን ፍቅር እና እውነት ለሁሉም ለማዳረስ እንተጋለን።
                </p>
              </div>
            </div>
            <div className='order-1 md:order-2'>
              <img 
                src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/1566be10-e37f-4fae-97e0-15af798627ff/about-us-image-dcsnyb8-1765517823081.webp' 
                alt='About MG TV Channel' 
                className='rounded-lg shadow-xl w-full h-auto object-cover' 
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;