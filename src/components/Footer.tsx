import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-blue-900 text-white'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
          <div>
            <h3 className='text-xl font-bold mb-4'>MG TV Channel</h3>
            <p className='text-blue-200'>መንፈሳዊ ይዘትን ለዓለም በማድረስ ላይ እናተኩራለን።</p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>ፈጣን አገናኞች</h3>
            <ul className='space-y-2'>
              <li><Link to='/videos' className='hover:text-gold-400 transition-colors'>ቪዲዮዎች</Link></li>
              <li><Link to='/about' className='hover:text-gold-400 transition-colors'>ስለ እኛ</Link></li>
              <li><Link to='/donate' className='hover:text-gold-400 transition-colors'>ይለግሱ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>በማህበራዊ ሚዲያ ይከተሉን</h3>
            <div className='flex justify-center md:justify-start space-x-4 mt-2'>
              <a href='#' className='hover:text-gold-400 transition-colors'><Facebook size={24} /></a>
              <a href='#' className='hover:text-gold-400 transition-colors'><Twitter size={24} /></a>
              <a href='#' className='hover:text-gold-400 transition-colors'><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-blue-800 pt-4 text-center text-blue-300'>
          <p>&copy; 2025 MG TV Channel. ሁሉም መብቶች የተጠበቁ ናቸው።</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;