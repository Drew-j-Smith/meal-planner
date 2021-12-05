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
        return <div className="flex flex-row md:flex-col text-lg sm:text-2xl p-8 place-items-center">
            <button onClick={() => {
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
            }} className={"w-36 h-15 shadow hover:shadow-lg rounded-lg bg-gray-200 active:bg-gray-300 m-2"}>
                    <div>Pick new</div>
            </button>
            <div className="h-20 w-40 shadow p-5 m-2 overflow-hidden">
                <div className="relative">
                {
                    this.state.selectedElements.map((el, index)=> <div key={index} className={
                        `absolute w-full duration-100 transform text-center ${ index === this.state.currElement - 1 || (this.state.currElement === 0 && index === cycles - 1) ? 
                        "translate-y-10" : (index === this.state.currElement ? "translate-y-0" : "-translate-y-10") }
                        transition-all ${index === this.state.currElement ? "opacity-100" : "opacity-0"}`}>{el}</div>)
                }
                </div>
            </div>
        </div>
    }
}

export default RandomSelector;