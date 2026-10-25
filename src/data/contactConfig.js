export const CONTACT_INFO = {
  phone: '+91 96996 03323',
  phoneTel: '+919699603323',
  whatsappNumber: '919699603323',
  whatsappDisplay: '+91 96996 03323',
  email: 'contact@shubhtech.in',
  location: 'India',
  hours: 'Mon – Sat • 9:30 AM to 7:30 PM IST',
  getWhatsAppUrl: (message = '') => {
    return message
      ? `https://wa.me/919699603323?text=${encodeURIComponent(message)}`
      : `https://wa.me/919699603323`;
  }
};
