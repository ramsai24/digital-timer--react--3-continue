import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 25,
      seconds: '00',
      timer: 25,
      startOrPause: true,
      sec: 15,
      min: 25,
      pause: true,
    }
  }

  componentDidMount() {
    // const {startOrPause} = this.state
    //  console.log(startOrPause)

    // if (startOrPause) {
    this.timeId = setInterval(this.time, 1000)
    // }
  }

  componentWillUnmount() {
    // const {startOrPause} = this.state
    this.clearInterval()
  }

  clearInterval = () => {
    const {startOrPause} = this.state
    if (startOrPause) {
      clearInterval(this.timerId)
    }
  }

  time = () => {
    const {sec, seconds, min, startOrPause} = this.state
    // console.log(startOrPause)
    // if (sec === 60) {
    //   this.setState(prev => ({
    //     timer: prev.timer - 1,
    //   }))
    // }
    //  console.log(sec.toString().length === 1)
    // console.log(`min value : ${min} ,type:${typeof min}`)

    console.log(seconds)

    if (!startOrPause) {
      if (seconds === '00') {
        this.setState(prev => ({seconds: 60, timer: prev.timer - 1}))
      }

      if (seconds <= 60) {
        if (seconds <= 10 && seconds >= 1) {
          this.setState(prev => ({seconds: `0${prev.seconds - 1}`}))
        } else {
          this.setState(prev => ({seconds: prev.seconds - 1}))
        }
      }
    }
  }

  plusClick = () => {
    const {minutes} = this.state
    if (parseInt(minutes) <= 10) {
      this.setState({
        minutes: `0${parseInt(minutes) + 1}`,
        timer: `0${parseInt(minutes) + 1}`,
        // min: `0${parseInt(prev.minutes) + 1}`,
        // minutes: `0${parseInt(prev.minutes) + 1}`,
        // timer: `0${parseInt(prev.minutes) + 1}`,
        // minutes: prev.minutes + 1,
      })
      console.log('less 10')
    } else {
      this.setState(prev => ({
        minutes: parseInt(prev.minutes) + 1,
        timer: parseInt(prev.minutes) + 1,
      }))
    }
  }

  minusClick = () => {
    //  const {minutes} = this.state
    const {minutes} = this.state
    if (parseInt(minutes) <= 10) {
      this.setState(prev => ({
        minutes: `0${parseInt(prev.minutes) - 1}`,
        timer: `0${parseInt(prev.minutes) - 1}`,
      }))
    } else {
      this.setState(prev => ({
        minutes: parseInt(prev.minutes) - 1,
        timer: parseInt(prev.minutes) - 1,
      }))
    }
  }

  start = () => {
    this.setState(prev => ({
      startOrPause: !prev.startOrPause,
      min: prev.timer - 1,
      pause: false,
    }))
  }

  pause = () => {
    const {minutes, seconds, sec} = this.state
    this.setState(prev => ({
      startOrPause: !prev.startOrPause,
      pause: false,
      minutes,
      seconds,
      sec,
    }))
  }

  reset = () => {
    // const {sec} = this.state
    this.setState({
      timer: 25,
      minutes: 25,
      seconds: '00',
      sec: 60,
      startOrPause: true,
      pause: true,
    })
    // clearInterval(this.timeId)
  }

  render() {
    const {minutes, timer, seconds, pause, startOrPause} = this.state

    // console.log(sec.toString().length)
    // console.log(startOrPause)
    console.log(timer, seconds)

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1>Digital Timer</h1>
          <div className="timer-displayer-start-or-pause-reset-set-timer-limit-container">
            <div className="timer-displayer-container">
              <div className="timer-container">
                <h1>{`${timer}:${seconds}`}</h1>
                <p>{startOrPause ? 'Paused' : 'Running'}</p>
              </div>
            </div>
            <div className="start-or-pause-reset-set-timer-limit-container">
              <div className="start-or-pause-and-reset-container">
                <div className="start-or-pause-container">
                  {startOrPause ? (
                    <div className="start-or-pause-container">
                      <button
                        type="button"
                        className="btn-start-pause-reset"
                        onClick={this.start}
                      >
                        <img
                          className="img"
                          alt="play icon"
                          src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                        />
                        <p>Start</p>
                      </button>
                    </div>
                  ) : (
                    <div className="start-or-pause-container">
                      <button className="btn-start-pause-reset" type="button">
                        <img
                          className="img"
                          alt="pause icon"
                          onClick={this.pause}
                          src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                        />
                        <p>Pause</p>
                      </button>
                    </div>
                  )}
                </div>
                <div className="reset-container start-or-pause-container">
                  <button type="button" className="btn-start-pause-reset">
                    <img
                      onClick={this.reset}
                      className="img"
                      alt="reset icon"
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    />
                  </button>

                  <p>Reset</p>
                </div>
              </div>
              <div className="set-timer-limit-container">
                <p>Set Timer limit</p>
                <div className="set-timer-container">
                  {pause ? (
                    <button
                      onClick={this.minusClick}
                      type="button"
                      className="plus-or-minus btn-start-pause-reset"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="plus-or-minus btn-start-pause-reset"
                    >
                      -
                    </button>
                  )}

                  <p>{minutes}</p>
                  {pause ? (
                    <button
                      type="button"
                      className="plus-or-minus btn-start-pause-reset"
                      onClick={this.plusClick}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="plus-or-minus btn-start-pause-reset"
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
