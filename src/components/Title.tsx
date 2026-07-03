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
      className={`mb-14 text-center ${inView ? 'anim-fade-up' : 'opacity-0'}`}
    >
      <div className='mb-4 flex items-center justify-center gap-4'>
        <span className='h-px w-10 bg-[#8E1F24]' />
        <p className='text-xs font-semibold uppercase tracking-[0.4em] text-[#8E1F24]'>
          {eyebrow || title}
        </p>
        <span className='h-px w-10 bg-[#8E1F24]' />
      </div>
      <h2 id={id} className='text-3xl font-semibold text-[#F5ECE8] md:text-4xl'>
        {title}
      </h2>
      {subtitle && (
        <p className='mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#C4B0A7] md:text-base'>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Title
