export default function CTAcard() {
  return (
    <div className='mx-10 my-4'>
      <div className='relative flex justify-center items-center mt-10 w-[80%] mx-auto py-6'>
        <img src='/study-note.svg' alt='' className='absolute top-0 left-0' />
        <div className='w-fit relative'>
          <img src='/mock-up.svg' alt='' />
          <img src='./mock.svg' alt='' className='absolute top-[50%] right-0' />
          <img
            src='./Chat.svg'
            alt=''
            className='absolute top-[0%] right-[50%] -translate-x-1/2 left-[50%] translate-y-1/4'
          />
        </div>
        <img
          src='/Team.svg'
          alt=''
          className='absolute top-0 right-40  hover:animate-bounce '
        />
        <img
          src='FAQ.svg'
          alt=''
          className='absolute left-0 top-[50%] hover:md:animate-bounce'
        />
        <img src='' alt='' />
      </div>
    </div>
  );
}
