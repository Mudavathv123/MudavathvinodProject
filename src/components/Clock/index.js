import './index.css'

const Clock = props => {
    const {timer} = props
    console.log(timer)
return <div className = "clock-container">
        <h1 className = "clock-timer">{timer}</h1>
    </div>
}

export default Clock 