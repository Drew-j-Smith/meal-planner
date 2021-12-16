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
        return <div className="header__container">
            <div className={"header__secondary-container"}>
                <div className="header__sidebar">
                    <button>
                        <svg className="header__hamburger" viewBox="0 0 100 80">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg> 
                    </button>
                    <div className="header__col">
                        <h1 className="header__title">{this.props.title}</h1>
                        { this.props.links.map((el) => 
                            <Link key={el.name} className="header__link" to={el.path}>{el.name}</Link>)
                        }
                    </div>
                </div>
                <div className="header__backgroud-fade"></div>
                
                <h1 className="header__title header__title--row">{this.props.title}</h1>
                {
                    this.props.links.map((el) => 
                        <Link key={el.name} className="header__link header__link--row" to={el.path}>{el.name}</Link>) 
                }
            </div>
        </div>
    }
}

export default Header;