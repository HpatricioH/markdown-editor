import VisibilityBar from './components/VisibilityBar/VisibilityBar'
import MarkDownEditor from './components/MarkDownEditor/MarkDownEditor'
import Header from './components/Header/Header'
import LayoutHolder from './components/Layout/LayoutHolder'

export default async function Home () {
  return (
    <>
      <LayoutHolder />
      <main id='main' className="flex flex-col items-center justify-between transition-transform overflow-y-hidden duration-500">
      <Header />
        <VisibilityBar />
        <div className="z-10 w-full items-center justify-between">
          <MarkDownEditor />
        </div>
      </main>
    </>
  )
}
