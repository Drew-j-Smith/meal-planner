import React from "react"
import { Link } from "gatsby"

type HeaderState = {};
type HeaderProps = {
    title: string;
    links: Array<{ name: string, path: string}>
};

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props)
    }
    render() {
        return <div className="flex justify-center shadow bg-yellow-50">
            <div className={"flex w-full max-w-screen-lg"}>
                <h1 className="flex-grow md:text-5xl sm:text-2xl sm:p-5 p-3">{this.props.title}</h1>
                {
                    this.props.links.map((el) => 
                        <Link key={el.name} className="sm:text-xl md:text-4xl sm:p-5 p-3 hover:bg-yellow-200 transition-colors ease-linear duration-300" to={el.path}>{el.name}</Link>) 
                }
            </div>
        </div>
    }
}

export default Header;