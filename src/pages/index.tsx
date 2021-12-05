import * as React from "react"
import Header from "../component/header"
import RandomSelector from "../component/RandomSelector"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header title="Meal Planner" links={[
        { name: "link1", path: "/"},
        { name: "link2", path: "/"},
        { name: "link3", path: "/"},
        { name: "link4", path: "/"}]}></Header>
    <RandomSelector elements={["1", "2", "3", "4", "test", "hello world"]}></RandomSelector>
    </main>
  )
}

export default IndexPage
