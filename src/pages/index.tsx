import * as React from "react"
import Header from "../component/header"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header title="Meal Planner" links={[{ name: "link1", path: "/"}, { name: "link2", path: "/"}, { name: "link3", path: "/"}, { name: "link4", path: "/"}, { name: "link5", path: "/"}]}></Header>
    </main>
  )
}

export default IndexPage
