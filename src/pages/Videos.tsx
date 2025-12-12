import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { Search } from 'lucide-react';

const allVideos = [
  { id: 1, title: 'ሳምንታዊ የስብከት ትምህርት', thumbnailUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1566be10-e37f-4fae-97e0-15af798627ff/sermon-thumbnail-alydj5b-1765517800883.webp', category: 'ስብከትና ትምህርት' },
  { id: 2, title: 'ልዩ የአምልኮ ጊዜ', thumbnailUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1566be10-e37f-4fae-97e0-15af798627ff/worship-thumbnail-cecrvcv-1765517808341.webp', category: 'አምልኮና ዝማሬ' },
  { id: 3, title: 'ወቅታዊ ጉዳዮች ውይይት', thumbnailUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1566be10-e37f-4fae-97e0-15af798627ff/discussion-thumbnail-eor4t4e-1765517815080.webp', category: 'የውይይት መድረኮች' },
  // Add more videos here
];

const categories = ['ሁሉም', 'ስብከትና ትምህርት', 'አምልኮና ዝማሬ', 'የውይይት መድረኮች'];

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ሁሉም');

  const filteredVideos = allVideos.filter(video => {
    const inCategory = activeCategory === 'ሁሉም' || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    return inCategory && matchesSearch;
  });

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-blue-900'>የቪዲዮ ማዕከል</h1>
        <p className='text-lg text-gray-600 mt-2'>የእኛን የበለጸገ የመንፈሳዊ ይዘት ስብስብ ያስሱ።</p>
      </div>

      {/* Search and Filter */}
      <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4'>
        <div className='relative w-full md:w-1/2 lg:w-1/3'>
          <input
            type='text'
            placeholder='ቪዲዮ ፈልግ...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
        </div>
        <div className='flex flex-wrap justify-center gap-2'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {filteredVideos.length > 0 ? (
          filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))
        ) : (
          <p className='col-span-full text-center text-gray-500'>ምንም ቪዲዮ አልተገኘም።</p>
        )}
      </div>
    </div>
  );
};

export default Videos;