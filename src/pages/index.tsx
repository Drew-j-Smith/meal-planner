import * as React from "react"
import Header from "../component/header"
import RandomSelector, { AnimationVariableCSS } from "../component/random-selctor"
import "../styles/pages/index.css"

const animationInfoStyle: AnimationVariableCSS = {
  "--animation-time": 300,
  "--animation-delay": 400
};

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header title="Meal Planner" links={[
        { name: "link1", path: "/"},
        { name: "link2", path: "/"},
        { name: "link3", path: "/"},
        { name: "link4", path: "/"}]}></Header>
    <div className="index-page__main" style={animationInfoStyle}>
      <div className="index-page__selectors">
        <RandomSelector cycles={10} elements={["1", "2", "3", "4", "test", "hello world"]}></RandomSelector>
        <RandomSelector cycles={10} elements={["1", "2", "3", "4", "test", "hello world"]}></RandomSelector>
        <RandomSelector cycles={10} elements={["1", "2", "3", "4", "test", "hello world"]}></RandomSelector>
        <RandomSelector cycles={10} elements={["1", "2", "3", "4", "test", "hello world"]}></RandomSelector>
      </div>
    </div>
    </main>
  )
}

export default IndexPage
