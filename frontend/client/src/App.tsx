import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import Header from './Header'
import MainContent from './MainContent'
import Joke from './Joke'
import EndOfJokesMessage from './EndOfJokesMessage'
import Footer from './Footer'

function App() {
  const [jokes, setJokes] = useState([])
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0)

  useEffect(() => {
    async function fetchJokes() {
      try {
        const response = await axios.get('http://localhost:3300/jokes')
        setJokes(response.data)
      } catch (error) {
        console.error('Error fetching jokes:', error)
      }
    }

    fetchJokes()
  }, [])

  useEffect(() => {
    if (currentJokeIndex >= jokes.length && jokes.length > 0) {
      toast("That's all the jokes for today! Come back another day!")
    }
  }, [currentJokeIndex, jokes])

  const handleVote = async (vote: string) => {
    try {
      const jokeId = (jokes[currentJokeIndex] as any)._id
      const hasVoted = document.cookie.includes(`voted_${jokeId}`)

      if (!hasVoted) {
        await axios.post(`http://localhost:3300/jokes/${jokeId}/vote`, { vote })
        document.cookie = `voted_${jokeId}=true; max-age=86400`
        setCurrentJokeIndex((prevIndex) => prevIndex + 1)
      } else {
        console.log('You have already voted for this joke.')
      }
    } catch (error) {
      console.error('Error handling vote:', error)
    }
  }

  return (
    <div className='mx-auto max-w-[1600px] flex flex-col min-h-screen'>
      <Header />
      <MainContent />
      {jokes.length > 0 && currentJokeIndex < jokes.length ? (
        <Joke joke={(jokes[currentJokeIndex] as any).jokeText} handleVote={handleVote} />
      ) : (
        <EndOfJokesMessage />
      )}
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200'
          }
        }}
      />
      <Footer />
    </div>
  )
}

export default App
