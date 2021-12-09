import React from "react"
import { Link } from "gatsby"
import "../styles/components/header.css"

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
                <div className="sidebar">
                    <button tabIndex={0} className="p-3">
                        <svg viewBox="0 0 100 80" width="30" height="30" style={{fill:"gray"}}>
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg> 
                    </button>
                    <div className="content-col fixed w-max h-full flex flex-col shadow bg-yellow-50 z-100">
                        { this.props.links.map((el) => 
                            <Link key={el.name} className="text-xl p-2 hover:bg-yellow-200 transition-colors ease-linear duration-300" to={el.path}>{el.name}</Link>)
                        }
                    </div>
                    
                </div>
                
                <h1 className="flex-grow md:text-5xl sm:text-2xl sm:p-5 p-3">{this.props.title}</h1>
                {
                    this.props.links.map((el) => 
                        <Link key={el.name} className="content-row text-4xl p-5 hover:bg-yellow-200 transition-colors ease-linear duration-300" to={el.path}>{el.name}</Link>) 
                }
            </div>
        </div>
    }
}

export default Header;