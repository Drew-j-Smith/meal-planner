import React from "react"

type RandomSelectorState = {
    currElement: number;
    selectedElements: Array<string>;
    selectedElement: string;
};

type RandomSelectorProps = {
    elements: Array<string>;
    callback?: (seleced: string) => void;
};

const cycles = 10;

class RandomSelector extends React.Component<RandomSelectorProps, RandomSelectorState> {
    constructor(props: RandomSelectorProps) {
        super(props)
        this.state = { currElement: -1, selectedElements: [], selectedElement: "" }
    }

    render() {
        return <div className="flex flex-row md:flex-col text-lg sm:text-2xl md:p-8 p-4 place-items-center">
            <button onClick={() => {
                if (this.state.currElement !== -1 && this.state.currElement !== cycles) return;
                this.setState({
                    currElement: -1,
                    selectedElements: Array(cycles).fill(null).map(() =>
                        this.props.elements[Math.floor(Math.random() * this.props.elements.length)])
                });

                for (let i = 0; i <= cycles; i++) {
                    setTimeout(() => {
                        this.setState({ currElement: i })
                        if (i === cycles) {
                            this.setState((prevState) => { return { selectedElement: prevState.selectedElements[cycles - 1] } })
                            if (this.props.callback) {
                                this.props.callback(this.state.selectedElement);
                            }
                            console.log(this.state.selectedElement);
                        }
                    }, 400 * (i + 1));
                }
            }} className={"sm:w-36 w-24 h-15 shadow hover:shadow-lg rounded-lg bg-gray-200 active:bg-gray-300 m-2"}>
                <div>Pick new</div>
            </button>
            <div className="h-20 w-40 shadow p-5 m-2 overflow-hidden">
                <div className="relative">
                    {
                        this.state.currElement < cycles && this.state.selectedElements.map((el, index) => <div key={index} className={
                            `absolute w-full text-center duration-300 ease-in transform ${index < this.state.currElement ?
                                "translate-y-10" : (index === this.state.currElement ? "" : "-translate-y-10")}
                        transition-all ${index === this.state.currElement ? "" : "opacity-0"}`}>{el}</div>)
                    }
                    {
                        (this.state.currElement === -1 || this.state.currElement === cycles) && 
                        <div className={`absolute w-full text-center ${this.state.currElement === -1 ? "duration-300 ease-in transform translate-y-10 opacity-0" : ""}`}>
                            { this.state.selectedElement }
                        </div>
                    }
                </div>
            </div>
        </div>
    }
}

export default RandomSelector;