const Footer = () => (
  <footer className='border-t border-[#3C1718] bg-[#200F0D] py-8'>
    <div className='section-shell flex flex-col items-center justify-between gap-4 sm:flex-row'>
      <span className='font-serif text-xl italic text-[#8E1F24]'>Juliette.</span>
      <p className='text-sm text-[#7B5750]'>
        © {new Date().getFullYear()} Juliette Sounouvou. Tous droits réservés.
      </p>
    </div>
  </footer>
)

export default Footer
