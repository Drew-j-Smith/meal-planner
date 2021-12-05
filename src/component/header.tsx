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
        return <div className={"grid grid-cols-2 shadow bg-yellow-50"}>
            <h1 className="xl:pl-60 md:text-5xl sm:text-2xl sm:p-5 p-3">{this.props.title}</h1>
            <div className="flex justify-end xl:pr-60 sm:text-xl md:text-4xl"> { 
                this.props.links.map((el) => 
                    <Link key={el.name} className="sm:p-5 p-3 hover:bg-yellow-200 transition-colors ease-linear duration-300" to={el.path}>{el.name}</Link>) 
            } </div>
            
        </div>
    }
}

export default Header;