function JokeDisplay({ joke, handleVote }: { joke: any; handleVote: any }) {
  return (
    <div className='h-[462px] mt-10 text-center bg-white text-black flex-wrap justify-center items-center border-b-[1px]'>
      <div className='h-[200px] flex justify-center items-center'>
        <p className='max-h max-w-[1000px] flex text-base mb-4 text-gray-600 '>{joke}</p>
      </div>
      <div className='h-[162px] w-auto flex justify-center items-center mt-14'>
        <button
          onClick={() => handleVote('like')}
          className='min-w-64 h-13 bg-[#2c7edb] text-white font-bold py-2 px-4'
        >
          This is funny!
        </button>
        <button
          onClick={() => handleVote('dislike')}
          className='min-w-64 h-13 bg-[#29b363] text-white font-bold py-2 px-4 ml-8'
        >
          This is not funny.
        </button>
      </div>
    </div>
  )
}

export default JokeDisplay
