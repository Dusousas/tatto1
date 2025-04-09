import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

export default function Artists() {
  const artists = [
    {
      name: 'Lionel Todd',
      role: 'Tattoo artist',
      image: 'team1.jpg',
      socials: [
        { icon: <FaFacebookF />, link: '#' },
        { icon: <FaTwitter />, link: '#' },
        { icon: <FaInstagram />, link: '#' },
        { icon: <FaLinkedinIn />, link: '#' },
      ],
    },
    {
      name: 'Maya Collins',
      role: 'Piercing',
      image: 'team1.jpg',
      socials: [
        { icon: <FaInstagram />, link: '#' },
        { icon: <FaWhatsapp />, link: '#' },
        { icon: <FaLinkedinIn />, link: '#' },
        { icon: <FaFacebookF />, link: '#' },
      ],
    },
    {
      name: 'Victor Silva',
      role: 'Realismo',
      image: 'team1.jpg',
      socials: [
        { icon: <FaWhatsapp />, link: '#' },
        { icon: <FaInstagram />, link: '#' },
        { icon: <FaFacebookF />, link: '#' },
        { icon: <FaLinkedinIn />, link: '#' },
      ],
    },
  ];

  return (
    <section id='artists' className='py-20 fullBG'>
      <div className='maxW'>
        <h5 className='text-Second tracking-widest italic text-center text-lg'>Nossos Artistas</h5>
        <h1 className='text-center tracking-widest text-5xl font-semibold uppercase mt-4'>Artistas</h1>
        <span className='text-center mt-4 flex justify-center text-Second mb-20 lg:px-40'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci beatae laborum excepturi sapiente veniam, nam labore magni exercitationem quisquam.
        </span>

        <article className='flex flex-wrap  justify-center gap-y-4'>
          {artists.map((artist, index) => (
            <div key={index} className="relative group w-72 h-[450px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-60 transition duration-500 mix-blend-multiply"></div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-black bg-opacity-90 w-64 text-center text-white py-6 px-4">
                <p className=" text-sm mb-1">{artist.role}</p>
                <h2 className="text-lg font-bold">{artist.name.toUpperCase()}</h2>
                <div className="flex justify-center gap-4 mt-3 text-lg">
                  {artist.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-rose-400 transition"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
