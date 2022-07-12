import React, {Component, useState, useEffect} from "react";
import '../styles/App.css';

const App = () => {
	// write your code here
	const [time, setTime] = useState(0)


	useEffect(() => {
		const timer =
			time > 0
			&& setInterval(() => setTime(prevState => prevState - 1), 1000)
		return () => clearInterval(timer)
	}, [time])

	if (time < 0) setTime(0)

	const onKeyDown = (event) => {
		if (event.key !== 'Enter') return
		const value = event.target.value
		for (const el of value) {
			if(isNaN(Number(el))) {
				setTime(0)
				event.target.value = '0'
				return;
			}
		}
		const result = parseInt(value)
		if (!isNaN(result)) {
			setTime(result)
		} else {
			setTime(0)
			event.target.value = '0'
		}
	}
	return (
		<div className="wrapper">
			<div id="whole-center">
				<h1>
					Reverse countdown for<input id="timeCount" onKeyDown={onKeyDown}/> sec.
				</h1>
			</div>
			<div id="current-time">{time}</div>
		</div>
	)
}


export default App;