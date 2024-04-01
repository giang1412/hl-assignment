function Header() {
  return (
    <header className='max-w-full h-[100px] bg-white text-black p-4 flex justify-between items-center'>
      <div className='pl-[250px]'>
        <img src='https://picsvg.com/svg/qHNvT4.jpg' alt='Logo 1' className='h-10' />
      </div>
      <div className='flex pr-[250px]'>
        <div>
          <h6 className='text-xs text-gray-400'>Handicrafted by</h6>
          <h6 className='text-xs ml-10'>Jim HLS</h6>
        </div>
        <img src='https://picsvg.com/svg/v2UE3Q.jpg' alt='Logo 2' className='h-10' />
      </div>
    </header>
  )
}

export default Header
