import './alignment-options.css'
import { AlignCenter, AlignLeft, AlignRight } from '../Assets'

const AlignmentButtons = () => {
    const handleAlignment = (alignment: string) => {
        document.body.style.justifyContent = alignment;
    }

    return (
        <div className="alignment-options">
            <button className="alignment-left">
                <img src={AlignLeft} alt="Align Left" onClick={() => handleAlignment("flex-start")} />
            </button>
            <button className="alignment-center">
                <img src={AlignCenter} alt="Align Center" onClick={() => handleAlignment("center")} />
            </button>
            <button className="alignment-right">
                <img src={AlignRight} alt="Align Right" onClick={() => handleAlignment("flex-end")} />
            </button>
        </div>
    );
}

export default AlignmentButtons