export const images = {
  frame: new URL('../img/frame.png', import.meta.url).href,
  hero: new URL('../img/header-page.jpg', import.meta.url).href,
  heroDetail: new URL('../img/carousel-1.jpg', import.meta.url).href,
  aboutOne: new URL('../img/about-1.jpg', import.meta.url).href,
  aboutTwo: new URL('../img/about-2.jpg', import.meta.url).href,
  carouselOne: new URL('../img/carousel-1.jpg', import.meta.url).href,
  carouselTwo: new URL('../img/carousel-2.jpg', import.meta.url).href,
  carouselThree: new URL('../img/carousel-3.jpg', import.meta.url).href,
  header: new URL('../img/header-page.jpg', import.meta.url).href,
  teamOne: new URL('../img/team-1.jpg', import.meta.url).href,
  teamTwo: new URL('../img/team-2.jpg', import.meta.url).href,
  teamThree: new URL('../img/team-3.jpg', import.meta.url).href,
  teamFour: new URL('../img/team-4.jpg', import.meta.url).href,
  testimonialOne: new URL('../img/testimonial-1.jpg', import.meta.url).href,
  testimonialTwo: new URL('../img/testimonial-2.jpg', import.meta.url).href,
  testimonialThree: new URL('../img/testimonial-3.jpg', import.meta.url).href,
  logo: new URL('../img/logo.png', import.meta.url).href
};


export const navLinks = [
  { label: 'About', href: '#about' },
  // { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Films', href: '#films' },
  // { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#booking' }
];

export const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/919730852258', icon: 'message' },
  { label: 'Instagram', href: 'https://www.instagram.com/creativewedding.in/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/people/CreativeWeddingin/100068346289517/', icon: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/@creativewedding_in', icon: 'youtube' }
];

export const contactDetails = {
  phone: '+91 8602908602',
  alternatePhone: '+91 9730852258',
  email: 'creativewedding.in@gmail.com',
  location: 'Nagpur 440003',
  studioLine: '+91 8602908602',
};

export const proofItems = [
  { value: 'Wedding', label: 'photography and candid moments' },
  { value: 'Film', label: 'cinematic stories and trailers' },
  { value: 'Albums', label: 'crafted keepsakes for families' }
];

export const services = [
  {
    title: 'Pre-Wedding Shoots',
    kicker: 'Before the big day',
    icon: 'heart',
    image: images.header,
    bestFor: 'Couple stories',
    description: 'Creative location planning, guided posing, and romantic frames that feel personal to your journey.',
    features: ['Moodboard and styling direction', 'Outdoor or studio concepts', 'Short teaser reel options']
  },
  {
    title: 'Wedding Day Photography',
    kicker: 'Ceremony to reception',
    icon: 'camera',
    image: images.carouselTwo,
    bestFor: 'Complete coverage',
    description: 'Candid emotions, rituals, portraits, decor, and family memories captured with calm precision.',
    features: ['Lead photographer coverage', 'Family and couple portraits', 'Color-graded final gallery']
  },
  {
    title: 'Cinematic Wedding Films',
    kicker: 'Story-led edits',
    icon: 'film',
    image: images.carouselThree,
    bestFor: 'Highlight films',
    description: 'Wedding films with movement, music, vows, laughter, and all the little pauses that matter.',
    features: ['Highlight film and trailer', 'Ceremony and reception edits', 'Clean audio storytelling']
  },
  {
    title: 'Traditional Ceremony',
    kicker: 'Ritual focused',
    icon: 'sparkles',
    image: images.aboutOne,
    bestFor: 'Family moments',
    description: 'Thoughtful coverage of haldi, mehendi, sangeet, pheras, blessings, and cultural details.',
    features: ['Multi-event planning', 'Ritual detail coverage', 'Family-first shot lists']
  },
  {
    title: 'Reception Highlights',
    kicker: 'Celebration energy',
    icon: 'party',
    image: images.aboutTwo,
    bestFor: 'Dance and decor',
    description: 'Elegant reception coverage with stage entries, speeches, dance floor energy, and decor details.',
    features: ['Low-light reception shooting', 'Decor and venue frames', 'Fast social media selects']
  },
  {
    title: 'Wedding Albums',
    kicker: 'Printed memories',
    icon: 'album',
    image: images.heroDetail,
    bestFor: 'Keepsakes',
    description: 'Premium album layouts that turn your favorite photos into a timeless family heirloom.',
    features: ['Curated image selection', 'Elegant album design', 'Ready for gifting']
  }
];

