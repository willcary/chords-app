import SidebarItem from './SidebarItem'

export default function MyChordsSidebar() {
  return (
    <>
      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <h2 className='mb-5 text-xl text-right'>Songs</h2>
          <ul className='space-y-2 font-medium flex flex-col gap-2'>
            <SidebarItem title={`Here Comes the Sun`} />
            <SidebarItem title={`Don't Let me be Lonely Tonight`} />
            <SidebarItem title={`Blackbird`} />
            <SidebarItem title={`Something so Right`} />
            <SidebarItem title={`Banana Pancakes`} />
          </ul>
        </div>
      </aside>
    </>
  )
}
