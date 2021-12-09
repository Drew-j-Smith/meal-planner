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
                <div className="sidebar md:hidden">
                    <button tabIndex={0} className="p-3">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 sm:m-2" viewBox="0 0 100 80" style={{fill:"gray"}}>
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg> 
                    </button>
                    <div className="content-col ease-in-out -left-56 top-0 fixed w-56 h-full flex flex-col shadow bg-yellow-50 z-50">
                        <h1 className="text-3xl p-4">{this.props.title}</h1>
                        { this.props.links.map((el) => 
                            <Link key={el.name} className="text-2xl p-3 hover:bg-yellow-200 transition-colors ease-linear duration-300" to={el.path}>{el.name}</Link>)
                        }
                    </div>
                </div>
                <div className="backgroud-fade z-10 pointer-events-none transition-opacity duration-300 ease-in-out bg-black opacity-0 fixed left-0 top-0 w-full h-full"></div>
                
                <h1 className="flex-grow md:text-5xl sm:text-2xl sm:p-5 p-3">{this.props.title}</h1>
                {
                    this.props.links.map((el) => 
                        <Link key={el.name} className="hidden md:block text-4xl p-5 hover:bg-yellow-200 transition-colors ease-linear duration-300" to={el.path}>{el.name}</Link>) 
                }
            </div>
        </div>
    }
}

export default Header;