import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import VideoCard from '../components/VideoCard';

const recentVideos = [
  {
    id: 1,
    title: 'ሳምንታዊ የስብከት ትምህርት',
    thumbnailUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1566be10-e37f-4fae-97e0-15af798627ff/sermon-thumbnail-alydj5b-1765517800883.webp',
    category: 'ስብከትና ትምህርት',
  },
  {
    id: 2,
    title: 'ልዩ የአምልኮ ጊዜ',
    thumbnailUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1566be10-e37f-4fae-97e0-15af798627ff/worship-thumbnail-cecrvcv-1765517808341.webp',
    category: 'አምልኮና ዝማሬ',
  },
  {
    id: 3,
    title: 'ወቅታዊ ጉዳዮች ውይይት',
    thumbnailUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1566be10-e37f-4fae-97e0-15af798627ff/discussion-thumbnail-eor4t4e-1765517815080.webp',
    category: 'የውይይት መድረኮች',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className='relative h-[60vh] bg-cover bg-center text-white flex items-center justify-center'
        style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/1566be10-e37f-4fae-97e0-15af798627ff/hero-background-j0buncp-1765517793645.webp')` }}
      >
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='relative text-center z-10 px-4'>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-4 leading-tight'>መንፈሳዊ ብርሃን ለሁሉም</h1>
          <p className='text-lg md:text-xl mb-8 max-w-2xl mx-auto'>የቀጥታ ስርጭቶችን፣ ስብከቶችን እና መንፈሳዊ ፕሮግራሞችን ይከታተሉ።</p>
          <Link to=
'#
' className='bg-gold-500 hover:bg-gold-600 text-blue-900 font-bold py-3 px-8 rounded-full inline-flex items-center space-x-2 transition-transform transform hover:scale-105'>
            <PlayCircle size={24} />
            <span>ቀጥታ ስርጭት ይመልከቱ</span>
          </Link>
        </div>
      </section>

      {/* Recent Videos Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-10 text-blue-900'>የቅርብ ጊዜ ቪዲዮዎች</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {recentVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          <div className='text-center mt-12'>
            <Link to='/videos' className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors'>
              ሁሉንም ቪዲዮዎች ይመልከቱ
            </Link>
          </div>
        </div>
      </section>

       {/* Channel Mission */}
       <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold text-blue-900 mb-4'>የእኛ ተልዕኮ</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            የእግዚአብሔርን ቃል በማስተማር፣ በማነሳሳት እና በማበረታታት ህይወትን መለወጥ። MG TV Channel በዓለም ዙሪያ ላሉ ሰዎች იმედን፣ እምነትን እና ፍቅርን ለማድረስ ቁርጠኛ ነው።
            </p>
        </div>
      </section>
    </div>
  );
};

export default Home;