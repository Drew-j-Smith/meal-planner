import React, { CSSProperties } from "react"
import "../styles/components/random-selector.css"

type RandomSelectorState = {
    active: boolean;
    selectedElements: Array<string>;
};

type RandomSelectorProps = {
    animationTime?: number;
    animationDelay?: number;
    cycles: number;
    elements: Array<string>;
    callback?: (seleced: string) => void;
};

interface TextCSS extends CSSProperties {
    "--text-index": number;
}

export interface AnimationVariableCSS extends CSSProperties {
    "--animation-time": number | undefined;
    "--animation-delay": number | undefined;
}

class RandomSelector extends React.Component<RandomSelectorProps, RandomSelectorState> {
    animationInfoStyle: AnimationVariableCSS;

    constructor(props: RandomSelectorProps) {
        super(props)
        this.state = { active: false, selectedElements: Array(this.props.cycles).fill("") }

        this.animationInfoStyle = {
            "--animation-time": this.props.animationTime,
            "--animation-delay": this.props.animationDelay
        };
    }

    render() {
        return <div className="random-selector__container" style={this.animationInfoStyle}>
            <button onClick={() => {
                if (this.state.active) return;
                this.setState((prevState) => {
                    return {
                        active: true,
                        selectedElements: prevState.selectedElements.map((el, index) => 
                            index === 0 ? prevState.selectedElements[this.props.cycles - 1] :
                                this.props.elements[Math.floor(Math.random() * this.props.elements.length)]
                        )
                    }
                });
            }} className="random-selector__btn">
                Pick new
            </button>
            <div className="random-selector__display">
                {
                    this.state.active &&
                    this.state.selectedElements.map(
                        (el, index) => 
                            <div key={index} className="random-selector__selected random-selector__selected--animate"
                                style={{'--text-index': index} as TextCSS} onAnimationEnd={() => { 
                                    if (index !== this.props.cycles - 1) return;
                                    this.setState({ active: false });
                                    if (this.props.callback) {
                                        this.props.callback(el);
                                    }
                                    console.log(el);
                                }}>{el}</div>
                        )
                }
                {
                    !this.state.active && <div className="random-selector__selected">{this.state.selectedElements[this.props.cycles - 1]}</div>
                }
            </div>
        </div>
    }
}

export default RandomSelector;