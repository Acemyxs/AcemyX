export default function CTAcard() {
  return (
    <div>
      <div className=" hidden md:block my-4">
        <div className="relative flex justify-center items-center mt-10 w-[80%] mx-auto py-6">
          {/* <img src='/study-note.svg' alt='' className='absolute top-0 left-0' /> */}
          <div className="w-fit relative">
            <img src="/theScreen.svg" alt="" />
            {/* <img
              src='./mock.svg'
              alt=''
              className='absolute top-[50%] right-0'
            /> */}
            <img
              src="./Chat.svg"
              alt=""
              className="absolute bottom-[10%]   left-[83%] translate-y-1/4  "
            />
          </div>
          <img
            src="/Team.svg"
            alt=""
            className="absolute top-[15%] right-[50%] left-[50%] -translate-x-3/2 w-20 h-20"
          />
          {/* <img
            src='FAQ.svg'
            alt=''
            className='absolute left-0 top-[50%] hover:md:animate-bounce'
          /> */}
          <img src="" alt="" />
        </div>
      </div>
      {/* mobile view of the image */}
      <div className="md:hidden -mx-4 overflow-hidden  relative w-screen">
        <img
          src="/phone-mock-up.png"
          alt="phone mock up"
          className="w-full m-0"
        />
        <img
          src="./mchat.svg"
          alt=""
          className="absolute -top-[10%] right-[0] -translate-x-1/2 translate-y-1/4 w-24 h-24"
        />
        <img
          src="FAQ.svg"
          alt=""
          className="absolute left-0 top-[50%] w-[78px] h-[67.56px] hover:md:animate-bounce"
        />
      </div>
    </div>
  );
}
