import AppRouter from '../AppRouter'
import testdata from './testdata.js'
import { useState } from 'react'

function App() {

  const [data, setData] = useState(testdata)

  const [typelist, setTypelist] = useState(["Maastaveto", "Penkkipunnerrus", "Ylätalja", "Reiden ojennus", "Kulmasoutu"])

  const handleItemDelete = (id) => {
    let copy = data.slice()
    copy = copy.filter(item => item.id !== id)
    setData(copy)
  }

  const handleItemSubmit = (newitem) => {
    let copy = data.slice()

    const index = copy.findIndex(item => item.id === newitem.id)
    if (index >= 0) {
      copy[index] = newitem
    } else {
      copy.push(newitem)
    }

    copy.sort( (a,b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return bDate - aDate
    })
    setData(copy)
  }

  return (
    <>
      <AppRouter data={data}
                 typelist={typelist}
                 onItemSubmit={handleItemSubmit}
                 onItemDelete={handleItemDelete} />
    </>
  )
}

export default App

