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
        return <div className="header-main-container shadow">
            <div className={"header-secondary-container"}>
                <div className="header-sidebar">
                    <button>
                        <svg className="header-hamburger" viewBox="0 0 100 80">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg> 
                    </button>
                    <div className="header-col shadow">
                        <h1 className="header-title">{this.props.title}</h1>
                        { this.props.links.map((el) => 
                            <Link key={el.name} className="header-link" to={el.path}>{el.name}</Link>)
                        }
                    </div>
                </div>
                <div className="header-backgroud-fade"></div>
                
                <h1 className="header-title">{this.props.title}</h1>
                {
                    this.props.links.map((el) => 
                        <Link key={el.name} className="header-link" to={el.path}>{el.name}</Link>) 
                }
            </div>
        </div>
    }
}

export default Header;