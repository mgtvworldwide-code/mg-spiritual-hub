import { Heart, Banknote, Landmark } from 'lucide-react';

const Donate = () => {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-blue-900'>የእኛን አገልግሎት ይደግፉ</h1>
        <p className='text-lg text-gray-600 mt-2 max-w-3xl mx-auto'>
          የእርስዎ ድጋፍ ይህንን አገልግሎት እንድንቀጥል እና ወንጌልን በዓለም ዙሪያ ላሉ በሚሊዮን የሚቆጠሩ ሰዎች እንድናደርስ ይረዳናል። እያንዳንዱ መዋጮ፣ መጠኑ ምንም ይሁን ምን, ትልቅ ለውጥ ያመጣል።
        </p>
      </div>

      <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-8'>
        {/* Bank Transfer */}
        <div className='bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600'>
          <div className='flex items-center space-x-4 mb-4'>
            <Landmark className='text-blue-600' size={40} />
            <h2 className='text-2xl font-bold text-blue-800'>የባንክ ማስተላለፍ</h2>
          </div>
          <div className='space-y-3 text-gray-700'>
            <p><span className='font-semibold'>የባንክ ስም:</span> የኢትዮጵያ ንግድ ባንክ</p>
            <p><span className='font-semibold'>የחשבון ስም:</span> MG TV Channel</p>
            <p><span className='font-semibold'>የחשבון ቁጥር:</span> 1000123456789</p>
            <p><span className='font-semibold'>Swift Code:</span> CBETETAA</p>
          </div>
        </div>

        {/* In Person */}
        <div className='bg-white p-8 rounded-lg shadow-md border-l-4 border-gold-500'>
          <div className='flex items-center space-x-4 mb-4'>
            <Heart className='text-gold-500' size={40} />
            <h2 className='text-2xl font-bold text-blue-800'>በአካል ይለግሱ</h2>
          </div>
          <p className='text-gray-700'>
            በአቅራቢያዎ በሚገኘው ቢሯችን መጥተው ድጋፍዎን ማድረግ ይችላሉ።
            <br />
            <span className='font-semibold'>አድራሻ:</span> ቦሌ, አዲስ አበባ, ኢትዮጵያ
          </p>
        </div>
      </div>

      <div className='text-center mt-12 bg-blue-50 p-6 rounded-lg max-w-4xl mx-auto'>
        <h3 className='text-xl font-semibold text-blue-900'>እናመሰግናለን!</h3>
        <p className='text-gray-700 mt-2'>ለጋስነትዎ እና ለልብዎ እናመሰግናለን። የእርስዎ ድጋፍ ዓለምን እየለወጠ ነው።</p>
      </div>
    </div>
  );
};

export default Donate;
