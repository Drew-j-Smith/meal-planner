import React from "react"

type RandomSelectorState = {
    currElement: number;
    selectedElements: Array<string>;
};

type RandomSelectorProps = {
    elements: Array<string>;
    callback?: (seleced: string) => void;
};

const cycles = 10;

class RandomSelector extends React.Component<RandomSelectorProps, RandomSelectorState> {
    constructor(props: RandomSelectorProps) {
        super(props)
        this.state = { currElement: -1, selectedElements: [] }
    }

    render() {
        return <button onClick={() => {
            if (this.state.currElement !== -1 && this.state.currElement !== cycles - 1) return; 
            this.setState({
                currElement: -1,
                selectedElements: Array(cycles).fill(null).map(() =>
                    this.props.elements[Math.floor(Math.random() * this.props.elements.length)])
            });

            for (let i = 0; i < cycles; i++) {
                setTimeout(() => {
                    this.setState({ currElement: i})
                    if (i === cycles - 1) {
                        if (this.props.callback) {
                            this.props.callback(this.state.selectedElements[cycles - 1]);
                        }
                        console.log(this.state.selectedElements[cycles - 1]);
                    }
                }, 150 * i);
            }
        }} className={"text-2xl w-60 h-40 shadow hover:shadow-lg rounded-lg bg-gray-200 active:bg-gray-300 m-2 p-8"}>
            <div className="flex flex-col grid-cols-2">
                <div className="h-20 relative shadow">
                {
                    this.state.selectedElements.map((el, index)=> <div key={index} className={
                        `absolute w-full duration-300 top-${ index === this.state.currElement - 1 || (this.state.currElement === 0 && index === cycles - 1) ? 
                        10 : (index === this.state.currElement ? 5 : 0) }
                        transition-all ${index === this.state.currElement ? "opacity-100" : "opacity-0"}`}>{el}</div>)
                }
                </div>
                <div>Pick new</div>
            </div>
            
        </button>
    }
}

export default RandomSelector;