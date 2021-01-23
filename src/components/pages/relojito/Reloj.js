import React from "react";
import "./Reloj.css";

class Reloj extends React.Component {
    constructor() {
        super();
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
            timerSecond: 0,
            isSession: true,
            intervalId: 0,
            firstPlay: true,
        };

        this.play = this.play.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.updateTimerMinute = this.updateTimerMinute.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);


        this.pequeTime = this.pequeTime.bind(this);
        this.tomaTime = this.tomaTime.bind(this);
        this.epicTime = this.epicTime.bind(this);

    }

    play() {
        let temp = this.state.sessionLength;
        if (this.state.firstPlay) {
            this.setState({
                timerMinute: temp
            })
        }
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.setState({
            intervalId: intervalId,
            firstPlay: false
        })
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.state.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false,
                            timerMinute: this.state.breakLength
                        })
                    }
                }
                this.updateTimerMinute()
                this.setState({
                    timerSecond: 59,
                })
                break;
            default:
                this.setState(() => {
                    return {
                        timerSecond: this.state.timerSecond - 1,
                    }
                })
                break;
        }
    }

    updateTimerMinute() {
        this.setState(() => {
            return {
                timerMinute: this.state.timerMinute - 1
            }
        })
    }

    stop() {
        clearInterval(this.state.intervalId);
    }

    reset() {
        this.stop();
        this.setState({
            timerSecond: 0,
            timerMinute: this.state.sessionLength,
            isSession: true
        })
    }


    pequeTime() {
        this.stop();
        this.setState(() => {
            return {
                sessionLength: 10,
                breakLength: 3,
                timerMinute: 10,
                timerSecond: 0,
            }
        })
    }

    tomaTime() {
        this.stop();
        this.setState(() => {
            return {
                sessionLength: 25,
                breakLength: 5,
                timerMinute: 25,
                timerSecond: 0,
            }
        })
    }

    epicTime() {
        this.stop();
        this.setState(() => {
            return {
                sessionLength: 40,
                breakLength: 10,
                timerMinute: 40,
                timerSecond: 0,
            }
        })
    }

    render() {
        return (
            <section className="GENERAL">
                <section>
                    <div className="SECCIONBOTONESDETIEMPO">
                        <button onClick={this.pequeTime}>PequeTime</button>
                        <button onClick={this.tomaTime}>TomaTime</button>
                        <button onClick={this.epicTime}>EpicTime</button>
                    </div>
                </section>

                <section className="SECCIONRELOJ">
                    <h1>{this.state.isSession === true ? "Sesion"
                        : "Break"}</h1>
                    <div>
                        <span>{this.state.timerMinute}</span>
                        <span>:</span>
                        <span>
                            {this.state.timerSecond === 0
                                ? "00"
                                : this.state.timerSecond < 10
                                    ? "0" + this.state.timerSecond
                                    : this.state.timerSecond}
                        </span>
                    </div>
                </section>

                <section>
                    <div className="SECCIONBOTONESINTERACTIVOS">
                        <button onClick={this.play}>Play</button>
                        <button onClick={this.stop}>Stop</button>
                        <button onClick={this.reset}>Reset</button>
                    </div>
                </section>

            </section>
        );
    }
}

export default Reloj;