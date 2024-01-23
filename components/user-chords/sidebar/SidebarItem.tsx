export default function SidebarItem({ title }: { title: string }) {
  return (
    <li className='self-end'>
      <a
        href='#'
        className='p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        {title}
      </a>
    </li>
  )
}
