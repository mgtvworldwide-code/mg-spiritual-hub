import { PlayCircle } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  category: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden group transition-transform transform hover:-translate-y-2'>
      <div className='relative'>
        <img src={video.thumbnailUrl} alt={video.title} className='w-full h-48 object-cover' />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
          <PlayCircle className='text-white' size={60} />
        </div>
        <span className='absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full'>{video.category}</span>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-blue-900 truncate'>{video.title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