export const portfolioItems = [
  {
    title: 'A Magical Evening',
    category: 'Pre-Wedding',
    image: images.carouselOne,
    alt: 'Wedding couple portrait during a romantic outdoor shoot',
    size: 'large'
  },
  {
    title: 'Traditional Elegance',
    category: 'Ceremony',
    image: images.carouselTwo,
    alt: 'Wedding ceremony moment with traditional details',
    size: 'tall'
  },
  {
    title: 'Reception Glam',
    category: 'Reception',
    image: images.carouselThree,
    alt: 'Wedding reception celebration with warm lighting',
    size: 'normal'
  },
  {
    title: 'Family Blessings',
    category: 'Rituals',
    image: images.aboutOne,
    alt: 'Family-centered wedding ritual captured with emotion',
    size: 'normal'
  },
  {
    title: 'Portraits In Bloom',
    category: 'Couple Portraits',
    image: images.aboutTwo,
    alt: 'Bride and groom portrait with wedding styling',
    size: 'wide'
  },
  {
    title: 'Golden Details',
    category: 'Decor',
    image: images.header,
    alt: 'Wedding decor details and celebration styling',
    size: 'normal'
  }
];

export const videos = [
  {
    title: 'CreativeWedding Signature Showreel',
    label: 'Wedding film',
    description: 'A cinematic look at vows, portraits, family emotions, and reception energy.',
    poster: images.header,
    link: 'https://www.youtube.com/@creativewedding_in'
  },
  {
    title: 'Love Story Highlight Edit',
    label: 'Couple story',
    description: 'A softer film style for pre-wedding shoots, couple portraits, and intimate moments.',
    poster: images.carouselThree,
    link: 'https://www.youtube.com/@creativewedding_in'
  }
];

export const teamMembers = [
  {
    name: 'Priya Sharma',
    role: 'Lead Photographer',
    image: images.teamOne,
    alt: 'Lead photographer portrait',
    note: 'Guides couples through portraits, rituals, and candid moments with a gentle eye.'
  },
  {
    name: 'Rahul Verma',
    role: 'Cinematographer',
    image: images.teamTwo,
    alt: 'Wedding cinematographer portrait',
    note: 'Builds emotional films with clean movement, music, and natural storytelling.'
  },
  {
    name: 'Sneha Patel',
    role: 'Editor',
    image: images.teamThree,
    alt: 'Wedding editor portrait',
    note: 'Shapes every gallery and film with warm color, rhythm, and polished finishing.'
  },
  {
    name: 'Amit Singh',
    role: 'Event Coordinator',
    image: images.teamFour,
    alt: 'Wedding event coordinator portrait',
    note: 'Keeps timelines calm so the team catches every important family moment.'
  }
];

export const testimonials = [
  {
    name: 'Gauri & Pratik',
    event: 'Junnar',
    image: images.heroDetail,
    review: 'Creative Wedding didn’t just capture our wedding, they captured our emotions. Every photo feels alive and every film takes us back to that exact moment. The team made us feel so comfortable and special throughout the celebration.'
  },
  {
    name: 'Riya & Karan',
    event: 'Pre-wedding and reception',
    image: images.testimonialTwo,
    review: 'Professional, creative, and so friendly. They made us comfortable on camera and gave us a wedding album we love.'
  },
  {
    name: 'Neha & Siddharth',
    event: 'Traditional ceremony',
    image: images.testimonialThree,
    review: 'The team noticed tiny moments we missed completely. Every ritual, smile, and blessing was captured beautifully.'
  }
];
