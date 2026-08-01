import { useInView } from '../hooks/useInView'

interface TitleProps {
  title: string
  id?: string
  eyebrow?: string
  subtitle?: string
}

const Title = ({ title, id, eyebrow, subtitle }: TitleProps) => {
  const [ref, inView] = useInView(0.2)
  return (
    <div
      ref={ref}
      className={`mb-10 text-center md:mb-14 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
    >
      <div className='mb-4 flex items-center justify-center gap-3 sm:gap-4'>
        <span className='h-px w-6 bg-[#0E6B54] sm:w-10' />
        <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#0E6B54] sm:tracking-[0.4em]'>
          {eyebrow || title}
        </p>
        <span className='h-px w-6 bg-[#0E6B54] sm:w-10' />
      </div>
      <h2 id={id} className='text-2xl font-semibold leading-tight text-[#163229] sm:text-3xl md:text-4xl'>
        {title}
      </h2>
      {subtitle && (
        <p className='mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4B5D57] md:text-base'>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Title
