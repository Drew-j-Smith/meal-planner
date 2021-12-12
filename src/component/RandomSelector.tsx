import React, { CSSProperties } from "react"
import "../styles/components/RandomSelector.css"

type RandomSelectorState = {
    active: boolean;
    selectedElements: Array<string>;
};

type RandomSelectorProps = {
    elements: Array<string>;
    callback?: (seleced: string) => void;
};

export interface TextCSS extends CSSProperties {
    '--text-index': number;
  }

const cycles = 10;

class RandomSelector extends React.Component<RandomSelectorProps, RandomSelectorState> {
    constructor(props: RandomSelectorProps) {
        super(props)
        this.state = { active: false, selectedElements: [""] }
    }

    render() {
        return <div className="random-selector-container">
            <button onClick={() => {
                if (this.state.active) return;
                this.setState((prevState) => {
                    return {
                        active: true,
                        selectedElements: Array(cycles).fill(null).map((el, index) => {
                            if (index === 0) {
                                return prevState.selectedElements[cycles - 1];
                            }
                            return this.props.elements[Math.floor(Math.random() * this.props.elements.length)];
                        })
                    }
                });

                setTimeout(() => {
                    this.setState({ active: false });
                    if (this.props.callback) {
                        this.props.callback(this.state.selectedElements[cycles - 1]);
                    }
                    console.log(this.state.selectedElements[cycles - 1]);
                }, 400 * cycles);

            }} className="random-selector-btn">
                <div>Pick new</div>
            </button>
            <div className="random-selector-display">
                {
                    this.state.active &&
                    this.state.selectedElements.map(
                        (el, index) => 
                            <div key={index} className="random-selector-display-text" style={{'--text-index': index} as TextCSS}>{el}</div>
                        )
                }
                {
                    !this.state.active && <div>{this.state.selectedElements[cycles - 1]}</div>
                }
            </div>
        </div>
    }
}

export default RandomSelector;