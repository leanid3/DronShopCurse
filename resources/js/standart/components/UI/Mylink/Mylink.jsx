export default function Mylink({children, ...props}) {
  return (
    <a {...props}>
        {children}
    </a>
  )
}
