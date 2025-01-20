import { useRouter } from 'next/router'

export default function Preview() {
  const router = useRouter()
  const { url } = router.query
  // console.log(url)
  if (!url) return <></>
  return (
    <>
      {url}
      <iframe
        style={{ width: '100%', height: '100vh' }}
        src={encodeURIComponent(url as string) || ''}
        title=""
      ></iframe>
    </>
  )
}
