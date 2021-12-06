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
    <div className="grid grid-rows-1 place-items-center">
      <div className="grid md:grid-cols-4 grid-rows-4 place-items-center max-w-5xl xl:shadow">
        <RandomSelector elements={["1", "2", "3", "4", "test", "hello world"]}></RandomSelector>
        <RandomSelector elements={["1", "2", "3", "4", "test", "hello world"]}></RandomSelector>
        <RandomSelector elements={["1", "2", "3", "4", "test", "hello world"]}></RandomSelector>
        <RandomSelector elements={["1", "2", "3", "4", "test", "hello world"]}></RandomSelector>
      </div>
    </div>
    </main>
  )
}

export default IndexPage
