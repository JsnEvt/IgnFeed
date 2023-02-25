import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/jsnevt.png',
      name: 'Jason Everton',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!!!' },
      { type: 'paragraph', content: 'Segue outro post' },
      { type: 'link', content: 'Opinem à vontade' },
    ],
    publishedAt: new Date('2023-02-08 18:10:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/jsnevt.png',
      name: 'Felipe',
      role: 'Web Developer Junior'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!!!' },
      { type: 'paragraph', content: 'Segue meu primeiro post' },
      { type: 'link', content: 'Opinem à vontade' },
    ],
    publishedAt: new Date('2023-02-06 14:00:00')
  }

]

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>

      </div>
    </>
  )
}

export default App
