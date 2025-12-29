export default function Header(){
    return(
        <div className="bg-green-300 w-full p-5 text-center">
            <h1 className="font-bold text-3xl">온라인 경로당</h1>
            <ul className="flex gap-4">
  {[
    '이번 달 인기 글',
    '이번 주 인기 글',
    '새로 올라온 글',
  ].map((text) => (
    <li
      key={text}
      className="relative cursor-pointer p-2 group"
    >
      <span className="text-lg">{text}</span>

      {/* hover underline */}
      <span
        className="
          absolute left-0 bottom-0
          h-[2px] w-full
          bg-black
          scale-x-0
          origin-left
          transition-transform duration-300 ease-out
          group-hover:scale-x-100
        "
      />
    </li>
  ))}
</ul>
        </div>
    )
}