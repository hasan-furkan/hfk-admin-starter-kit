import { redirect } from "next/navigation"
const Home = () => {
  redirect('/crm')
  return (
    <div>
      <p>Home Page</p>
    </div>
  )
}

export default Home