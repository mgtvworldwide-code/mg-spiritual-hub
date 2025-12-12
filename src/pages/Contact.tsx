import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
        toast.error('እባክዎ ሁሉንም πεδία ይሙሉ');
        return;
    }
    setIsSubmitting(true);
    toast.loading('መልዕክትዎ እየተላከ ነው...');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast.success('መልዕክትዎ በተሳካ ሁኔታ ተልኳል። በቅርቡ ምላሽ እንሰጣለን።');
    }, 2000);
  };

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-blue-900'>ያግኙን</h1>
        <p className='text-lg text-gray-600 mt-2'>ጥያቄዎች፣ አስተያየቶች ወይም የጸሎት ጥያቄዎች ካሉዎት እኛን ለማግኘት አያመንቱ።</p>
      </div>

      <div className='grid md:grid-cols-2 gap-12'>
        {/* Contact Form */}
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-blue-800 mb-6'>መልዕክት ይላኩልን</h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>ስም</label>
              <input type='text' name='name' id='name' value={formData.name} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>ኢሜይል</label>
              <input type='email' name='email' id='email' value={formData.email} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>መልዕክት</label>
              <textarea name='message' id='message' value={formData.message} onChange={handleChange} rows={4} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'></textarea>
            </div>
            <button type='submit' disabled={isSubmitting} className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-gray-400'>
              {isSubmitting ? 'በመላክ ላይ...' : 'ላክ'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className='space-y-6'>
          <div className='flex items-start space-x-4'>
            <div className='bg-blue-100 p-3 rounded-full'><Mail className='text-blue-600' /></div>
            <div>
              <h3 className='text-xl font-semibold text-blue-800'>ኢሜይል</h3>
              <p className='text-gray-600'>info@mgtvchannel.com</p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <div className='bg-blue-100 p-3 rounded-full'><Phone className='text-blue-600' /></div>
            <div>
              <h3 className='text-xl font-semibold text-blue-800'>ስልክ</h3>
              <p className='text-gray-600'>+251 11 123 4567</p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <div className='bg-blue-100 p-3 rounded-full'><MapPin className='text-blue-600' /></div>
            <div>
              <h3 className='text-xl font-semibold text-blue-800'>አድራሻ</h3>
              <p className='text-gray-600'>አዲስ አበባ, ኢትዮጵያ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;